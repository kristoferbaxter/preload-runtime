(self.AMP=self.AMP||[]).push({n:"amp-install-serviceworker",v:"2008150009000",f:(function(AMP,_){
  var h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function l(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}l(this);"function"===typeof Symbol&&Symbol("x");var n;
  if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n;function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var v=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a){var b=Object.create(null);if(!a)return b;for(var c;c=v.exec(a);){var d=u(c[1],c[1]),f=c[2]?u(c[2].replace(/\+/g," "),c[2]):"";b[d]=f}return b};var x="";
  function y(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{b=w(a.location.originalHash||a.location.hash);var c=w(a.location.search);x||(x=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012008150009000");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2008150009000",rtvVersion:x};b=a.__AMP_MODE=b}return b};var z=self.AMP_CONFIG||{},A=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function B(a){if(!self.document||!self.document.head||self.location&&A.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
  var C={thirdParty:z.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:z.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof z.thirdPartyFrameRegex?new RegExp(z.thirdPartyFrameRegex):z.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:z.cdnUrl||B("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:A,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:z.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:z.betaErrorReportingUrl||
  "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:z.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:z.geoApiUrl||B("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function E(){if(!D.user)throw Error("failed to call initLogConstructor");return D.user}function F(a,b,c,d,f){E().assert(a,b,c,d,f,void 0,void 0,void 0,void 0,void 0,void 0)};var G=Object.prototype.hasOwnProperty;function H(a){return a||{}};H({c:!0,v:!0,a:!0,ad:!0,action:!0});function I(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};function J(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var f=a.AMP_CONFIG["allow-doc-opt-in"],g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
  if(g){var e=g.getAttribute("content").split(",");for(c=0;c<e.length;c++)-1!=f.indexOf(e[c])&&(b[e[c]]=!0)}}Object.assign(b,aa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=w(a.location.originalHash||a.location.hash);for(var k=0;k<c.length;k++){var m=a["e-"+c[k]];"1"==m&&(b[c[k]]=!0);"0"==m&&(b[c[k]]=!1)}}return b}
  function aa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(f){if(D.dev)a=D.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var K=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21066823","21066824"]}];function L(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;if(J(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(var f=0;f<K.length;f++){var g=K[f],e=g.experimentId;G.call(c.__AMP_EXPERIMENT_BRANCHES,e)||(g.isTrafficEligible&&g.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[e]&&J(c)[e]&&(g=g.branches,c.__AMP_EXPERIMENT_BRANCHES[e]=g[Math.floor(Math.random()*g.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[e]=null)}c="21066824"===(c.__AMP_EXPERIMENT_BRANCHES?
  c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else c=!1;var k=c;d&&!k?a=M(b,"url")?N(b,"url"):null:(a=O(a),a=P(a),a=M(a,"url")?N(a,"url"):null);return a}function Q(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return N(a,b)}function ba(a){var b=O(a);b=P(b);return N(b,"documentInfo")}function O(a){return a.nodeType?Q((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function P(a){a=O(a);return a.isSingleDoc()?a.win:a}
  function N(a,b){M(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function M(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
   https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
  function ca(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function da(a){return a.closest?a.closest("A"):ca(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"A"):!1})};var R;function ea(a,b){var c=fa();a.addEventListener("click",function(a){try{return b(a)}catch(f){throw self.__AMP_REPORT_ERROR(f),f;}},c?void 0:!1)}function fa(){if(void 0!==R)return R;R=!1;try{var a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return R};function S(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function T(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.B=null;a.j=Q(a.win,"platform").isSafari();return a}var U=AMP.BaseElement;T.prototype=h(U.prototype);T.prototype.constructor=T;if(t)t(T,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var W=Object.getOwnPropertyDescriptor(U,V);W&&Object.defineProperty(T,V,W)}else T[V]=U[V];T.C=U.prototype;
  T.prototype.buildCallback=function(){var a=this,b=this.win;if("serviceWorker"in b.navigator){var c=L(this.element),d=this.element.getAttribute("src");c.assertHttpsUrl(d,this.element);if(!c.isProxyOrigin(d)&&!c.isProxyOrigin(b.location.href)||this.j)c.parse(b.location.href).origin==c.parse(d).origin?X(this).then(function(){return ha(a.win,d,a.element)}):this.user().error("amp-install-serviceworker","Did not install ServiceWorker because it does not match the current origin: "+d);else{var f=this.element.getAttribute("data-iframe-src");
  if(f){c.assertHttpsUrl(f,this.element);var g=c.parse(f).origin,e=ba(this.element).get(),k=c.parse(e.sourceUrl),m=c.parse(e.canonicalUrl);F(g==k.origin||g==m.origin,"data-iframe-src (%s) should be a URL on the same origin as the source (%s) or canonical URL (%s) of the AMP-document.",g,k.origin,m.origin);this.h=f;X(this).then(function(){return ia(a)})}}(c.isProxyOrigin(d)||c.isProxyOrigin(b.location.href))&&this.j&&this.user().error("amp-install-serviceworker","Did not install ServiceWorker because of safari double keyring caching as it will not have any effect")}else ja(this)};
  function X(a){return Promise.all([a.loadPromise(a.win),a.getAmpDoc().whenFirstVisible()])}function ia(a){return a.mutateElement(function(){S(a.element);var b=a.win.document.createElement("iframe");b.setAttribute("sandbox","allow-same-origin allow-scripts");b.src=a.h;a.element.appendChild(b)})}
  function ja(a){if(a.getAmpDoc().isSingleDoc()){var b=a.getAmpDoc(),c=a.win,d=L(a.element),f=d.parse(c.location.href),g=a.element.getAttribute("data-no-service-worker-fallback-url-match"),e=a.element.getAttribute("data-no-service-worker-fallback-shell-url");if(g||e){F(g&&e,'Both, "%s" and "%s" must be specified for url-rewrite',"data-no-service-worker-fallback-url-match","data-no-service-worker-fallback-shell-url");e=I(e);try{var k=new RegExp(g)}catch(m){throw E().createError('Invalid "data-no-service-worker-fallback-url-match" expression',
  m);}F(d.getSourceOrigin(f)==d.parse(e).origin,'Shell source origin "%s" must be the same as source origin "%s"',e,f.href);a.B=new Y(b,k,e,a.element);d.isSecure(e)&&ka(a,e)}}}function ka(a,b){X(a).then(function(){a.mutateElement(function(){return la(a,b)})})}
  function la(a,b){var c=a.win.document.createElement("iframe");c.id="i-amphtml-shell-preload";c.setAttribute("src",b+"#preload");S(c);c.setAttribute("sandbox","allow-scripts allow-same-origin");a.loadPromise(c).then(function(){c.parentElement&&c.parentElement.removeChild(c)});a.element.appendChild(c)}function Y(a,b,c,d){this.win=a.win;this.A=b;this.w=c;this.m=L(d);this.l=this.m.parse(c);a=a.getRootNode();b=this.o.bind(this);ea(a,b)}
  Y.prototype.o=function(a){if(!a.defaultPrevented&&(a=da(a.target))&&a.href){var b=this.m.parse(a.href);if(b.origin==this.l.origin&&b.pathname!=this.l.pathname&&this.A.test(b.href)&&!a.getAttribute("i-amphtml-orig-href")){var c=this.win;I(b.href)!=I(c.location.href)&&(a.setAttribute("i-amphtml-orig-href",a.href),a.href=this.w+"#href="+encodeURIComponent(""+b.pathname+b.search+b.hash))}}};
  function ha(a,b,c){var d={};c.hasAttribute("data-scope")&&(d.scope=c.getAttribute("data-scope"));return a.navigator.serviceWorker.register(b,d).then(function(b){y().development&&E().info("amp-install-serviceworker","ServiceWorker registration successful with scope: ",b.scope);var d=b.installing;d?d.addEventListener("statechange",function(d){"activated"===d.target.state&&Z(b,a,c)}):b.active&&Z(b,a,c);return b},function(a){E().error("amp-install-serviceworker","ServiceWorker registration failed:",a)})}
  function Z(a,b,c){ma(b,a);c.hasAttribute("data-prefetch")&&na(a,b)}function ma(a,b){if("performance"in a){var c=a.performance.getEntriesByType("resource").filter(function(a){var b;if(b="script"===a.initiatorType)a=a.name,b=C.cdn,b=b.length>a.length?!1:0==a.lastIndexOf(b,0);return b}).map(function(a){return a.name}),d=b.active;d.postMessage&&d.postMessage(JSON.stringify(H({type:"AMP__FIRST-VISIT-CACHING",payload:c})))}}
  function na(a,b){var c=b.document,d=[].map.call(c.querySelectorAll("a[data-rel=prefetch]"),function(a){return a.href});oa(c)?d.forEach(function(a){var b=c.createElement("link");b.setAttribute("rel","prefetch");b.setAttribute("href",a);c.head.appendChild(b)}):(a=a.active,a.postMessage&&a.postMessage(JSON.stringify(H({type:"AMP__LINK-PREFETCH",payload:d}))))}function oa(a){var b=a.createElement("link");return b.relList&&b.relList.supports?b.relList.supports("prefetch"):!1}
  (function(a){a.registerElement("amp-install-serviceworker",T)})(self.AMP);
  })});
  
  //# sourceMappingURL=amp-install-serviceworker-0.1.js.map