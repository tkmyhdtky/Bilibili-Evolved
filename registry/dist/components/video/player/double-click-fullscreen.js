!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/double-click-fullscreen"]=t():e["video/player/double-click-fullscreen"]=t()}(self,(function(){return function(){"use strict";var e,t,n={730:function(e){e.exports=coreApis.componentApis.video.playerAgent},156:function(e){e.exports=coreApis.observer},109:function(e){e.exports=coreApis.utils}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"doubleClickFullscreen",displayName:"双击全屏",description:"为视频播放器启用双击全屏功能, 请注意不能和 `启用双击控制` 一同使用.",entry:async({settings:{options:e}})=>{const{videoChange:t}=await Promise.resolve().then(r.t.bind(r,156,23));t((async()=>{const{DoubleClickEvent:t}=await Promise.resolve().then(r.t.bind(r,109,23)),{playerAgent:n}=await Promise.resolve().then(r.t.bind(r,730,23)),o=await n.query.danmakuTipLayer();if(null===o)return void console.error("playerArea not found");const i="double-click-fullscreen";if(!o.classList.contains(i)){o.classList.add(i);const r=n.query.video.container.sync(),c=new t((()=>n.fullscreen()),e.preventSingleClick);c.singleClickHandler=()=>n.togglePlay(),c.bind(r)}}))},tags:[componentsTags.video],options:{preventSingleClick:{displayName:"双击时阻止单击事件",defaultValue:!0}},urlInclude:e.playerUrls,commitHash:"84b92e6e45995d7c258cfe31620187a17d5c1949",coreVersion:"2.1.7"}}(),i=i.component}()}));