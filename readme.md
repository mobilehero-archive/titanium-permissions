# @titanium/permissions

[![@titanium/permissions](https://img.shields.io/npm/v/@titanium/permissions.png)](https://www.npmjs.com/package/@titanium/permissions)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-permissions)](https://dependabot.com)

* [📝 Description](#-description)
* [🚨 Notice](#-notice)
* [✨ Features](#-features)
	* [Prompts for device permissions](#prompts-for-device-permissions)
	* [Styling](#styling)
* [🚀 Getting Started](#-getting-started)
	* [Installing](#installing)
	* [Usage](#usage)
* [🔗 Related Links](#-related-links)
* [📚Learn More](#learn-more)
* [📣 Feedback](#-feedback)
* [©️ Legal](#️-legal)

> Titanium native mobile widget for permission requests

## 📝 Description

For use with requesting native device permissions on iOS and Android

## 🚨 Notice

> ~~There are 7 identical style files that are included in the `./styles` directory.  The reason for this is there are issues with how TSS stylesheets are loaded from widgets in Alloy and it does not currently support the concept of a widget-wide `app.tss` file.   Any changes done to one file will need to be replicated in all the other files.  Sorry about this and hopefully I can create a workaround for this in a future version of `Turbo`.~~
> 
> ~~https://jira.appcelerator.org/browse/TIMOB-19971~~


I am pleased to say that the latest version of Titanium Turbo now has support for `app.tss` (albeit in an unusual way...).  A feature was added to `Turbo` that allows you to add a `style` tag to your XML view which in turn, supports the `src` tag (not unlike the `script` tag).  

Take a look at the implementation to see how `app.tss` is used to support widget-wide styles (and more!)

## ✨ Features

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


## 🚀 Getting Started

### Installing

> Please ensure there is a package.json file in the target directory.  If there is not one present, you can create one with `npm init`.


If you wish to install this in an app using Titanium Turbo, you can execute this in the project root directory:

```bash
npm install @titanium/permissions
```

### Usage

```javascript
const permissions = require('@titanium/permissions');
```


## 🔗 Related Links

⭐  [Geek Mobile Toolkit](https://www.npmjs.com/package/@geek/mobile) - Toolkit for creating, building, and managing mobile app projects.   
⭐  [Titanium Turbo Template (Default)](https://www.npmjs.com/package/@titanium/template-turbo-default) - Template for default Turbo app.  Based on the basic Alloy Template + some extra goodies.   
⭐  [Titanium Turbo Template (Next)](https://www.npmjs.com/package/@titanium/template-turbo-next) - Template for Turbo app (with extras).  Based on the default Turbo Template + some extras.   
⭐  [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.   
⭐  [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.   
⭐  [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool   

## 📚Learn More

⭐  [Axway Developer Blog](https://devblog.axway.com)   
⭐  [Axway Developer YouTube Channel](https://youtube.com/axwaydev)   
⭐  [Axway Developer Portal](https://developer.axway.com)   

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-please/issues)! 

## ©️ Legal

# The MIT License (MIT)

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