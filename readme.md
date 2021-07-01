<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h1 align="center">
	🪦 RIP Axway Amplify Titanium (2010 - 2022)
	</h1>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<p>&nbsp;</p>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h2 align="center">
		🛑 This project is no longer being maintained 🛑
	</h2>
</a>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>


# @titanium/permissions

![GitHub stars](https://img.shields.io/github/stars/axway-developer-relations/titanium-permissions?style=social)
![GitHub forks](https://img.shields.io/github/forks/axway-developer-relations/titanium-permissions?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/axway-developer-relations/v?style=social)
[![@titanium/permissions](https://img.shields.io/npm/v/@titanium/permissions.png)](https://www.npmjs.com/package/@titanium/permissions)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-permissions)](https://dependabot.com)

* [📓   &nbsp; Description](#----description)
* [🚨 &nbsp; Notice](#--notice)
* [✨   &nbsp;  Features](#-----features)
	* [Prompts for device permissions](#prompts-for-device-permissions)
	* [Styling](#styling)
* [🚀   &nbsp; Getting Started](#----getting-started)
	* [Installing](#installing)
	* [Usage](#usage)
* [🎓  &nbsp;  Learn More](#----learn-more)
	* [📚  &nbsp;  Related projects](#----related-projects)
		* [🎟️  &nbsp; Modules for Titanium Mobile](#️---modules-for-titanium-mobile)
		* [🎟️  &nbsp; Modules for Node.js and Titanium Mobile](#️---modules-for-nodejs-and-titanium-mobile)
		* [🎟️  &nbsp; Modules for Node.js](#️---modules-for-nodejs)
* [📣  &nbsp; Feedback](#---feedback)
* [Follow Brenton House](#follow-brenton-house)
* [©️  &nbsp; Legal](#️---legal)
	* [The MIT License (MIT)](#the-mit-license-mit)

> Titanium native mobile widget for permission requests

## 📓   &nbsp; Description

For use with requesting native device permissions on iOS and Android

## 🚨 &nbsp; Notice

> ~~There are 7 identical style files that are included in the `./styles` directory.  The reason for this is there are issues with how TSS stylesheets are loaded from widgets in Alloy and it does not currently support the concept of a widget-wide `app.tss` file.   Any changes done to one file will need to be replicated in all the other files.  Sorry about this and hopefully I can create a workaround for this in a future version of `Turbo`.~~
> 
> ~~https://jira.appcelerator.org/browse/TIMOB-19971~~

------

I am pleased to say that the latest version of Titanium Turbo now has support for `app.tss` (albeit in an unusual way...).  A feature was added to `Turbo` that allows you to add a `style` tag to your XML view which in turn, supports the `src` tag (not unlike the `script` tag).  

Take a look at the implementation to see how `app.tss` is used to support widget-wide styles (and more!)

------

## ✨   &nbsp;  Features

### Prompts for device permissions


* [X] Permissions for Camera
* [X] Permissions for Location
* [X] Permissions for Microphone
* [X] Permissions for Notifications
* [X] Permissions for Photos
* [X] Permissions for Music

### Styling

You can override the styling for any control using the ID of the control.

IDs follow the pattern `permission-{feature}-{control}` 

Controls used are:  

- lottie (iOS)
- image (Android)
- title
- ask
- go
- later

i.e.

```css
"#permission-camera-title": {
	"color": "blue"
},
```


## 🚀   &nbsp; Getting Started

### Installing

> Please ensure there is a package.json file in the target directory.  If there is not one present, you can create one with `npm init`.


If you wish to install this in an app using Titanium Turbo, you can execute this in the project root directory:

```bash
npm install @titanium/permissions
```

### Usage

```javascript
const { camera } = require('@titanium/permissions');
```

```javascript
	const permissions_camera = await camera.ensure()
			.catch(error => {
				console.error(error);
			});
```




## 🎓  &nbsp;  Learn More

- [@titanium/essentials GitHub Repo](https://github.com/brentonhouse/titanium-essentials)
- [@titanium/essentials npm page](https://npmjs.com/packages/@titanium/essentials)

### 📚  &nbsp;  Related projects


#### 🎟️  &nbsp; Modules for Titanium Mobile

⭐  &nbsp; [@titanium/applesignin](https://www.npmjs.com/package/@titanium/applesignin) -Native modules that allows you to use the iOS 13+ Apple Sign In API with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/authentication](https://www.npmjs.com/package/@titanium/authentication) - Titanium native mobile authentication manager   

⭐  &nbsp; [@titanium/authentication-oauth](https://www.npmjs.com/package/@titanium/authentication-oauth) - Titanium native mobile OAuth plugin for authentication manager   

⭐  &nbsp; [@titanium/calendar-picker](https://www.npmjs.com/package/@titanium/calendar-picker) - Turbo widget that allows you to pick dates from a calendar with Axway Titanium.   

⭐  &nbsp; [@titanium/coremotion](https://www.npmjs.com/package/@titanium/coremotion) - Native modules that allows you to use iOS CoreMotion framework with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/deeply](https://www.npmjs.com/package/@titanium/deeply) - Native modules that allows you to capture Android deep links with Axway Titanium.   

⭐  &nbsp; [@titanium/essentials](https://www.npmjs.com/package/@titanium/essentials) - Essential Toolkit for Titanium Turbo Native Mobile Apps   

⭐  &nbsp; [@titanium/icloud](https://www.npmjs.com/package/@titanium/icloud) - Native module that allows you to use the Apple iCloud framework with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/identity](https://www.npmjs.com/package/@titanium/identity) - Native modules to add Fingerprint/FaceId/keychain access to Titanium native mobile apps   

⭐  &nbsp; [@titanium/facebook](https://www.npmjs.com/package/@titanium/facebook) - Native modules that allows you to use Facebook SDK with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/googlesignin](https://www.npmjs.com/package/@titanium/googlesignin) - Native modules that allows you to use the Google Sign-in SDK with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/lottie](https://www.npmjs.com/package/@titanium/lottie) - Native modules that allows you to use Airbnb Lottie animations with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/observer](https://www.npmjs.com/package/@titanium/observer) - Repackaging of nx-js/observer-util for Titanium Native Mobile   

⭐  &nbsp; [@titanium/permissions](https://www.npmjs.com/package/@titanium/permissions) - Titanium native mobile widget for permission requests   [![@titanium/permissions](https://img.shields.io/npm/v/@titanium/permissions.png)](https://www.npmjs.com/package/@titanium/permissions)    

⭐  &nbsp; [@titanium/please](https://www.npmjs.com/package/@titanium/please) - Titanium native mobile module for politely requesting data  [![@titanium/please](https://img.shields.io/npm/v/@titanium/please.png)](https://www.npmjs.com/package/@titanium/please)     

⭐  &nbsp; [@titanium/polyfill](https://www.npmjs.com/package/@titanium/polyfill) - Titanium native mobile polyfills necessary to use packages that depend on Node.js modules   [![@titanium/polyfill](https://img.shields.io/npm/v/@titanium/polyfill.png)](https://www.npmjs.com/package/@titanium/polyfill)    

⭐  &nbsp; [@titanium/turbo](https://www.npmjs.com/package/@titanium/turbo) - 🚀 Turbo is a version of Titanium Alloy that adds some enhancements and customizations for rapid development. [![@titanium/turbo](https://img.shields.io/npm/v/@titanium/turbo.png)](https://www.npmjs.com/package/@titanium/turbo)    

⭐  &nbsp; [@titanium/updater](https://www.npmjs.com/package/@titanium/updater) - Titanium native mobile widget to check for app updates  [![@titanium/updater](https://img.shields.io/npm/v/@titanium/updater.png)](https://www.npmjs.com/package/@titanium/updater)     

⭐  &nbsp; [@titanium/webdialog](https://www.npmjs.com/package/@titanium/webdialog) - Native modules that allows you to use native SFSafariViewController (iOS) and Chrome Pages (Android) with Axway Titanium native mobile apps.   [![@titanium/webdialog](https://img.shields.io/npm/v/@titanium/webdialog.png)](https://www.npmjs.com/package/@titanium/webdialog) 


#### 🎟️  &nbsp; Modules for Node.js and Titanium Mobile

| project  	|  description 	|  npm	|
|---	|---  |---	|
| [@geek/cache](https://www.npmjs.com/package/@geek/cache)  	| Caching module for Node.js and Axway Titanium  	| [![@geek/cache](https://img.shields.io/npm/v/@geek/cache.png)](https://www.npmjs.com/package/@geek/cache)      |
| [@geek/jsonc](https://www.npmjs.com/package/@geek/cache)  	| JSONC and JSON utilities for JavaScript with Node.js and Axway Titanium.  	| [![@geek/jsonc](https://img.shields.io/npm/v/@geek/jsonc.png)](https://www.npmjs.com/package/@geek/jsonc)      |
|  [@geek/jwt](https://www.npmjs.com/package/@geek/jwt) 	| JWT parser for JavaScript Node.js and Titanium native mobile  |  [![@geek/jwt](https://img.shields.io/npm/v/@geek/jwt.png)](https://www.npmjs.com/package/@geek/jwt)     |
|  [@geek/logger](https://www.npmjs.com/package/@geek/logger) 	| Logging module for Node.js and Axway Titanium  |   [![@geek/logger](https://img.shields.io/npm/v/@geek/logger.png)](https://www.npmjs.com/package/@geek/logger)        |
| [@geek/mobile](https://www.npmjs.com/package/@geek/mobile)  	| Toolkit for creating, building, and managing mobile app projects.  	| [![@geek/mobile](https://img.shields.io/npm/v/@geek/mobile.png)](https://www.npmjs.com/package/@geek/mobile)    	|
|  [@geek/retry](https://www.npmjs.com/package/@geek/retry) 	| Retry JavaScript functions and promises in Node.js and Axway Titanium  |   [![@geek/retry](https://img.shields.io/npm/v/@geek/retry.png)](https://www.npmjs.com/package/@geek/retry)        |


#### 🎟️  &nbsp; Modules for Node.js


| project  	|  description 	|  npm	|
|---	|---  |---	|
| [@geek/google-sheets](https://www.npmjs.com/package/@geek/google-sheets)  	| Easy way to manage Google Sheets API from Node.js  	| [![@geek/google-sheets](https://img.shields.io/npm/v/@geek/google-sheets.png)](https://www.npmjs.com/package/@geek/google-sheets)      |



## 📣  &nbsp; Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-permissions/issues)! 


-----

## Follow Brenton House 

> Follow [`Brenton House`](https://brenton.house) for the latest on great modules and libraries!

[![Twitter Follow](https://img.shields.io/twitter/follow/brentonhouse?label=Follow%20%40brentonhouse%20on%20twitter&style=social)](https://twitter.com/brentonhouse)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-_Connect_with_%40brentonhouse_-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/brentonhouse/)
![Github Followers](https://img.shields.io/github/followers/brentonhouse?label=Follow%20%40brentonhouse%20on%20GitHub&style=social)

-----


## ©️  &nbsp; Legal

### The MIT License (MIT)

> Copyright (c) 2019-Present -- Brenton House   
> https://brenton.house

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.