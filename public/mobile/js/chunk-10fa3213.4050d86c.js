(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10fa3213"],{4598:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return c}));var n=i("a142"),a=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-a)),n=setTimeout(t,i);return a=e+i,n}var o=n["g"]?t:window,r=o.requestAnimationFrame||s;o.cancelAnimationFrame||o.clearTimeout;function l(t){return r.call(o,t)}function c(t){l((function(){l(t)}))}}).call(this,i("c8ba"))},6291:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-settings",staticStyle:{background:"#fff"}},[i("div",{staticStyle:{height:"100%"}},[i("mu-container",{staticStyle:{height:"100%"}},[i("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"#fff","text-color":"#000"}},[t._v(" "+t._s(t.$t("account.charging"))+" "),i("mu-button",{attrs:{slot:"left",icon:"",flat:""},on:{click:function(e){return t.$router.back(-1)}},slot:"left"},[i("mu-icon",{attrs:{value:":icon-fanhui4"}})],1),i("mu-button",{attrs:{slot:"right",icon:"",flat:""},slot:"right"},[i("mu-icon",{attrs:{value:":icon-fanhui40"}})],1)],1),i("div",{staticStyle:{height:"20px"}}),i("div",{staticStyle:{overflow:"auto",height:"calc(100% - 56px - 48px)"}},[i("van-cell-group",[i("van-field",{attrs:{label:t.$t("market.currency"),value:"USDT",readonly:""}}),i("van-field",{attrs:{label:t.$t("account.way")},scopedSlots:t._u([{key:"input",fn:function(){return t._l(t.types,(function(e){return i("van-button",{key:e.type,attrs:{size:"small",color:t.btnColor(e.type)},on:{click:function(i){t.payType=e.type}}},[t._v(" "+t._s(t.$t("account.visa"))+" "+t._s(e.suffix)+" ")])}))},proxy:!0}])}),i("van-field",{attrs:{label:t.$t("account.amount"),placeholder:t.$t("account.amount")},scopedSlots:t._u([{key:"button",fn:function(){return[t._v(" USDT ")]},proxy:!0}]),model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),i("van-field",{attrs:{label:t.$t("account.picture")},scopedSlots:t._u([{key:"input",fn:function(){return[i("van-uploader",{attrs:{"after-read":t.uploadFile},on:{delete:t.deletePic},model:{value:t.pic,callback:function(e){t.pic=e},expression:"pic"}})]},proxy:!0}])})],1),i("div",{staticStyle:{padding:"0 20px"},attrs:{id:"ssssd"}},[i("mu-button",{staticStyle:{background:"linear-gradient(to right, #218adc , #55c2ff)"},attrs:{disabled:!t.picUrl,"full-width":"",color:"primary"},on:{click:function(e){t.openAlert=!0}}},[t._v(" "+t._s(t.$t("account.submitRecharge"))+" ")])],1)],1)],1),i("mu-dialog",{attrs:{title:"Tips",width:"600","max-width":"80%","esc-press-close":!1,"overlay-close":!1,open:t.openAlert},on:{"update:open":function(e){t.openAlert=e}}},[t._v(" "+t._s(t.$t("lay.confirm"))+" "),i("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(e){t.openAlert=!1}},slot:"actions"},[t._v(t._s(t.$t("lay.ceil")))]),i("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:t.submit},slot:"actions"},[t._v(t._s(t.$t("lay.sure"))+" ")])],1)],1)])},a=[],s=(i("a9e3"),i("2638")),o=i.n(s),r=i("c31d"),l=i("a142");function c(){return!l["g"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var h=i("a8c1"),u=c();function d(){u&&Object(h["c"])(Object(h["a"])())}function f(t,e,i){return Math.min(Math.max(t,e),i)}function v(t,e,i){var n=t.indexOf(e),a="";return-1===n?t:"-"===e&&0!==n?t.slice(0,n):("."===e&&t.match(/^(\.|-\.)/)&&(a=n?"-0":"0"),a+t.slice(0,n+1)+t.slice(n).replace(i,""))}function p(t,e,i){void 0===e&&(e=!0),void 0===i&&(i=!0),t=e?v(t,".",/\./g):t.split(".")[0],t=i?v(t,"-",/-/g):t.replace(/-/,"");var n=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(n,"")}var m=i("1325"),g=i("d282"),b=i("ea8e"),y=i("ad06"),w=i("ba31");function S(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function x(t,e){var i=e.to,n=e.url,a=e.replace;if(i&&t){var s=t[a?"replace":"push"](i);s&&s.catch&&s.catch((function(t){if(t&&!S(t))throw t}))}else n&&(a?location.replace(n):location.href=n)}function $(t){x(t.parent&&t.parent.$router,t.props)}var k={url:String,replace:Boolean,to:[String,Object]},C={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0},clickable:{type:Boolean,default:null}},T=Object(g["a"])("cell"),O=T[0],z=T[1];function j(t,e,i,n){var a,s=e.icon,r=e.size,c=e.title,h=e.label,u=e.value,d=e.isLink,f=i.title||Object(l["c"])(c);function v(){var n=i.label||Object(l["c"])(h);if(n)return t("div",{class:[z("label"),e.labelClass]},[i.label?i.label():h])}function p(){if(f)return t("div",{class:[z("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),v()])}function m(){var n=i.default||Object(l["c"])(u);if(n)return t("div",{class:[z("value",{alone:!f}),e.valueClass]},[i.default?i.default():t("span",[u])])}function g(){return i.icon?i.icon():s?t(y["a"],{class:z("left-icon"),attrs:{name:s,classPrefix:e.iconPrefix}}):void 0}function b(){var n=i["right-icon"];if(n)return n();if(d){var a=e.arrowDirection;return t(y["a"],{class:z("right-icon"),attrs:{name:a?"arrow-"+a:"arrow"}})}}function S(t){Object(w["a"])(n,"click",t),$(n)}var x=null!=(a=e.clickable)?a:d,k={clickable:x,center:e.center,required:e.required,borderless:!e.border};return r&&(k[r]=r),t("div",o()([{class:z(k),attrs:{role:x?"button":null,tabindex:x?0:null},on:{click:S}},Object(w["b"])(n)]),[g(),p(),m(),b(),null==i.extra?void 0:i.extra()])}j.props=Object(r["a"])({},C,k);var P=O(j),I=Object(g["a"])("field"),M=I[0],B=I[1],F=M({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(r["a"])({},C,{name:String,rules:Array,disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[Number,String],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){var t=this.getProp("readonly");if(this.clearable&&!t){var e=Object(l["c"])(this.value)&&""!==this.value,i="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return e&&i}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return Object(r["a"])({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(b["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var n=e.validator(t,e);if(Object(l["f"])(n))return n.then(i);i(n)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:0!==t&&!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(l["d"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateFailed){var t=e.formValue;return i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i)?i.validator?e.runValidator(t,i).then((function(n){!1===n&&(e.validateFailed=!0,e.validateMessage=e.getRuleMessage(t,i))})):void 0:(e.validateFailed=!0,void(e.validateMessage=e.getRuleMessage(t,i)))}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.resetValidation(),e.runRules(t).then((function(){e.validateFailed?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));i.length&&this.validate(i)}},resetValidation:function(){this.validateFailed&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,e){void 0===e&&(e="onChange"),t=Object(l["c"])(t)?String(t):"";var i=this.maxlength;if(Object(l["c"])(i)&&t.length>i&&(t=this.value&&this.value.length===+i?this.value:t.slice(0,i)),"number"===this.type||"digit"===this.type){var n="number"===this.type;t=p(t,n,n)}this.formatter&&e===this.formatTrigger&&(t=this.formatter(t));var a=this.$refs.input;a&&t!==a.value&&(a.value=t),t!==this.value&&this.$emit("input",t)},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.$nextTick(this.adjustSize),this.getProp("readonly")&&this.blur()},onBlur:function(t){this.getProp("readonly")||(this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),this.$nextTick(this.adjustSize),d())},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(m["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||Object(m["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){var e=Object(h["a"])();t.style.height="auto";var i=t.scrollHeight;if(Object(l["e"])(this.autosize)){var n=this.autosize,a=n.maxHeight,s=n.minHeight;a&&(i=Math.min(i,a)),s&&(i=Math.max(i,s))}i&&(t.style.height=i+"px",Object(h["c"])(e))}},genInput:function(){var t=this.$createElement,e=this.type,i=this.getProp("disabled"),n=this.getProp("readonly"),a=this.slots("input"),s=this.getProp("inputAlign");if(a)return t("div",{class:B("control",[s,"custom"]),on:{click:this.onClickInput}},[a]);var l={ref:"input",class:B("control",s),domProps:{value:this.value},attrs:Object(r["a"])({},this.$attrs,{name:this.name,disabled:i,readonly:n,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",o()([{},l]));var c,h=e;return"number"===e&&(h="text",c="decimal"),"digit"===e&&(h="tel",c="numeric"),t("input",o()([{attrs:{type:h,inputmode:c}},l]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:B("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(y["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:B("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(y["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=(this.value||"").length;return t("div",{class:B("word-limit")},[t("span",{class:B("word-num")},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:B("error-message",i)},[e])}}},getProp:function(t){return Object(l["c"])(this[t])?this[t]:this.vanForm&&Object(l["c"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,n=this.getProp("disabled"),a=this.getProp("labelAlign"),s={icon:this.genLeftIcon},o=this.genLabel();o&&(s.title=function(){return o});var r=this.slots("extra");return r&&(s.extra=function(){return r}),e(P,{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:B("value"),titleClass:[B("label",a),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:s,class:B((t={error:this.showError,disabled:n},t["label-"+a]=a,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:B("body")},[this.genInput(),this.showClear&&e(y["a"],{attrs:{name:"clear"},class:B("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:B("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}}),A="van-hairline",R=A+"--surround",D=A+"--top-bottom",L=Object(g["a"])("cell-group"),E=L[0],N=L[1];function X(t,e,i,n){var a,s=t("div",o()([{class:[N({inset:e.inset}),(a={},a[D]=e.border,a)]},Object(w["b"])(n,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",{key:n.data.key},[t("div",{class:N("title",{inset:e.inset})},[i.title?i.title():e.title]),s]):s}X.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}};var U=E(X),W=i("543e"),Y=Object(g["a"])("button"),_=Y[0],H=Y[1];function V(t,e,i,n){var a,s=e.tag,r=e.icon,l=e.type,c=e.color,h=e.plain,u=e.disabled,d=e.loading,f=e.hairline,v=e.loadingText,p=e.iconPosition,m={};function g(t){e.loading&&t.preventDefault(),d||u||(Object(w["a"])(n,"click",t),$(n))}function b(t){Object(w["a"])(n,"touchstart",t)}c&&(m.color=h?c:"white",h||(m.background=c),-1!==c.indexOf("gradient")?m.border=0:m.borderColor=c);var S=[H([l,e.size,{plain:h,loading:d,disabled:u,hairline:f,block:e.block,round:e.round,square:e.square}]),(a={},a[R]=f,a)];function x(){return d?i.loading?i.loading():t(W["a"],{class:H("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):i.icon?t("div",{class:H("icon")},[i.icon()]):r?t(y["a"],{attrs:{name:r,classPrefix:e.iconPrefix},class:H("icon")}):void 0}function k(){var n,a=[];return"left"===p&&a.push(x()),n=d?v:i.default?i.default():e.text,n&&a.push(t("span",{class:H("text")},[n])),"right"===p&&a.push(x()),a}return t(s,o()([{style:m,class:S,attrs:{type:e.nativeType,disabled:u},on:{click:g,touchstart:b}},Object(w["b"])(n)]),[t("div",{class:H("content")},[k()])])}V.props=Object(r["a"])({},k,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}});var q=_(V);function Z(t){return Array.isArray(t)?t:[t]}function K(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i(null)}))}function J(t,e){return Z(t).some((function(t){return!!t&&(Object(l["d"])(e)?e(t):t.size>e)}))}var G=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function Q(t){return G.test(t)}function tt(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?Q(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var et={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}},it=i("44bf"),nt=i("2b0e"),at=Object(g["a"])("image-preview"),st=at[0],ot=at[1],rt=i("6605"),lt=i("3875"),ct=i("5fbe");function ht(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}var ut=i("4598");function dt(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.componentInstance&&i(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&i(t.children)}))}return i(t),e}function ft(t,e){var i=e.$vnode.componentOptions;if(i&&i.children){var n=dt(i.children);t.sort((function(t,e){return n.indexOf(t.$vnode)-n.indexOf(e.$vnode)}))}}function vt(t,e){var i,n;void 0===e&&(e={});var a=e.indexKey||"index";return{inject:(i={},i[t]={default:null},i),computed:(n={parent:function(){return this.disableBindRelation?null:this[t]}},n[a]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},n),watch:{disableBindRelation:function(t){t||this.bindRelation()}},mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);ft(t,this.parent),this.parent.children=t}}}}}function pt(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}var mt=Object(g["a"])("swipe"),gt=mt[0],bt=mt[1],yt=gt({mixins:[lt["a"],pt("vanSwipe"),Object(ct["a"])((function(t,e){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var e=this.vertical?"height":"width",i=this.vertical?"width":"height";t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!ht(this.$el)){clearTimeout(this.timer);var e={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=e,this.swiping=!0,this.active=t,this.computedWidth=+this.width||e.width,this.computedHeight=+this.height||e.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(m["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,i=Date.now()-this.touchStartTime,n=e/i,a=Math.abs(n)>.25||Math.abs(e)>t/2;if(a&&this.isCorrectDirection){var s=this.vertical?this.offsetY:this.offsetX,o=0;o=this.loop?s>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:o,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count,n=this.maxCount;return t?this.loop?f(e+t,-1,i):f(e+t,0,n):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=e-i;return this.loop||(n=f(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,a=void 0===n?0:n,s=t.emitChange,o=this.loop,r=this.count,l=this.active,c=this.children,h=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(i),f=this.getTargetOffset(d,a);if(o){if(c[0]&&f!==u){var v=f<u;c[0].offset=v?h:0}if(c[r-1]&&0!==f){var p=f>0;c[r-1].offset=p?-h:0}}this.active=d,this.offset=f,s&&d!==l&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(ut["a"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(ut["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),Object(ut["a"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,e.immediate?Object(ut["a"])((function(){i.swiping=!1})):i.swiping=!1,i.move({pace:n-i.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,a=this.slots("indicator");return a||(this.showIndicators&&i>1?e("div",{class:bt("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,a){return e("i",{class:bt("indicator",{active:a===n}),style:a===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:bt()},[t("div",{ref:"track",style:this.trackStyle,class:bt("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),wt=Object(g["a"])("swipe-item"),St=wt[0],xt=wt[1],$t=St({mixins:[vt("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},e=this.parent,i=e.size,n=e.vertical;return i&&(t[n?"height":"width"]=i+"px"),this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,e=this.inited,i=this.parent,n=this.mounted;if(!i.lazyRender||e)return!0;if(!n)return!1;var a=i.activeIndicator,s=i.count-1,o=0===a&&i.loop?s:a-1,r=a===s&&i.loop?0:a+1,l=t===a||t===o||t===r;return l&&(this.inited=!0),l}},render:function(){var t=arguments[0];return t("div",{class:xt(),style:this.style,on:Object(r["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}});function kt(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var Ct,Tt={mixins:[lt["a"]],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,e=this.rootHeight,i=e/t;return this.imageRatio>i},imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var i=this.moveX/t,n=this.moveY/t;e.transform="scale("+t+", "+t+") translate("+i+"px, "+n+"px)"}return e},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{active:"resetScale",show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){t=f(t,+this.minZoom,+this.maxZoom),t!==this.scale&&(this.scale=t,this.$emit("scale",{scale:this.scale,index:this.active}))},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var e=t.touches,i=this.offsetX,n=void 0===i?0:i;this.touchStart(t),this.touchStartTime=new Date,this.fingerNum=e.length,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===this.fingerNum&&1!==this.scale,this.zooming=2===this.fingerNum&&!n,this.zooming&&(this.startScale=this.scale,this.startDistance=kt(t.touches))},onTouchMove:function(t){var e=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&Object(m["c"])(t,!0),this.moving){var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=f(i,-this.maxMoveX,this.maxMoveX),this.moveY=f(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var a=kt(e),s=this.startScale*a/this.startDistance;this.setScale(s)}},onTouchEnd:function(t){var e=!1;(this.moving||this.zooming)&&(e=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.zooming&&(this.moveX=f(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=f(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),Object(m["c"])(t,e),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this;if(!(this.fingerNum>1)){var e=this.offsetX,i=void 0===e?0:e,n=this.offsetY,a=void 0===n?0:n,s=new Date-this.touchStartTime,o=250,r=5;i<r&&a<r&&s<o&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),o))}},onLoad:function(t){var e=t.target,i=e.naturalWidth,n=e.naturalHeight;this.imageRatio=n/i}},render:function(){var t=arguments[0],e={loading:function(){return t(W["a"],{attrs:{type:"spinner"}})}};return t($t,{class:ot("swipe-item")},[t(it["a"],{attrs:{src:this.src,fit:"contain"},class:ot("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:e,on:{load:this.onLoad}})])}},Ot=st({mixins:[lt["a"],Object(rt["a"])({skipToggleEvent:!0}),Object(ct["a"])((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,overlayStyle:Object,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},transition:{type:String,default:"van-fade"},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:ot("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var e=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){e.resize(),e.$refs.swipe.swipeTo(+e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:ot("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:ot("cover")},[e])},genImages:function(){var t=this,e=this.$createElement;return e(yt,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:ot("swipe"),on:{change:this.setActive}},[this.images.map((function(i){return e(Tt,{attrs:{src:i,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(y["a"],{attrs:{role:"button",name:this.closeIcon},class:ot("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,e){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,e)}},render:function(){var t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterLeave:this.onClosed}},[this.shouldRender?t("div",{directives:[{name:"show",value:this.value}],class:[ot(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()]):null])}}),zt={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,transition:"van-fade",getContainer:"body",overlayStyle:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},jt=function(){Ct=new(nt["default"].extend(Ot))({el:document.createElement("div")}),document.body.appendChild(Ct.$el),Ct.$on("change",(function(t){Ct.onChange&&Ct.onChange(t)})),Ct.$on("scale",(function(t){Ct.onScale&&Ct.onScale(t)}))},Pt=function(t,e){if(void 0===e&&(e=0),!l["g"]){Ct||jt();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(r["a"])(Ct,zt,i),Ct.$once("input",(function(t){Ct.value=t})),Ct.$once("closed",(function(){Ct.images=[]})),i.onClose&&(Ct.$off("close"),Ct.$once("close",i.onClose)),Ct}};Pt.Component=Ot,Pt.install=function(){nt["default"].use(Ot)};var It=Pt,Mt=Object(g["a"])("uploader"),Bt=Mt[0],Ft=Mt[1],At=Bt({inheritAttrs:!1,mixins:[et],model:{prop:"fileList"},props:{disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String,Function],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return Object(b["a"])(this.previewSize)},value:function(){return this.fileList}},created:function(){this.urls=[]},beforeDestroy:function(){this.urls.forEach((function(t){return URL.revokeObjectURL(t)}))},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(Object(l["f"])(n))return void n.then((function(t){t?e.readFile(t):e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=J(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return K(t,e.resultType)}))).then((function(n){var a=t.map((function(t,e){var i={file:t,status:"",message:""};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(a,i)}))}else K(t,this.resultType).then((function(n){var a={file:t,status:"",message:""};n&&(a.content=n),e.onAfterRead(a,i)}))},onAfterRead:function(t,e){var i=this;this.resetInput();var n=t;if(e){var a=t;Array.isArray(t)?(a=[],n=[],t.forEach((function(t){t.file&&(J(t.file,i.maxSize)?a.push(t):n.push(t))}))):n=null,this.$emit("oversize",a,this.getDetail())}var s=Array.isArray(n)?Boolean(n.length):Boolean(n);s&&(this.$emit("input",[].concat(this.fileList,Z(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(t,e){var i,n=this,a=null!=(i=t.beforeDelete)?i:this.beforeDelete;if(a){var s=a(t,this.getDetail(e));if(!s)return;if(Object(l["f"])(s))return void s.then((function(){n.deleteFile(t,e)})).catch(l["h"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onClickUpload:function(t){this.$emit("click-upload",t)},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return tt(t)})),n=i.map((function(t){return t.file&&!t.url&&"failed"!==t.status&&(t.url=URL.createObjectURL(t.file),e.urls.push(t.url)),t.url}));this.imagePreview=It(Object(r["a"])({images:n,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(t){var e=this.$createElement,i=t.status,n=t.message;if("uploading"===i||"failed"===i){var a="failed"===i?e(y["a"],{attrs:{name:"close"},class:Ft("mask-icon")}):e(W["a"],{class:Ft("loading")}),s=Object(l["c"])(n)&&""!==n;return e("div",{class:Ft("mask")},[a,s&&e("div",{class:Ft("mask-message")},[n])])}},genPreviewItem:function(t,e){var i,n,a,s=this,o=this.$createElement,l=null!=(i=t.deletable)?i:this.deletable,c="uploading"!==t.status&&l,h=c&&o("div",{class:Ft("preview-delete"),on:{click:function(i){i.stopPropagation(),s.onDelete(t,e)}}},[o(y["a"],{attrs:{name:"cross"},class:Ft("preview-delete-icon")})]),u=this.slots("preview-cover",Object(r["a"])({index:e},t)),d=u&&o("div",{class:Ft("preview-cover")},[u]),f=null!=(n=t.previewSize)?n:this.previewSize,v=null!=(a=t.imageFit)?a:this.imageFit,p=tt(t)?o(it["a"],{attrs:{fit:v,src:t.content||t.url,width:f,height:f,lazyLoad:this.lazyLoad},class:Ft("preview-image"),on:{click:function(){s.onPreviewImage(t)}}},[d]):o("div",{class:Ft("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[o(y["a"],{class:Ft("file-icon"),attrs:{name:"description"}}),o("div",{class:[Ft("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),d]);return o("div",{class:Ft("preview"),on:{click:function(){s.$emit("click-preview",t,s.getDetail(e))}}},[p,this.genPreviewMask(t),h])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),n=this.readonly?null:t("input",{attrs:Object(r["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:Ft("input"),on:{change:this.onChange}});if(i)return t("div",{class:Ft("input-wrapper"),key:"input-wrapper",on:{click:this.onClickUpload}},[i,n]);if(this.previewSize){var a=this.previewSizeWithUnit;e={width:a,height:a}}return t("div",{directives:[{name:"show",value:this.showUpload}],class:Ft("upload",{readonly:this.readonly}),style:e,on:{click:this.onClickUpload}},[t(y["a"],{attrs:{name:this.uploadIcon},class:Ft("upload-icon")}),this.uploadText&&t("span",{class:Ft("upload-text")},[this.uploadText]),n])}}},render:function(){var t=arguments[0];return t("div",{class:Ft()},[t("div",{class:Ft("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}});nt["default"].use(F),nt["default"].use(U),nt["default"].use(q),nt["default"].use(At);var Rt={name:"Recharge",data:function(){return{charge:"USDT",openAlert:!1,active:0,wallets:[],usdt_wallet:[],qrccode:!1,acc:"",amount:"",hash:"default",pic:[],select:"",selected:"",loading:!1,fullLoading:!1,obj:{LTC:6,BTC:1,USDT:3,ETH:2,BCH:10,XRP:5},payType:"creditCard",types:[{type:"creditCard",suffix:"-A"},{type:"creditCard-B",suffix:"-B"}],picUrl:""}},watch:{active:function(t){}},mounted:function(){this.select=this.$t("account.select"),this.selected=this.$t("account.selected")},methods:{btnColor:function(t){return t===this.payType?"linear-gradient(to right, rgb(33, 138, 220), rgb(85, 194, 255))":"linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)"},deletePic:function(){this.picUrl=""},uploadFile:function(t){var e=this,i=this.$loading(),n=new FormData;console.log(t),n.append("file",t.file),this.$http.post("/api/upload",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){i.close();var n=t.data;"ok"==n.type?e.picUrl=n.message:e.$toast.fail(n.message)}))},submit:function(){var t=this,e={currency:"3"};if(e.amount=Number(this.amount),e.payType=this.payType,!e.amount)return this.openAlert=!1,void this.$toast("please input number");if(e.amount<100||e.amount>12e3)return this.openAlert=!1,void this.$toast(this.$t("number")+"[100-12000]");var i=this.$loading();e.pic=this.picUrl,this.$http({url:"/api/wallet/online_req",method:"post",data:e,headers:{Authorization:localStorage.getItem("token")}}).then((function(e){i.close(),t.openAlert=!1,"ok"===e.data.type?(t.pic=[],t.acc="",t.amount="",t.hash="",window.open(e.data.message)):t.$toast.fail(e.data.message)}))}}},Dt=Rt,Lt=(i("f3a3"),i("2877")),Et=Object(Lt["a"])(Dt,n,a,!1,null,null,null);e["default"]=Et.exports},d901:function(t,e,i){},f3a3:function(t,e,i){"use strict";i("d901")}}]);