(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{3219:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(0)),r=o(t(826)),c=t(963);function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){return n.default.createElement("div",null,n.default.createElement("br",null),n.default.createElement(r.default,{packageName:c.name}),n.default.createElement("br",null),n.default.createElement(r.default,{packageName:c.name,packageVersion:"2.13.0"}),n.default.createElement(r.default,{packageName:c.name,packageUrl:"https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template",packageVersion:"2.13.0"}))};a.default=s},826:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(0)),r=o(t(4)),c=o(t(827));function o(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(c.default),l=function(e){var a=e.packageName,t=e.packageUrl,r=e.packageVersion;return r?n.default.createElement("div",{className:s("badge-container")},n.default.createElement("a",{className:s("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},n.default.createElement("span",{className:s("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(r)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(a)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(a),alt:"NPM version"}))};a.default=l},827:function(e,a,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},963:function(e){e.exports=JSON.parse('{"name":"terra-doc-template","main":"lib/DocTemplate.js","version":"2.21.0","description":"Provides an adjustable template for documentation pages.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-doc-template","DocTemplate","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-syntax-highlighter":"^11.0.0","terra-markdown":"^2.35.0","terra-props-table":"^2.42.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')}}]);
//# sourceMappingURL=305-74b1dd2117be3ecdc86b.js.map