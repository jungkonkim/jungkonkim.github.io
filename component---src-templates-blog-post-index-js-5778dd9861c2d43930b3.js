(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return _}));n(71),n(91),n(30),n(5),n(44),n(27),n(11);var o=n(0),r=n.n(o),a=n(60),i=n(150),s=n.n(i),u=n(305),c=n(70),l=n(238),f=n(73),d=n(237),p=n.n(d),m=n(310),h=n.n(m),y=(n(242),n(236)),b=n(17),v=n.n(b);function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.componentDidMount=function(){var e=document.querySelectorAll(".blog-post-content a"),t=Array.isArray(e),n=0;for(e=t?e:e[Symbol.iterator]();;){var o;if(t){if(n>=e.length)break;o=e[n++]}else{if((n=e.next()).done)break;o=n.value}o.target="_blank"}},i.render=function(){var e=this.props,t=e.data,n=e.location,o=e.pageContext,i=t.markdownRemark,d=i.id,m=i.frontmatter,b=i.html,g=i.excerpt,_=t.site.siteMetadata.title,E=m.title,O=m.tags,C=o.previous,S=o.next,I=[].concat(w(m.tags),w(m.keywords)).toString(),N=v.a.disqusShortname,j={identifier:d,title:_},k=O.map((function(e,t){return r.a.createElement(a.a,{to:"/tags/"+p.a.kebabCase(e),key:"tag-"+t},"#",e)}));return r.a.createElement(y.a,{location:n},r.a.createElement(s.a,{title:""+E,meta:[{name:"keywords",content:I},{name:"og:title",content:E},{name:"og:description",content:g}]}),r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("div",{className:"post-header"},r.a.createElement("h1",{className:"title"},""+E),r.a.createElement("div",{className:"date"},r.a.createElement(c.a,{icon:l.a,fixedWidth:!0}),m.date),r.a.createElement("div",{className:"tags"},k)),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:b}})),r.a.createElement("div",{className:"blog-post-nav"},C&&r.a.createElement("div",{className:"prev"},r.a.createElement("div",{className:"nav-wrap"},r.a.createElement("div",{className:"angle"},r.a.createElement(c.a,{icon:f.a,fixedWidth:!0})),r.a.createElement(a.a,{to:C.fields.slug,rel:"prev"},r.a.createElement("div",null,r.a.createElement("p",null,"Previous Post"),r.a.createElement("span",null,C.frontmatter.title))))),S&&r.a.createElement("div",{className:"next"},r.a.createElement("div",{className:"nav-wrap"},r.a.createElement(a.a,{to:S.fields.slug,rel:"next"},r.a.createElement("div",null,r.a.createElement("p",null,"Next Post"),r.a.createElement("span",null,S.frontmatter.title))),r.a.createElement("div",{className:"angle"},r.a.createElement(c.a,{icon:f.b,fixedWidth:!0})))))),v.a.googleAdsense?r.a.createElement("div",{className:"ad"},r.a.createElement(h.a.Google,{client:v.a.adsenseClient,slot:v.a.adsenseSlot,style:{display:"block"},format:"auto",responsive:"true"})):null,v.a.disqusShortname?r.a.createElement("div",{className:"comments"},r.a.createElement(u.DiscussionEmbed,{shortname:N,config:j})):null)},o}(r.a.Component);t.default=g;var _="1815311691"},304:function(e,t,n){"use strict";n(36),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,a=arguments,i=function(){o=null,n||e.apply(r,a)},s=n&&!o;window.clearTimeout(o),o=setTimeout(i,t),s&&e.apply(r,a)}}},305:function(e,t,n){"use strict";n(36),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(306),r=n(307),a=n(309);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},306:function(e,t,n){"use strict";n(117),n(43),n(36),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},s=n(304);var u=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(i.default.Component)},307:function(e,t,n){"use strict";n(308),n(30),n(42),n(5),n(117),n(43),n(36),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(i.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},308:function(e,t,n){"use strict";var o=n(6),r=n(37),a=n(52),i=n(119),s=n(74),u=n(8),c=n(92).f,l=n(118).f,f=n(18).f,d=n(93).trim,p=o.Number,m=p,h=p.prototype,y="Number"==a(n(75)(h)),b="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,a=(t=b?t.trim():d(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var i,u=t.slice(2),c=0,l=u.length;c<l;c++)if((i=u.charCodeAt(c))<48||i>r)return NaN;return parseInt(u,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(y?u((function(){h.valueOf.call(n)})):"Number"!=a(n))?i(new m(v(t)),n,p):v(t)};for(var w,g=n(15)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;g.length>_;_++)r(m,w=g[_])&&!r(p,w)&&f(p,w,l(m,w));p.prototype=h,h.constructor=p,n(20)(o,"Number",p)}},309:function(e,t,n){"use strict";n(117),n(43),n(36),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},s=n(304);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}(i.default.Component)},310:function(e,t,n){"use strict";n(36),Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(311)),r=a(n(312));function a(e){return e&&e.__esModule?e:{default:e}}var i={Google:o.default,Baidu:r.default};t.default=i},311:function(e,t,n){"use strict";n(117),n(43),n(36),Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n(0)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return r.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(r.default.Component);t.default=s,s.propTypes={className:a.default.string,style:a.default.object,client:a.default.string.isRequired,slot:a.default.string.isRequired,layout:a.default.string,layoutKey:a.default.string,format:a.default.string,responsive:a.default.string},s.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},312:function(e,t,n){"use strict";n(117),n(43),n(36),Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o};var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(i.default.Component);t.default=s}}]);