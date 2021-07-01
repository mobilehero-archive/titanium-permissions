/* eslint-disable promise/avoid-new */
const logger = require(`@geek/logger`).createLogger(`@titanium/permissions`, { meta: { filename: __filename } });

const permissionName = `push`;
logger.trace(`📍  entering → permissions/${permissionName}`);
const events = require(`events`).default;

const permission = {};
module.exports = permission;

permission.check = () => {
	logger.trace(`📍  entering → ${permissionName}.check()`);

	let result;

	if (Titanium.App.iOS) {
		result = Titanium.Network.remoteNotificationsEnabled;
		Titanium.App.Properties.setBool(`permission_${permissionName}`, result);
	} else {
		result = Titanium.App.Properties.getBool(`permission_${permissionName}`, false);
	}

	logger.debug(`🦠  ${permissionName}.check() = ${result}`);
	return result;
};

permission.ensure = async () => {
	logger.trace(`📍  entering → ${permissionName}.ensure()`);

	debugger;

	const local_notifications_enabled = await require(`./notifications`).ensure().catch(logger.error);

	if (! local_notifications_enabled) {
		return Promise.reject(`Local notifications not enabled`);
	}

	return new Promise(
		(resolve, reject) => {
			const hasPermission = permission.check();

			if (hasPermission) {
				// return resolve(true);
				return permission.native();
			} else {

				// don't use arrow function or we lose access to this.event
				events.on(`permissions::${permissionName}::accepted`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission accepted!`);
					events.off(`permissions::${permissionName}::accepted`, handlePermissions);
					return resolve(true);
				});

				events.on(`permissions::${permissionName}::rejected`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission rejected!`);
					events.off(`permissions::${permissionName}::rejected`, handlePermissions);
					return reject(Error(`Permission rejected`));
				});

				events.on(`permissions::${permissionName}::ignored`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission ignored!`);
					events.off(`permissions::${permissionName}::ignored`, handlePermissions);
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
	events.fire(`permissions::${permissionName}::ignored`);
};

permission.reject = () => {
	logger.trace(`📍  entering → ${permissionName}.reject()`);
	Alloy.close(`permission-${permissionName}`);
	Alloy.close(`permission-ignored`);
	events.fire(`permissions::${permissionName}::rejected`);
};

permission.prompt = async () => {
	logger.trace(`📍  entering → ${permissionName}.prompt()`);
	const success = await permission.native();
	logger.debug(`native ${permissionName} permission success: ${JSON.stringify(success, null, 2)}`);

	// what about difference between error and rejection?
	if (!success) {
		logger.debug(`emitting event → permissions::${permissionName}::rejected`);
		events.emit(`permissions::${permissionName}::rejected`);
	} else {
		logger.debug(`emitting event → permissions::${permissionName}::accepted`);
		Titanium.App.Properties.setBool(`permission_${permissionName}`, true);
		events.emit(`permissions::${permissionName}::accepted`);
	}

	Alloy.close(`permission-${permissionName}`);

};


permission.native = () => {
	logger.trace(`📍  entering → ${permissionName}.native()`);
	return new Promise((resolve, reject) => {

		// if (OS_IOS) {
		if (Titanium.App.iOS) {

			// Register for push notifications (Ti)
			Ti.Network.registerForPushNotifications({
				success: (args = {}) => {
					logger.trace(`📍  entering → ${permissionName}.native().success()`);
					const { code, deviceToken, error, success, type } = args;
					Titanium.App.Properties.setString(`deviceToken`, deviceToken);
					Titanium.App.Properties.setBool(`permission_${permissionName}`, true);
					resolve(true);
				},
				error: args => {
					logger.trace(`📍  entering → ${permissionName}.native().error()`);
					const { code: error_code, error:error_message, success, type } = args;
					const error = {
						message: `Error registering for push notifications`,
						error_message,
						error_code,
						success,
					};
					logger.error(error);
					// console.warn(error);
					// turbo.tracker.error(error);
					resolve(false);
					// reject(Error(error));
				},
				callback: (args = {}) => {
					logger.trace(`📍  entering → ${permissionName}.native().callback()`);
					const { data, inBackground } = args;
					logger.trace(`Received iOS push notification.  inBackground:${inBackground}`);

					logger.debug(`Push Notification Received`, data);
					logger.debug(`🦠  data: ${JSON.stringify(data, null, 2)}`);
					logger.error(data);
					// Handle push message …
				},
			});
		} else {

			//TODO:  Add Android push notifications

		}


		// resolve(true);
	});

};


