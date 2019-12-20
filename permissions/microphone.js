/* eslint-disable promise/avoid-new */
const permissionName = 'microphone';
console.debug(`📍  entering → permissions/${permissionName}`);
const turbo = require('/turbo');

const permission = {};
module.exports = permission;

permission.check = () => {
	console.debug(`📍  entering → ${permissionName}.check()`);
	return Ti.Media.hasAudioRecorderPermissions();
};


permission.ensure = () => {
	console.debug(`📍  entering → ${permissionName}.ensure()`);
	return new Promise(
		(resolve, reject) => {
			const hasPermission = permission.check();

			if (hasPermission) {
				return resolve();
			} else {
				// don't use arrow function or we lose access to this.event

				turbo.events.on(`permissions::${permissionName}::accepted`, function handlePermissions(e, args) {
					console.debug(`${permissionName} permission accepted!`);
					turbo.events.off(`permissions::${permissionName}::accepted`, handlePermissions);
					return resolve();
				});

				turbo.events.on(`permissions::${permissionName}::rejected`, function handlePermissions(e, args) {
					console.debug(`${permissionName} permission rejected!`);
					turbo.events.off(`permissions::${permissionName}::rejected`, handlePermissions);
					return reject(Error('Permission rejected'));
				});

				turbo.events.on(`permissions::${permissionName}::ignored`, function handlePermissions(e, args) {
					console.debug(`${permissionName} permission ignored!`);
					turbo.events.off(`permissions::${permissionName}::ignored`, handlePermissions);
					Alloy.open('permission-ignored', { permission: permissionName });
				});

				permission.please();

			}
		});
};

permission.please = () => {
	console.debug(`📍  entering → ${permissionName}.please()`);
	Alloy.close('permission-ignored');
	Alloy.open(`permission-${permissionName}`);
};

permission.ignore = () => {
	console.debug(`📍  entering → ${permissionName}.ignore()`);
	Alloy.close(`permission-${permissionName}`);
	turbo.events.fire(`permissions::${permissionName}::ignored`);
};

permission.reject = () => {
	console.debug(`📍  entering → ${permissionName}.reject()`);
	Alloy.close(`permission-${permissionName}`);
	Alloy.close('permission-ignored');
	turbo.events.fire(`permissions::${permissionName}::rejected`);
};

permission.prompt = () => {
	console.debug(`📍  entering → ${permissionName}.prompt()`);
	return permission.native()
		.then(success => {
			console.debug(`native ${permissionName} permission success: ${JSON.stringify(success, null, 2)}`);
			if (!success) {
				console.debug(`emitting event → permissions::${permissionName}::rejected`);
				turbo.events.emit(`permissions::${permissionName}::rejected`);
			} else {
				console.debug(`emitting event → permissions::${permissionName}::accepted`);
				turbo.events.emit(`permissions::${permissionName}::accepted`);
			}
		})
		.then(() => {
			Alloy.close(`permission-${permissionName}`);
		});


};


permission.native = () => {
	console.debug(`📍  entering → ${permissionName}.native()`);
	return new Promise(
		(resolve, reject) => {

			const callback = e => {
				console.debug(`📍  entering → ${permissionName}.native().callback`);
				resolve(e.success);
			};
			Ti.Media.requestAudioRecorderPermissions(callback);
		});
};


