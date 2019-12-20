/* eslint-disable promise/avoid-new */
const permissionName = 'camera';
console.debug(`📍  entering → permissions/${permissionName}`);
const turbo = require('/turbo');
// console.error(`turbo: ${JSON.stringify(turbo, null, 2)}`);

const permission = {};
module.exports = permission;

permission.check = () => {
	console.debug(`📍  entering → ${permissionName}.check()`);
	// Ti.Media.CAMERA_AUTHORIZATION_AUTHORIZED;
	// Ti.Media.CAMERA_AUTHORIZATION_DENIED;
	// Ti.Media.CAMERA_AUTHORIZATION_RESTRICTED;
	// Ti.Media.CAMERA_AUTHORIZATION_UNKNOWN;

	// return Ti.Media.cameraAuthorization === Ti.Media.CAMERA_AUTHORIZATION_AUTHORIZED;

	return Ti.Media.hasCameraPermissions();
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

			// OS_ANDROID is processed before this file is read so we need to use alternate function
			// if (OS_ANDROID) {
			if (Titanium.App.android) {
				const androidPermissions = [ 'android.permission.CAMERA', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.WRITE_EXTERNAL_STORAGE' ];				
				Ti.Android.requestPermissions(androidPermissions, callback);
			// } else if (OS_IOS) {
			} else if (Titanium.App.iOS) {
				Ti.Media.requestCameraPermissions(callback);
			} else {
				console.error('Unknown OS - processing as successful');
				callback({  success: true });
			}
		});
};


