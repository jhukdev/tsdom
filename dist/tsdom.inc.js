!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tsdom=e()}}(function(){return function e(t,n,r){function i(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return i(n||e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("../index");n.delegate=function(e,t,n){return function(i){var s=null,o=!1;new r.Instance(t,e).each(function(t){var n=i.target;if(n==t)return o=!0,void(s=n);for(;n&&n!==e;)(n=n.parentNode)==t&&(o=!0,s=n)}),o&&n(i,s)}}},{"../index":6}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.direct=function(e){return function(t){var n=t.target;e(t,n)}}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./registry");n.registry=r.registry;var i=e("./direct");n.direct=i.direct;var s=e("./delegate");n.delegate=s.delegate},{"./delegate":1,"./direct":2,"./registry":4}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){this.list=[]}return e.prototype.find=function(e){return this.list.filter(function(t){return t.type===e})[0]},e.prototype.add=function(e){this.list.push(e)},e.prototype.remove=function(e){var t=this.list;this.list=t.filter(function(t){return t.type!==e})},e}();n.Registry=r,n.registry=function(){return new r}},{}],5:[function(e,t,n){t.exports=e("./index").default},{"./index":6}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./utility"),i=e("./event"),s=e("./method");n.default=function(e,t){return new o(e,t)};var o=function(){return function(e,t,n){this.find=s.find,this.closest=s.closest,this.each=s.each,this.css=s.css,this.attr=s.attr,this.hasClass=s.hasClass,this.addClass=s.addClass,this.removeClass=s.removeClass,this.toggleClass=s.toggleClass,this.on=s.on,this.off=s.off,this.text=s.text,this.html=s.html,this.append=s.append,this.prepend=s.prepend,this.empty=s.empty,this.remove=s.remove,this.toArray=s.toArray;var o;if(this.meta=n||{},this.events=i.registry(),!(o="string"==typeof e?r.query(e,t||document):e))return this;if(1===o.nodeType||o===window)this[0]=o,this.length=1;else for(var u=this.length=o.length;u--;this[u]=o[u]);}}();n.Instance=o},{"./event":3,"./method":17,"./utility":26}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addClass=function(e){var t=this;return t.each(function(n){t.hasClass(e)||(n.className+=" "+e)}),this}},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.append=function(e){return this.each(function(t){if("string"==typeof e)return t.insertAdjacentHTML("beforeend",e);t.appendChild(e)}),this}},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.attr=function(e){return this.each(function(t){for(var n in e){var r=e[n];t.setAttribute(n,r)}}),this}},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("../index");n.closest=function(e){var t,n=this,i=document.querySelectorAll(e),s=n[0];do{for(t=i.length;--t>=0&&i.item(t)!==s;);}while(t<0&&(s=s.parentElement));return new r.Instance(s)}},{"../index":6}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.css=function(e){return this.each(function(t){for(var n in e){var r=e[n];t.style.setProperty(n,r)}}),this}},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.each=function(e){for(var t=this,n=0,r=t.length;n<r&&(t[n],0!=e.call(t,t[n],n++)););return this}},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.empty=function(){return this.each(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}),this}},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("../index");n.find=function(e){var t=this;return new r.Instance(e,t[0],{owner:t})}},{"../index":6}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.hasClass=function(e){var t=!1;return this.each(function(n){var r=" "+e+" ";(" "+n.className+" ").replace(/[\n\t]/g," ").indexOf(r)>-1&&(t=!0)}),t}},{}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.html=function(e){var t=this;return void 0==e?t[0].innerHTML:(t.each(function(t){t.innerHTML=e}),e)}},{}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./find");n.find=r.find;var i=e("./closest");n.closest=i.closest;var s=e("./each");n.each=s.each;var o=e("./css");n.css=o.css;var u=e("./attr");n.attr=u.attr;var a=e("./hasClass");n.hasClass=a.hasClass;var c=e("./addClass");n.addClass=c.addClass;var f=e("./removeClass");n.removeClass=f.removeClass;var l=e("./toggleClass");n.toggleClass=l.toggleClass;var d=e("./on");n.on=d.on;var v=e("./off");n.off=v.off;var h=e("./text");n.text=h.text;var p=e("./html");n.html=p.html;var y=e("./append");n.append=y.append;var m=e("./prepend");n.prepend=m.prepend;var _=e("./empty");n.empty=_.empty;var g=e("./remove");n.remove=g.remove;var C=e("./toArray");n.toArray=C.toArray},{"./addClass":7,"./append":8,"./attr":9,"./closest":10,"./css":11,"./each":12,"./empty":13,"./find":14,"./hasClass":15,"./html":16,"./off":18,"./on":19,"./prepend":20,"./remove":21,"./removeClass":22,"./text":23,"./toArray":24,"./toggleClass":25}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.off=function(e){var t=this,n=t.events;return t.each(function(t){var r=n.find(e);void 0!==r&&t.removeEventListener(e,r.handler,!0)}),n.remove(e),this}},{}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("../event");n.on=function(e,t,n){var i=this,s=i.events,o="function"==typeof t&&void 0===n,u="string"==typeof t&&"function"==typeof n;return i.off(e),i.each(function(i){var a=null;if(o&&(a=r.direct(t)),u&&(a=r.delegate(i,t,n)),!a)throw new Error("TSDom.on: Invalid Arguments");i.addEventListener(e,a,!0),s.add({type:e,handler:a})}),this}},{"../event":3}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.prepend=function(e){return this.each(function(t){if("string"==typeof e)return t.insertAdjacentHTML("afterbegin",e);t.insertBefore(e,t.firstChild)}),this}},{}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.remove=function(){this.each(function(e){e.parentNode.removeChild(e)})}},{}],22:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeClass=function(e){var t=this;return t.each(function(n){if(t.hasClass(e)){var r=new RegExp("(\\s|^)"+e+"(\\s|$)");n.className=n.className.replace(r,"")}}),this}},{}],23:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.text=function(e){var t=this;return void 0==e?t[0].innerText:(t.each(function(t){t.innerHTML=e}),e)}},{}],24:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toArray=function(){var e=[];return this.each(function(t){e.push(t)}),e}},{}],25:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toggleClass=function(e){var t=this;return t.hasClass(e)?t.removeClass(e):t.addClass(e),this}},{}],26:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./query");n.query=r.query},{"./query":27}],27:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;n.query=function(e,t){var n,i;if(n=r.exec(e)){if(i=n[3])return t.getElementsByClassName(i);if(i=n[2])return t.getElementsByTagName(i);if(i=n[1])return document.getElementById(i)}return t.querySelectorAll(e)}},{}]},{},[5])(5)});