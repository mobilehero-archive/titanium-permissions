[//]: # (header-start)


<h1 align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
		Preparing for end of Axway
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; support for Amplify Cloud and Mobile   &nbsp; 👇
</h2>	

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Crash Analytics (2015 - 2022)
	</a>
</p>

<hr>
<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
	<h4 align="center">
🛑 &nbsp;&nbsp; <a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">Axway has already shut down support</a> for most of their Amplify products related to mobile and cloud. 
</h4>

<h4 align="center">
A few of the open-source versions of Axway Amplify products will live on after Axway Amplify End-of-Life (EOL) announcements.  However, all closed-source projects and most open-source projects are now dead.  
	</h4>

<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; A group of Axway employees, ex-Axway employees, and some developers from Titanium community have created a legal org and now officially decide all matters related to future of these products.  

<p>&nbsp;</p>
<hr>


## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [OWASP Top 10 List for API Security](https://www.youtube.com/watch?v=GLVHDj0Cpg4)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)

&nbsp;

[![Click to watch on Youtube](https://img.youtube.com/vi/GLVHDj0Cpg4/0.jpg)](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7  "Click to watch on YouTube")


> &nbsp; [↑ Watch video on YouTube ↑](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7)

&nbsp;



<p>&nbsp;</p>
<hr>

<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)


# @titanium/permissions

[![@titanium/permissions version](https://img.shields.io/npm/v/@titanium/permissions.png)](https://www.npmjs.com/package/@titanium/permissions)
[![@titanium/permissions downloads](https://img.shields.io/npm/dm/@titanium/permissions.svg)](https://www.npmjs.com/package/@titanium/permissions)
[![@titanium/permissions dependencies](https://img.shields.io/librariesio/release/npm/@titanium/permissions.svg)](https://www.npmjs.com/package/@titanium/permissions)



* [API FAQ:](#api-faq)
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