(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{2815:function(e,t,a){"use strict";a.r(t),t.default="# Terra Table Upgrade Guide\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-table-cell-border | --terra-table-cell-border-left |\n| --terra-table-row-border-vertical | --terra-table-first-cell-border-left |\n| --terra-table-row-border-vertical | --terra-table-last-cell-border-right |\n| --terra-table-row-border-horizontal | --terra-table-row-border-top |\n| --terra-table-row-border-horizontal | --terra-table-last-row-border-bottom |\n| --terra-table-cell-min-width-tiny | --terra-table-cell-tiny-min-width |\n| --terra-table-cell-min-width-small | --terra-table-cell-small-min-width |\n| --terra-table-cell-min-width-medium | --terra-table-cell-medium-min-width |\n| --terra-table-cell-min-width-large | --terra-table-cell-large-min-width |\n| --terra-table-cell-min-width-huge | --terra-table-cell-huge-min-width |\n| --terra-table-row-selected-border-color | --terra-table-row-selected-border-top-color |\n\n#### Added\n* --terra-table-header-cell-border-left\n* --terra-table-first-header-cell-border-left\n* --terra-table-last-header-cell-border-right\n* --terra-table-tbody-background-color\n* --terra-table-sort-indicator-width\n* --terra-table-header-cell-height\n* --terra-table-header-cell-padding-bottom\n* --terra-table-header-cell-padding-left\n* --terra-table-header-cell-padding-right\n* --terra-table-header-cell-padding-top\n* --terra-table-row-striped-focus-background-color\n* --terra-table-row-striped-selected-focus-background-color\n* --terra-table-row-focus-background-color\n* --terra-table-row-selected-focus-background-color\n"},3094:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(828)),l=n(a(2815));function n(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement(o.default,{packageName:"terra-table",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-table",readme:l.default})};t.default=c},826:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(4)),l=n(a(827));function n(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),d=function(e){var t=e.packageName,a=e.packageUrl,o=e.packageVersion;return o?r.default.createElement("div",{className:c("badge-container")},r.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},827:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},828:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),o=s(a(2)),l=s(a(834)),n=s(a(833)),c=s(a(4)),d=s(a(826)),i=s(a(829)),u=s(a(832));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=c.default.bind(u.default),b={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},g=function(e){var t,a=e.packageName,o=e.packageVersion,c=e.packageUrl,u=e.readme,s=e.srcPath,b=e.examples,g=e.propsTables,h=e.children,_=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=b;g&&(t=g);for(var v=0,w=0;w<y.length;w+=1)y[w].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var k,x=f(["doc-template",_.className]);if(y.length>0){var T=y.length>1?"Examples":"Example";k=r.default.createElement("h1",{className:f("examples-header")},T)}var O=r.default.createElement(d.default,{packageName:a,packageUrl:c,packageVersion:o});return r.default.createElement("div",p({},_,{className:x}),r.default.createElement("div",{className:f("doc-card")},a&&O,u&&r.default.createElement(n.default,{src:u}),s&&r.default.createElement("a",{href:s},"View component source code")),k,y.map((function(e){return r.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),r.default.createElement("div",{className:f("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return r.default.createElement("div",{className:f("props-table-markdown"),key:e.id},r.default.createElement("h2",null,e.componentName," Props"),r.default.createElement(n.default,{src:e.componentProps}))})):t.map((function(e){return r.default.createElement(l.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&r.default.createElement("div",{className:f("doc-card")},h))};g.propTypes=b,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},829:function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(a(0)),l=s(a(2)),n=s(a(835)),c=s(a(836)),d=s(a(4)),i=s(a(830)),u=s(a(831));function s(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.default.registerLanguage("jsx",c.default);var y=d.default.bind(i.default),v={example:l.default.element,exampleSrc:l.default.string,title:l.default.string,description:l.default.node,children:l.default.element},w={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var a,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(a=!(o=g(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?h(r):o).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(h(a)),a.handleCodeToggle=a.handleCodeToggle.bind(h(a)),a}var a,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),a=t,(r=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,r=e.exampleSrc,l=e.children,c=e.description,d=f(e,["title","example","exampleSrc","children","description"]),i=this.state,s=i.isExpanded,p={};return i.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},d,{className:y("template",d.className)}),t&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},t)),o.default.createElement("div",{className:y("content"),style:p},c&&o.default.createElement("div",{className:y("description")},c),a,l),r&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":s}),"aria-hidden":!s},s?o.default.createElement(n.default,{language:"jsx",style:u.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&b(a.prototype,r),l&&b(a,l),t}(o.default.Component);E.propTypes=v,E.defaultProps=w;var k=E;t.default=k},830:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},831:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="#D8DEE9",o="#B2B2B2",l="#c5a5c5",n="#5a9bcf",c="#8dc891",d="#d7deea",i="#FAC863",u={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:l},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:n},number:{color:n},"function-name":{color:n},constant:{color:n},symbol:{color:n},deleted:{color:n},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:l},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=u},832:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=224-8c86f0619cbc25a1041f.js.map