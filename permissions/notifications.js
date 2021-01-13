/* eslint-disable promise/avoid-new */
const logger = require(`@geek/logger`).createLogger(`@titanium/permissions`, { meta: { filename: __filename } });

const permissionName = `notifications`;
logger.trace(`📍  entering → permissions/${permissionName}`);
const events = require(`events`).default;

const permission = {};
module.exports = permission;

permission.check = () => {
	logger.trace(`📍  entering → ${permissionName}.check()`);
	return Titanium.App.Properties.getBool(`permission_${permissionName}`, false);
};

permission.ensure = () => {
	logger.trace(`📍  entering → ${permissionName}.ensure()`);
	return new Promise(
		(resolve, reject) => {
			const hasPermission = permission.check();

			if (hasPermission) {
				return resolve();
			} else {

				// don't use arrow function or we lose access to this.event
				events.on(`permissions::${permissionName}::accepted`, function handlePermissions(e, args) {
					logger.debug(`${permissionName} permission accepted!`);
					events.off(`permissions::${permissionName}::accepted`, handlePermissions);
					return resolve();
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

	if (!success) {
		logger.debug(`emitting event → permissions::${permissionName}::rejected`);
		events.emit(`permissions::${permissionName}::rejected`);
	} else {
		logger.debug(`emitting event → permissions::${permissionName}::accepted`);
		events.emit(`permissions::${permissionName}::accepted`);
		Titanium.App.Properties.setBool(`permission_${permissionName}`, true);
	}

	Alloy.close(`permission-${permissionName}`);


};


permission.native = () => {
	logger.trace(`📍  entering → ${permissionName}.native()`);
	return new Promise((resolve, reject) => {

		// if (OS_IOS) {
		if (Titanium.App.iOS) {
			// Wait for user settings to be registered before registering for push notifications
			Titanium.App.iOS.addEventListener(`usernotificationsettings`, function registerForNotifications() {
				logger.trace(`📍  entering → ${permissionName}.native().eventlistener`);
	    		// Remove event listener once registered for push notifications
				Titanium.App.iOS.removeEventListener(`usernotificationsettings`, registerForNotifications);

				// Register for push notifications (Ti)
				Ti.Network.registerForPushNotifications({
					success: (args = {}) => {
						const { code, deviceToken, error, success, type } = args;
						Titanium.App.Properties.setString(`deviceToken`, deviceToken);
						resolve(true);
					},
					error: args => {
						const { code: error_code, error:error_message, success, type } = args;
						const error = {
							message: `Error registering for push notifications`,
							error_message,
							error_code,
							success,
						};
						logger.error(error);
						console.warn(error);
						turbo.tracker.error(error);
						Alloy.Globals.aca.logHandledException(error);
					},
					callback: (args = {}) => {
						const { data, inBackground } = args;
						logger.trace(`Received iOS push notification.  inBackground:${inBackground}`);

						logger.debug(`Push Notification Received`, data);
					// Handle push message …
					},
				});

				// resolve(true);
			});

			// Register notification types to use
			Titanium.App.iOS.registerUserNotificationSettings({
				types: [
				// Titanium.App.iOS.USER_NOTIFICATION_TYPE_NONE,
					Titanium.App.iOS.USER_NOTIFICATION_TYPE_BADGE,
					Titanium.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
					Titanium.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
					// Titanium.App.iOS.USER_NOTIFICATION_TYPE_CRITICAL_ALERT,
					// Titanium.App.iOS.USER_NOTIFICATION_TYPE_PROVISIONAL,
					// Titanium.App.iOS.USER_NOTIFICATION_TYPE_PROVIDES_APP_NOTIFICATION_SETTINGS,

				],
			});
		} else {
			Titanium.App.Properties.setBool(`permission_${permissionName}`, true);
			resolve(true);
		}
	});
};


