(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2df9f3e"],{c84b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mu-container",{staticClass:"iepn"},[a("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"#fff","text-color":"#000"}},[t._v(" 订单详情 "),a("mu-button",{attrs:{slot:"left",icon:"",flat:""},on:{click:function(e){return t.$router.back(-1)}},slot:"left"},[a("mu-icon",{attrs:{value:":icon-ziyuan1"}})],1),a("mu-button",{attrs:{slot:"right",icon:"",flat:""},slot:"right"})],1),a("mu-stepper",{attrs:{"active-step":t.activeStep}},[a("mu-step",[a("mu-step-label",[t._v(" 匹配商家 ")])],1),a("mu-step",[a("mu-step-label",[t._v(" 买家付款 ")])],1),a("mu-step",[a("mu-step-label",[t._v(" 商家确认完成 ")])],1)],1),0===t.detail.status?a("div",[a("div",{staticStyle:{"line-height":"30px"}},[t._v("付款信息")]),"alipay"===t.detail.pay_way||"wechat"===t.detail.pay_way?a("div",[a("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"alipay"===t.detail.pay_way?t.legalInfo.alipayCode:t.legalInfo.wechatCode}}),a("div",{staticClass:"ft14 fColor2"},[t._v(" "+t._s("alipay"==t.detail.pay_way?t.legalInfo.alipay:t.legalInfo.wechat)+" 请使用"+t._s(t.getPayway(t.detail.pay_way))+"扫码支付 ")])]):t._e(),"bank"===t.detail.pay_way?a("div",[a("div",{staticClass:"hh"},[a("mu-list",[a("mu-list-item",{attrs:{avatar:"",ripple:!1}},[a("mu-list-item-action",[a("div",{staticStyle:{width:"100%","text-align":"right"}},[t._v("开户行")])]),a("mu-list-item-title",[t._v(" "+t._s(t.legalInfo.bankAddress)+" ")]),a("mu-list-item-action",[a("a",{staticClass:"copy1",staticStyle:{color:"#2196f3"},attrs:{"data-clipboard-text":t.legalInfo.bankAddress},on:{click:function(e){return t.copy(".copy1")}}},[t._v(t._s(t.$t("account.copy")))])])],1),a("mu-list-item",{attrs:{avatar:"",ripple:!1}},[a("mu-list-item-action",[a("div",{staticStyle:{width:"100%","text-align":"right"}},[t._v("卡号")])]),a("mu-list-item-title",[t._v(" "+t._s(t.legalInfo.bankNo))]),a("mu-list-item-action",[a("a",{staticClass:"copy",staticStyle:{color:"#2196f3"},attrs:{"data-clipboard-text":t.legalInfo.bankNo},on:{click:function(e){return t.copy(".copy")}}},[t._v(t._s(t.$t("account.copy")))])])],1),a("mu-list-item",{attrs:{avatar:"",ripple:!1}},[a("mu-list-item-action",[a("div",{staticStyle:{width:"100%","text-align":"right"}},[t._v("开户人")])]),a("mu-list-item-title",[t._v(" "+t._s(t.legalInfo.bankName))]),a("mu-list-item-action",[a("a",{staticClass:"copy2",staticStyle:{color:"#2196f3"},attrs:{"data-clipboard-text":t.legalInfo.bankName},on:{click:function(e){return t.copy(".copy2")}}},[t._v(t._s(t.$t("account.copy")))])])],1)],1)],1)]):t._e()]):t._e(),1===t.detail.status?a("div",[a("div",{staticStyle:{"line-height":"45px"}},[t._v("付款信息")]),t._v(" 已于"+t._s(t.detail.pay_time)+"付款 ")]):t._e(),a("div",{staticStyle:{height:"5px",background:"#f5f5f5",margin:"15px 0"}}),a("div",{staticClass:"fColor2",staticStyle:{"font-size":"14px","line-height":"36px"}},[t._v(t._s(t.getStatus(t.detail.status))),0===t.detail.status?a("span",[t._v("，请在30分钟内完成支付")]):t._e()]),0===t.detail.status&&t.time>0?a("div",{staticStyle:{"line-height":"45px"}},[a("span",[t._v("支付剩余")]),t._v(" "),a("a",{staticStyle:{color:"green","font-size":"24px"}},[t._v(t._s(t.time))]),t._v(" 秒 ")]):t._e(),0===t.detail.status&&t.time<0?a("div",[t._v(" 订单已超时 ")]):t._e(),0===t.detail.status?a("div",{staticStyle:{padding:"0 20px"}},[a("mu-text-field",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{width:"100%"},attrs:{readonly:"",label:t.$t("account.picture")},model:{value:""===t.pic?t.select:t.selected,callback:function(e){""===t.pic?t.select:t.selected=e},expression:"pic===''?select:selected"}},[a("mu-button",{attrs:{slot:"append",flat:"","full-width":"",color:"primary"},on:{click:t.choosePic},slot:"append"},[t._v(t._s(t.$t("account.choose"))+" ")])],1),a("input",{ref:"uploads",staticStyle:{display:"none"},attrs:{id:"picture",type:"file"},on:{change:t.uploadFile}})],1):t._e(),a("div",{staticStyle:{height:"80px"}}),0==t.detail.status?a("div",{staticStyle:{padding:"0 20px",width:"100%",position:"fixed",bottom:"60px"}},[a("mu-button",{attrs:{"full-width":"",color:"wechat"===t.detail.pay_way?"green":"alipay"===t.detail.pay_way?"blue":"red"},on:{click:t.payed}},[t._v(" 确定已付款 ")])],1):t._e(),0==t.detail.status?a("div",{staticStyle:{padding:"0 20px",width:"100%",position:"fixed",bottom:"20px"}},[a("mu-button",{attrs:{"full-width":""},on:{click:t.cancel}},[t._v(" 取消订单 ")])],1):t._e()],1)},l=[],o=(a("b680"),a("d044")),s=a.n(o),n=a("b311"),c=a.n(n),r=a("297b"),d={name:"IEPN",data:function(){return{activeStep:0,id:"",url:"",pic:"",code:"",share_url:"",select:"未上传",selected:"已上传",iepn:{},detail:{},legalInfo:{},lang:localStorage.getItem("lang"),interval:null,time:0,custorm_url:""}},mounted:function(){this.getWallets(),this.getDetail(),this.getCustrom()},methods:{choosePic:function(){this.$refs.uploads.dispatchEvent(new MouseEvent("click"))},getCustrom:function(){var t=this;this.$http({url:"/api/custorm?terminal=recharge",method:"get",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){t.custorm_url=e.data}))},uploadFile:function(t){var e=this,a=this.$loading(),i=new FileReader,l=t.target.files[0];i.readAsDataURL(l),i.onload=function(t){};var o=new FormData;o.append("file",l),this.$http.post("/api/upload",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.close();var i=t.data;"ok"==i.type?e.pic=i.message:e.$toast.fail(i.message)}))},getDetail:function(){var t=Object(r["a"])("id",window.location.href);this.id=t;var e=this;this.$http({url:"/api/legal_buy/detail?id="+t,method:"get",headers:{Authorization:localStorage.getItem("token")}}).then((function(t){e.detail=t.data.message;var a=Date.parse(e.detail.created_at);e.interval&&window.clearInterval(e.interval),e.interval=setInterval((function(){e.time=((18e5-((new Date).valueOf()-a))/1e3).toFixed(3)}),100),e.activeStep=e.detail.status+1}))},getWallets:function(){var t=this;this.$http({url:"/api/legalInfo",method:"get",data:{currency:3},headers:{Authorization:localStorage.getItem("token")}}).then((function(e){"ok"===e.data.type&&(t.legalInfo=e.data.message)}))},cancel:function(){var t=this;this.$confirm("确定要取消订单？","温馨提示",{okLabel:"确定",cancelLabel:"取消"}).then((function(e){var a=e.result;if(a){var i=t.$loading();t.$http({url:"/api/legal_buy/cancel",method:"post",data:{id:t.id},headers:{Authorization:localStorage.getItem("token")}}).then((function(e){i.close(),"ok"===e.data.type?t.$toast.success(e.data.message):t.$toast.fail(e.data.message)}))}}))},payed:function(){if(""!==this.pic){var t=this;this.$confirm("确定已付款，恶意点击可能会被冻结账户？","确认已付款",{okLabel:"确定",cancelLabel:"取消"}).then((function(e){var a=e.result;if(a){var i=t.$loading();t.$http({url:"/api/legal_buy/payed",method:"post",data:{id:t.id,pic:t.pic},headers:{Authorization:localStorage.getItem("token")}}).then((function(e){i.close(),"ok"===e.data.type&&t.getDetail()}))}}))}else this.$toast.fail("请上传付款截图")},getStatus:function(t){return-1===t?this.$t("c2c.canceled"):0===t?"已匹配到商家":1===t?"买家已付款，等待商户确认":2===t?"订单已完成":void 0},getPayway:function(t){return"alipay"===t||"wechat"===t?"支付宝":"bank"===t?"银行卡转账":void 0},gobuy:function(){window.localStorage.setItem("currentCurrency","IEPN"),window.localStorage.setItem("currentCurrencyID",18),this.$router.push("/exchange")},copy:function(t){var e=this,a=new c.a(t);console.log(a),a.on("success",(function(t){e.$toast.fail(e.$t("lay.copys")),t.clearSelection(),a.destroy()})),a.on("error",(function(t){e.$toast.fail(e.$t("lay.fcopy"))}))},qrcode:function(t){this.$refs.qrcode.innerHTML="",this.qrccode=new s.a("qrcode",{width:150,height:150,text:t})}}},u=d,p=(a("ed23"),a("2877")),h=Object(p["a"])(u,i,l,!1,null,null,null);e["default"]=h.exports},d68a:function(t,e,a){},ed23:function(t,e,a){"use strict";a("d68a")}}]);