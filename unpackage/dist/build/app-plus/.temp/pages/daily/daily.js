require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([29],{19:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(20));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},20:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(22),i=s.n(a),n=s(23);var c=function(t){s(21)},r=s(0)(i.a,n.a,c,null,null);e.default=r.exports},21:function(t,e){},22:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},n=s(3),c=(a=n)&&a.__esModule?a:{default:a},r=s(4);e.default={data:function(){return{baseurl:"",itemList:[],itemList1:[]}},computed:i({},(0,r.mapState)(["user"])),methods:{islogin:function(){null!==this.user.user||t.reLaunch({url:"../../pages/manage/login"})},category:function(e){t.navigateTo({url:"../../pages/train/tranInfo?lifecat="+JSON.stringify(e)})},msglist:function(){t.navigateTo({url:"../../pages/train/msglist"})},getflash:function(){var e=this;t.request({url:c.default.hosturl+"index/getflash.html",method:"POST",data:{token:this.user.user.token,flashcat:3},header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){0==s.data.code?(e.itemList=s.data.list,e.baseurl=s.data.baseurl):t.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})},getpush:function(){var e=this;t.request({url:c.default.hosturl+"index/toppushlist.html",method:"POST",data:{token:this.user.user.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){0==s.data.code?e.itemList1=s.data.list:t.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})}},onLoad:function(){this.islogin()},onShow:function(){this.getflash(),this.getpush()}}}).call(e,s(2).default)},23:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[t._m(0),s("view",{staticClass:"banner",staticStyle:{"margin-top":"120px"}},[s("swiper",{staticStyle:{height:"390px"},attrs:{autoplay:"true",interval:"3000",duration:"1000","indicator-dots":"true"}},t._l(t.itemList,function(e,a){return s("swiper-item",{key:a,attrs:{mpcomid:"8ck-0-"+a}},[s("image",{attrs:{src:t.baseurl+e.flashurl}})])}))],1),s("view",{staticClass:"notify",attrs:{eventid:"WER-2"},on:{click:function(e){t.msglist()}}},[s("view",{staticClass:"icon notifyIcon mgl20 mgr20",attrs:{eventid:"3pe-0"},on:{click:function(e){t.msglist()}}},[t._v("")]),s("swiper",{staticStyle:{width:"700px",height:"100px","line-height":"100px"},attrs:{autoplay:"true",interval:"2000",duration:"1000",vertical:"true"}},t._l(t.itemList1,function(e,a){return s("swiper-item",{key:a,attrs:{eventid:"FX2-1-"+a,mpcomid:"sXs-1-"+a},on:{click:function(e){t.msglist()}}},[t._v("\n\t\t\t\t"+t._s(e.pushcontent)+"\n\t\t\t")])}))],1),s("view",{staticClass:"list"},[s("view",{staticClass:"item",attrs:{eventid:"k8g-3"},on:{tap:function(e){t.category(13)}}},[s("image",{attrs:{src:"../../static/task13.png"}}),s("text",{staticClass:"item-name"},[t._v("早操")])]),s("view",{staticClass:"item",attrs:{eventid:"R5X-4"},on:{tap:function(e){t.category(14)}}},[s("image",{attrs:{src:"../../static/task14.png"}}),s("text",{staticClass:"item-name"},[t._v("安全管理")])]),s("view",{staticClass:"item",attrs:{eventid:"N3U-5"},on:{tap:function(e){t.category(15)}}},[s("image",{attrs:{src:"../../static/task19.png"}}),s("text",{staticClass:"item-name"},[t._v("验菜")])]),s("view",{staticClass:"item",attrs:{eventid:"iMu-6"},on:{tap:function(e){t.category(16)}}},[s("image",{attrs:{src:"../../static/task20.png"}}),s("text",{staticClass:"item-name"},[t._v("谈心制度")])]),t._m(1),s("view",{staticClass:"item",attrs:{eventid:"iLz-7"},on:{tap:function(e){t.category(17)}}},[s("image",{attrs:{src:"../../static/task17.png"}}),s("text",{staticClass:"item-name"},[t._v("学习经验")])]),s("view",{staticClass:"item",attrs:{eventid:"ikq-8"},on:{tap:function(e){t.category(18)}}},[s("image",{attrs:{src:"../../static/task18.png"}}),s("text",{staticClass:"item-name"},[t._v("行政会议")])]),s("view",{staticClass:"item",attrs:{eventid:"Sis-9"},on:{tap:function(e){t.category(19)}}},[s("image",{attrs:{src:"../../static/ry.png"}}),s("text",{staticClass:"item-name"},[t._v("人员在位情况")])]),s("view",{staticClass:"item",attrs:{eventid:"TKc-10"},on:{tap:function(e){t.category(20)}}},[s("image",{attrs:{src:"../../static/task15.png"}}),s("text",{staticClass:"item-name"},[t._v("警容风纪检查")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header",staticStyle:{position:"fixed","z-index":"10000"}},[e("view",{staticClass:"header-left"}),e("view",{staticClass:"header-content"},[this._v("\n\t\t\t日常管理\n\t\t")]),e("view",{staticClass:"header-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item"},[e("image",{staticClass:"imglogo",attrs:{src:"../../static/daily4.jpg"}})])}]};e.a=a}},[19]);