(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48bd3f85"],{"05e3":function(t,e,n){"use strict";n("b7a5")},"3fa8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"dragDiv",staticClass:"drag"},[n("div",{staticClass:"drag_bg"}),n("div",{staticClass:"drag_text"},[t._v(t._s(t.confirmWords))]),n("div",{ref:"moveDiv",staticClass:"handler handler_bg",class:{handler_ok_bg:t.confirmSuccess},staticStyle:{position:"absolute",top:"0px",left:"0px"},on:{touchstart:function(e){return t.mousedownFn(e)}}})])},s=[],o={props:{title:{type:String,default:""},title1:{type:String,default:""}},name:"codes",watch:{title:function(t,e){console.log("a: "+t),this.title=t,this.confirmSuccess||(this.confirmWords=t)},title1:function(t,e){this.title1=t,this.confirmSuccess&&(this.confirmWords=t)}},data:function(){return{beginClientX:0,mouseMoveStata:!1,maxwidth:"",confirmWords:this.title,confirmSuccess:!1}},methods:{status_code:function(){return this.confirmSuccess},mousedownFn:function(t){this.confirmSuccess||(t.preventDefault&&t.preventDefault(),this.mouseMoveStata=!0,this.beginClientX=t.changedTouches[0].clientX)},successFunction:function(){this.confirmSuccess=!0,this.confirmWords=this.title1,window.addEventListener?(document.getElementsByTagName("html")[0].removeEventListener("touchmove",this.mouseMoveFn),document.getElementsByTagName("html")[0].removeEventListener("touchend",this.moseUpFn)):document.getElementsByTagName("html")[0].removeEventListener("touchend",(function(){})),document.getElementsByClassName("drag_text")[0].style.color="#fff",document.getElementsByClassName("handler")[0].style.left=this.maxwidth+"px",document.getElementsByClassName("drag_bg")[0].style.width=this.maxwidth+"px"},mouseMoveFn:function(t){if(this.mouseMoveStata){var e=t.changedTouches[0].clientX-this.beginClientX;e>0&&e<=this.maxwidth?(document.getElementsByClassName("handler")[0].style.left=e+"px",document.getElementsByClassName("drag_bg")[0].style.width=e+"px"):e>this.maxwidth&&this.successFunction()}},moseUpFn:function(t){this.mouseMoveStata=!1;var e=t.changedTouches[0].clientX-this.beginClientX;e<this.maxwidth&&(document.getElementsByClassName("handler")[0].style.left="0px",document.getElementsByClassName("drag_bg")[0].style.width="0px")}},mounted:function(){this.maxwidth=this.$refs.dragDiv.clientWidth-this.$refs.moveDiv.clientWidth,document.getElementsByTagName("html")[0].addEventListener("touchmove",this.mouseMoveFn),document.getElementsByTagName("html")[0].addEventListener("touchend",this.moseUpFn)}},a=o,l=(n("44d7"),n("2877")),r=Object(l["a"])(a,i,s,!1,null,"3cb38cba",null);e["a"]=r.exports},"44d7":function(t,e,n){"use strict";n("577f")},"577f":function(t,e,n){},"92d9":function(t,e,n){"use strict";var i=n("5530"),s=n("1da1"),o=(n("96cf"),n("2f62"));e["a"]={mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("mixin mounted"),e.next=3,t.getWeb(t);case 3:n=e.sent,n&&t.setIco(n);case 5:case"end":return e.stop()}}),e)})))()},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getWeb"])),{},{setIco:function(t){var e=document.querySelector('link[rel="icon"]');e.href=t.logo}})}},a55b:function(t,e,n){"use strict";n.r(e);var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",staticStyle:{padding:"20px",background:"#FFFFFF"}},[n("div",{staticClass:"flex alcenter",staticStyle:{height:"50px"}},[n("mu-button",{ref:"buttona",attrs:{icon:""},on:{click:function(e){t.openLanguage=!t.openLanguage}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},["zh"==t.lang?n("use",{attrs:{"xlink:href":"#icon-zhongwen1"}}):t._e(),"spa"==t.lang?n("use",{attrs:{"xlink:href":"#icon-xibanya"}}):t._e(),"hk"==t.lang?n("use",{attrs:{"xlink:href":"#icon-hong_kong__easyiconnet"}}):t._e(),"kr"==t.lang?n("use",{attrs:{"xlink:href":"#icon-hanyu1"}}):t._e(),"jp"==t.lang?n("use",{attrs:{"xlink:href":"#icon--riyu"}}):t._e(),"en"==t.lang?n("use",{attrs:{"xlink:href":"#icon-yingyu1"}}):t._e()])]),n("mu-popover",{staticClass:"popforlang",attrs:{open:t.openLanguage,trigger:t.trigger},on:{"update:open":function(e){t.openLanguage=e}}},[n("mu-list",t._l(t.langArr,(function(e){return n("mu-list-item",{staticClass:"flex alcenter",attrs:{avatar:"",button:""},on:{click:function(n){return t.changeLang(e.lang)}}},[n("mu-list-item-action",[n("mu-avatar",{staticStyle:{"border-radius":"0",background:"none"},attrs:{size:"20"}},[n("svg",{staticClass:"icon",staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}},["zh"==e.lang?n("use",{attrs:{"xlink:href":"#icon-zhongwen1"}}):t._e(),"jp"==e.lang?n("use",{attrs:{"xlink:href":"#icon--riyu"}}):t._e(),"spa"==e.lang?n("use",{attrs:{"xlink:href":"#icon-xibanya"}}):t._e(),"hk"==e.lang?n("use",{attrs:{"xlink:href":"#icon-hong_kong__easyiconnet"}}):t._e(),"kr"==e.lang?n("use",{attrs:{"xlink:href":"#icon-hanyu1"}}):t._e(),"en"==e.lang?n("use",{attrs:{"xlink:href":"#icon-yingyu1"}}):t._e()])])],1),n("mu-list-item-title",{class:{active:t.lang==e.lang}},[t._v(t._s(e.text))])],1)})),1)],1),n("div",{staticClass:"flex1 flex",staticStyle:{"padding-right":"15px","justify-content":"flex-end"}},[n("svg",{staticClass:"icon",staticStyle:{"font-size":"24px"},attrs:{color:"#999","aria-hidden":"true"},on:{click:function(e){return t.$router.push("/")}}},[n("use",{attrs:{"xlink:href":"#icon-guanbi"}})])])],1),n("mu-container",[n("h1",{staticStyle:{"line-height":"50px",margin:"0","margin-bottom":"30px","text-align":"left"},attrs:{align:"center"}},[t._v(t._s(t.$t("login.welcome",{name:t.$store.state.web.name})))]),n("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.validateForm}},[n("mu-form-item",{attrs:{label:t.$t("accounts"),prop:"email"}},[n("mu-text-field",{attrs:{prop:"email"},on:{input:function(e){return t.validateForm.email=e.replace(t.$utils.special_reg,"")}},model:{value:t.validateForm.email,callback:function(e){t.$set(t.validateForm,"email",e)},expression:"validateForm.email"}})],1),n("mu-form-item",{attrs:{label:t.$t("pwd"),prop:"password"}},[n("mu-text-field",{attrs:{autoComplete:"new-password","action-icon":t.visibility?":icon-kejian":":icon-bianzubeifenx","action-click":function(){return t.visibility=!t.visibility},type:t.visibility?"text":"password",prop:"password"},model:{value:t.validateForm.password,callback:function(e){t.$set(t.validateForm,"password",e)},expression:"validateForm.password"}})],1),n("div",{staticStyle:{"margin-bottom":"20px"}},[n("codes",{ref:"codess",attrs:{title:t.$t("login_codes1"),title1:t.$t("login_codes2")}})],1),n("mu-form-item",{attrs:{prop:"isAgree"}},[n("mu-checkbox",{attrs:{label:t.$t("login.autologin")},model:{value:t.validateForm.isAgree,callback:function(e){t.$set(t.validateForm,"isAgree",e)},expression:"validateForm.isAgree"}})],1),n("mu-button",{staticStyle:{width:"100%",height:"40px"},attrs:{color:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("logins")))]),n("div",{staticClass:"flex",staticStyle:{height:"50px"}},[n("span",{staticClass:"flex1 flex alcenter",on:{click:t.forget}},[t._v(t._s(t.$t("login.forget"))+"？")]),n("span",{staticClass:"flex alcenter",on:{click:function(e){return t.$router.push({name:"Register"})}}},[t._v(t._s(t.$t("login.dont")))])])],1),n("div",{staticClass:"kefu",on:{click:function(e){return t.$router.push("/kefu")}}},[n("van-icon",{attrs:{name:"service-o"}})],1)],1)],1)},o=[],a=n("3fa8"),l=n("92d9"),r=n("2b0e"),c=n("ad06"),u=n("c31d"),h=n("2638"),d=n.n(h),m=n("d282"),g=n("a142"),f=n("ea8e"),p=n("b1d2"),v=n("6605"),b=n("b650"),x=n("9884"),y=Object(m["a"])("goods-action"),w=y[0],k=y[1],C=w({mixins:[Object(x["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:k({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),$=n("48f4"),B=Object(m["a"])("goods-action-button"),_=B[0],S=B[1],O=_({mixins:[Object(x["a"])("vanGoodsAction")],props:Object(u["a"])({},$["c"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object($["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(b["a"],{class:S([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),F=Object(m["a"])("dialog"),E=F[0],j=F[1],A=F[2],T=E({mixins:[Object(v["a"])()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){var t=this;this.$emit("opened"),this.$nextTick((function(){var e;null==(e=t.$refs.dialog)||e.focus()}))},onClosed:function(){this.$emit("closed")},onKeydown:function(t){var e=this;if("Escape"===t.key||"Enter"===t.key){if(t.target!==this.$refs.dialog)return;var n={Enter:this.showConfirmButton?function(){return e.handleAction("confirm")}:g["h"],Escape:this.showCancelButton?function(){return e.handleAction("cancel")}:g["h"]};n[t.key](),this.$emit("keydown",t)}},genRoundButtons:function(){var t=this,e=this.$createElement;return e(C,{class:j("footer")},[this.showCancelButton&&e(O,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||A("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:j("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(O,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||A("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:j("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[p["c"],j("footer")]},[this.showCancelButton&&n(b["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||A("cancel"),nativeType:"button"},class:j("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(b["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||A("confirm"),nativeType:"button"},class:[j("confirm"),(t={},t[p["a"]]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:j("content")},[e]);var i=this.message,s=this.messageAlign;if(i){var o,a,l={class:j("message",(o={"has-title":t},o[s]=s,o)),domProps:(a={},a[this.allowHtml?"innerHTML":"textContent"]=i,a)};return n("div",{class:j("content",{isolated:!t})},[n("div",d()([{},l]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),i=this.slots("title")||this.title,s=i&&t("div",{class:j("header",{isolated:!e&&!n})},[i]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e,tabIndex:0},class:[j([this.theme]),this.className],style:{width:Object(f["a"])(this.width)},ref:"dialog",on:{keydown:this.onKeydown}},[s,this.genContent(i,n),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});function L(t){return document.body.contains(t)}function I(){i&&i.$destroy(),i=new(r["a"].extend(T))({el:document.createElement("div"),propsData:{lazyRender:!1}}),i.$on("input",(function(t){i.value=t}))}function N(t){return g["g"]?Promise.resolve():new Promise((function(e,n){i&&L(i.$el)||I(),Object(u["a"])(i,N.currentOptions,t,{resolve:e,reject:n})}))}N.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){i["confirm"===t?"resolve":"reject"](t)}},N.alert=N,N.confirm=function(t){return N(Object(u["a"])({showCancelButton:!0},t))},N.close=function(){i&&(i.value=!1)},N.setDefaultOptions=function(t){Object(u["a"])(N.currentOptions,t)},N.resetDefaultOptions=function(){N.currentOptions=Object(u["a"])({},N.defaultOptions)},N.resetDefaultOptions(),N.install=function(){r["a"].use(T)},N.Component=T,r["a"].prototype.$dialog=N;var z=N;r["a"].use(c["a"]);var D={mixins:[l["a"]],components:{codes:a["a"]},data:function(){return{usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=3},message:"用户名长度大于3"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>=3&&t.length<=10},message:"密码长度大于3小于10"}],visibility:!1,argeeRules:[{validate:function(t){return!!t},message:"必须同意用户协议"}],validateForm:{email:"",password:"",isAgree:!1},lang:"en",openLanguage:!1,customer_url:"",langArr:[{src:n("b46b"),text:this.$t("lang.zh"),lang:"zh"},{src:n("ebab"),text:this.$t("lang.jp"),lang:"jp"},{src:n("b46b"),text:this.$t("lang.hk"),lang:"hk"},{src:n("70ff"),text:this.$t("lang.en"),lang:"en"},{src:n("ac5d"),text:this.$t("lang.kr"),lang:"kr"},{src:n("b46b"),text:this.$t("lang.spa"),lang:"spa"}],trigger:null}},beforeCreate:function(){},mounted:function(){this.trigger=this.$refs.buttona.$el,this.lang=window.localStorage.getItem("lang").toLowerCase(),window.localStorage.getItem("user_id")&&this.$router.push("/ucenter")},methods:{forget:function(){var t=this;z.confirm({message:this.$t("login.connect"),confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("legal.ceil")}).then((function(){t.$router.push("/kefu")}))},changeLang:function(t){var e=window.localStorage.getItem("locale")||"en";e!=t&&(this.openLanguage=!1,window.localStorage.setItem("locale",t),this.$i18n.locale=t,window.localStorage.setItem("lang",t),this.lang=t,eventBus.$emit("refresh",t))},submit:function(){if(!this.$refs.codess.status_code())return this.$toast.fail(this.$t("login_codes3"));this.login()},clear:function(){this.$refs.form.clear(),this.validateForm={email:"",password:"",isAgree:!1}},userInfo:function(){this.$http({url:"/api/user/info",method:"get",data:{},headers:{Authorization:localStorage.getItem("token")}}).then((function(t){"ok"===t.data.type&&(localStorage.setItem("user_id",t.data.message.id),localStorage.setItem("extension_code",t.data.message.extension_code),localStorage.setItem("is_seller",t.data.message.is_seller),eventBus.$emit("seller",t.data.message.is_seller))})).catch((function(t){}))},login:function(){var t=this,e=this.validateForm.email,n=this.validateForm.password;0!==e.length?n.length<6?this.$toast.fail(this.$t("register.logpwd")):this.$http({url:"/api/user/login",method:"post",data:{user_string:e,password:n,type:1}}).then((function(n){n=n.data,"ok"===n.type?(localStorage.setItem("token",n.message),localStorage.setItem("accountNum",e),t.$store.commit("setAccountNum"),t.userInfo(),t.$router.push("/")):t.$toast.fail(n.message)})).catch((function(t){console.log(t)})):this.$toast.fail(this.$t("register.emailnum"))}}},R=D,W=(n("05e3"),n("2877")),M=Object(W["a"])(R,s,o,!1,null,"0d9cece6",null);e["default"]=M.exports},b7a5:function(t,e,n){}}]);