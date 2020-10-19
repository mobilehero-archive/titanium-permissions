// TIBUG: Relative path requires broken on iOS.  TIMOB-28037
exports.camera = require(`./permissions/camera`);
exports.location = require(`./permissions/location`);
exports.photos = require(`./permissions/photos`);
exports.microphone = require(`./permissions/microphone`);
exports.music = require(`./permissions/music`);
exports.notifications = require(`./permissions/notifications`);

// exports.camera = require(`${__dirname}/permissions/camera`);
// exports.location = require(`${__dirname}/permissions/location`);
// exports.photos = require(`${__dirname}/permissions/photos`);
// exports.microphone = require(`${__dirname}/permissions/microphone`);
// exports.music = require(`${__dirname}/permissions/music`);
// exports.notifications = require(`${__dirname}/permissions/notifications`);
