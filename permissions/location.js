/* eslint-disable promise/avoid-new */
const logger = require(`@geek/logger`).createLogger(`@titanium/permissions`, { meta: { filename: __filename } });

const permissionName = `location`;
logger.trace(`📍  entering → permissions/${permissionName}`);
const turbo = require(`/turbo`);

const permission = {};
module.exports = permission;


permission.check = (authorizationType = Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE) => {
	logger.trace(`📍  entering → ${permissionName}.check()`);
	return Ti.Geolocation.hasLocationPermissions(authorizationType);
};

permission.level = Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE;

permission.ensure = authorizationType => {
	logger.trace(`📍  entering → ${permissionName}.ensure()`);
	setPermissionLevel(authorizationType);
	return new Promise(
		(resolve, reject) => {
			const hasPermission = permission.check(authorizationType);

			if (hasPermission) {
				return resolve();
			} else {
				// don't use arrow function or we lose access to this.event

				turbo.events.on(`permissions::${permissionName}::accepted`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission accepted!`);
					turbo.events.off(`permissions::${permissionName}::accepted`, handlePermissions);
					return resolve();
				});

				turbo.events.on(`permissions::${permissionName}::rejected`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission rejected!`);
					turbo.events.off(`permissions::${permissionName}::rejected`, handlePermissions);
					return reject(Error(`Permission rejected`));
				});

				turbo.events.on(`permissions::${permissionName}::ignored`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission ignored!`);
					turbo.events.off(`permissions::${permissionName}::ignored`, handlePermissions);
					Alloy.open(`permission-ignored`, { permission: permissionName });
				});

				permission.please();

			}
		});
};

permission.please = () => {
	logger.trace(`📍  entering → ${permissionName}.please()`);
	Alloy.close(`permission-ignored`);
	Alloy.open(`permission-${permissionName}`);
};

permission.ignore = () => {
	logger.trace(`📍  entering → ${permissionName}.ignore()`);
	Alloy.close(`permission-${permissionName}`);
	turbo.events.fire(`permissions::${permissionName}::ignored`);
};

permission.reject = () => {
	logger.trace(`📍  entering → ${permissionName}.reject()`);
	Alloy.close(`permission-${permissionName}`);
	Alloy.close(`permission-ignored`);
	turbo.events.fire(`permissions::${permissionName}::rejected`);
};

permission.prompt = authorizationType => {
	logger.trace(`📍  entering → ${permissionName}.prompt()`);
	setPermissionLevel(authorizationType);
	return permission.native()
		.then(success => {
			logger.debug(`native ${permissionName} permission success: ${JSON.stringify(success, null, 2)}`);
			if (!success) {
				logger.debug(`emitting event → permissions::${permissionName}::rejected`);
				turbo.events.emit(`permissions::${permissionName}::rejected`);
			} else {
				logger.debug(`emitting event → permissions::${permissionName}::accepted`);
				turbo.events.emit(`permissions::${permissionName}::accepted`);
			}
		})
		.then(() => {
			Alloy.close(`permission-${permissionName}`);
		});


};


permission.native = authorizationType => {
	logger.trace(`📍  entering → ${permissionName}.native()`);
	setPermissionLevel(authorizationType);
	return new Promise(
		(resolve, reject) => {

			const callback = e => {
				logger.trace(`📍  entering → ${permissionName}.native().callback`);
				logger.debug(`🔎  e: ${JSON.stringify(e, null, 2)}`);
				resolve(e.success);
			};
			Ti.Geolocation.requestLocationPermissions(permission.level, callback);

		});
};


function setPermissionLevel(level) {
	if (level && level === Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE || level === Ti.Geolocation.AUTHORIZATION_ALWAYS) {
		permission.level = level;
	}
}
