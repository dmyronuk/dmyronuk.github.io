"use strict";var precacheConfig=[["/index.html","f3cfb4329dbc3130bc4e384fc1c86a85"],["/static/css/main.575e10e0.css","7cfd29cab2aedfa8f99d35f57c420228"],["/static/js/main.0a53c228.js","52e7c6970c626b0037d38de89e988f53"],["/static/media/CSS.9063bbfc.png","9063bbfccd32a41efef8eb4bc24d4f8e"],["/static/media/Java.74e943d8.png","74e943d82452f81f6a0bb0b51ac6785d"],["/static/media/Javascript.7f130501.png","7f130501681cb3d0129f266820c78b24"],["/static/media/Knex.47ebdbaf.png","47ebdbaf81e4dedbd12dd873817a03d6"],["/static/media/Mocha.93a4065d.svg","93a4065d8822b733e0ca0130f583a790"],["/static/media/Node.9011d622.png","9011d622387a3adc2c5bac3066e26b3e"],["/static/media/PSQL.50156c71.png","50156c71fb2cf47d5cfe134231975922"],["/static/media/React.d783f6d4.png","d783f6d407264b8e4f520ea0ef3cb240"],["/static/media/Sass.8e766e95.svg","8e766e9562509cb3fa14264580c5c0f9"],["/static/media/breakthrough.7e30ead1.png","7e30ead14bb68ab4ebd9a208e73aa9dd"],["/static/media/bridges.267cad40.jpg","267cad4098e9a0ee5ff65d91df69dda3"],["/static/media/github.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/static/media/grey_link_arrow.951ed4d0.png","951ed4d0069cc6492af695b837115a72"],["/static/media/jQuery.984be8b9.png","984be8b9c9ca581010a2cc210eeb592e"],["/static/media/learnpiano_demo.d402f0da.gif","d402f0dadb98fcebe80af3d187b25aba"],["/static/media/montcrest_logo.1efc7f4a.png","1efc7f4a44c2f4c2159c2e3914baa099"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});