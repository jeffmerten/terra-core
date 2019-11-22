(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{2595:function(e,a,n){"use strict";n.r(a),a.default="# Terra Paginator Upgrade Guide\n\n## Changes from version 1 to version 2\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-paginator-nav-link-foreground-color | --terra-paginator-nav-link-color |\n| --terra-paginator-nav-link-background-hover | --terra-paginator-nav-link-hover-background |\n| --terra-paginator-nav-link-foreground-color-hover | --terra-paginator-nav-link-hover-color |\n| --terra-paginator-nav-link-text-decoration-hover | --terra-paginator-nav-link-hover-text-decoration |\n| --terra-paginator-nav-link-background-focus | --terra-paginator-nav-link-focus-background |\n| --terra-paginator-nav-link-border-focus | --terra-paginator-nav-link-focus-border |\n| --terra-paginator-nav-link-box-shadow-focus | --terra-paginator-nav-link-focus-box-shadow |\n| --terra-paginator-nav-link-foreground-color-focus | --terra-paginator-nav-link-focus-color |\n| --terra-paginator-nav-link-background-active | --terra-paginator-nav-link-active-background |\n| --terra-paginator-nav-link-foreground-color-active | --terra-paginator-nav-link-active-color |\n| --terra-paginator-nav-link-text-decoration-active | --terra-paginator-nav-link-active-text-decoration |\n| --terra-paginator-nav-link-foreground-color-disabled | --terra-paginator-nav-link-disabled-color |\n| --terra-paginator-nav-link-disabled-box-shadow-focus | --terra-paginator-nav-link-disabled-focus-box-shadow |\n| --terra-paginator-nav-link-icon-previous | --terra-paginator-nav-link-icon-previous-background |\n| --terra-paginator-nav-link-icon-previous-disabled | --terra-paginator-nav-link-icon-previous-disabled-background |\n| --terra-paginator-nav-link-icon-next | --terra-paginator-nav-link-icon-next-background |\n| --terra-paginator-nav-link-icon-next-disabled | --terra-paginator-nav-link-icon-next-disabled-background |\n\n#### Added 2.0.0\n* --terra-paginator-progressive-nav-link-previous-margin-left\n* --terra-paginator-progressive-nav-link-previous-margin-right\n* --terra-paginator-progressive-nav-link-next-margin-left\n* --terra-paginator-progressive-nav-link-next-margin-right\n* --terra-paginator-nav-link-icon-height\n* --terra-paginator-nav-link-icon-width\n* --terra-paginator-nav-link-icon-previous-margin-right\n* --terra-paginator-nav-link-icon-next-margin-left\n\n#### Added ~2.21.x\n* --terra-paginator-nav-link-background-color\n* --terra-paginator-nav-link-box-shadow\n* --terra-paginator-nav-link-font-size\n* --terra-paginator-nav-link-text-decoration\n* --terra-paginator-nav-link-hover-background-color\n* --terra-paginator-nav-link-hover-box-shadow\n* --terra-paginator-nav-link-hover-border\n* --terra-paginator-nav-link-active-background-color\n* --terra-paginator-nav-link-active-box-shadow\n* --terra-paginator-nav-link-active-border\n* --terra-paginator-nav-link-disabled-background-color\n* --terra-paginator-nav-link-disabled-box-shadow\n* --terra-paginator-nav-link-disabled-border\n* --terra-paginator-nav-link-disabled-opacity\n* --terra-paginator-nav-link-previous-padding-left\n* --terra-paginator-nav-link-previous-icon-only-margin-left\n* --terra-paginator-nav-link-previous-icon-only-margin-right\n* --terra-paginator-nav-link-next-padding-right\n* --terra-paginator-nav-link-next-icon-only-margin-left\n* --terra-paginator-nav-link-next-icon-only-margin-right\n* --terra-paginator-nav-link-icon-previous-background-image\n* --terra-paginator-nav-link-icon-previous-disabled-background-image\n* --terra-paginator-nav-link-icon-next-background-image\n* --terra-paginator-nav-link-icon-next-disabled-background-image\n\n#### Removed ~2.21.x\n* --terra-paginator-nav-link-background\n* --terra-paginator-nav-link-hover-background\n* --terra-paginator-nav-link-focus-background\n* --terra-paginator-nav-link-active-background\n* --terra-paginator-nav-link-disabled-background\n* --terra-paginator-nav-link-icon-previous-background\n* --terra-paginator-nav-link-icon-previous-disabled-background\n* --terra-paginator-nav-link-icon-next-background\n* --terra-paginator-nav-link-icon-next-disabled-background\n"},3060:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=l(n(0)),r=l(n(828)),o=l(n(2595));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return t.default.createElement(r.default,{packageName:"terra-paginator",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-paginator",readme:o.default})};a.default=i},826:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=l(n(0)),r=l(n(4)),o=l(n(827));function l(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(o.default),c=function(e){var a=e.packageName,n=e.packageUrl,r=e.packageVersion;return r?t.default.createElement("div",{className:i("badge-container")},t.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},t.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(r)))):t.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(a)},t.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(a),alt:"NPM version"}))};a.default=c},827:function(e,a,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},828:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=u(n(0)),r=u(n(2)),o=u(n(834)),l=u(n(833)),i=u(n(4)),c=u(n(826)),d=u(n(829)),p=u(n(832));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function g(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=i.default.bind(p.default),m={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},v=function(e){var a,n=e.packageName,r=e.packageVersion,i=e.packageUrl,p=e.readme,u=e.srcPath,m=e.examples,v=e.propsTables,b=e.children,k=g(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),h=m;v&&(a=v);for(var _=0,y=0;y<h.length;y+=1)h[y].id=_,_+=1;if(a)for(var x=0;x<a.length;x+=1)a[x].id=_,_+=1;var E,w=f(["doc-template",k.className]);if(h.length>0){var T=h.length>1?"Examples":"Example";E=t.default.createElement("h1",{className:f("examples-header")},T)}var O=t.default.createElement(c.default,{packageName:n,packageUrl:i,packageVersion:r});return t.default.createElement("div",s({},k,{className:w}),t.default.createElement("div",{className:f("doc-card")},n&&O,p&&t.default.createElement(l.default,{src:p}),u&&t.default.createElement("a",{href:u},"View component source code")),E,h.map((function(e){return t.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),t.default.createElement("div",{className:f("doc-card")},v[0]&&v[0].componentProps?a.map((function(e){return t.default.createElement("div",{className:f("props-table-markdown"),key:e.id},t.default.createElement("h2",null,e.componentName," Props"),t.default.createElement(l.default,{src:e.componentProps}))})):a.map((function(e){return t.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&t.default.createElement("div",{className:f("doc-card")},b))};v.propTypes=m,v.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=v;a.default=b},829:function(e,a,n){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=u(n(0)),o=u(n(2)),l=u(n(835)),i=u(n(836)),c=u(n(4)),d=u(n(830)),p=u(n(831));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function f(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,a){return(k=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.default.registerLanguage("jsx",i.default);var h=c.default.bind(d.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},y={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function a(e){var n,t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),t=this,(n=!(r=v(a).call(this,e))||"object"!==s(r)&&"function"!=typeof r?b(t):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(b(n)),n.handleCodeToggle=n.handleCodeToggle.bind(b(n)),n}var n,t,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&k(e,a)}(a,e),n=a,(t=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.title,n=e.example,t=e.exampleSrc,o=e.children,i=e.description,c=f(e,["title","example","exampleSrc","children","description"]),d=this.state,u=d.isExpanded,s={};return d.isBackgroundTransparent&&(s={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",g({},c,{className:h("template",c.className)}),a&&r.default.createElement("div",{className:h("header")},r.default.createElement("h2",{className:h("title")},a)),r.default.createElement("div",{className:h("content"),style:s},i&&r.default.createElement("div",{className:h("description")},i),n,o),t&&r.default.createElement("div",{className:h("footer")},r.default.createElement("div",{className:h("button-container")},r.default.createElement("button",{type:"button",className:h("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:h("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:h("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:h("chevron-right")}))),r.default.createElement("div",{className:h("code",{"is-expanded":u}),"aria-hidden":!u},u?r.default.createElement(l.default,{language:"jsx",style:p.default,customStyle:{margin:"0",borderRadius:"0"}},t):void 0)))}}])&&m(n.prototype,t),o&&m(n,o),a}(r.default.Component);x.propTypes=_,x.defaultProps=y;var E=x;a.default=E},830:function(e,a,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},831:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t="#D8DEE9",r="#B2B2B2",o="#c5a5c5",l="#5a9bcf",i="#8dc891",c="#d7deea",d="#FAC863",p={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:t},char:{color:t},builtin:{color:t},inserted:{color:t},function:{color:"#79b6f2"},operator:{color:c},entity:{color:c,cursor:"help"},url:{color:c},".language-css .token.string":{color:c},".style .token.string":{color:c},variable:{color:c},"attr-value":{color:i},keyword:{color:o},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};a.default=p},832:function(e,a,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=206-4301647771b4582a0b69.js.map