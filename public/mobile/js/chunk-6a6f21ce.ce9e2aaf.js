(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a6f21ce"],{"68a2":function(t,e,i){"use strict";i("fb8f")},bfbb:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-settings"},[a("mu-container",{staticClass:"card-radius"},[a("mu-card",{staticStyle:{width:"100%","max-width":"375px",margin:"0 auto","text-align":"left"},attrs:{raised:!1}},[a("mu-card-header",{attrs:{left:"",title:t.account_num,"sub-title":"ID: "+t.addPreZero(t.user_id)}},[a("mu-avatar",{attrs:{slot:"avatar",color:"primary"},slot:"avatar"},[a("mu-icon",{attrs:{color:"#fff",value:":icon-wode"}})],1),a("div",{staticStyle:{float:"right",height:"40px",display:"flex","flex-direction":"row","align-items":"center"},attrs:{slot:"default"},slot:"default"},[a("mu-button",{attrs:{icon:"",color:"primary"},on:{click:function(e){return t.$router.push("/")}}},[a("mu-icon",{attrs:{size:"24",value:":icon-ico_home"}})],1)],1)],1),a("mu-card-media",{attrs:{title:t.$t("header.center"),"sub-title":t.$t("welcome",{name:t.$store.state.web.name})}},[a("img",{attrs:{src:i("f85b")}})]),t._e()],1),a("mu-list",{staticClass:"my-settings"},[a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:t.named}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-icon"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("shop.truename")))]),a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:t.getNamed()}})],1)],1),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){return t.$router.push("/share")}}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-yaoqinghaoyou"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("sgr.invite")))])],1),a("mu-list-item",{staticClass:"hide",attrs:{button:"",ripple:!0},on:{click:t.openChild}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"secondary",value:":icon-gengduo1"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("invite.mypromotion")))])],1),t._e(),t._e(),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){return t.$router.push("/feedback")}}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-info"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("miscro.complaint")))])],1),a("mu-divider"),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){return t.$router.push("/forget")}}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-mima"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("lgpwd.setpwd")))])],1),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){return t.$router.push("/forset")}}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-mima"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("pass6")))])],1),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:function(e){return t.$router.push("/kefu")}}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-weibiaoti-"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("home.kefu")))])],1),a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:t.logout}},[a("mu-list-item-action",[a("mu-icon",{attrs:{color:"primary",value:":icon-tuichudenglu1"}})],1),a("mu-list-item-title",[t._v(t._s(t.$t("header.out")))])],1),t.downloadUrl?a("mu-list-item",{attrs:{button:"",ripple:!0},on:{click:t.doensapp}},[a("mu-list-item-action",[a("svg",{staticClass:"icon",attrs:{t:"1624184011563",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2409",width:"128",height:"128"}},[a("path",{attrs:{d:"M766.662999 0.086103H256.093942a67.486338 67.486338 0 0 0-50.73111 21.456002 71.34935 71.34935 0 0 0-19.082344 52.872055l1.023931 875.600334S180.928123 1023.970213 253.906454 1023.970213h516.154133c18.337667 0.558508 36.070284-6.795176 48.869417-20.245902 12.845675-13.450725 19.640852-31.788393 18.756548-50.591482V74.41416a71.535519 71.535519 0 0 0-19.547767-53.244394A67.672508 67.672508 0 0 0 766.662999 0.039561zM453.340219 45.325221h139.626907v18.430752h-139.626907V45.325221z m-39.886753 0a10.239307 10.239307 0 0 1 10.983983 9.215376 11.263237 11.263237 0 0 1-10.983983 9.30846 11.263237 11.263237 0 0 1-10.937441-9.30846 10.51856 10.51856 0 0 1 4.002638-7.307141 9.960053 9.960053 0 0 1 7.912191-1.861693h-0.930846zM522.222827 994.229682a35.092896 35.092896 0 0 1-32.579612-22.061052 36.768419 36.768419 0 0 1 7.446768-39.374787 34.441304 34.441304 0 0 1 38.304315-7.912192c13.124929 5.585076 21.735255 18.756548 21.735255 33.324289 0 19.454682-14.986621 35.37215-33.929338 36.023742H522.222827z m270.038438-98.483512H230.774929V87.306378h562.417182l-0.977388 808.439792z m-147.213302-380.25061H558.246569v-215.025437H471.119379v215.025437H382.549377l132.040512 194.919162 130.411531-194.919162z","p-id":"2410",fill:"#1296db"}})])]),a("mu-list-item-title",[t._v(t._s(t.$t("app_down")))])],1):t._e()],1)],1),a("mu-dialog",{attrs:{width:"360",transition:"slide-bottom",fullscreen:"",open:t.openName},on:{"update:open":function(e){t.openName=e}}},[a("mu-appbar",{attrs:{color:"primary",title:t.$t("shop.truename")}},[a("mu-button",{attrs:{slot:"right",icon:""},on:{click:function(e){t.openName=!1}},slot:"right"},[a("mu-icon",{attrs:{value:":icon-guanbi"}})],1)],1),a("div",{staticStyle:{padding:"24px"}},[a("mu-text-field",{attrs:{"full-width":"",label:t.$t("auth.truename")},model:{value:t.truename,callback:function(e){t.truename=e},expression:"truename"}}),a("mu-text-field",{attrs:{"full-width":"",label:t.$t("auth.truenum")},model:{value:t.idcard,callback:function(e){t.idcard=e},expression:"idcard"}}),a("div",{staticClass:"currency_title",staticStyle:{margin:"0"}},[t._v(t._s(t.$t("auth.note")))]),a("div",{staticClass:"flex alcenter mb15 mt15"},[a("div",{staticClass:"flex1 talc"},[""===t.pic1?a("mu-icon",{attrs:{size:"72",color:"#eee",value:":icon-jia"},on:{click:t.upload1}}):t._e(),""!==t.pic1?a("mu-avatar",{attrs:{size:"72"},on:{click:t.upload1}},[a("img",{attrs:{src:t.pic1}})]):t._e(),a("input",{ref:"uploadprev",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.uploadFile1}})],1),a("div",{staticClass:"flex1 talc"},[""===t.pic2?a("mu-icon",{ref:"uploadback",attrs:{size:"72",color:"#eee",value:":icon-jia"},on:{click:t.upload2}}):t._e(),""!==t.pic2?a("mu-avatar",{attrs:{size:"72"},on:{click:t.upload2}},[a("img",{attrs:{src:t.pic2}})]):t._e(),a("input",{ref:"uploadback",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.uploadFile2}})],1)]),a("div",[a("mu-button",{attrs:{"full-width":"",color:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("auth.up")))])],1)],1)],1),a("mu-dialog",{attrs:{width:"360",transition:"slide-bottom",fullscreen:"",open:t.openExtension},on:{"update:open":function(e){t.openExtension=e}}},[a("mu-appbar",{attrs:{color:"primary",title:t.$t("invite.mypromotion")}},[a("mu-button",{attrs:{slot:"right",icon:""},on:{click:function(e){t.openExtension=!1}},slot:"right"},[a("mu-icon",{attrs:{value:":icon-guanbi"}})],1)],1),a("div",{staticStyle:{"box-sizing":"border-box",height:"calc(100% - 56px)",overflow:"auto",padding:"10px"}},[a("mu-list",t._l(t.users,(function(e,i){return a("mu-list-item",{staticStyle:{"border-bottom":"1px solid #f5f5f5"},attrs:{ripple:!1}},[a("mu-list-item-action",[a("mu-badge",{attrs:{color:"lightBlueA700",content:i+1}})],1),a("mu-list-item-title",{staticStyle:{"font-size":"14px"}},[t._v(t._s(e.account))]),a("mu-list-item-action",{staticStyle:{"min-width":"120px!important"}},[a("i",{staticClass:"currency_title"},[t._v(t._s(e.create_date))])])],1)})),1)],1)],1)],1)},o=[],s=i("5530"),n=i("ed46"),r=i("2f62"),l={components:{BackHeader:n["a"]},data:function(){var t=window.localStorage.getItem("user_id");return{openName:!1,openExtension:!1,truename:"",idcard:"",user_id:t,review_status:-1,pic1:"",pic2:"",account_num:window.localStorage.getItem("accountNum"),users:[],is_seller:!1,custorm_url:"",downloadUrl:""}},mounted:function(){this.loadCenter(),this.getCustrom(),this.getDownloadUrl(),this.getWeb(this)},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["getWeb"])),{},{getDownloadUrl:function(){var t=this;this.$http({url:"/app/download"}).then((function(e){var i=e.status,a=e.data;if(200===i){var o=a.app_direct,s=void 0===o?"":o;t.downloadUrl=s}}))},doensapp:function(){window.open(this.downloadUrl,"_blank")},goShop:function(){window.location.href="fiat/shop_fiatrad.html"},goApply:function(){window.location.href=this.custorm_url},addPreZero:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7,i=(t+"").length,a="",o=0;o<e-i;o++)a+="0";return"1"+a+t},loadCenter:function(){var t=this;this.$http({method:"get",url:"/api/user/center",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){"ok"===e.data.type&&(t.review_status=e.data.message.review_status,t.is_seller=e.data.message.is_seller)}))},openChild:function(){var t=this.$loading(),e=this;this.$http({method:"get",url:"/api/user/extension",headers:{Authorization:localStorage.getItem("token")}}).then((function(i){t.close(),"ok"===i.data.type&&(e.openExtension=!0,e.users=i.data.message)}))},upload1:function(){this.$refs.uploadprev.dispatchEvent(new MouseEvent("click"))},upload2:function(){this.$refs.uploadback.dispatchEvent(new MouseEvent("click"))},uploadFile1:function(t){var e=this,i=this.$loading(),a=new FileReader,o=t.target.files[0];a.readAsDataURL(o),a.onload=function(t){};var s=new FormData;s.append("file",o),this.$http.post("/api/upload",s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){i.close();var a=t.data;"ok"===a.type?e.pic1=a.message.toLocaleLowerCase():e.$toast.fail(a.message)}))},uploadFile2:function(t){var e=this,i=this.$loading(),a=new FileReader,o=t.target.files[0];a.readAsDataURL(o),a.onload=function(t){};var s=new FormData;s.append("file",o),this.$http.post("/api/upload",s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){i.close();var a=t.data;"ok"===a.type?e.pic2=a.message.toLocaleLowerCase():e.$toast.fail(a.message)}))},submit:function(){var t=this.$loading(),e=this;this.$http({url:"/api/user/real_name",method:"post",data:{name:this.truename,card_id:this.idcard,front_pic:this.pic1,reverse_pic:this.pic2},headers:{Authorization:localStorage.getItem("token")}}).then((function(i){t.close(),"ok"===i.data.type?(e.$toast.success(i.data.message),e.loadCenter()):e.$toast.fail(i.data.message)}))},named:function(){0===this.review_status&&(this.openName=!0),2!==this.review_status?1===this.review_status&&this.$toast.message(this.$t("security.auing")):this.$toast.success(this.$t("auth2.complete"))},getCustrom:function(){var t=this;this.$http({url:"/api/custorm?terminal=recharge",method:"get",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){t.custorm_url=e.data}))},getNamed:function(){return 0===this.review_status?":icon-weishiming":1===this.review_status?":icon-dengdai":2===this.review_status?":icon-renzheng":void 0},logout:function(){var t=this,e=this;this.$confirm(this.$t("header.out")+"?",this.$t("auth2.reminder"),{type:"none",okLabel:this.$t("lay.sure"),cancelLabel:this.$t("lay.ceil")}).then((function(i){var a=i.result;a&&(localStorage.removeItem("user_id"),localStorage.removeItem("accountNum"),e.$toast(t.$t("success")),e.$router.push("/"))}))}})},u=l,c=(i("68a2"),i("2877")),m=Object(c["a"])(u,a,o,!1,null,null,null);e["default"]=m.exports},ed46:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("mu-container",[i("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"day"===t.mode?"#ffffff":"#39393a","z-depth":"0"}},[i("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){return t.$router.push("/")}},slot:"left"},[i("mu-icon",{attrs:{size:"18",value:":icon-fanhui1"}})],1),i("h5",{staticStyle:{"font-weight":"normal"},attrs:{slot:"default"},slot:"default"},[t._v(t._s(t.title))]),i("mu-button",{attrs:{slot:"right",icon:""},on:{click:t.logout},slot:"right"},[i("mu-icon",{attrs:{size:"22",value:":icon-tuichu"}})],1)],1)],1)],1)},o=[],s={props:{title:{type:String,default:"hello"}},data:function(){return{mode:localStorage.getItem("mode")}},methods:{logout:function(){localStorage.removeItem("token"),localStorage.removeItem("user_id"),this.$router.push("/login")}}},n=s,r=i("2877"),l=Object(r["a"])(n,a,o,!1,null,null,null);e["a"]=l.exports},f85b:function(t,e,i){t.exports=i.p+"img/img_1.4c57f487.png"},fb8f:function(t,e,i){}}]);