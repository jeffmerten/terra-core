(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{1455:function(e,t,n){e.exports={"tag-wrapper":"TagTestCommon-module__tag-wrapper___11mtt"}},3538:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4)),u=a(n(899)),i=a(n(1455));function a(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(i.default),c=function(){return o.default.createElement("div",{className:l("tag-wrapper")},o.default.createElement(u.default,{id:"on-click",text:"Clickable Tag",onClick:function(){return window.alert("Tag has been clicked!")}}))};t.default=c},899:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(0)),u=f(n(2)),i=f(n(4)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(15)),l=f(n(910));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=i.default.bind(l.default),v={href:u.default.string,icon:u.default.element,onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyUp:u.default.func,text:u.default.string.isRequired},O=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=b(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?_(o):r).state={focused:!1},n.handleKeyUp=n.handleKeyUp.bind(_(n)),n.handleOnBlur=n.handleOnBlur.bind(_(n)),n}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===a.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,u=e.onClick,i=(e.onBlur,e.onFocus),a=(e.onKeyUp,d(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),l=m(["tag",{"is-focused":this.state.focused},{"is-interactive":o||u},a.className]),c=m("icon"),f=t?r.default.createElement("span",{className:c},t):null,s=o||u?o?"a":"button":"span";return r.default.createElement(s,p({},a,{className:l,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:u,onFocus:i,href:o}),f,n)}}])&&y(n.prototype,o),u&&y(n,u),t}(r.default.Component);O.propTypes=v;var g=O;t.default=g},910:function(e,t,n){e.exports={tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=300-b6e5170b6348e9a197d8.js.map