(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d835f4"],{1505:function(t,e,a){},3439:function(t,e,a){"use strict";a("ebc7")},6303:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"boximg"},[a("div",{staticClass:"boxtitle"},[a("article",[a("span",[t._v(t._s(t.$t("lock.lockming")))])]),a("h2",[t._v(t._s(t.$t("lock.return")))])])]),a("div",{staticClass:"account"},[!t.list.length&&t.loaded?a("div",{staticClass:"fs14 d-flex-between-center"},[t._v(" "+t._s(t.$t("cuy.nomore"))+" ")]):t._e(),a("div",{staticClass:"mineCardList"},t._l(t.list,(function(e){return a("div",{key:e.id,staticClass:"mineCard contentBK"},[a("div",{staticClass:"topName"},[a("div",{staticClass:"topNamePay ft18"},[t._v(t._s(e.currency_name)+" "+t._s(t.$t("lockming.lockming")))])]),a("el-input",{staticClass:"green-border",attrs:{type:"number",placeholder:t.$t("lock.quantityPlaceholder",{quantity:e.pricemin})},model:{value:e.money,callback:function(a){t.$set(e,"money",a)},expression:"item.money"}},[a("template",{slot:"append"},[t._v(t._s(e.currency_name))])],2),a("div",{staticClass:"acbuyBtmL"},[a("em",[t._v(t._s(t.$t("lockming.minimumSingleTransaction")))])]),a("div",{staticClass:"acbuyBtmL flex between"},[a("em",{staticClass:"strong"},[t._v(t._s(e.pricemin))]),a("span",[t._v(t._s(e.currency_name))])]),a("div",{staticClass:"bottomCard flex between alcenter"},[a("div",{staticClass:"midType"},[a("div",{staticClass:"price"},[t._v(" "+t._s(e.rates)+"% ")]),a("div",{staticClass:"midTypetTitle mt5 gray9"},[t._v(" "+t._s(t.$t("lockming.dailyYield"))+" ")])]),a("div",{staticClass:"midDay"},[a("div",[t._v(" "+t._s(e.days)+" "),a("label",[t._v(t._s(t.$t("lock.day")))])]),a("span",{staticClass:"gray9"},[t._v(t._s(t.$t("lockming.lockUpPeriod")))])])]),a("div",{staticClass:"minerBtn flex between alcenter"},[a("div",{staticClass:"btn green-bg",on:{click:function(a){return t.buy(e)}}},[t._v(t._s(t.$t("lock.buy")))])])],1)})),0)]),a("account-records",{ref:"records"}),a("el-dialog",{attrs:{title:t.$t("lock.earn",{currency:"USDT"}),visible:t.visible,width:"700px",center:!0,"lock-scroll":!1},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticClass:"buyBox"},[a("div",{staticClass:"buyItem"},[a("span",[t._v(t._s(t.$t("lockming.dailyYield")))]),a("h1",[t._v(t._s(t.buyData.rates+"%"))])]),a("div",{staticClass:"buyItem"},[a("span",[t._v(t._s(t.$t("lockming.numberOfCoinsDeposited")))]),a("h1",[t._v(t._s(t.buyData.money)+t._s(t.buyData.currency_name))])]),a("div",{staticClass:"buyItem"},[a("span",[t._v(t._s(t.$t("lockming.estimatedIncome")))]),a("h1",[t._v(t._s((t.buyData.money*parseFloat(t.buyData.rates)/100).toFixed(8))+t._s(t.buyData.currency_name))])]),a("div",{staticClass:"buyItem"},[a("span",[t._v(t._s(t.$t("lockming.availableAssets")))]),a("h1",[t._v(t._s(t.balance))])])]),a("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v(t._s(t.$t("lock.cancel")))]),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)])],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"acbox contentBK"},[a("div",{staticClass:"acrecordTitle"},[t._v(" "+t._s(t.$t("lock.record"))+" ")]),a("div",{staticClass:"acrecordList pd20"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,"element-loading-background":"rgba(0, 0, 0, 0.8)","empty-text":t.$t("lock.more")}},[a("el-table-column",{attrs:{width:"120",align:"center",type:"index",label:t.$t("lock.number")}}),a("el-table-column",{attrs:{prop:"currency_name",label:t.$t("lock.currency")}}),a("el-table-column",{attrs:{prop:"money",label:t.$t("lock.quantity")}}),a("el-table-column",{attrs:{prop:"interest",label:t.$t("lock.interest")}}),a("el-table-column",{attrs:{prop:"time",label:t.$t("lock.time")}}),a("el-table-column",{attrs:{prop:"totime",label:t.$t("lock.etime")}}),a("el-table-column",{attrs:{label:t.$t("lock.status")},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.state?a("span",{staticClass:"tag tag-success"},[t._v(t._s(t.i18n.inProgress))]):2==e.row.state?a("span",{staticClass:"tag tag-error"},[t._v(t._s(t.i18n.redeemed))]):t._e()]}}])})],1),a("el-pagination",{attrs:{small:"",background:"",layout:"prev, pager, next","hide-on-single-page":"","page-size":t.limit,total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.getList}})],1)])},l=[],o={name:"AccountRecords",data(){return{list:[],loading:!1,total:0,page:1,limit:10}},computed:{i18n(){return this.$t("lockming")}},created(){this.getList()},methods:{reload(){this.page=1,this.getList()},getList(){this.loading=!0,this.$http({url:"/api/my_mining_machine",method:"get",params:{page:this.page,limit:this.limit},headers:{Authorization:localStorage.getItem("token")}}).then(t=>{const{message:e,type:a}=t.data;if("ok"===a){const{data:t=[],total:a}=e;this.list=t,this.total=a}}).finally(()=>{this.loading=!1})}}},c=o,r=(a("79c6"),a("2877")),m=Object(r["a"])(c,n,l,!1,null,"32471901",null),u=m.exports,d={name:"Lock",components:{AccountRecords:u},data(){return{quantity:0,visible:!1,income:{},list:[],loaded:!1,id:"",money:"",buyData:{},wallets:[]}},async created(){const t=layer.load();try{await this.getList(),layer.close(t),await this.getIncome(),await this.getWallets()}catch(e){}this.loaded=!0},computed:{balance(){const t=this.buyData.currency_name;if(!t)return 0;const e=this.wallets.find(e=>e.currency_name===t);return e.micro_balance||0},i18n(){return this.$t("lockming")}},methods:{amount(t){return/^[1-9]\d*(,\d{3})*(\.\d{1,10})?$|^0\.\d{1,20}$/.test(t)},getIncome(){return this.$http({url:"/api/get_mining_incomes",type:"GET",headers:{Authorization:localStorage.getItem("token")}}).then(t=>{const{data:e}=t;this.income=e.message||{}})},getList(){return this.$http({url:"/api/get_mining_machine_list",type:"GET",headers:{Authorization:localStorage.getItem("token")}}).then(t=>{const{data:e}=t,a=e.message||[];a.map(t=>(t.money="",t)),this.list=a})},buy(t){const{i18n:e,pid:a,uid:s}=this,{money:i,pricemin:n}=t;return this.buyData=t,console.log("buy",i),i&&this.amount(i)?i<Number(n)?this.$message.info(e.leastSingle+Number(n)):i>Number(this.balance)?this.$message.info(e.insufficientBalance):void(this.visible=!0):this.$message.info(e.p_number)},getWallets(){return this.$http({url:"/api/wallet/list",method:"post",headers:{Authorization:localStorage.getItem("token")}}).then(t=>{const e=t.data.message||{},a=e.micro_wallet||null;a&&(this.wallets=a.balance||[])})},all(){this.money=this.balance},submit(){const{i18n:t,pid:e,uid:a}=this,{money:s,pricemin:i,id:n}=this.buyData;if(!s||!this.amount(s))return this.$message.info(t.p_number);if(s<Number(i))return this.$message.info(t.leastSingle+Number(i));if(s>Number(this.balance))return this.$message.info(t.insufficientBalance);const l=this.$loading();this.$http({url:"/api/buy_mining_machine",method:"post",headers:{Authorization:localStorage.getItem("token")},data:{id:n,money:s}}).then(t=>{const e=t.data;"ok"===e.type?(this.$message.success(this.$t("success")),setTimeout(()=>{this.visible=!1,this.$refs.records.reload()},1e3)):this.$message.error(e.message)}).catch(t=>{this.$message.error(t.msg)}).finally(()=>{l.close()})}}},g=d,h=(a("3439"),Object(r["a"])(g,s,i,!1,null,"0f2cffbe",null));e["default"]=h.exports},"79c6":function(t,e,a){"use strict";a("1505")},ebc7:function(t,e,a){}}]);