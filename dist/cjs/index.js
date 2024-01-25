"use strict";function e(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t.default=e,t}var t,r=require("prop-types"),n=require("react"),o=require("@web3-react/core"),a=(t=require("jsbi"))&&"object"==typeof t&&"default"in t?t.default:t;function i(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(void 0)}))}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,r){return(h=f()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&p(o,r.prototype),o}).apply(null,arguments)}function m(e){var t="function"==typeof Map?new Map:void 0;return(m=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,e)})(e)}var d,v=(function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=Object.create((t&&t.prototype instanceof p?t:p).prototype),a=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=g(i,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function p(){}function f(){}function h(){}var m={};m[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(N([])));v&&v!==t&&r.call(v,o)&&(m=v);var y=h.prototype=p.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,u){var c=s(e[o],e,a);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,u)}))}u(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=y.constructor=h,h.constructor=f,f.displayName=u(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),u(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}(d={exports:{}}),d.exports),y=function(e){function t(t){for(var r,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).name="ChainUnsupportedError",r.message=t,r}return s(t,e),t}(m(Error)),w=function(e){function t(t){for(var r,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).name="ChainUnknownError",r.message=t,r}return s(t,e),t}(m(Error)),b=function(e){function t(t){for(var r,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).name="ConnectorUnsupportedError",r.message="Unsupported connector: "+t+".",r}return s(t,e),t}(m(Error)),g=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).name="ConnectionRejectedError",t.message="The activation has been rejected by the provider.",t}return s(t,e),t}(m(Error)),x=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).name="ConnectorConfigError",t}return s(t,e),t}(m(Error));function C(){return k.apply(this,arguments)}function k(){return(k=u(v.mark((function t(){var r;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/fortmatic-connector")))}));case 2:return r=t.sent.FortmaticConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.chainId,n=e.apiKey;if(!n)throw new x("The Fortmatic connector requires apiKey to be set.");return new r({apiKey:n,chainId:t})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return E.apply(this,arguments)}function E(){return(E=u(v.mark((function t(){var r,n,o;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/frame-connector")))}));case 2:return n=(r=t.sent).FrameConnector,o=r.UserRejectedRequestError,t.abrupt("return",{web3ReactConnector:function(e){return new n({supportedChainIds:[e.chainId]})},handleActivationError:function(e){return e instanceof o?new g:e.message.startsWith("JSON.parse")?new Error("There seems to be an issue when trying to connect to Frame."):null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return A.apply(this,arguments)}function A(){return(A=u(v.mark((function t(){var r,n,o;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/injected-connector")))}));case 2:return n=(r=t.sent).InjectedConnector,o=r.UserRejectedRequestError,t.abrupt("return",{web3ReactConnector:function(e){return new n({supportedChainIds:e.chainId})},handleActivationError:function(e){return e instanceof o?new g:null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return L.apply(this,arguments)}function L(){return(L=u(v.mark((function t(){var r;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/portis-connector")))}));case 2:return r=t.sent.PortisConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.chainId,n=e.dAppId;if(!n)throw new x("The Portis connector requires dAppId to be set.");return new r({dAppId:n,networks:t})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return O.apply(this,arguments)}function O(){return(O=u(v.mark((function t(){var r,n,o;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@aragon/provided-connector")))}));case 2:return n=(r=t.sent).ProvidedConnector,o=r.UserRejectedRequestError,t.abrupt("return",{web3ReactConnector:function(e){return new n({provider:e.provider,supportedChainIds:e.chainId})},handleActivationError:function(e){return e instanceof o?new g:null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return P.apply(this,arguments)}function P(){return(P=u(v.mark((function t(){var r;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/torus-connector")))}));case 2:return r=t.sent.TorusConnector,t.abrupt("return",{web3ReactConnector:function(e){return new r({chainId:e.chainId,constructorOptions:e.constructorOptions,initOptions:e.initOptions})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return M.apply(this,arguments)}function M(){return(M=u(v.mark((function t(){var r,n,o;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/walletconnect-connector")))}));case 2:return n=(r=t.sent).UserRejectedRequestError,o=r.WalletConnectConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.rpc,r=e.bridge,n=e.pollingInterval;if(!t)throw new x("The WalletConnect connector requires rpcUrl to be set.");return Object.values(t).forEach((function(e){if(!/^https?:\/\//.test(e))throw new x("The WalletConnect connector requires rpcUrl to be an HTTP URL.")})),new o({bridge:r,pollingInterval:n,qrcode:!0,rpc:t})},handleActivationError:function(e){return e instanceof n?new g:null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return S.apply(this,arguments)}function S(){return(S=u(v.mark((function t(){var r;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/walletlink-connector")))}));case 2:return r=t.sent.WalletLinkConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.url,n=e.appName,o=e.appLogoUrl;if(1!==e.chainId)throw new x("The WalletLink connector requires chainId to be 1.");if(!/^https?:\/\//.test(t))throw new x("The WalletLink connector requires url to be an HTTP URL.");return new r({url:t,appName:n,appLogoUrl:o})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){return B.apply(this,arguments)}function B(){return(B=u(v.mark((function t(){var r;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/ledger-connector")))}));case 2:return r=t.sent.LedgerConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.chainId,n=e.url;if(!n)throw new x("The Ledger connector requires url to be set.");return new r({url:n,chainId:t,pollingInterval:12e3,baseDerivationPath:"m/44'/60'/0'/0"})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var F={name:"Ether",symbol:"ETH",decimals:18},W={name:"Matic Token",symbol:"MATIC",decimals:18},D={name:"Avax",symbol:"AVAX",decimals:9},G={name:"ONE Token",symbol:"ONE",decimals:18},K={name:"Binance Token",symbol:"BNB",decimals:18},H={name:"Thunder Token",symbol:"TT",decimals:18},V={name:"Celo",symbol:"CELO",decimals:18},Y={name:"METIS",symbol:"METIS",decimals:18},J=new Map([[1,{id:1,nativeCurrency:F,type:"main",fullName:"Ethereum Mainnet",shortName:"Ethereum",explorerUrl:"https://etherscan.io",testnet:!1}],[3,{id:3,nativeCurrency:F,type:"ropsten",fullName:"Ropsten Testnet",shortName:"Ropsten",explorerUrl:"https://ropsten.etherscan.io",testnet:!0}],[4,{id:4,nativeCurrency:F,type:"rinkeby",fullName:"Rinkeby Testnet",shortName:"Rinkeby",explorerUrl:"https://rinkeby.etherscan.io",testnet:!0}],[5,{id:5,nativeCurrency:F,type:"goerli",fullName:"Goerli Testnet",shortName:"Goerli",explorerUrl:"https://goerli.etherscan.io",testnet:!0}],[42,{id:42,nativeCurrency:F,type:"kovan",fullName:"Kovan Testnet",shortName:"Kovan",explorerUrl:"https://kovan.etherscan.io",testnet:!0}],[43112,{id:43112,nativeCurrency:D,type:"avalocal",shortName:"Avalanche Local",fullName:"Avalanche Local",testnet:!0}],[43113,{id:43113,nativeCurrency:D,type:"fuji",fullName:"Avalanche Fuji",shortName:"Fuji",explorerUrl:"https://testnet.snowtrace.io/",testnet:!0}],[43114,{id:43114,nativeCurrency:D,type:"avalanche",fullName:"Avalanche Mainnet",shortName:"Avalanche",explorerUrl:"https://snowtrace.io/",testnet:!1}],[100,{id:100,nativeCurrency:{name:"xDAI",symbol:"xDAI",decimals:18},type:"xdai",fullName:"xDAI",shortName:"xDAI",explorerUrl:"https://blockscout.com/xdai/mainnet/",testnet:!1}],[137,{id:137,nativeCurrency:W,type:"matic",fullName:"Polygon Mainnet",shortName:"Polygon",explorerUrl:"https://polygonscan.com",testnet:!1}],[80001,{id:80001,nativeCurrency:W,type:"mumbai",fullName:"Mumbai Testnet",shortName:"Mumbai",explorerUrl:"https://mumbai.polygonscan.com",testnet:!0}],[250,{id:250,nativeCurrency:{name:"FTM",symbol:"FTM",decimals:18},type:"fantom",fullName:"Fantom Opera Mainnet",shortName:"FTM",explorerUrl:"https://ftmscan.com/",testnet:!1}],[16666e5,{id:16666e5,nativeCurrency:G,type:"harmony",fullName:"Harmony ONE",shortName:"Harmony",explorerUrl:"https://explorer.harmony.one/",testnet:!1}],[16667e5,{id:16667e5,nativeCurrency:G,type:"harmonyTest",fullName:"Harmony ONE Testnet",shortName:"Harmony Testnet",explorerUrl:"https://explorer.testnet.harmony.one/",testnet:!0}],[56,{id:56,nativeCurrency:K,type:"bsc",fullName:"Binance Smart Chain",shortName:"BSC",explorerUrl:"https://bscscan.com/",testnet:!1}],[97,{id:97,nativeCurrency:K,type:"bscTest",fullName:"Binance Smart Chain Testnet",shortName:"BSC Testnet",explorerUrl:"https://testnet.bscscan.com/",testnet:!0}],[108,{id:108,nativeCurrency:H,type:"thundercore",fullName:"ThunderCore Mainnet",shortName:"ThunderCore",explorerUrl:"https://scan.thundercore.com/",testnet:!1}],[18,{id:18,nativeCurrency:H,type:"thundercoreTest",fullName:"ThunderCore Testnet",shortName:"ThunderCore Testnet",explorerUrl:"https://scan-testnet.thundercore.com/",testnet:!0}],[421611,{id:421611,nativeCurrency:F,type:"arbitrumTest",fullName:"Arbitrum Testnet",shortName:"Arbitrum Testnet",explorerUrl:"https://testnet.arbiscan.io/",testnet:!0}],[42161,{id:42161,nativeCurrency:F,type:"arbitrum",fullName:"Arbitrum Mainnet",shortName:"Arbitrum",explorerUrl:"https://arbiscan.io/",testnet:!1}],[42220,{id:42220,nativeCurrency:V,type:"celo",fullName:"Celo (Mainnet)",shortName:"Celo",explorerUrl:"https://explorer.celo.org/",testnet:!1}],[44787,{id:44787,nativeCurrency:V,type:"celoTest",fullName:"Celo (Alfajores Testnet)",shortName:"Alfajores",explorerUrl:"https://alfajores-blockscout.celo-testnet.org/",testnet:!0}],[588,{id:588,nativeCurrency:Y,type:"stardust",fullName:"Metis Stardust Testnet",shortName:"Stardust",explorerUrl:"https://stardust-explorer.metis.io/",testnet:!0}],[1088,{id:1088,nativeCurrency:Y,type:"andromeda",fullName:"Metis Andromeda",shortName:"Andromeda",explorerUrl:"https://andromeda-explorer.metis.io/",testnet:!1}],[1313161555,{id:1313161555,nativeCurrency:F,type:"aurora",fullName:"Aurora Testnet",shortName:"AuroraTest",explorerUrl:"https://explorer.testnet.aurora.dev/",testnet:!0}],[1313161554,{id:1313161554,nativeCurrency:F,type:"aurora",fullName:"Aurora Mainnet",shortName:"Aurora",explorerUrl:"https://explorer.mainnet.aurora.dev/",testnet:!1}],[1287,{id:1287,nativeCurrency:{name:"DEV",symbol:"DEV",decimals:18},type:"moonbase",fullName:"moonbase",shortName:"Moonbase Alphanet",explorerUrl:"https://moonbase.moonscan.io/",testnet:!0}],[1285,{id:1285,nativeCurrency:{name:"Moonriver",symbol:"MOVR",decimals:18},type:"moonriver",fullName:"Moonriver",shortName:"Moonriver",explorerUrl:"https://moonriver.moonscan.io/",testnet:!1}],[1284,{id:1284,nativeCurrency:{name:"Glimmer",symbol:"GLMR",decimals:18},type:"moonbeam",fullName:"Moonbeam",shortName:"Moonbeam",explorerUrl:"https://moonbeam.moonscan.io/",testnet:!1}],[1337,{id:1337,type:"local",testnet:!0}],[5777,{id:5777,type:"ganache",testnet:!0}],[1102,{id:1102,type:"miso",testnet:!0}]]);function X(e){var t=J.get(e);if(!t)throw new w("Unknown chain id: "+e);return t}function z(){return Array.from(J.keys())}var Q={__proto__:null,isKnownChain:function(e){return J.has(e)},getChainInformation:X,getKnownChainsIds:z,getKnownChainInformation:function(){return Array.from(J.values())},getDefaultChainId:function(){return 1}},Z=new Map([["block","block"],["transaction","tx"],["address","address"],["token","token"]]);function $(e){if(function(e){return"object"==typeof e&&null!==e&&"jsonrpc"in e}(e)){if(e.error)throw new Error(e.error);return e.result||null}return e||null}function ee(e,t,r){return te.apply(this,arguments)}function te(){return(te=u(v.mark((function e(t,r,n){return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.request){e.next=2;break}return e.abrupt("return",t.request({method:r,params:n}).then($));case 2:if(!t.sendAsync||!t.selectedAddress){e.next=4;break}return e.abrupt("return",new Promise((function(e,o){t.sendAsync({method:r,params:n,from:t.selectedAddress,jsonrpc:"2.0",id:0},(function(t,r){t?o(t):e(r)}))})).then($));case 4:if(!t.send){e.next=6;break}return e.abrupt("return",t.send(r,n).then($));case 6:throw new Error("The Ethereum provider doesn’t seem to provide a request method.");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=u(v.mark((function e(t,r){return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(t,"eth_getCode",[r]);case 3:return e.abrupt("return","0x"!==e.sent);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ne(e,t){return oe.apply(this,arguments)}function oe(){return(oe=u(v.mark((function e(t,r){return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee(t,"eth_getBalance",[r,"latest"]));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){return(ae=u(v.mark((function e(t){return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee(t,"eth_blockNumber",[]));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){var r,n=!1,o=function(){var e=u(v.mark((function e(a,i){var u;return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:u=e.sent,n||(i(u),r=setTimeout(o.bind(null,a,i),t));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return function(){var t=e.apply(void 0,arguments),a=t.request,i=t.onResult;return n=!1,o(a,i),function(){n=!0,clearTimeout(r)}}}var ue=function(e){var t;null==(t=localStorage)||t.setItem("LAST_ACTIVE_ACCOUNT",e)},ce=function(){var e;return null==(e=localStorage)?void 0:e.getItem("LAST_ACTIVE_ACCOUNT")},se=function(e){var t;null==(t=localStorage)||t.setItem("LAST_WALLET_CONNECTOR",e)};const le=require("./Cipher.png"),pe=require("./Fortmatic.svg"),fe=require("./Frame.png"),he=require("./Metamask.png"),me=require("./Portis.svg"),de=require("./Status.png"),ve=require("./wallet.svg"),ye=require("./walletconnect.png");var we=new Map([{id:"frame",name:"Frame",type:"Desktop",image:fe,strings:{"your Ethereum wallet":"Frame"}},{id:"metamask",name:"Metamask",type:"Desktop",image:he,strings:{"your Ethereum wallet":"Metamask"}},{id:"status",name:"Status",type:"Mobile",image:de,strings:{"your Ethereum wallet":"Status"}},{id:"cipher",name:"Cipher",type:"Mobile",image:le,strings:{"your Ethereum wallet":"Cipher"}},{id:"fortmatic",name:"Fortmatic",type:"Any",image:pe,strings:{"your Ethereum wallet":"Fortmatic"}},{id:"portis",name:"Portis",type:"Any",image:me,strings:{"your Ethereum wallet":"Portis"}},{id:"walletconnect",name:"WalletConnect",type:"Any",image:ye,strings:{"your Ethereum wallet":"WalletConnect"}},{id:"unknown",name:"Unknown",type:"Desktop",image:ve,strings:{"your Ethereum wallet":"your wallet"}}].map((function(e){return[e.id,e]})));function be(e){return we.get(e)}function ge(e){return"injected"===e||"provided"===e?be((t=window.ethereum)&&"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0?"frame":t&&t.isMetaMask?"metamask":"unknown")||be("unknown"):be(e)||be("unknown");var t}var xe=n.createContext(null);function Ce(e){var t=e.children,r=e.connectors,i=e.autoConnect,s=e.pollBalanceInterval,l=e.pollBlockNumberInterval;if(null!==n.useContext(xe))throw new Error("<UseWalletProvider /> has already been declared.");var p=n.useState(null),f=p[0],h=p[1],m=n.useState(null),d=m[0],w=m[1],g=n.useState(null),x=g[0],k=g[1],E=n.useState("disconnected"),A=E[0],L=E[1],O=o.useWeb3React(),P=n.useRef(0),M=O.account,S=O.chainId,B=O.library,F=O.error,W=function(e){var t=e.account,r=e.ethereum,o=e.pollBalanceInterval,i=n.useState("-1"),c=i[0],s=i[1];return n.useEffect((function(){if(t&&r){var e=!1,n=ie((function(t,r,n){var o="-1";return{request:function(){return u(v.mark((function e(){return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(r,t).then((function(e){return e?a.BigInt(e).toString():"-1"})).catch((function(){return"-1"})));case 1:case"end":return e.stop()}}),e)})))()},onResult:function(t){e||t===o||(o=t,n(t))}}}),o)(t,r,s);return function(){e=!0,n(),s("-1")}}}),[t,r,o]),c}({account:M,ethereum:B,pollBalanceInterval:s}),D=function(e){var t=e.ethereum,r=e.pollBlockNumberInterval,o=n.useRef(null),i=n.useRef(new Set),u=n.useCallback((function(e){i.current.has(e)||(e(o.current),i.current.add(e))}),[]),c=n.useCallback((function(e){i.current.delete(e)}),[]),s=n.useCallback((function(e){o.current!==e&&(o.current=e,i.current.forEach((function(t){return t(e)})))}),[]);return n.useEffect((function(){if(t){var e=!1,n=ie((function(){return{request:function(){return function(e){return ae.apply(this,arguments)}(t)},onResult:function(t){e||s(null===t?null:a.BigInt(t).toString())}}}),r)();return function(){e=!0,n()}}s(null)}),[t,r,s]),{addBlockNumberListener:u,removeBlockNumberListener:c}}({ethereum:B,pollBlockNumberInterval:l}),G=D.addBlockNumberListener,K=D.removeBlockNumberListener,H=n.useMemo((function(){return function(e){void 0===e&&(e={});for(var t={fortmatic:[C,null],frame:[N,null],injected:[T,null],portis:[I,null],provided:[U,null],torus:[j,null],walletconnect:[R,null],walletlink:[_,null],ledger:[q,null]},r=0,n=Object.entries(e);r<n.length;r++){var o=n[r],a=o[0],i=o[1];"function"!=typeof i?t[a]&&(t[a][1]=i):t[a]=[i,null]}return t}(r)}),[r]),V=n.useMemo((function(){return S||1}),[S]),Y=n.useCallback((function(){var e;O.active&&O.deactivate(),null==(e=localStorage)||e.removeItem("LAST_ACTIVE_ACCOUNT"),h(null),w(null),L("disconnected")}),[O]);n.useMemo((function(){F instanceof o.UnsupportedChainIdError&&(L("error"),w(new y(F.message)))}),[F]);var J=n.useCallback(function(){var e=u(v.mark((function e(t){var r,n,a,i,u,s,l,p;return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&(t="injected"),r=++P.current,Y(),r===P.current){e.next=5;break}return e.abrupt("return");case 5:if(H[t]){e.next=9;break}return L("error"),w(new b(t)),e.abrupt("return");case 9:return L("connecting"),a=(n=H[t]||[])[0],i=n[1],e.next=13,null==a?void 0:a();case 13:if(s=null==(u=e.sent)||null==u.web3ReactConnector?void 0:u.web3ReactConnector(c({},i||{}))){e.next=19;break}return L("error"),w(new b(t)),e.abrupt("return");case 19:return e.prev=19,h(t),e.next=23,O.activate(s,void 0,!0);case 23:if(se(t),"injected"!==t){e.next=30;break}return e.next=27,s.getAccount();case 27:(l=e.sent)&&ue(l),s.getProvider().then((function(e){e.on("accountsChanged",(function(e){ue(e[0])}))}));case 30:L("connected"),e.next=48;break;case 33:if(e.prev=33,e.t0=e.catch(19),r===P.current){e.next=37;break}return e.abrupt("return");case 37:if(h(null),L("error"),!(e.t0 instanceof o.UnsupportedChainIdError)){e.next=42;break}return w(new y(e.t0.message)),e.abrupt("return");case 42:if(!u.handleActivationError){e.next=47;break}if(!(p=u.handleActivationError(e.t0))){e.next=47;break}return w(p),e.abrupt("return");case 47:w(e.t0);case 48:case"end":return e.stop()}}),e,null,[[19,33]])})));return function(t){return e.apply(this,arguments)}}(),[H,Y,O]);n.useEffect((function(){if(i){var e,t=null==(e=localStorage)?void 0:e.getItem("LAST_WALLET_CONNECTOR");ce()&&"injected"===t&&Object.keys(H).some((function(e){return"injected"===e}))&&J()}}),[]),n.useEffect((function(){if(M&&B){var e=!1;return k(null),function(e,t){return re.apply(this,arguments)}(B,M).then((function(t){e||(L("connected"),k(t?"contract":"normal"))})),function(){e=!0,L("disconnected"),k(null)}}}),[M,B]);var z=n.useMemo((function(){return{_web3ReactContext:O,account:M||null,balance:W,chainId:V,connect:J,connector:f,connectors:H,error:d,ethereum:B,isConnected:function(){return"connected"===A},networkName:X(V).type,providerInfo:ge(f||"unknown"),reset:Y,status:A,type:x}}),[M,W,V,J,f,H,d,B,x,Y,A,O]);return n.createElement(xe.Provider,{value:{addBlockNumberListener:G,pollBalanceInterval:s,pollBlockNumberInterval:l,removeBlockNumberListener:K,wallet:z}},t)}function ke(e){return n.createElement(o.Web3ReactProvider,{getLibrary:function(e){return e}},n.createElement(Ce,Object.assign({},e)))}Ce.propTypes={children:r.node,connectors:r.objectOf(r.object),autoConnect:r.bool,pollBalanceInterval:r.number,pollBlockNumberInterval:r.number},Ce.defaultProps={connectors:{},autoConnect:!1,pollBalanceInterval:2e3,pollBlockNumberInterval:5e3},ke.propTypes=Ce.propTypes,ke.defaultProps=Ce.defaultProps,exports.ChainUnsupportedError=y,exports.ConnectionRejectedError=g,exports.ConnectorUnsupportedError=b,exports.UseWalletProvider=ke,exports.blockExplorerUrl=function(e,t,r){if(!z().includes(r))return"";if(!Z.has(e))throw new Error("type not supported.");return X(r).explorerUrl+"/"+Z.get(e)+"/"+t},exports.chains=Q,exports.getLastActiveAccount=ce,exports.getProviderFromUseWalletId=ge,exports.getProviderString=function(e,t){void 0===t&&(t="unknown");var r=be(t);return r&&r.strings[e]||e},exports.useWallet=function(){var e=n.useContext(xe);if(null===e)throw new Error("useWallet() can only be used inside of <UseWalletProvider />, please declare it at a higher level.");var t=function(){var e=n.useContext(xe),t=n.useState(null),r=t[0],o=t[1],a=n.useRef(!1),i=n.useCallback((function(){return null===e?null:(a.current=!0,e.addBlockNumberListener(o),r)}),[e,r]);return n.useEffect((function(){if(a.current&&null!==e)return e.addBlockNumberListener(o),function(){e.removeBlockNumberListener(o)}}),[a,e]),i}(),r=e.wallet;return n.useMemo((function(){return c({},r,{getBlockNumber:t})}),[t,r])};
//# sourceMappingURL=index.js.map
