(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.echarts~ecdca1e7"],{6179:function(t,e,n){"use strict";var i,r,s,a,o,h,u,d,c,f,l,p,_,g,m=n("6d8b"),v=n("4319"),y=n("80f0"),I=n("2b17"),x=n("2f45"),w=n("562e"),D=n("07fd"),M=n("e0d3"),N=n("861c"),R=n("b7d9"),A=n("ec6f"),E=Math.floor,O=m["z"],b=m["H"],L="undefined",V=-1,S="e\0\0",C={float:typeof Float64Array===L?Array:Float64Array,int:typeof Int32Array===L?Array:Int32Array,ordinal:Array,number:Array,time:Array},G=typeof Uint32Array===L?Array:Uint32Array,j=typeof Int32Array===L?Array:Int32Array,k=typeof Uint16Array===L?Array:Uint16Array,F=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx","_nameRepeatCount"],P=["_extent","_approximateExtent","_rawExtent"],T=function(){function t(t,e){this.type="list",this._count=0,this._rawCount=0,this._storage={},this._storageArr=[],this._nameList=[],this._idList=[],this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._rawExtent={},this._extent={},this._approximateExtent={},this._calculationInfo={},this.hasItemOption=!0,this.TRANSFERABLE_METHODS=["cloneShallow","downSample","lttbDownSample","map"],this.CHANGABLE_METHODS=["filterSelf","selectRange"],this.DOWNSAMPLE_METHODS=["downSample","lttbDownSample"],this.getRawIndex=o,t=t||["x","y"];for(var n={},i=[],r={},s=0;s<t.length;s++){var a=t[s],h=m["C"](a)?new w["a"]({name:a}):a instanceof w["a"]?a:new w["a"](a),u=h.name;h.type=h.type||"float",h.coordDim||(h.coordDim=u,h.coordDimIndex=0);var d=h.otherDims=h.otherDims||{};i.push(u),n[u]=h,h.index=s,h.createInvertedIndices&&(r[u]=[]),0===d.itemName&&(this._nameDimIdx=s,this._nameOrdinalMeta=h.ordinalMeta),0===d.itemId&&(this._idDimIdx=s,this._idOrdinalMeta=h.ordinalMeta)}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this._dimensionsSummary=Object(x["b"])(this),this._invertedIndicesMap=r,this.userOutput=this._dimensionsSummary.userOutput}return t.prototype.getDimension=function(t){return"number"!==typeof t&&(isNaN(t)||this._dimensionInfos.hasOwnProperty(t))||(t=this.dimensions[t]),t},t.prototype.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},t.prototype.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},t.prototype.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return i?i[e]:null},t.prototype.mapDimensionsAll=function(t){var e=this._dimensionsSummary,n=e.encode[t];return(n||[]).slice()},t.prototype.initData=function(t,e,n){var r=Object(A["e"])(t)||m["u"](t),s=r?new I["a"](t,this.dimensions.length):t;this._rawData=s;var a=s.getSource().sourceFormat;this._storage={},this._indices=null,this._dontMakeIdFromName=null!=this._idDimIdx||a===D["g"]||!!s.fillStorage,this._nameList=(e||[]).slice(),this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=i[a],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._dimValueGetterArrayRows=i.arrayRows,this._rawExtent={},this._initDataFromProvider(0,s.count()),s.pure&&(this.hasItemOption=!1)},t.prototype.getProvider=function(){return this._rawData},t.prototype.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i,!0)},t.prototype.appendValues=function(t,e){for(var n=this._storage,i=this.dimensions,s=i.length,o=this._rawExtent,h=this.count(),u=h+Math.max(t.length,e?e.length:0),d=0;d<s;d++){var f=i[d];o[f]||(o[f]=p()),a(n,this._dimensionInfos[f],u,!0)}for(var l=b(i,(function(t){return o[t]})),_=this._storageArr=b(i,(function(t){return n[t]})),g=[],m=h;m<u;m++){for(var v=m-h,y=0;y<s;y++){f=i[y];var I=this._dimValueGetterArrayRows(t[v]||g,f,v,y);_[y][m]=I;var x=l[y];I<x[0]&&(x[0]=I),I>x[1]&&(x[1]=I)}e&&(this._nameList[m]=e[v],this._dontMakeIdFromName||c(this,m))}this._rawCount=this._count=u,this._extent={},r(this)},t.prototype._initDataFromProvider=function(t,e,n){if(!(t>=e)){for(var i=this._rawData,s=this._storage,o=this.dimensions,h=o.length,u=this._dimensionInfos,d=this._nameList,f=this._idList,l=this._rawExtent,_=i.getSource().sourceFormat,g=_===D["f"],m=0;m<h;m++){var v=o[m];l[v]||(l[v]=p()),a(s,u[v],e,n)}var y=this._storageArr=b(o,(function(t){return s[t]})),I=b(o,(function(t){return l[t]}));if(i.fillStorage)i.fillStorage(t,e,y,I);else for(var x=[],w=t;w<e;w++){x=i.getItem(w,x);for(var N=0;N<h;N++){v=o[N];var R=y[N],A=this._dimValueGetter(x,v,w,N);R[w]=A;var E=I[N];A<E[0]&&(E[0]=A),A>E[1]&&(E[1]=A)}if(g&&!i.pure&&x){var O=x.name;null==d[w]&&null!=O&&(d[w]=Object(M["e"])(O,null));var L=x.id;null==f[w]&&null!=L&&(f[w]=Object(M["e"])(L,null))}this._dontMakeIdFromName||c(this,w)}!i.persistent&&i.clean&&i.clean(),this._rawCount=this._count=e,this._extent={},r(this)}},t.prototype.count=function(){return this._count},t.prototype.getIndices=function(){var t,e=this._indices;if(e){var n=e.constructor,i=this._count;if(n===Array){t=new n(i);for(var r=0;r<i;r++)t[r]=e[r]}else t=new n(e.buffer,0,i)}else{n=s(this);t=new n(this.count());for(r=0;r<t.length;r++)t[r]=r}return t},t.prototype.getByDimIdx=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storageArr[t];return n?n[this.getRawIndex(e)]:NaN},t.prototype.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage[t];return n?n[this.getRawIndex(e)]:NaN},t.prototype.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];return n?n[e]:NaN},t.prototype.getValues=function(t,e){var n=[];m["t"](t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},t.prototype.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=0,i=e.length;n<i;n++)if(isNaN(this.get(e[n],t)))return!1;return!0},t.prototype.getDataExtent=function(t){t=this.getDimension(t);var e=this._storage[t],n=p();if(!e)return n;var i,r=this.count(),s=!this._indices;if(s)return this._rawExtent[t].slice();if(i=this._extent[t],i)return i.slice();i=n;for(var a=i[0],o=i[1],h=0;h<r;h++){var u=this.getRawIndex(h),d=e[u];d<a&&(a=d),d>o&&(o=d)}return i=[a,o],this._extent[t]=i,i},t.prototype.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},t.prototype.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},t.prototype.getCalculationInfo=function(t){return this._calculationInfo[t]},t.prototype.setCalculationInfo=function(t,e){O(t)?m["m"](this._calculationInfo,t):this._calculationInfo[t]=e},t.prototype.getSum=function(t){var e=this._storage[t],n=0;if(e)for(var i=0,r=this.count();i<r;i++){var s=this.get(t,i);isNaN(s)||(n+=s)}return n},t.prototype.getMedian=function(t){var e=[];this.each(t,(function(t){isNaN(t)||e.push(t)}));var n=e.sort((function(t,e){return t-e})),i=this.count();return 0===i?0:i%2===1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},t.prototype.rawIndexOf=function(t,e){var n=t&&this._invertedIndicesMap[t];var i=n[e];return null==i||isNaN(i)?V:i},t.prototype.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},t.prototype.indexOfRawIndex=function(t){if(t>=this._rawCount||t<0)return-1;if(!this._indices)return t;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;var i=0,r=this._count-1;while(i<=r){var s=(i+r)/2|0;if(e[s]<t)i=s+1;else{if(!(e[s]>t))return s;r=s-1}}return-1},t.prototype.indicesOfNearest=function(t,e,n){var i=this._storage,r=i[t],s=[];if(!r)return s;null==n&&(n=1/0);for(var a=1/0,o=-1,h=0,u=0,d=this.count();u<d;u++){var c=this.getRawIndex(u),f=e-r[c],l=Math.abs(f);l<=n&&((l<a||l===a&&f>=0&&o<0)&&(a=l,o=f,h=0),f===o&&(s[h++]=u))}return s.length=h,s},t.prototype.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},t.prototype.getName=function(t){var e=this.getRawIndex(t),n=this._nameList[e];return null==n&&null!=this._nameDimIdx&&(n=d(this,this._nameDimIdx,this._nameOrdinalMeta,e)),null==n&&(n=""),n},t.prototype.getId=function(t){return u(this,this.getRawIndex(t))},t.prototype.each=function(t,e,n,i){var r=this;if(this._count){"function"===typeof t&&(i=n,n=e,e=t,t=[]);var s=n||i||this,a=b(f(t),this.getDimension,this);0;for(var o=a.length,h=b(a,(function(t){return r._dimensionInfos[t].index})),u=this._storageArr,d=0,c=this.count();d<c;d++){var l=this.getRawIndex(d);switch(o){case 0:e.call(s,d);break;case 1:e.call(s,u[h[0]][l],d);break;case 2:e.call(s,u[h[0]][l],u[h[1]][l],d);break;default:for(var p=0,_=[];p<o;p++)_[p]=u[h[p]][l];_[p]=d,e.apply(s,_)}}}},t.prototype.filterSelf=function(t,e,n,i){var r=this;if(this._count){"function"===typeof t&&(i=n,n=e,e=t,t=[]);var a=n||i||this,u=b(f(t),this.getDimension,this);0;for(var d=this.count(),c=s(this),l=new c(d),p=[],_=u.length,g=0,m=b(u,(function(t){return r._dimensionInfos[t].index})),v=m[0],y=this._storageArr,I=0;I<d;I++){var x=void 0,w=this.getRawIndex(I);if(0===_)x=e.call(a,I);else if(1===_){var D=y[v][w];x=e.call(a,D,I)}else{for(var M=0;M<_;M++)p[M]=y[m[M]][w];p[M]=I,x=e.apply(a,p)}x&&(l[g++]=w)}return g<d&&(this._indices=l),this._count=g,this._extent={},this.getRawIndex=this._indices?h:o,this}},t.prototype.selectRange=function(t){var e=this,n=this._count;if(n){var i=[];for(var r in t)t.hasOwnProperty(r)&&i.push(r);0;var a=i.length;if(a){var u=this.count(),d=s(this),c=new d(u),f=0,l=i[0],p=b(i,(function(t){return e._dimensionInfos[t].index})),_=t[l][0],g=t[l][1],m=this._storageArr,v=!1;if(!this._indices){var y=0;if(1===a){for(var I=m[p[0]],x=0;x<n;x++){var w=I[x];(w>=_&&w<=g||isNaN(w))&&(c[f++]=y),y++}v=!0}else if(2===a){I=m[p[0]];var D=m[p[1]],M=t[i[1]][0],N=t[i[1]][1];for(x=0;x<n;x++){w=I[x];var R=D[x];(w>=_&&w<=g||isNaN(w))&&(R>=M&&R<=N||isNaN(R))&&(c[f++]=y),y++}v=!0}}if(!v)if(1===a)for(x=0;x<u;x++){var A=this.getRawIndex(x);w=m[p[0]][A];(w>=_&&w<=g||isNaN(w))&&(c[f++]=A)}else for(x=0;x<u;x++){for(var E=!0,O=(A=this.getRawIndex(x),0);O<a;O++){var L=i[O];w=m[p[O]][A];(w<t[L][0]||w>t[L][1])&&(E=!1)}E&&(c[f++]=this.getRawIndex(x))}return f<u&&(this._indices=c),this._count=f,this._extent={},this.getRawIndex=this._indices?h:o,this}}},t.prototype.mapArray=function(t,e,n,i){"function"===typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,(function(){r.push(e&&e.apply(this,arguments))}),n),r},t.prototype.map=function(t,e,n,i){var r=n||i||this,s=b(f(t),this.getDimension,this);var a=l(this,s),u=a._storage;a._indices=this._indices,a.getRawIndex=a._indices?h:o;for(var d=[],c=s.length,p=this.count(),_=[],g=a._rawExtent,m=0;m<p;m++){for(var v=0;v<c;v++)_[v]=this.get(s[v],m);_[c]=m;var y=e&&e.apply(r,_);if(null!=y){"object"!==typeof y&&(d[0]=y,y=d);for(var I=this.getRawIndex(m),x=0;x<y.length;x++){var w=s[x],D=y[x],M=g[w],N=u[w];N&&(N[I]=D),D<M[0]&&(M[0]=D),D>M[1]&&(M[1]=D)}}}return a},t.prototype.downSample=function(t,e,n,i){for(var r=l(this,[t]),a=r._storage,o=[],u=E(1/e),d=a[t],c=this.count(),f=r._rawExtent[t],p=new(s(this))(c),_=0,g=0;g<c;g+=u){u>c-g&&(u=c-g,o.length=u);for(var m=0;m<u;m++){var v=this.getRawIndex(g+m);o[m]=d[v]}var y=n(o),I=this.getRawIndex(Math.min(g+i(o,y)||0,c-1));d[I]=y,y<f[0]&&(f[0]=y),y>f[1]&&(f[1]=y),p[_++]=I}return r._count=_,r._indices=p,r.getRawIndex=h,r},t.prototype.lttbDownSample=function(t,e){var n,i,r,a=l(this,[]),o=a._storage,u=o[t],d=this.count(),c=new(s(this))(d),f=0,p=E(1/e),_=this.getRawIndex(0);c[f++]=_;for(var g=1;g<d-1;g+=p){for(var m=Math.min(g+p,d-1),v=Math.min(g+2*p,d),y=(v+m)/2,I=0,x=m;x<v;x++){var w=this.getRawIndex(x),D=u[w];isNaN(D)||(I+=D)}I/=v-m;var M=g,N=Math.min(g+p,d),R=g-1,A=u[_];n=-1,r=M;for(x=M;x<N;x++){w=this.getRawIndex(x),D=u[w];isNaN(D)||(i=Math.abs((R-y)*(D-A)-(R-x)*(I-A)),i>n&&(n=i,r=w))}c[f++]=r,_=r}return c[f++]=this.getRawIndex(d-1),a._count=f,a._indices=c,a.getRawIndex=h,a},t.prototype.getItemModel=function(t){var e=this.hostModel,n=this.getRawDataItem(t);return new v["a"](n,e,e&&e.ecModel)},t.prototype.diff=function(t){var e=this;return new y["a"](t?t.getIndices():[],this.getIndices(),(function(e){return u(t,e)}),(function(t){return u(e,t)}))},t.prototype.getVisual=function(t){var e=this._visual;return e&&e[t]},t.prototype.setVisual=function(t,e){this._visual=this._visual||{},O(t)?m["m"](this._visual,t):this._visual[t]=e},t.prototype.getItemVisual=function(t,e){var n=this._itemVisuals[t],i=n&&n[e];return null==i?this.getVisual(e):i},t.prototype.hasItemVisual=function(){return this._itemVisuals.length>0},t.prototype.ensureUniqueItemVisual=function(t,e){var n=this._itemVisuals,i=n[t];i||(i=n[t]={});var r=i[e];return null==r&&(r=this.getVisual(e),m["t"](r)?r=r.slice():O(r)&&(r=m["m"]({},r)),i[e]=r),r},t.prototype.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{};this._itemVisuals[t]=i,O(e)?m["m"](i,e):i[e]=n},t.prototype.clearAllVisual=function(){this._visual={},this._itemVisuals=[]},t.prototype.setLayout=function(t,e){if(O(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},t.prototype.getLayout=function(t){return this._layout[t]},t.prototype.getItemLayout=function(t){return this._itemLayouts[t]},t.prototype.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?m["m"](this._itemLayouts[t]||{},e):e},t.prototype.clearItemLayouts=function(){this._itemLayouts.length=0},t.prototype.setItemGraphicEl=function(t,e){var n=this.hostModel;if(e){var i=Object(N["a"])(e);i.dataIndex=t,i.dataType=this.dataType,i.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(_,e)}this._graphicEls[t]=e},t.prototype.getItemGraphicEl=function(t){return this._graphicEls[t]},t.prototype.eachItemGraphicEl=function(t,e){m["k"](this._graphicEls,(function(n,i){n&&t&&t.call(e,n,i)}))},t.prototype.cloneShallow=function(e){if(!e){var n=b(this.dimensions,this.getDimensionInfo,this);e=new t(n,this.hostModel)}if(e._storage=this._storage,e._storageArr=this._storageArr,g(e,this),this._indices){var i=this._indices.constructor;if(i===Array){var r=this._indices.length;e._indices=new i(r);for(var s=0;s<r;s++)e._indices[s]=this._indices[s]}else e._indices=new i(this._indices)}else e._indices=null;return e.getRawIndex=e._indices?h:o,e},t.prototype.wrapMethod=function(t,e){var n=this[t];"function"===typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(m["S"](arguments)))})},t.internalField=function(){function e(t,e,n,i){return Object(R["d"])(t[i],this._dimensionInfos[e])}function n(t){var e=t.constructor;return e===Array?t.slice():new e(t)}i={arrayRows:e,objectRows:function(t,e,n,i){return Object(R["d"])(t[e],this._dimensionInfos[e])},keyedColumns:e,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&Object(M["m"])(t)&&(this.hasItemOption=!0),Object(R["d"])(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},r=function(t){var e=t._invertedIndicesMap;m["k"](e,(function(n,i){var r=t._dimensionInfos[i],s=r.ordinalMeta;if(s){n=e[i]=new j(s.categories.length);for(var a=0;a<n.length;a++)n[a]=V;for(a=0;a<t._count;a++)n[t.get(i,a)]=a}}))},d=function(t,e,n,i){var r,s=t._storageArr[e];return s&&(r=s[i],n&&n.categories.length&&(r=n.categories[r])),Object(M["e"])(r,null)},s=function(t){return t._rawCount>65535?G:k},a=function(t,e,n,i){var r=C[e.type],s=e.name;if(i){var a=t[s],o=a&&a.length;if(o!==n){for(var h=new r(n),u=0;u<o;u++)h[u]=a[u];t[s]=h}}else t[s]=new r(n)},o=function(t){return t},h=function(t){return t<this._count&&t>=0?this._indices[t]:-1},u=function(t,e){var n=t._idList[e];return null==n&&null!=t._idDimIdx&&(n=d(t,t._idDimIdx,t._idOrdinalMeta,e)),null==n&&(n=S+e),n},f=function(t){return m["t"](t)||(t=null!=t?[t]:[]),t},function(t,e){for(var n=0;n<e.length;n++)t._dimensionInfos[e[n]]||console.error("Unkown dimension "+e[n])},l=function(e,i){var r=e.dimensions,s=new t(b(r,e.getDimensionInfo,e),e.hostModel);g(s,e);for(var a=s._storage={},o=e._storage,h=s._storageArr=[],u=0;u<r.length;u++){var d=r[u];o[d]&&(m["r"](i,d)>=0?(a[d]=n(o[d]),s._rawExtent[d]=p(),s._extent[d]=null):a[d]=o[d],h.push(a[d]))}return s},p=function(){return[1/0,-1/0]},_=function(t){var e=Object(N["a"])(t),n=Object(N["a"])(this);e.seriesIndex=n.seriesIndex,e.dataIndex=n.dataIndex,e.dataType=n.dataType},g=function(t,e){m["k"](F.concat(e.__wrappedMethods||[]),(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t.__wrappedMethods=e.__wrappedMethods,m["k"](P,(function(n){t[n]=m["d"](e[n])})),t._calculationInfo=m["m"]({},e._calculationInfo)},c=function(t,e){var n=t._nameList,i=t._idList,r=t._nameDimIdx,s=t._idDimIdx,a=n[e],o=i[e];if(null==a&&null!=r&&(n[e]=a=d(t,r,t._nameOrdinalMeta,e)),null==o&&null!=s&&(i[e]=o=d(t,s,t._idOrdinalMeta,e)),null==o&&null!=a){var h=t._nameRepeatCount,u=h[a]=(h[a]||0)+1;o=a,u>1&&(o+="__ec__"+u),i[e]=o}}}(),t}();e["a"]=T},7368:function(t,e,n){"use strict";var i=n("6d8b");function r(t){return"_EC_"+t}var s=function(){function t(t){this.type="graph",this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this._directed=t||!1}return t.prototype.isDirected=function(){return this._directed},t.prototype.addNode=function(t,e){t=null==t?""+e:""+t;var n=this._nodesMap;if(!n[r(t)]){var i=new a(t,e);return i.hostGraph=this,this.nodes.push(i),n[r(t)]=i,i}},t.prototype.getNodeByIndex=function(t){var e=this.data.getRawIndex(t);return this.nodes[e]},t.prototype.getNodeById=function(t){return this._nodesMap[r(t)]},t.prototype.addEdge=function(t,e,n){var i=this._nodesMap,s=this._edgesMap;if("number"===typeof t&&(t=this.nodes[t]),"number"===typeof e&&(e=this.nodes[e]),t instanceof a||(t=i[r(t)]),e instanceof a||(e=i[r(e)]),t&&e){var h=t.id+"-"+e.id,u=new o(t,e,n);return u.hostGraph=this,this._directed&&(t.outEdges.push(u),e.inEdges.push(u)),t.edges.push(u),t!==e&&e.edges.push(u),this.edges.push(u),s[h]=u,u}},t.prototype.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t);return this.edges[e]},t.prototype.getEdge=function(t,e){t instanceof a&&(t=t.id),e instanceof a&&(e=e.id);var n=this._edgesMap;return this._directed?n[t+"-"+e]:n[t+"-"+e]||n[e+"-"+t]},t.prototype.eachNode=function(t,e){for(var n=this.nodes,i=n.length,r=0;r<i;r++)n[r].dataIndex>=0&&t.call(e,n[r],r)},t.prototype.eachEdge=function(t,e){for(var n=this.edges,i=n.length,r=0;r<i;r++)n[r].dataIndex>=0&&n[r].node1.dataIndex>=0&&n[r].node2.dataIndex>=0&&t.call(e,n[r],r)},t.prototype.breadthFirstTraverse=function(t,e,n,i){if(e instanceof a||(e=this._nodesMap[r(e)]),e){for(var s="out"===n?"outEdges":"in"===n?"inEdges":"edges",o=0;o<this.nodes.length;o++)this.nodes[o].__visited=!1;if(!t.call(i,e,null)){var h=[e];while(h.length){var u=h.shift(),d=u[s];for(o=0;o<d.length;o++){var c=d[o],f=c.node1===u?c.node2:c.node1;if(!f.__visited){if(t.call(i,f,u))return;h.push(f),f.__visited=!0}}}}}},t.prototype.update=function(){for(var t=this.data,e=this.edgeData,n=this.nodes,i=this.edges,r=0,s=n.length;r<s;r++)n[r].dataIndex=-1;for(r=0,s=t.count();r<s;r++)n[t.getRawIndex(r)].dataIndex=r;e.filterSelf((function(t){var n=i[e.getRawIndex(t)];return n.node1.dataIndex>=0&&n.node2.dataIndex>=0}));for(r=0,s=i.length;r<s;r++)i[r].dataIndex=-1;for(r=0,s=e.count();r<s;r++)i[e.getRawIndex(r)].dataIndex=r},t.prototype.clone=function(){for(var e=new t(this._directed),n=this.nodes,i=this.edges,r=0;r<n.length;r++)e.addNode(n[r].id,n[r].dataIndex);for(r=0;r<i.length;r++){var s=i[r];e.addEdge(s.node1.id,s.node2.id,s.dataIndex)}return e},t}(),a=function(){function t(t,e){this.inEdges=[],this.outEdges=[],this.edges=[],this.dataIndex=-1,this.id=null==t?"":t,this.dataIndex=null==e?-1:e}return t.prototype.degree=function(){return this.edges.length},t.prototype.inDegree=function(){return this.inEdges.length},t.prototype.outDegree=function(){return this.outEdges.length},t.prototype.getModel=function(t){if(!(this.dataIndex<0)){var e=this.hostGraph,n=e.data.getItemModel(this.dataIndex);return n.getModel(t)}},t.prototype.getAdjacentDataIndices=function(){for(var t={edge:[],node:[]},e=0;e<this.edges.length;e++){var n=this.edges[e];n.dataIndex<0||(t.edge.push(n.dataIndex),t.node.push(n.node1.dataIndex,n.node2.dataIndex))}return t},t}(),o=function(){function t(t,e,n){this.dataIndex=-1,this.node1=t,this.node2=e,this.dataIndex=null==n?-1:n}return t.prototype.getModel=function(t){if(!(this.dataIndex<0)){var e=this.hostGraph,n=e.edgeData.getItemModel(this.dataIndex);return n.getModel(t)}},t.prototype.getAdjacentDataIndices=function(){return{edge:[this.dataIndex],node:[this.node1.dataIndex,this.node2.dataIndex]}},t}();function h(t,e){return{getValue:function(n){var i=this[t][e];return i.get(i.getDimension(n||"value"),this.dataIndex)},setVisual:function(n,i){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,n,i)},getVisual:function(n){return this[t][e].getItemVisual(this.dataIndex,n)},setLayout:function(n,i){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,n,i)},getLayout:function(){return this[t][e].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[t][e].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[t][e].getRawIndex(this.dataIndex)}}}i["K"](a,h("hostGraph","data")),i["K"](o,h("hostGraph","edgeData")),e["a"]=s}}]);