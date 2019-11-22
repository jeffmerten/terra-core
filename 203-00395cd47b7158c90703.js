(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{2572:function(e,n,t){"use strict";t.r(n),n.default="ChangeLog\n=========\n\nUnreleased\n----------\n### Fixed\n* Added `aria-live` to `LoadingOverlay` for screenreader AT\n\n3.33.0 - (November 7, 2019)\n------------------\n### Changed\n* Updating tests to be better isolated from terra-dev-site markup.\n\n3.33.0 - (October 30, 2019)\n------------------\n### Fixed\n* Fixed lint warnings for multiple empty lines\n\n### Changed\n* Updated wdio tests to cover update lifecycle handling\n\n3.32.0 - (October 15, 2019)\n------------------\n### Fixed\n* Fixed inert property management during component update lifecycle\n\n3.31.0 - (October 14, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n* Move imperative code for handling DOM manipulation for inert and aria-hidden attributes into componentDidUpdate\n\n3.30.0 - (October 3, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.29.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n\n### Added\n* Added en-CA translations.\n\n3.28.0 - (September 6, 2019)\n------------------\n### Added\n* Props table markdown file import added to doc site page\n\n### Changed\n* Moved running the wicg-inert script to when 'terra-overlay' is mounted to resolve issues in IE 10\n* Update wcig-inert path to import directly the ES5 version of the package\n\n3.27.0 - (September 3, 2019)\n------------------\n### Changed\n* Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.\n\n3.26.0 - (August 21, 2019)\n------------------\n### Changed\n* Import for package version from package.json added to doc page\n* Update bracket positioning lint\n* Cleaned up imports in examples and test files\n\n3.25.0 - (August 14, 2019)\n------------------\n### Changed\n* Components updated to use `FormattedMessage` to interface with `react-intl's` `intl` context.\n* Update tests for dev-site v6\n* updated package.json test scripts\n\n3.23.0 - (July 24, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.22.0 - (July 17, 2019)\n------------------\n### Changed\n* Revert components updated to use `injectIntl` to interface with `react-intl's` `intl` context.\n\n3.21.0 - (July 17, 2019)\n------------------\n### Fixed\n* Fixed issue in IE 10 when trying to pull value from data attribute\n\n### Changed\n* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.\n\n3.20.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n* Updated jest snapshots\n\n### Changed\n* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`\n\n3.19.0  - (July 11, 2019)\n------------------\n### Changed\n* Updated Docs around the requirement of terra-base and aggregate-translations.\n\n### Fixed\n* Disabled document scroll if Overlay is not relative to the triggering container.\n\n3.18.0 - (July 9, 2019)\n------------------\n### Fixed\n* Added `data-overlay-count` attribute to root document when overlay is opened\n* Added check for `data-modal-count` attribute on root document to track opening and closing of overlays and modals,\n  to prevent the removal of the `inert` attribute from the root element if another overlay or abstract modal exists.\n* Added Node.contains polyfill to better support IE 10 / IE 11\n\n3.17.0 - (June 28, 2019)\n------------------\n### Changed\n* Removed all inline styles from Dev-site components and implemented the same styles using external css.\n* Removed conditional logic required to import wicg-inert polyfill\n\n### Fixed\n* Fixed freezing of Loading Overlay test pages by wrapping them in Overlay Containers.\n\n3.16.0 - (June 18, 2019)\n------------------\n### Added\n* Added missing WDIO screenshots\n\n3.15.1 - (June 12, 2019)\n------------------\n### Changed\n* Patch dependency version bump\n\n3.15.0 - (June 11, 2019)\n------------------\n### Added\n* Added check to only load inert polyfill if it is not already defined on the Element prototype\n\n### Removed\n* Removed node_modules from .npmignore\n\n### Changed\n* Made required updates to consume terra-toolkit v5 and terra-dev-site v5\n* Update overlay-spec and screenshots\n\n3.14.0 - (May 14, 2019)\n------------------\n### Changed\n* Updated overlay to use WICG inert polyfill to handle focus management when overlay is open\n\n3.13.0 - (May 9, 2019)\n------------------\n### Changed\n* Upgrade focus-trap-react to version ^6.0.1\n* Added wrapping div to account for breaking change in focus-trap-react\n\n3.12.0 - (May 1, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.11.0 - (April 16, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.10.0 - (April 9, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.9.0 - (April 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.8.1 - (March 27, 2019)\n------------------\n### Changed\n* Changed default rootProp value to `#root`\n\n3.8.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n3.7.0 - (March 21, 2019)\n------------------\n### Added\n* Added overlay prop to OverlayContainer to separate overlay from container-content\n* Added condition in overlay setNode method to prevent screen reader from reading container-content\n\n### Changed\n* Replaced local keyCode values with keycode-js npm package\n* Update Jest tests to use terra-enzyme-intl\n\n3.6.0 - (February 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added en-AU translations\n\n### Fixed\n* Changed expected selenium driver error to be non-Chrome specific for IE and FF driver compatibility\n\n3.5.0 - (February 12, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.4.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Changed\n* Removed stylelint overrides in Overlay.module.scss\n\n3.3.0 - (January 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.2.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.1.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.0.0 - (January 8, 2019)\n------------------\n### Changed\n* Updated theme variables\n\n2.37.0 - (January 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added missing ar translations.\n\n2.36.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n2.36.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.35.0 - (November 14, 2018)\n------------------\n### Changed\n* Removed automatic focus shift to relative overlay when it is displayed\n\n2.34.0 - (November 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.33.0 - (November 9, 2018)\n------------------\n### Fixed\n* LoadingOverlay Opts includes zIndexes\n\n2.32.0 - (October 30, 2018)\n------------------\n### Fixed\n* Fixed issue where body scrolling is not restored on unmount.\n\n### Changed\n* Updated overlay to be portalled\n\n### Added\n* Added hidden div to catch scrolling behind Overlay\n* zIndex prop\n\n2.31.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.30.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.29.0 - (October 8, 2018)\n------------------\n### Changed\n* Upgrade focus-trap-react to ^4.0.1\n\n2.28.0 - (October 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.27.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.26.1 - (September 6, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n2.26.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n2.25.0 - (September 4, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.24.0 - (August 29, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.23.0 - (August 21, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.22.1 - (August 14, 2018)\n------------------\n### Changed\n* Updated backgroundStyle documentation\n\n2.22.0 - (August 8, 2018)\n------------------\n### Changed\n* Updated component internationalization error message\n\n2.21.0 - (August 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.20.0 - (July 25, 2018)\n------------------\n### Added\n* Add sv and sv-SE translations\n\n2.19.0 - (July 19, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n2.18.0 - (July 17, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Formatting changes per eslint v4 update\n\n2.17.0 - (July 10, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.16.0 - (June 28, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added change log to the documentation on terra-dev-site\n\n2.15.0 - (June 22, 2018)\n------------------\n### Changed\n* Moved terra-base from dependency to peerDependency\n\n2.14.0 - (June 12, 2018)\n------------------\n### Changed\n* Updated \"test:jest\" script to work on windows.\n* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.\n\n2.13.0 - (May 30, 2018)\n------------------\n### Changed\n* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n2.12.0 - (May 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n\n2.11.0 - (May 23, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Updated README example code documentation\n\n2.10.0 - (May 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.9.0 - (May 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.8.0 - (May 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.7.0 - (April 20, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.6.0 - (April 15, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.5.0 - (April 5, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.4.0 - (March 30, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.3.0 - (March 14, 2018)\n------------------\n### Changed\n* Updated to add user defined class along with default class on DOM element rendered by OverlayContainer.\n\n2.2.0 - (March 6, 2018)\n------------------\n### Removed\n* Removed props-table script from package.json\n\n2.1.0 - (February 26, 2018)\n------------------\n### Changed\n* Added theming variables in Overlay\n\n2.0.1 - (February 13, 2018)\n------------------\n### Changed\n* Updated peerDependencies\n\n2.0.0 - (February 12, 2018)\n------------------\n### Changed\n* Updated to use React 16\n\n1.17.0 - (February 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.16.0 - (January 18, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.15.0 - (January 5, 2018)\n------------------\n### Changed\n* Export overlay container\n\n1.14.0 - (November 28, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.13.0 - (November 16, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.12.0 - (November 7, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.11.0 - (October 6, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.10.0 - (September 26, 2017)\n------------------\n### Removed\n* Remove stylelint-disable selector-class-pattern\n\n1.9.0 - (September 19, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.8.0 - (September 12, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.7.0 - (September 7, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.6.0 - (September 5, 2017)\n------------------\n### Changed\n* Update nightwatch tests and test scripts.\n\n1.5.0 - (August 31, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.4.0 - (August 15, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.3.0 - (August 8, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.2.0 - (August 1, 2017)\n------------------\n### Changed\n* Updated example code in overlay documentation\n\n1.1.0 - (July 26, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.0.0 - (July 18, 2017)\n------------------\nInitial stable release\n"},3055:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(t(0)),o=d(t(828)),r=d(t(2572));function d(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement(o.default,{packageName:"terra-overlay",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-overlay",readme:r.default})};n.default=l},826:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(t(0)),o=d(t(4)),r=d(t(827));function d(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(r.default),i=function(e){var n=e.packageName,t=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:l("badge-container")},a.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(n)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(n),alt:"NPM version"}))};n.default=i},827:function(e,n,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},828:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=p(t(0)),o=p(t(2)),r=p(t(834)),d=p(t(833)),l=p(t(4)),i=p(t(826)),c=p(t(829)),s=p(t(832));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=l.default.bind(s.default),f={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var n,t=e.packageName,o=e.packageVersion,l=e.packageUrl,s=e.readme,p=e.srcPath,f=e.examples,h=e.propsTables,b=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=f;h&&(n=h);for(var _=0,C=0;C<v.length;C+=1)v[C].id=_,_+=1;if(n)for(var M=0;M<n.length;M+=1)n[M].id=_,_+=1;var x,E=g(["doc-template",y.className]);if(v.length>0){var k=v.length>1?"Examples":"Example";x=a.default.createElement("h1",{className:g("examples-header")},k)}var w=a.default.createElement(i.default,{packageName:t,packageUrl:l,packageVersion:o});return a.default.createElement("div",u({},y,{className:E}),a.default.createElement("div",{className:g("doc-card")},t&&w,s&&a.default.createElement(d.default,{src:s}),p&&a.default.createElement("a",{href:p},"View component source code")),x,v.map((function(e){return a.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:g("doc-card")},h[0]&&h[0].componentProps?n.map((function(e){return a.default.createElement("div",{className:g("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(d.default,{src:e.componentProps}))})):n.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&a.default.createElement("div",{className:g("doc-card")},b))};h.propTypes=f,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;n.default=b},829:function(e,n,t){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=p(t(0)),r=p(t(2)),d=p(t(835)),l=p(t(836)),i=p(t(4)),c=p(t(830)),s=p(t(831));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function g(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}d.default.registerLanguage("jsx",l.default);var v=i.default.bind(c.default),_={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},C={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},M=function(e){function n(e){var t,a,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,(t=!(o=h(n).call(this,e))||"object"!==u(o)&&"function"!=typeof o?b(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(b(t)),t.handleCodeToggle=t.handleCodeToggle.bind(b(t)),t}var t,a,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,e),t=n,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.example,a=e.exampleSrc,r=e.children,l=e.description,i=g(e,["title","example","exampleSrc","children","description"]),c=this.state,p=c.isExpanded,u={};return c.isBackgroundTransparent&&(u={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},i,{className:v("template",i.className)}),n&&o.default.createElement("div",{className:v("header")},o.default.createElement("h2",{className:v("title")},n)),o.default.createElement("div",{className:v("content"),style:u},l&&o.default.createElement("div",{className:v("description")},l),t,r),a&&o.default.createElement("div",{className:v("footer")},o.default.createElement("div",{className:v("button-container")},o.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:v("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:v("chevron-right")}))),o.default.createElement("div",{className:v("code",{"is-expanded":p}),"aria-hidden":!p},p?o.default.createElement(d.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&f(t.prototype,a),r&&f(t,r),n}(o.default.Component);M.propTypes=_,M.defaultProps=C;var x=M;n.default=x},830:function(e,n,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},831:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",d="#5a9bcf",l="#8dc891",i="#d7deea",c="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:d},number:{color:d},"function-name":{color:d},constant:{color:d},symbol:{color:d},deleted:{color:d},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:l},keyword:{color:r},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};n.default=s},832:function(e,n,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=203-00395cd47b7158c90703.js.map