require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([21],{72:function(t,e,a){"use strict";var i=n(a(1)),s=n(a(73));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},73:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(75),s=a.n(i),n=a(76);var l=function(t){a(74)},c=a(0)(s.a,n.a,l,null,null);e.default=c.exports},74:function(t,e){},75:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n=a(3),l=(i=n)&&i.__esModule?i:{default:i},c=a(4);e.default={data:function(){return{articlelist:[],baseurl:"",catid:"",title:""}},computed:s({},(0,c.mapState)(["user"])),methods:{goback:function(){t.navigateBack({delta:1})},article:function(e){t.navigateTo({url:"article?articleid="+e})},islogin:function(){null!==this.user.user||t.redirectTo({url:"../../pages/manage/login"})},getlist:function(){var e=this;t.request({url:l.default.hosturl+"article/articlelist.html",method:"POST",data:{token:this.user.user.token,catid:this.catid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){0==a.data.code?(e.articlelist=a.data.list,console.log(a.data.baseurl),e.baseurl=a.data.baseurl):t.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})}},onLoad:function(t){this.catid=t.catid,this.islogin()},onShow:function(t){this.getlist(),7==this.catid?this.title="党建经验":this.title="学习经验"}}}).call(e,a(2).default)},76:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page"},[a("view",{staticClass:"header"},[a("view",{staticClass:"header-left",attrs:{eventid:"1uA-0"},on:{tap:t.backs}},[a("text",{staticClass:"icon"},[t._v("")])]),a("view",{staticClass:"header-content"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),a("view",{staticClass:"header-right"})]),a("view",{staticClass:"list mgt20"},t._l(t.articlelist,function(e,i){return a("view",{key:i,staticClass:"item",attrs:{eventid:"6dC-1-"+i},on:{tap:function(a){t.article(e.articleid)}}},[a("view",{staticClass:"item-left"},[a("image",{attrs:{src:t.baseurl+e.imageurl}})]),a("view",{staticClass:"mgl30 item-right"},[a("text",{staticClass:"item-name"},[t._v(t._s(e.articlename))]),a("text",{staticClass:"item-desc"},[t._v(t._s(e.articlesub))])]),a("text",{staticClass:"item-time"},[t._v(t._s(e.createtime))])])}))])},staticRenderFns:[]};e.a=i}},[72]);