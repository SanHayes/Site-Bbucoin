(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc0006b6"],{1276:function(t,e,a){"use strict";var i=a("d784"),s=a("44e7"),l=a("825a"),c=a("1d80"),n=a("4840"),o=a("8aa5"),r=a("50c4"),u=a("14c3"),h=a("9263"),d=a("d039"),p=[].push,f=Math.min,m=4294967295,g=!d((function(){return!RegExp(m,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(c(this)),l=void 0===a?m:a>>>0;if(0===l)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,l);var n,o,r,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,d+"g");while(n=h.call(g,i)){if(o=g.lastIndex,o>f&&(u.push(i.slice(f,n.index)),n.length>1&&n.index<i.length&&p.apply(u,n.slice(1)),r=n[0].length,f=o,u.length>=l))break;g.lastIndex===n.index&&g.lastIndex++}return f===i.length?!r&&g.test("")||u.push(""):u.push(i.slice(f)),u.length>l?u.slice(0,l):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var s=c(this),l=void 0==e?void 0:e[t];return void 0!==l?l.call(e,s,a):i.call(String(s),e,a)},function(t,s){var c=a(i,t,this,s,i!==e);if(c.done)return c.value;var h=l(t),d=String(this),p=n(h,RegExp),v=h.unicode,w=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),y=new p(g?h:"^(?:"+h.source+")",w),b=void 0===s?m:s>>>0;if(0===b)return[];if(0===d.length)return null===u(y,d)?[d]:[];var _=0,$=0,S=[];while($<d.length){y.lastIndex=g?$:0;var k,x=u(y,g?d:d.slice($));if(null===x||(k=f(r(y.lastIndex+(g?0:$)),d.length))===_)$=o(d,$,v);else{if(S.push(d.slice(_,$)),S.length===b)return S;for(var T=1;T<=x.length-1;T++)if(S.push(x[T]),S.length===b)return S;$=_=k}}return S.push(d.slice(_)),S}]}),!g)},"148e":function(t,e,a){},c363:function(t,e,a){"use strict";a("148e")},fae6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-settings",staticStyle:{background:"#fff"}},[a("mu-container",[a("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"#fff","text-color":"#000"}},[t._v(" "+t._s(t.$t("account.charging"))+" "),a("mu-button",{attrs:{slot:"left",icon:"",flat:""},on:{click:function(e){return t.$router.back(-1)}},slot:"left"},[a("mu-icon",{attrs:{value:":icon-fanhui4"}})],1),a("mu-button",{attrs:{slot:"right",icon:"",flat:""},slot:"right"},[a("mu-icon",{attrs:{value:":icon-fanhui40"}})],1)],1),a("mu-list",[a("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(e){t.openFullscreen=!0}}},[a("mu-list-item-title",[t._v(t._s(t.charge))]),a("mu-list-item-action",{staticStyle:{width:"200px"}},[a("div",{staticClass:"flex",staticStyle:{"align-items":"center"}},[a("span",[t._v(t._s(t.$t("account.choosecoin")))]),a("mu-icon",{attrs:{value:":icon-xiangqing"}})],1)])],1)],1),a("div",{staticStyle:{height:"20px"}}),"USDT"==t.charge?a("div",{staticClass:"flex"},[a("div",{staticClass:"flex1"}),t._l(Object.keys("USDT"==t.charge?t.usdt_wallet:t.wallets),(function(e,i){return a("div",{staticClass:"tabbt",class:t.active===i?"active":"",on:{click:function(e){t.active=i}}},[t._v(" "+t._s(e.toUpperCase())+" ")])})),a("div",{staticClass:"flex1"})],2):t._e(),a("div",[a("div",[a("div",{ref:"qrcode",attrs:{id:"qrcode"}},[a("img",{attrs:{src:t.Qrpath+("USDT"==t.charge?t.usdt_wallet:t.wallets)[Object.keys("USDT"==t.charge?t.usdt_wallet:t.wallets)[t.active]]}})])]),a("p",[t._v(" "+t._s(("USDT"==t.charge?t.usdt_wallet:t.wallets)[Object.keys("USDT"==t.charge?t.usdt_wallet:t.wallets)[t.active]])+" ")]),a("mu-button",{staticClass:"copy",attrs:{flat:"",color:"primary","data-clipboard-text":("USDT"==t.charge?t.usdt_wallet:t.wallets)[Object.keys("USDT"==t.charge?t.usdt_wallet:t.wallets)[t.active]]},on:{click:t.copy}},[t._v(t._s(t.$t("account.copy"))+" ")]),a("div",{staticStyle:{padding:"0 20px 40px"},attrs:{id:"ssssd"}},[a("mu-text-field",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{width:"100%"},attrs:{label:t.$t("account.cgaddress")},on:{input:function(e){return t.acc=e.replace(t.$utils.special_reg,"")}},model:{value:t.acc,callback:function(e){t.acc=e},expression:"acc"}}),a("mu-text-field",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{width:"100%"},attrs:{label:t.$t("withdrawList.hash")},model:{value:t.hash,callback:function(e){t.hash=e},expression:"hash"}}),a("mu-text-field",{staticStyle:{width:"100%"},attrs:{label:t.$t("account.amount"),suffix:t.charge,type:"number"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),a("mu-text-field",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{width:"100%"},attrs:{readonly:"",label:t.$t("account.picture")},model:{value:""===t.pic?t.select:t.selected,callback:function(e){""===t.pic?t.select:t.selected=e},expression:"pic===''?select:selected"}},[a("mu-button",{attrs:{slot:"append",flat:"","full-width":"",color:"primary"},on:{click:t.choosePic},slot:"append"},[t._v(t._s(t.$t("account.choose"))+" ")])],1),a("mu-button",{staticStyle:{background:"linear-gradient(to right, #218adc , #55c2ff)"},attrs:{"full-width":"",color:"primary"},on:{click:t.confirm}},[t._v(" "+t._s(t.$t("account.submitRecharge"))+" ")]),a("p",{staticClass:"tall hide"},[a("i",{staticClass:"currency_title"},[t._v(" "+t._s(t.$t("account.a10"))+" ")])]),a("input",{ref:"uploads",staticStyle:{display:"none",color:"red"},attrs:{id:"picture",type:"file"},on:{change:t.uploadFile}})],1)],1)],1),a("mu-dialog",{attrs:{title:"Tips",width:"600","max-width":"80%","esc-press-close":!1,"overlay-close":!1,open:t.openAlert},on:{"update:open":function(e){t.openAlert=e}}},[t._v(" "+t._s(t.$t("lay.confirm"))+" "),a("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(e){t.openAlert=!1}},slot:"actions"},[t._v(t._s(t.$t("lay.ceil")))]),a("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:t.submit},slot:"actions"},[t._v(t._s(t.$t("lay.sure"))+" ")])],1),a("mu-dialog",{attrs:{width:"360",transition:"slide-bottom",fullscreen:"",open:t.openFullscreen},on:{"update:open":function(e){t.openFullscreen=e}}},[a("mu-appbar",{attrs:{color:"primary",title:t.$t("account.choosecoin")}},[a("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){return t.$router.back(-1)}},slot:"left"},[a("mu-icon",{attrs:{value:":icon-fanhui4"}})],1)],1),a("div",{staticStyle:{padding:"0px 0"}},[a("mu-list",[a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){t.charge="BTC",t.active=0,t.openFullscreen=!1}}},[a("mu-list-item-title",[a("span",{staticStyle:{color:"#000"}},[t._v("BTC")])]),a("mu-list-item-action",["BTC"==t.charge?a("mu-icon",{attrs:{color:"primary",value:":icon-chenggong1"}}):t._e()],1)],1),a("mu-divider"),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){t.charge="USDT",t.openFullscreen=!1}}},[a("mu-list-item-title",[a("span",{staticStyle:{color:"#000"}},[t._v("USDT")])]),a("mu-list-item-action",["USDT"==t.charge?a("mu-icon",{attrs:{color:"primary",value:":icon-chenggong1"}}):t._e()],1)],1),a("mu-divider"),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){t.charge="ETH",t.openFullscreen=!1}}},[a("mu-list-item-title",[a("span",{staticStyle:{color:"#000"}},[t._v("ETH")])]),a("mu-list-item-action",["ETH"==t.charge?a("mu-icon",{attrs:{color:"primary",value:":icon-chenggong1"}}):t._e()],1)],1)],1)],1)],1)],1)},s=[],l=(a("a9e3"),a("1276"),a("ac1f"),a("159b"),a("b64b"),a("d044")),c=a.n(l),n=a("b311"),o=a.n(n),r={name:"Recharge",data:function(){return{charge:"USDT",openFullscreen:!0,openAlert:!1,active:0,wallets:[],usdt_wallet:[],qrccode:!1,acc:"",amount:"",hash:"default",pic:"",select:"",selected:"",loading:!1,fullLoading:!1,obj:{LTC:6,BTC:1,USDT:3,ETH:2,BCH:10,XRP:5}}},watch:{active:function(t){},charge:function(t){this.getWallets()}},mounted:function(){this.getWallets(),this.select=this.$t("account.select"),this.selected=this.$t("account.selected")},methods:{confirm:function(){var t=Number(this.amount);!t||t<1?this.$toast.fail(this.$t("account.minCharge")):this.pic?this.openAlert=!0:this.$toast.fail(this.$t("account.select"))},pyas:function(t){if(1==t){var e="USDT"==this.charge?this.usdt_wallet.erc20:this.wallets;this.$router.push({path:"/re_moon",query:{url:e,cur:this.charge}})}else this.$router.push({path:"/re_brank",query:{}})},choosePic:function(){this.$refs.uploads.dispatchEvent(new MouseEvent("click"))},uploadFile:function(t){var e=this,a=this.$loading(),i=new FileReader,s=t.target.files[0];i.readAsDataURL(s),i.onload=function(t){};var l=new FormData;l.append("file",s),this.$http.post("/api/upload",l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.close();var i=t.data;"ok"==i.type?e.pic=i.message.toLocaleLowerCase():e.$toast.fail(i.message)}))},getWallets:function(){var t=this,e=this.$loading(),a=this;this.$http({url:"/api/wallet/get_in_address",method:"post",data:{currency:this.obj[this.charge]},headers:{Authorization:localStorage.getItem("token")}}).then((function(i){if(e.close(),"ok"===i.data.type){if(a.wallets=[i.data.message.address],"USDT"==t.charge){var s=i.data.message.address;console.log(s);var l=[];if(s){var c=s.split(",");if(1==c.length){var n=c[0].split(":");1==n.length?l["erc20"]=n[0]:l[n[0]]=n[1]}else c.forEach((function(t){var e=t.split(":");e.length>1&&(l[e[0]]=e[1])}));a.usdt_wallet=l,console.log(usdt_wallet)}}console.log(wallets),console.log(a.wallets);a.wallets[Object.keys(a.wallets)[0]]}}))},copy:function(){var t=this,e=new o.a(".copy");console.log(e),e.on("success",(function(a){t.$toast.success(t.$t("lay.copys")),a.clearSelection(),e.destroy()})),e.on("error",(function(e){t.$toast.fail(t.$t("lay.fcopy"))}))},qrcode:function(t){this.$refs.qrcode.innerHTML="",this.qrccode=new c.a("qrcode",{width:150,height:150,text:t})},submit:function(){var t=this,e=this.$loading();this.$http({url:"/api/wallet/charge_req",method:"post",data:{currency:this.obj[this.charge],type:("USDT"==this.charge?this.usdt_wallet:this.wallets)[Object.keys("USDT"==this.charge?this.usdt_wallet:this.wallets)[this.active]],acc:this.acc,amount:this.amount,pic:this.pic,hash:this.hash},headers:{Authorization:localStorage.getItem("token")}}).then((function(a){e.close(),t.openAlert=!1,"ok"===a.data.type?(t.$toast.success(a.data.message),t.pic="",t.acc="",t.amount="",t.hash=""):t.$toast.fail(a.data.message)}))}}},u=r,h=(a("c363"),a("2877")),d=Object(h["a"])(u,i,s,!1,null,null,null);e["default"]=d.exports}}]);