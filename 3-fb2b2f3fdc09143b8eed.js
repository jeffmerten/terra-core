(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1027:function(e,n,t){"use strict";var a=t(1117),r=t(1523),l=t(1524);e.exports=function(e){var n,t,i=e.space,o=e.mustUseProperty||[],s=e.attributes||{},u=e.properties,c=e.transform,p={},g={};for(n in u)t=new l(n,c(s,n),u[n],i),-1!==o.indexOf(n)&&(t.mustUseProperty=!0),p[n]=t,g[a(n)]=n,g[a(t.attribute)]=n;return new r(p,g,i)}},1117:function(e,n,t){"use strict";e.exports=function(e){return e.toLowerCase()}},1118:function(e,n,t){"use strict";var a=0;function r(){return Math.pow(2,++a)}n.boolean=r(),n.booleanish=r(),n.overloadedBoolean=r(),n.number=r(),n.spaceSeparated=r(),n.commaSeparated=r(),n.commaOrSpaceSeparated=r()},1523:function(e,n,t){"use strict";e.exports=r;var a=r.prototype;function r(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}a.space=null,a.normal={},a.property={}},1524:function(e,n,t){"use strict";var a=t(1525),r=t(1118);e.exports=o,o.prototype=new a,o.prototype.defined=!0;var l=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],i=l.length;function o(e,n,t,o){var u,c=-1;for(s(this,"space",o),a.call(this,e,n);++c<i;)s(this,u=l[c],(t&r[u])===r[u])}function s(e,n,t){t&&(e[n]=t)}},1525:function(e,n,t){"use strict";e.exports=r;var a=r.prototype;function r(e,n){this.property=e,this.attribute=n}a.space=null,a.attribute=null,a.property=null,a.boolean=!1,a.booleanish=!1,a.overloadedBoolean=!1,a.number=!1,a.commaSeparated=!1,a.spaceSeparated=!1,a.commaOrSpaceSeparated=!1,a.mustUseProperty=!1,a.defined=!1},1526:function(e,n,t){"use strict";var a=t(1712);e.exports=function(e,n){return a(e,n.toLowerCase())}},1527:function(e,n,t){"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=48&&n<=57}},1701:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){return function(t){var a=t.language,i=t.children,p=t.style,g=void 0===p?n:p,d=t.customStyle,f=void 0===d?{}:d,m=t.codeTagProps,h=void 0===m?{style:g['code[class*="language-"]']}:m,y=t.useInlineStyles,v=void 0===y||y,b=t.showLineNumbers,x=void 0!==b&&b,w=t.startingLineNumber,k=void 0===w?1:w,S=t.lineNumberContainerStyle,A=t.lineNumberStyle,N=t.wrapLines,F=t.lineProps,C=void 0===F?{}:F,j=t.renderer,P=t.PreTag,O=void 0===P?"pre":P,L=t.CodeTag,E=void 0===L?"code":L,M=t.code,$=void 0===M?Array.isArray(i)?i[0]:i:M,T=t.astGenerator,_=(0,r.default)(t,["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"]);T=T||e;var I=x?l.default.createElement(s,{containerStyle:S,codeStyle:h.style||{},numberStyle:A,startingLineNumber:k,codeString:$}):null,D=g.hljs||g['pre[class*="language-"]']||{backgroundColor:"#fff"},B=v?Object.assign({},_,{style:Object.assign({},D,f)}):Object.assign({},_,{className:"hljs"});if(!T)return l.default.createElement(O,B,I,l.default.createElement(E,h,$));N=!(!j||void 0!==N)||N,j=j||c;var z=[{type:"text",value:$}],R=function(e){var n=e.astGenerator,t=e.language,a=e.code,r=e.defaultCodeValue;if(n.getLanguage){var l=t&&n.getLanguage(t);return"text"===t?{value:r,language:"text"}:l?n.highlight(t,a):n.highlightAuto(a)}try{return t&&"text"!==t?{value:n.highlight(a,t)}:{value:r}}catch(e){return{value:r}}}({astGenerator:T,language:a,code:$,defaultCodeValue:z});null===R.language&&(R.value=z);var U=N?function(e,n){var t=function e(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=0;r<n.length;r++){var l=n[r];if("text"===l.type)a.push(u({children:[l],className:t}));else if(l.children){var i=t.concat(l.properties.className);a=a.concat(e(l.children,i))}}return a}(e.value),a=[],r=-1,l=0,i=function(){var e=t[l],i=e.children[0].value;if(i.match(o)){var s=i.split("\n");s.forEach((function(i,o){var c=a.length+1,p={type:"text",value:"".concat(i,"\n")};if(0===o){var g=t.slice(r+1,l).concat(u({children:[p],className:e.properties.className}));a.push(u({children:g,lineNumber:c,lineProps:n}))}else if(o===s.length-1){if(t[l+1]&&t[l+1].children&&t[l+1].children[0]){var d=u({children:[{type:"text",value:"".concat(i)}],className:e.properties.className});t.splice(l+1,0,d)}else a.push(u({children:[p],lineNumber:c,lineProps:n,className:e.properties.className}))}else a.push(u({children:[p],lineNumber:c,lineProps:n,className:e.properties.className}))})),r=l}l++};for(;l<t.length;)i();if(r!==t.length-1){var s=t.slice(r+1,t.length);s&&s.length&&a.push(u({children:s,lineNumber:a.length+1,lineProps:n}))}return a}(R,C):R.value;return l.default.createElement(O,B,I,l.default.createElement(E,h,j({rows:U,stylesheet:g,useInlineStyles:v})))}};var r=a(t(27)),l=a(t(0)),i=a(t(1702)),o=/\n/g;function s(e){var n=e.codeString,t=e.codeStyle,a=e.containerStyle,r=void 0===a?{float:"left",paddingRight:"10px"}:a,i=e.numberStyle,o=void 0===i?{}:i,s=e.startingLineNumber;return l.default.createElement("code",{style:Object.assign({},t,r)},function(e){var n=e.lines,t=e.startingLineNumber,a=e.style;return n.map((function(e,n){var r=n+t;return l.default.createElement("span",{key:"line-".concat(n),className:"react-syntax-highlighter-line-number",style:"function"==typeof a?a(r):a},"".concat(r,"\n"))}))}({lines:n.replace(/\n$/,"").split("\n"),style:o,startingLineNumber:s}))}function u(e){var n=e.children,t=e.lineNumber,a=e.lineProps,r=e.className,l=void 0===r?[]:r,i=("function"==typeof a?a(t):a)||{};return i.className=i.className?l.concat(i.className):l,{type:"element",tagName:"span",properties:i,children:n}}function c(e){var n=e.rows,t=e.stylesheet,a=e.useInlineStyles;return n.map((function(e,n){return(0,i.default)({node:e,stylesheet:t,useInlineStyles:a,key:"code-segement".concat(n)})}))}},1702:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.createStyleObject=o,n.createClassNameString=s,n.createChildren=u,n.default=c;var r=a(t(17)),l=a(t(1703)),i=a(t(0));function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return e.reduce((function(e,n){return(0,l.default)({},e,t[n])}),n)}function s(e){return e.join(" ")}function u(e,n){var t=0;return function(a){return t+=1,a.map((function(a,r){return c({node:a,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(t,"-").concat(r)})}))}}function c(e){var n=e.node,t=e.stylesheet,a=e.style,c=void 0===a?{}:a,p=e.useInlineStyles,g=e.key,d=n.properties,f=n.type,m=n.tagName,h=n.value;if("text"===f)return h;if(m){var y=u(t,p),v=p&&d.className&&d.className.filter((function(e){return!t[e]})),b=v&&v.length?v:void 0,x=p?(0,l.default)({},d,{className:b&&s(b)},{style:o(d.className,Object.assign({},d.style,c),t)}):(0,l.default)({},d,{className:s(d.className)}),w=y(n.children);return i.default.createElement(m,(0,r.default)({key:g},x),w)}}},1703:function(e,n,t){var a=t(137);e.exports=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}},1704:function(e,n,t){"use strict";(function(n){var a,r,l=(r=(a="Prism"in n)?n.Prism:void 0,function(){a?n.Prism=r:delete n.Prism,a=void 0,r=void 0});("undefined"==typeof window?"undefined"==typeof self?{}:self:window).Prism={manual:!0,disableWorkerMessageHandler:!0};var i=t(1705),o=t(1720),s=t(1727),u=t(1728),c=t(1729),p=t(1730),g=t(1731);l();var d={}.hasOwnProperty;function f(){}f.prototype=s;var m=new f;function h(e){if("function"!=typeof e||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");void 0===m.languages[e.displayName]&&e(m)}e.exports=m,m.highlight=function(e,n){var t,a=s.highlight;if("string"!=typeof e)throw new Error("Expected `string` for `value`, got `"+e+"`");if("Object"===m.util.type(n))t=n,n=null;else{if("string"!=typeof n)throw new Error("Expected `string` for `name`, got `"+n+"`");if(!d.call(m.languages,n))throw new Error("Unknown language: `"+n+"` is not registered");t=m.languages[n]}return a.call(this,e,t,n)},m.register=h,m.alias=function(e,n){var t,a,r,l,i=m.languages,o=e;n&&((o={})[e]=n);for(t in o)for(a=o[t],r=(a="string"==typeof a?[a]:a).length,l=-1;++l<r;)i[a[l]]=i[t]},m.registered=function(e){if("string"!=typeof e)throw new Error("Expected `string` for `language`, got `"+e+"`");return d.call(m.languages,e)},m.listLanguages=function(){var e,n=m.languages,t=[];for(e in n)d.call(n,e)&&"object"==typeof n[e]&&t.push(e);return t},h(u),h(c),h(p),h(g),m.util.encode=function(e){return e},m.Token.stringify=function(e,n,t){var a;if("string"==typeof e)return{type:"text",value:e};if("Array"===m.util.type(e))return function(e,n){var t,a=[],r=e.length,l=-1;for(;++l<r;)""!==(t=e[l])&&null!=t&&a.push(t);l=-1,r=a.length;for(;++l<r;)t=a[l],a[l]=m.Token.stringify(t,n,a);return a}(e,n);a={type:e.type,content:m.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(a.classes=a.classes.concat(e.alias));return m.hooks.run("wrap",a),i(a.tag+"."+a.classes.join("."),function(e){var n;for(n in e)e[n]=o(e[n]);return e}(a.attributes),a.content)}}).call(this,t(44))},1705:function(e,n,t){"use strict";e.exports=t(1706)},1706:function(e,n,t){"use strict";var a=t(1707),r=t(1715)(a,"div");r.displayName="html",e.exports=r},1707:function(e,n,t){"use strict";var a=t(1708),r=t(1709),l=t(1710),i=t(1711),o=t(1713),s=t(1714);e.exports=a([l,r,i,o,s])},1708:function(e,n,t){"use strict";var a=t(310),r=t(1523);e.exports=function(e){var n,t,l=e.length,i=[],o=[],s=-1;for(;++s<l;)n=e[s],i.push(n.property),o.push(n.normal),t=n.space;return new r(a.apply(null,i),a.apply(null,o),t)}},1709:function(e,n,t){"use strict";var a=t(1027);e.exports=a({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},1710:function(e,n,t){"use strict";var a=t(1027);e.exports=a({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},1711:function(e,n,t){"use strict";var a=t(1027),r=t(1526);e.exports=a({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})},1712:function(e,n,t){"use strict";e.exports=function(e,n){return n in e?e[n]:n}},1713:function(e,n,t){"use strict";var a=t(1118),r=t(1027),l=a.booleanish,i=a.number,o=a.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:l,ariaAutoComplete:null,ariaBusy:l,ariaChecked:l,ariaColCount:i,ariaColIndex:i,ariaColSpan:i,ariaControls:o,ariaCurrent:null,ariaDescribedBy:o,ariaDetails:null,ariaDisabled:l,ariaDropEffect:o,ariaErrorMessage:null,ariaExpanded:l,ariaFlowTo:o,ariaGrabbed:l,ariaHasPopup:null,ariaHidden:l,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:o,ariaLevel:i,ariaLive:null,ariaModal:l,ariaMultiLine:l,ariaMultiSelectable:l,ariaOrientation:null,ariaOwns:o,ariaPlaceholder:null,ariaPosInSet:i,ariaPressed:l,ariaReadOnly:l,ariaRelevant:null,ariaRequired:l,ariaRoleDescription:o,ariaRowCount:i,ariaRowIndex:i,ariaRowSpan:i,ariaSelected:l,ariaSetSize:i,ariaSort:null,ariaValueMax:i,ariaValueMin:i,ariaValueNow:i,ariaValueText:null,role:null}})},1714:function(e,n,t){"use strict";var a=t(1118),r=t(1027),l=t(1526),i=a.boolean,o=a.overloadedBoolean,s=a.booleanish,u=a.number,c=a.spaceSeparated,p=a.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:l,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:c,autoFocus:i,autoPlay:i,capture:i,charSet:null,checked:i,cite:null,className:c,cols:u,colSpan:null,content:null,contentEditable:s,controls:i,controlsList:c,coords:u|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:o,draggable:s,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:c,height:u,hidden:i,high:u,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:c,itemRef:c,itemScope:i,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:i,low:u,manifest:null,max:null,maxLength:u,media:null,method:null,min:null,minLength:u,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:u,pattern:null,ping:c,placeholder:null,playsInline:i,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:c,required:i,reversed:i,rows:u,rowSpan:u,sandbox:c,scope:null,scoped:i,seamless:i,selected:i,shape:null,size:u,sizes:null,slot:null,span:u,spellCheck:s,src:null,srcDoc:null,srcLang:null,srcSet:p,start:u,step:null,style:null,tabIndex:u,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:s,width:u,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:u,borderColor:null,bottomMargin:u,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:u,leftMargin:u,link:null,longDesc:null,lowSrc:null,marginHeight:u,marginWidth:u,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:u,rules:null,scheme:null,scrolling:s,standby:null,summary:null,text:null,topMargin:u,valueType:null,version:null,vAlign:null,vLink:null,vSpace:u,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,prefix:null,property:null,results:u,security:null,unselectable:null}})},1715:function(e,n,t){"use strict";var a=t(1716),r=t(1117),l=t(1717),i=t(1718).parse,o=t(1719).parse;e.exports=function(e,n,t){var r=t?function(e){var n,t=e.length,a=-1,r={};for(;++a<t;)n=e[a],r[n.toLowerCase()]=n;return r}(t):null;return(function(e,t){var a,i=l(e,n),o=Array.prototype.slice.call(arguments,2),u=i.tagName.toLowerCase();i.tagName=r&&s.call(r,u)?r[u]:u,t&&function(e,n){return"string"==typeof e||"length"in e||function(e,n){var t=n.type;if("input"===e||!t||"string"!=typeof t)return!1;if("object"==typeof n.children&&"length"in n.children)return!0;if(t=t.toLowerCase(),"button"===e)return"menu"!==t&&"submit"!==t&&"reset"!==t&&"button"!==t;return"value"in n}(n.tagName,e)}(t,i)&&(o.unshift(t),t=null);if(t)for(a in t)c(i.properties,a,t[a]);(function e(n,t){var a,r;if("string"==typeof t||"number"==typeof t)return void n.push({type:"text",value:String(t)});if("object"==typeof t&&"length"in t){for(a=-1,r=t.length;++a<r;)e(n,t[a]);return}if("object"!=typeof t||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");n.push(t)})(i.children,o),"template"===i.tagName&&(i.content={type:"root",children:i.children},i.children=[]);return i});function c(n,t,r){var l,s,c;null!=r&&r==r&&(s=(l=a(e,t)).property,"string"==typeof(c=r)&&(l.spaceSeparated?c=i(c):l.commaSeparated?c=o(c):l.commaOrSpaceSeparated&&(c=i(o(c).join(" ")))),"style"===s&&"string"!=typeof r&&(c=function(e){var n,t=[];for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}(c)),"className"===s&&n.className&&(c=n.className.concat(c)),n[s]=function(e,n,t){var a,r,l;if("object"!=typeof t||!("length"in t))return u(e,n,t);r=t.length,a=-1,l=[];for(;++a<r;)l[a]=u(e,n,t[a]);return l}(l,s,c))}};var s={}.hasOwnProperty;function u(e,n,t){var a=t;return e.number||e.positiveNumber?isNaN(a)||""===a||(a=Number(a)):(e.boolean||e.overloadedBoolean)&&("string"!=typeof a||""!==a&&r(t)!==r(n)||(a=!0)),a}},1716:function(e,n,t){"use strict";var a=t(1117),r=t(1524),l=t(1525),i="data";e.exports=function(e,n){var t=a(n),g=n,d=l;if(t in e.normal)return e.property[e.normal[t]];t.length>4&&t.slice(0,4)===i&&o.test(n)&&("-"===n.charAt(4)?g=function(e){var n=e.slice(5).replace(s,p);return i+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);if(s.test(n))return e;"-"!==(n=n.replace(u,c)).charAt(0)&&(n="-"+n);return i+n}(n),d=r);return new d(g,n)};var o=/^data[-a-z0-9.:_]+$/i,s=/-[a-z]/g,u=/[A-Z]/g;function c(e){return"-"+e.toLowerCase()}function p(e){return e.charAt(1).toUpperCase()}},1717:function(e,n,t){"use strict";e.exports=function(e,n){var t,l,i,o,s,u=e||"",c=n||"div",p={},g=-1,d=u.length;for(;++g<=d;)(i=u.charCodeAt(g))&&i!==r&&i!==a||((o=u.slice(s,g))&&(l===r?t?t.push(o):(t=[o],p.className=t):l===a?p.id=o:c=o),s=g+1,l=i);return{type:"element",tagName:c,properties:p,children:[]}};var a=35,r=46},1718:function(e,n,t){"use strict";n.parse=function(e){var n=String(e||a).trim();return n===a?[]:n.split(l)},n.stringify=function(e){return e.join(r).trim()};var a="",r=" ",l=/[ \t\n\r\f]+/g},1719:function(e,n,t){"use strict";n.parse=function(e){var n,t=[],r=String(e||l),i=r.indexOf(a),o=0,s=!1;for(;!s;)-1===i&&(i=r.length,s=!0),!(n=r.slice(o,i).trim())&&s||t.push(n),o=i+1,i=r.indexOf(a,o);return t},n.stringify=function(e,n){var t=n||{},i=!1===t.padLeft?l:r,o=t.padRight?r:l;e[e.length-1]===l&&(e=e.concat(l));return e.join(o+a+i).trim()};var a=",",r=" ",l=""},1720:function(e,n,t){"use strict";var a=t(1721),r=t(1722),l=t(1527),i=t(1723),o=t(1724),s=t(1726);e.exports=function(e,n){var t,l,i={};n||(n={});for(l in g)t=n[l],i[l]=null==t?g[l]:t;(i.position.indent||i.position.start)&&(i.indent=i.position.indent||[],i.position=i.position.start);return function(e,n){var t,l,i,g,B,z,R,U,H,q,G,W,Z,V,J,K,Y,X,Q,ee=n.additional,ne=n.nonTerminated,te=n.text,ae=n.reference,re=n.warning,le=n.textContext,ie=n.referenceContext,oe=n.warningContext,se=n.position,ue=n.indent||[],ce=e.length,pe=0,ge=-1,de=se.column||1,fe=se.line||1,me="",he=[];"string"==typeof ee&&(ee=ee.charCodeAt(0));K=ve(),U=re?function(e,n){var t=ve();t.column+=n,t.offset+=n,re.call(oe,I[e],t,e)}:p,pe--,ce++;for(;++pe<ce;)if(B===f&&(de=ue[ge]||1),(B=e.charCodeAt(pe))===y){if((R=e.charCodeAt(pe+1))===d||R===f||R===m||R===h||R===y||R===b||R!=R||ee&&R===ee){me+=c(B),de++;continue}for(W=Z=pe+1,Q=Z,R===w?(Q=++W,(R=e.charCodeAt(Q))===k||R===S?(V=F,Q=++W):V=C):V=N,t="",G="",g="",J=P[V],Q--;++Q<ce&&(R=e.charCodeAt(Q),J(R));)g+=c(R),V===N&&u.call(a,g)&&(t=g,G=a[g]);(i=e.charCodeAt(Q)===v)&&(Q++,(l=V===N&&s(g))&&(t=g,G=l)),X=1+Q-Z,(i||ne)&&(g?V===N?(i&&!G?U($,1):(t!==g&&(Q=W+t.length,X=1+Q-W,i=!1),i||(H=t?O:E,n.attribute?(R=e.charCodeAt(Q))===x?(U(H,X),G=null):o(R)?G=null:U(H,X):U(H,X))),z=G):(i||U(L,X),z=parseInt(g,j[V]),(ye=z)>=55296&&ye<=57343||ye>1114111?(U(_,X),z=c(A)):z in r?(U(T,X),z=r[z]):(q="",D(z)&&U(T,X),z>65535&&(q+=c((z-=65536)>>>10|55296),z=56320|1023&z),z=q+c(z))):V!==N&&U(M,X)),z?(be(),K=ve(),pe=Q-1,de+=Q-Z+1,he.push(z),(Y=ve()).offset++,ae&&ae.call(ie,z,{start:K,end:Y},e.slice(Z-1,Q)),K=Y):(g=e.slice(Z-1,Q),me+=g,de+=g.length,pe=Q-1)}else 10===B&&(fe++,ge++,de=0),B==B?(me+=c(B),de++):be();var ye;return he.join("");function ve(){return{line:fe,column:de,offset:pe+(se.offset||0)}}function be(){me&&(he.push(me),te&&te.call(le,me,{start:K,end:ve()}),me="")}}(e,i)};var u={}.hasOwnProperty,c=String.fromCharCode,p=Function.prototype,g={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},d=9,f=10,m=12,h=32,y=38,v=59,b=60,x=61,w=35,k=88,S=120,A=65533,N="named",F="hexadecimal",C="decimal",j={};j[F]=16,j[C]=10;var P={};P[N]=o,P[C]=l,P[F]=i;var O=1,L=2,E=3,M=4,$=5,T=6,_=7,I={};function D(e){return e>=1&&e<=8||11===e||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||65535==(65535&e)||65534==(65535&e)}I[O]="Named character references must be terminated by a semicolon",I[L]="Numeric character references must be terminated by a semicolon",I[E]="Named character references cannot be empty",I[M]="Numeric character references cannot be empty",I[$]="Named character references must be known",I[T]="Numeric character references cannot be disallowed",I[_]="Numeric character references cannot be outside the permissible Unicode range"},1721:function(e){e.exports=JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}')},1722:function(e){e.exports=JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}')},1723:function(e,n,t){"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}},1724:function(e,n,t){"use strict";var a=t(1725),r=t(1527);e.exports=function(e){return a(e)||r(e)}},1725:function(e,n,t){"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}},1726:function(e,n,t){"use strict";var a,r=59;e.exports=function(e){var n,t="&"+e+";";if((a=a||document.createElement("i")).innerHTML=t,(n=a.textContent).charCodeAt(n.length-1)===r&&"semi"!==e)return!1;return n!==t&&n}},1727:function(e,n,t){(function(n){var t=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,l,i=a.util.type(n);switch(t=t||{},i){case"Object":if(l=a.util.objId(n),t[l])return t[l];for(var o in r={},t[l]=r,n)n.hasOwnProperty(o)&&(r[o]=e(n[o],t));return r;case"Array":return l=a.util.objId(n),t[l]?t[l]:(r=[],t[l]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var l=(r=r||a.languages)[e],i={};for(var o in l)if(l.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);t.hasOwnProperty(o)||(i[o]=l[o])}var u=r[e];return r[e]=i,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=i)})),i},DFS:function e(n,t,r,l){l=l||{};var i=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||l[i(s)]?"Array"!==u||l[i(s)]||(l[i(s)]=!0,e(s,t,o,l)):(l[i(s)]=!0,e(s,t,null,l))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var l,i=e.querySelectorAll(r.selector),o=0;l=i[o++];)a.highlightElement(l,!0===n,r.callback)},highlightElement:function(t,r,l){for(var i,o="none",s=t;s&&!n.test(s.className);)s=s.parentNode;s&&(o=(s.className.match(n)||[,"none"])[1].toLowerCase(),i=a.languages[o]),t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+o,t.parentNode&&(s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+o));var u={element:t,language:o,grammar:i,code:t.textContent},c=function(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),l&&l.call(u.element)};if(a.hooks.run("before-sanity-check",u),u.code)if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var p=new Worker(a.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code));else a.hooks.run("complete",u)},highlight:function(e,n,t){var l={code:e,grammar:n,language:t};return a.hooks.run("before-tokenize",l),l.tokens=a.tokenize(l.code,l.grammar),a.hooks.run("after-tokenize",l),r.stringify(a.util.encode(l.tokens),l.language)},matchGrammar:function(e,n,t,l,i,o,s){for(var u in t)if(t.hasOwnProperty(u)&&t[u]){if(u==s)return;var c=t[u];c="Array"===a.util.type(c)?c:[c];for(var p=0;p<c.length;++p){var g=c[p],d=g.inside,f=!!g.lookbehind,m=!!g.greedy,h=0,y=g.alias;if(m&&!g.pattern.global){var v=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,v+"g")}g=g.pattern||g;for(var b=l,x=i;b<n.length;x+=n[b].length,++b){var w=n[b];if(n.length>e.length)return;if(!(w instanceof r)){if(m&&b!=n.length-1){if(g.lastIndex=x,!(C=g.exec(e)))break;for(var k=C.index+(f?C[1].length:0),S=C.index+C[0].length,A=b,N=x,F=n.length;A<F&&(N<S||!n[A].type&&!n[A-1].greedy);++A)k>=(N+=n[A].length)&&(++b,x=N);if(n[b]instanceof r)continue;j=A-b,w=e.slice(x,N),C.index-=x}else{g.lastIndex=0;var C=g.exec(w),j=1}if(C){f&&(h=C[1]?C[1].length:0);S=(k=C.index+h)+(C=C[0].slice(h)).length;var P=w.slice(0,k),O=w.slice(S),L=[b,j];P&&(++b,x+=P.length,L.push(P));var E=new r(u,d?a.tokenize(C,d):C,y,C,m);if(L.push(E),O&&L.push(O),Array.prototype.splice.apply(n,L),1!=j&&a.matchGrammar(e,n,t,b,x,!0,u),o)break}else if(o)break}}}}},tokenize:function(e,n){var t=[e],r=n.rest;if(r){for(var l in r)n[l]=r[l];delete n.rest}return a.matchGrammar(e,t,n,0,0,!1),t},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,l=0;r=t[l++];)r(n)}},Token:r};function r(e,n,t,a,r){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,n)})).join("");var t={type:e.type,content:r.stringify(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n};if(e.alias){var l=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(t.classes,l)}a.hooks.run("wrap",t);var i=Object.keys(t.attributes).map((function(e){return e+'="'+(t.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+(i?" "+i:"")+">"+t.content+"</"+t.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,l=t.code,i=t.immediateClose;e.postMessage(a.highlight(l,a.languages[r],r)),i&&e.close()}),!1),a):a;var l=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return l&&(a.filename=l.src,a.manual||l.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),"undefined"!=typeof n&&(n.Prism=t)}).call(this,t(44))},1728:function(e,n,t){"use strict";function a(e){e.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.value.replace(/&amp;/,"&"))})),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:e.languages[t]};var l={};l[n]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,n),"i"),lookbehind:!0,greedy:!0,inside:r},e.languages.insertBefore("markup","cdata",l)}}),e.languages.xml=e.languages.extend("markup",{}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup}e.exports=a,a.displayName="markup",a.aliases=["xml","html","mathml","svg"]},1729:function(e,n,t){"use strict";function a(e){!function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+n.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(e)}e.exports=a,a.displayName="css",a.aliases=[]},1730:function(e,n,t){"use strict";function a(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/}}e.exports=a,a.displayName="clike",a.aliases=[]},1731:function(e,n,t){"use strict";function a(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}}}),e.languages.markup&&e.languages.markup.tag.addInlined("script","javascript"),e.languages.js=e.languages.javascript}e.exports=a,a.displayName="javascript",a.aliases=["js"]},1732:function(e,n,t){"use strict";function a(e){!function(e){var n=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join(""):""},a=function(n){for(var r=[],l=0;l<n.length;l++){var i=n[l],o=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===t(i.content[0].content[1])&&r.pop():"/>"===i.content[i.content.length-1].content||r.push({tagName:t(i.content[0].content[1]),openedBraces:0}):r.length>0&&"punctuation"===i.type&&"{"===i.content?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===i.type&&"}"===i.content?r[r.length-1].openedBraces--:o=!0),(o||"string"==typeof i)&&r.length>0&&0===r[r.length-1].openedBraces){var s=t(i);l<n.length-1&&("string"==typeof n[l+1]||"plain-text"===n[l+1].type)&&(s+=t(n[l+1]),n.splice(l+1,1)),l>0&&("string"==typeof n[l-1]||"plain-text"===n[l-1].type)&&(s=t(n[l-1])+s,n.splice(l-1,1),l--),n[l]=new e.Token("plain-text",s,null,s)}i.content&&"string"!=typeof i.content&&a(i.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)}))}(e)}e.exports=a,a.displayName="jsx",a.aliases=[]},835:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1701)),l=a(t(1704)),i=(0,r.default)(l.default,{});i.registerLanguage=function(e,n){return l.default.register(n)};var o=i;n.default=o},836:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1732)).default;n.default=r}}]);
//# sourceMappingURL=3-fb2b2f3fdc09143b8eed.js.map