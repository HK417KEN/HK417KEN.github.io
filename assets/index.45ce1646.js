var t=Object.defineProperty,e=(e,n,s)=>(((e,n,s)=>{n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s})(e,"symbol"!=typeof n?n+"":n,s),s);import{D as n,Q as s}from"./petite-vue.es.dbdd9865.js";import{d as i,T as a,s as r}from"./Toast.49efcf65.js";import"./globalNotFoundImage.5768a9d5.js";
/*!
  * petite-vue-i18n-lite v1.0.2
  * (c) 2021 Erik Pham & niu tech
  * @license MIT
  */
const o=["__proto__","prototype","constructor"];function l(t){const e=t.split("."),n=[];for(let s=0;s<e.length;s++){let t=e[s];for(;"\\"===t[t.length-1]&&void 0!==e[s+1];)t=t.slice(0,-1)+".",t+=e[++s];n.push(t)}return function(t){return!t.some((t=>-1!==o.indexOf(t)))}(n)?n:[]}function c(t,e){if(!function(t){const e=typeof t;return null!==t&&("object"===e||"function"===e)}(t))return"";const n=l(e);if(0===n.length)return"";let s=Object.assign({},t);for(let i=0;i<n.length;i++){if("string"==typeof s[n[i]])return s[n[i]];if(s=s[n[i]],null==s){if(i!==n.length-1)return"";break}}return""}class u{constructor(t,s){e(this,"i18n",{}),e(this,"config",{}),this.i18n=t instanceof n?t:n(t||{}),this.config=s instanceof n?s:n(s||{}),this.addI18nExtend(),this.setLocale()}static navigatorToCustomer(t=null){t||(t=navigator.language),t=t.toLowerCase().split("-").reverse();for(const e of t)switch(e){case"cn":case"zh":return"cn";case"us":case"en":return"en";case"jp":case"ja":return"ja"}return this.default}addI18nExtend(){this.i18n.et=(t,e,n=!0)=>{if("object"==typeof t&&Array.isArray(t)){let s="",i="";for(let a of t)""===a.trim()?s+=a:(i=this.i18n.t(a,e),s+=n&&i===t?"":i);return s}{let s=this.i18n.t(t,e);return n&&s===t?"":s}},this.i18n.d=(t,e,n)=>new Date(t.replace(" ","Z")).toLocaleString()}getI18N(){return this.i18n}getLocale(){return this.config.current||this.setLocale(),this.config.current}static getLocaleStatic(){return i.hasItem("lang")?i.getItem("lang"):this.navigatorToCustomer()}setLocale(t=null){return t||(t=this.constructor.getLocaleStatic()),("zh"===t.toLowerCase()||"cn"===t.toLowerCase()||"zh-"===t.substring(0,3))&&(t="cn"),("en"===t.toLowerCase()||"us"===t.toLowerCase()||"en-"===t.substring(0,3))&&(t="en"),("ja"===t.toLowerCase()||"jp"===t.toLowerCase()||"ja-"===t.substring(0,3))&&(t="ja"),this.config.current=t,i.setItem("lang",t),this.i18n.changeLocale(t),this}}e(u,"default","en");function h(t){for(let e=0;e<5&&!t.classList.contains("md-btn-checkbox");e++)t=t.parentElement;return t}function d(t=null,e=null,n=null){if(!(t instanceof Event&&t.target.classList.contains("md-btn-event-disabled"))&&(null===e&&(e=this),e=h(e))){let t=null===n?e.classList.contains("md-btn-checked"):!n,s=e.parentElement;for(let e=0;e<5&&!s.classList.contains("md-card");e++)s=s.parentElement;s.classList.contains("md-card")||(s=null),t?(e.classList.remove("md-btn-checked"),s&&s.classList.remove("md-btn-checkbox-outside-border")):(e.classList.add("md-btn-checked"),s&&s.classList.add("md-btn-checkbox-outside-border"))}}var m=new class{init(){setTimeout((()=>{document.querySelectorAll(".md-btn-checkbox").forEach((function(t,e,n){d.bind(t),t.removeEventListener("click",d,!0),t.addEventListener("click",d,!0)}))}),0)}on(t){d(null,t,!0)}off(t){d(null,t,!1)}isOn(t){return(t=h(t)).classList.contains("md-btn-checked")}isOff(t){return!this.isOn(t)}},g=new class{constructor(t=null){e(this,"name","expansion"),null!==t&&(this.name=t)}getEl(){return document.querySelector("."+this.name)}removeAuto(){this.getEl().classList.remove(this.name+"-auto")}isAuto(){return this.getEl().classList.contains(this.name+"-auto")}getActEl(t="yes"){return document.querySelector("."+this.name+"-act-"+t)}expansion(t=!0){this.getEl().classList.remove(this.name+"-no"),this.getEl().classList.add(this.name+"-yes"),"none"===this.getActEl("no").style.display&&(this.getActEl("no").style.display=null,this.getActEl("yes").style.display="none"),t&&this.isAuto()&&this.removeAuto()}contraction(t=!0){this.getEl().classList.remove(this.name+"-yes"),this.getEl().classList.add(this.name+"-no"),"none"===this.getActEl("yes").style.display&&(this.getActEl("yes").style.display=null,this.getActEl("no").style.display="none"),t&&this.isAuto()&&this.removeAuto()}isExpansion(){return this.getEl().classList.contains(this.name+"-yes")}isContraction(){return!this.isExpansion()}};let p=new a;var f=new class{constructor(){e(this,"shoppingCart",'<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>\n</svg>'),e(this,"chevronDown",'<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>\n</svg>'),e(this,"chevronUp",'<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>\n</svg>')}};function y(t,e="md-card-group-root"){for(let n=0;n<5&&!t.classList.contains(e);n++)t=t.parentElement;if(!t.classList.contains(e))throw new Error("Root element not found!");return t}function E(t,e=null,n=!0,s="md-card-group",i="md-card-group-root"){t instanceof Event&&(t=t.target);let a=null,r=y(t,i);if(t.classList.contains(s)||(t=y(t,s)),null===e){if(t.classList.forEach((function(t){t.startsWith(s)&&t!==s&&(a=Number(t.substring(s.length+1)))})),null===a)throw new Error("Card group number not found!");e=a+(n?1:-1)}let o=r.querySelector("."+s+"-"+e);o&&function(t,e){t.style.display="none",e.style.display=null}(t,o)}var w=Object.freeze(Object.defineProperty({__proto__:null,next:function(t,e=null){return E(t,e)},previous:function(t,e=null){return E(t,e,!1)},core:E},Symbol.toStringTag,{value:"Module"}));function _(t=null,e=null){"string"==typeof t&&(t=document.querySelector(t)),t instanceof Event&&"object"==typeof t.target&&(t=t.target),null===t&&(t=this);for(let n=0;n<5&&!t.classList.contains("pop-up");n++)t=t.parentElement;null===e&&(e=!t.classList.contains("pop-up-show")),e?(t.classList.add("pop-up-show"),document.body.classList.add("pop-up-fullscreen-on-body")):(t.classList.remove("pop-up-show"),document.body.classList.remove("pop-up-fullscreen-on-body"))}var b=Object.freeze(Object.defineProperty({__proto__:null,core:_,show:function(t){_(t,!0)},hide:function(t){_(t,!1)}},Symbol.toStringTag,{value:"Module"}));window.toTop={onload:null};let L=new u(n(function(t){const e=Object.assign({locale:"en",fallbackLocale:"en",messages:{}},t),n=e.locale,s=e.messages;return{t(t,n){if(!t)return"";const i="string"==typeof n&&n?n:this.current;let a=c(s[i],t)||c(s[e.fallbackLocale],t);if(n&&"string"!=typeof n){const t=function(t,e){if(Array.isArray(e)){const n={},s=[...t.matchAll(/{(.+?)}/g)];return s&&s.forEach(((t,s)=>{e[s]&&(n[t[1]]=e[s])})),n}return e}(a,n);(function(t){return!(Array.isArray(t)?t.length:Object.keys(t).length)})(t)||(a=function(t,e){for(const n in e)t=t.replace(`{${n}}`,String(e[n]));return t}(a,t))}return a||t},current:n,options:t||{},changeLocale(t){this.current=t},setLocaleMessage(t,e){s[t]=Object.assign({},s[t]||{},e)},getLocaleMessage:t=>s[t]||{}}}({locale:u.default,fallbackLocale:"en",messages:{en:{__BETWEEN_EM_SYMBOL__:"&nbsp;",jpy:"JPY","(":"(",")":")","float:":"float:",Select:"Select",Inspect:"Inspect","Inspect in Game...":"Inspect in Game...","trade at: ":"trade at: {0}","trade now!":"Trade now!",Any:"Any","Not Painted":"Not Painted","Factory New":"Factory New","Minimal Wear":"Minimal Wear","Field-Tested":"Field-Tested","Well-Worn":"Well-Worn","Battle-Scarred":"Battle-Scarred",Send:"Send",Email:"Email","Steam trade url":"Steam trade url","leave a message...":"leave a message...",Rule:"Rule",Next:"Next",Back:"Back",Captcha:"Captcha"},cn:{__BETWEEN_EM_SYMBOL__:"__BETWEEN_EM_SYMBOL__",test:"测试",jpy:"日元","(":"（",")":"）","float:":"磨损：",Select:"选择",Inspect:"检视","Inspect in Game...":"在游戏中检视…","trade at: ":"可于 {0} 交易","trade now!":"现可交易！",Any:"任意","Not Painted":"无涂装","Factory New":"崭新出厂","Minimal Wear":"略有磨损","Field-Tested":"久经沙场","Well-Worn":"破损不堪","Battle-Scarred":"战痕累累",Send:"发送",Email:"Email","Steam trade url":"Steam交易链接","leave a message...":"留言...",Rule:"规则",Next:"下一步",Back:"返回",Captcha:"验证码"},ja:{__BETWEEN_EM_SYMBOL__:"__BETWEEN_EM_SYMBOL__",test:"テスト",jpy:"円","(":"（",")":"）","float:":"float:",Select:"",Inspect:"調査","Inspect in Game...":"ゲーム内調査...","trade at: ":"","trade now!":"",Any:"任意","Not Painted":"未ペイント","Factory New":"未使用","Minimal Wear":"新品同様","Field-Tested":"実地試験済み","Well-Worn":"かなり摩耗","Battle-Scarred":"戦いで傷ついた",Send:"送信",Email:"電子メール","Steam trade url":"","leave a message...":"メッセージ...",Rule:"",Next:"",Back:"",Captcha:"キャプチャ"}}}))),v=L.getI18N(),k=n(new class{constructor(){e(this,"itemPage",1),e(this,"itemPerPage",1e3),e(this,"fetchItems",{}),e(this,"cartItems",{}),e(this,"items",{}),e(this,"want",{}),e(this,"captchaKey",""),e(this,"captchaImg",""),e(this,"email",""),e(this,"link",""),e(this,"message",""),e(this,"captcha",""),e(this,"isSending",!1),e(this,"language",{})}initLanguage(t){return this.language=t,this}iWant(t){return"i-want-"+t}monitorCartBlock(){window.addEventListener("resize",(()=>this.flushCartBlockStyle()))}sending(t){this.isSending=t;let e=document.querySelector("main div.items div.order a.send");e.textContent=t?"Sending...":"Send",t?e.classList.add("disabled-link"):e.classList.remove("disabled-link")}qualityNumToEn(t){switch(t){case 0:return"Any";case 1:return"Factory New";case 2:return"Minimal Wear";case 3:return"Field-Tested";case 4:return"Well-Worn";case 5:return"Battle-Scarred";case 6:return"Not Painted"}}getItem(t){return t&&(this.itemPage=t),r.setPage(this.itemPage).setPerPage(this.itemPerPage).items({in_stock:!0},(t=>{var e;if(200===t.code){let e={};if(t.data.data)for(let n of t.data.data)e[n.id]=this.formatResult(n),this.language.i18n.options.messages.en["__ITEM__TITLE__"+n.id+"__"]=n.title_en,this.language.i18n.options.messages.cn["__ITEM__TITLE__"+n.id+"__"]=n.title_cn,this.language.i18n.options.messages.ja["__ITEM__TITLE__"+n.id+"__"]=n.title_ja,n.quality_en=this.qualityNumToEn(n.quality);this.fetchItems=e,top.FadeStyleLoadingPage.done||top.FadeStyleLoadingPage.resolve()}else top.FadeStyleLoadingPage.reject(i18n.t(t.message)),this.sendError(i18n.t(null!=(e=t.message)?e:"Unknown error!"))}),(t=>{top.FadeStyleLoadingPage.reject(i18n.t(t.message)),console.log(t)}))}flushCartBlockStyle(t=0){setTimeout((()=>{let e=document.querySelector("main > div.cart"),n=Object.keys(this.cartItems).length,s=e.offsetHeight+"px";setTimeout((()=>document.querySelector("footer > div.cart-padding").style.height=s),t?0:100),document.querySelectorAll("div.cart div.action button.cart").forEach((t=>{n?t.classList.add("not-empty"):t.classList.remove("not-empty")}))}),t)}selectItem(t,e){let n=document.querySelector("input."+this.iWant(t)),s=n.checked;if(void 0===e&&(e=!s),n.checked=e,!e)return delete this.items[t],delete this.cartItems[t],Object.keys(this.cartItems).length?this.flushCartBlockStyle(100):this.showCart(!1,!1),!0;this.fetchItems[t]||p.title("ERROR").content("unknown item!").error(),this.items[t]={id:t,count:1},this.cartItems[t]=this.fetchItems[t],this.showCart(!0,!1)}itemNextPage(){return this.getItem(++this.itemPage)}isEmpty(t){return null==t||t===[]||t==={}||"string"==typeof t&&(""===t||""===t.trim())||"object"==typeof t&&0===Object.keys(t).length}getCaptcha(){return r.getCaptcha(null,(t=>{200===t.code?(this.captchaKey=t.data.captcha.key,this.captchaImg=t.data.captcha.img):this.sendError("Failed to get captcha image!")}))}checkIfSendingIsAllowed(t=!0){return!this.isSending&&(t&&this.isEmpty(this.captchaKey)?this.sendError("key can not be empty"):t&&this.isEmpty(this.captcha)?this.sendError("captcha can not be empty"):this.isEmpty(this.email)?this.sendError("email can not be empty"):this.isEmpty(this.link)?this.sendError("trade link can not be empty"):!this.isEmpty(this.items)||this.sendError("Please choose which one you want!"))}tryInt(t){let e=parseInt(t,10);return t==e?e:t}formatResult(t){return t.price=this.tryInt(t.price),t.trading_time=new Date(t.trading_time).getTime()<=(new Date).getTime()?null:new Date(t.trading_time).toLocaleString(),t}send(){return!!this.checkIfSendingIsAllowed()&&(this.sending(!0),r.helper(r.post("order",{key:this.captchaKey,items:this.items,email:this.email,link:this.link,captcha:this.captcha,message:this.message,want:this.want}),(t=>{var e;return 200===t.code?(this.cartItems={},this.items={},this.want={},this.getItem(),this.flushCartBlockStyle(),p.title("Success").content("We will reply as soon as possible!").success()):this.sendError(null!=(e=t.message)?e:"unknown error!"),this.getCaptcha(),this.sending(!1),this.getItem(),t}),(t=>{this.sendError(t),this.getCaptcha(),this.sending(!1),this.getItem()})))}sendError(t){return p.title("Failed").content(null!=t?t:"unknown error!").error(),!1}showCart(t=!0,e=!0){(e||g.isAuto())&&(t?g.expansion(e):g.contraction(e)),this.flushCartBlockStyle()}});s({index:k,language:L,i18n:v,MDCardGroup:w,Icon:f,PopUp:b,disableIfEmpty:(t,e)=>{if(k.isEmpty(e)){let e=document.querySelector(t);"A"===e.tagName?(e.classList.add("disabled-link"),e.setAttribute("href","javascript:;")):e.setAttribute("disabled","disabled")}},checkIWant:(t,e=null,n=null,s=null)=>{if(n&&s&&n.target&&n.target.tagName.toLowerCase()!==s)return;const i=document.querySelector("input.i-want-"+t);null===e&&(e=m.isOff(i)),e?m.on(i):m.off(i),k.selectItem(t,e)},scrollToTopOrBottom:(t=null,e=!0)=>{e?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},mounted:()=>{k.initLanguage(L),k.monitorCartBlock()}}).mount();
