/* eslint-disable promise/avoid-new */
const permissions = {};
module.exports = permissions;

permissions.camera = require('./permissions/camera');
permissions.location = require('./permissions/location');
permissions.photos = require('./permissions/photos');
permissions.microphone = require('./permissions/microphone');
permissions.music = require('./permissions/music');
permissions.notifications = require('./permissions/notifications');
