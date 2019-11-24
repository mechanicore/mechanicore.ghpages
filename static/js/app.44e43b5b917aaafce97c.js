webpackJsonp([1],{"+cVk":function(t,e,a){console.log("---DEFINES"),console.log("production"),t.exports={GH_PAGES:{BASE_PATH:"/",REPOSITORY:"/mechanicore.ghpages"},PRODUCTION:!0}},"0oT1":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:a("vqYj")}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(t){a("0oT1")},null,null).exports,s=a("Dd8w"),i=a.n(s),c=a("/ocq"),u=a("NYxO"),m=a("+cVk"),l={computed:{basePath:function(){return m.PRODUCTION?m.GH_PAGES.REPOSITORY:""}}},d={name:"Home",mixins:[l],data:function(){return{msg:"Home - Vuex Demo"}},computed:i()({},Object(u.e)(["pilotName","mechName","totalCount"]),Object(u.c)(["isMax"])),methods:i()({},Object(u.d)(["addCount","deductCount","updateName","updateMech"]),Object(u.b)(["loadPilotData"]),{updateUserName:function(){this.$refs.username.value&&this.updateName(this.$refs.username.value)},updateMechaName:function(){this.$refs.gundam.value&&this.updateMech(this.$refs.gundam.value)},incrementCount:function(){this.isMax&&alert("MAX count reached!"),this.addCount()}})},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),a("router-link",{attrs:{to:""===t.basePath?"/":t.basePath}},[t._v("Home")]),a("span",[t._v(" | ")]),a("router-link",{attrs:{to:t.basePath.concat("/admin")}},[t._v("Admin")]),a("span",[t._v(" | ")]),a("router-link",{attrs:{to:t.basePath.concat("/info")}},[t._v("Information")]),a("p",[t._v("Total Count: "+t._s(t.totalCount))]),a("p",[t._v("Pilot Name: "+t._s(t.pilotName))]),a("p",[t._v("Mech Name: "+t._s(t.mechName))]),a("br"),a("h3",[t._v("Getters")]),a("p",[t._v("Max Count: "+t._s(t.isMax))]),a("br"),a("h3",[t._v("Mutations")]),a("span",[t._v("Add/Subtract  ")]),a("button",{on:{click:t.incrementCount}},[t._v("+")]),a("span",[t._v(" ")]),a("button",{on:{click:t.deductCount}},[t._v("-")]),a("br"),a("br"),a("input",{ref:"username",attrs:{placeholder:"Enter new pilot name"}}),a("button",{on:{click:t.updateUserName}},[t._v("Update Name")]),a("br"),a("br"),a("input",{ref:"gundam",attrs:{placeholder:"Enter new mecha name"}}),a("button",{on:{click:t.updateMechaName}},[t._v("Update Mecha")]),a("br"),a("br"),a("h3",[t._v("Actions")]),a("button",{on:{click:t.loadPilotData}},[t._v("Load Pilot Data")])],1)},staticRenderFns:[]};var h=a("VU/8")(d,p,!1,function(t){a("xT9U")},"data-v-ee00ed80",null).exports,v={name:"Admin",mixins:[l],data:function(){return{msg:"Admin"}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),a("router-link",{attrs:{to:""===t.basePath?"/":t.basePath}},[t._v("Home")]),a("span",[t._v(" | ")]),a("router-link",{attrs:{to:t.basePath.concat("/admin")}},[t._v("Admin")]),a("span",[t._v(" | ")]),a("router-link",{attrs:{to:t.basePath.concat("/info")}},[t._v("Information")])],1)},staticRenderFns:[]};var _=a("VU/8")(v,f,!1,function(t){a("wjQ/")},"data-v-093a2288",null).exports,b={name:"Info",mixins:[l],data:function(){return{msg:"Information"}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),a("router-link",{attrs:{to:""===t.basePath?"/":t.basePath}},[t._v("Home")]),a("span",[t._v(" | ")]),a("router-link",{attrs:{to:t.basePath.concat("/admin")}},[t._v("Admin")]),a("span",[t._v(" | ")]),a("router-link",{attrs:{to:t.basePath.concat("/info")}},[t._v("Information")])],1)},staticRenderFns:[]};var N=a("VU/8")(b,P,!1,function(t){a("NTnK")},"data-v-3ff59740",null).exports;n.a.use(c.a);var g=[{path:"/",name:"Home",component:h},{path:"/admin",name:"Admin",component:_},{path:"/info",name:"Info",component:N}].map(function(t){return i()({},t,{path:m.GH_PAGES.REPOSITORY.concat(t.path)})});console.log(g),console.log("---ROUTES"),console.log("production");var C=new c.a({routes:g,mode:"history"}),x=a("mtWM"),A=a.n(x);n.a.use(u.a);var k=new u.a.Store({state:{maxItems:5,totalCount:0,pilotName:"Trowa",mechName:"Heavy Arms"},getters:{isMax:function(t,e){return t.totalCount>=5}},mutations:{addCount:function(t){t.totalCount++},deductCount:function(t){t.totalCount--},updateName:function(t,e){t.pilotName=e},updateMech:function(t,e){t.mechName=e},setPilotData:function(t,e){t.pilotName=e.name,t.mechName=e.gundam}},actions:{loadPilotData:function(t,e){A.a.get("/static/pilotdata.json").then(function(e){t.commit("setPilotData",e.data[1])})}}});n.a.config.productionTip=!1,n.a.prototype.$http=A.a,new n.a({el:"#app",store:k,router:C,components:{App:r},template:"<App/>"})},NTnK:function(t,e){},vqYj:function(t,e,a){t.exports=a.p+"static/img/heavyarms.6bd00a4.png"},"wjQ/":function(t,e){},xT9U:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.44e43b5b917aaafce97c.js.map