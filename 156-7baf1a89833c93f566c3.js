(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1812:function(e,t,a){"use strict";a.r(t),t.default="# Terra Alert Upgrade Guide\n\n## Changes from version 3 to version 4\n\n### Props\n#### Removed\n* `customStatusColor` prop. The prop was used to set the cutom alert color as inline style.\n\n#### Added\n* `customColorClass` prop. This prop allows user to provide their own CSS and bind the className to that in CSS.\n\n### Changes to CSS Custom Properties\n\n#### Added\n* --terra-alert-custom-default-color\n\n### Steps to uplift to V4\n1. import `classNames/bind` and `CSS`. \n2. Use `ClassNames.bind()` function to bind `CSS` to the `ClassName`.\n\n#### V3 Code\n```javascript\nimport Alert from 'terra-alert';\n\n<Alert type=\"custom\" customStatusColor=\"orange\" />\n```\n\n#### V4 Code\n##### CSS\n```CSS\n:local {\n  .my-app-alert-attention-example {\n    color: var(--terra-alert-attention-example-color, #fa0000);\n  }\n```\n##### JavaScript\n```javascript\nimport Alert from 'terra-alert';\nimport classNames from 'ClassNames/bind';\nimport styles from './CSS';\n\nconst cx = classNames.bind(styles);\n\n<Alert type=\"custom\" customColorClass={cx(['my-app-alert-attention-example'])} />\n\n```\n\n## Changes from version 2 to version 3\n\n\n### Changes to CSS Custom Properties\n\n#### Removed\n* --terra-alert-alert-shadow-color\n* --terra-alert-error-shadow-color\n* --terra-alert-warning-shadow-color\n* --terra-alert-advisory-shadow-color\n* --terra-alert-info-shadow-color\n* --terra-alert-success-shadow-color\n* --terra-alert-custom-shadow-color\n\n#### Added\n* --terra-alert-color\n* --terra-alert-min-height\n* --terra-alert-icon-margin-left\n* --terra-alert-icon-margin-right\n* --terra-alert-icon-margin-top\n* --terra-alert-body-margin-left\n* --terra-alert-body-margin-right\n* --terra-alert-body-margin-top\n* --terra-alert-std-margin-bottom\n* --terra-alert-std-margin-right\n* --terra-alert-section-padding-bottom\n* --terra-alert-section-padding-top\n* --terra-alert-title-display\n* --terra-alert-title-float\n* --terra-alert-title-margin-bottom\n* --terra-alert-title-margin-right\n* --terra-alert-actions-margin-bottom\n* --terra-alert-actions-margin-left\n* --terra-alert-actions-margin-right\n* --terra-alert-actions-margin-top\n* --terra-alert-alert-box-shadow\n* --terra-alert-error-box-shadow\n* --terra-alert-warning-box-shadow\n* --terra-alert-advisory-box-shadow\n* --terra-alert-info-box-shadow\n* --terra-alert-success-box-shadow\n* --terra-alert-custom-box-shadow\n"},2943:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(0)),o=l(a(828)),n=l(a(1812));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement(o.default,{packageName:"terra-alert",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-alert",readme:n.default})};t.default=c},826:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(0)),o=l(a(4)),n=l(a(827));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(n.default),s=function(e){var t=e.packageName,a=e.packageUrl,o=e.packageVersion;return o?r.default.createElement("div",{className:c("badge-container")},r.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},827:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},828:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(0)),o=u(a(2)),n=u(a(834)),l=u(a(833)),c=u(a(4)),s=u(a(826)),d=u(a(829)),i=u(a(832));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=c.default.bind(i.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},b=function(e){var t,a=e.packageName,o=e.packageVersion,c=e.packageUrl,i=e.readme,u=e.srcPath,g=e.examples,b=e.propsTables,h=e.children,_=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;b&&(t=b);for(var v=0,x=0;x<y.length;x+=1)y[x].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var w,S=f(["doc-template",_.className]);if(y.length>0){var k=y.length>1?"Examples":"Example";w=r.default.createElement("h1",{className:f("examples-header")},k)}var N=r.default.createElement(s.default,{packageName:a,packageUrl:c,packageVersion:o});return r.default.createElement("div",p({},_,{className:S}),r.default.createElement("div",{className:f("doc-card")},a&&N,i&&r.default.createElement(l.default,{src:i}),u&&r.default.createElement("a",{href:u},"View component source code")),w,y.map((function(e){return r.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),r.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return r.default.createElement("div",{className:f("props-table-markdown"),key:e.id},r.default.createElement("h2",null,e.componentName," Props"),r.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return r.default.createElement(n.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&r.default.createElement("div",{className:f("doc-card")},h))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;t.default=h},829:function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(a(0)),n=u(a(2)),l=u(a(835)),c=u(a(836)),s=u(a(4)),d=u(a(830)),i=u(a(831));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var y=s.default.bind(d.default),v={example:n.default.element,exampleSrc:n.default.string,title:n.default.string,description:n.default.node,children:n.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var a,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(a=!(o=b(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?h(r):o).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(h(a)),a.handleCodeToggle=a.handleCodeToggle.bind(h(a)),a}var a,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),a=t,(r=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,r=e.exampleSrc,n=e.children,c=e.description,s=f(e,["title","example","exampleSrc","children","description"]),d=this.state,u=d.isExpanded,p={};return d.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},s,{className:y("template",s.className)}),t&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},t)),o.default.createElement("div",{className:y("content"),style:p},c&&o.default.createElement("div",{className:y("description")},c),a,n),r&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":u}),"aria-hidden":!u},u?o.default.createElement(l.default,{language:"jsx",style:i.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&g(a.prototype,r),n&&g(a,n),t}(o.default.Component);E.propTypes=v,E.defaultProps=x;var w=E;t.default=w},830:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},831:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="#D8DEE9",o="#B2B2B2",n="#c5a5c5",l="#5a9bcf",c="#8dc891",s="#d7deea",d="#FAC863",i={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:n},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:c},keyword:{color:n},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=i},832:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=156-7baf1a89833c93f566c3.js.map