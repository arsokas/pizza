(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-734239c0"],{"125c":function(e,t,i){},2489:function(e,t,i){},"2d8d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[i("MenuHeader"),i("MenuSliderComponent"),i("MenuSliderComponent2"),i("MenuSliderComponent3")],1)},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[i("v-row",[i("v-col",{staticClass:"pa-0"},[i("v-img",{attrs:{height:"400",src:"https://dk-spisbedre-production.imgix.net/images/recipes/pizza-med-chorizo-og-lagret-cheddar_7351.jpg?fit=crop&crop=focalpoint&fp-x=0.45&fp-y=0.46616618701094&fp-z=1.1111111111111&w=1200&h=628"}},[i("v-row",{attrs:{justify:"center"}},[i("div",{staticClass:"header-text my-10",attrs:{align:"center"}},[e._v("Menu")])])],1)],1)],1)],1)},r=[],c={name:"Menu-Header"},o=c,l=(i("c03d"),i("2877")),p=i("6544"),d=i.n(p),u=i("62ad"),h=i("a523"),g=i("adda"),m=i("0fd9"),f=Object(l["a"])(o,s,r,!1,null,"62349246",null),v=f.exports;d()(f,{VCol:u["a"],VContainer:h["a"],VImg:g["a"],VRow:m["a"]});var C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"my-10",attrs:{"fill-height":""}},[i("v-row",{staticClass:"pa-0 image-with-background bordered-container",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"pa-0",attrs:{align:"center",justify:"center"}},[i("v-img",{staticClass:"menu-image",attrs:{src:e.firstImage}})],1),i("v-col",{staticClass:"menu-data-table",attrs:{align:"center",justify:"center"}},[i("v-simple-table",{staticClass:"table-width",scopedSlots:e._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[e._v("Name")]),i("th",{staticClass:"text-center"},[e._v("Price")])])]),i("tbody",e._l(e.pizzas,(function(t){return i("tr",{key:t.name,staticClass:"menu-item",on:{click:function(i){return e.renderMenuImage(t)}}},[i("td",[e._v(e._s(t.name))]),i("td",{staticClass:"text-center"},[e._v(e._s(t.price))])])})),0)]},proxy:!0}])})],1)],1),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[e._v(e._s(e.firstItemDescription))])],1)],1)},b=[],z={name:"MenuSliderComponent",data:function(){return{firstItemDescription:"Click on menu and select pizza to see ingredients and options.",firstImage:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",pizzas:[{name:"Margherita",price:"159 DKK",src:"https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg",ingredients:"Cheese and other delicious ingredients"},{name:"Margherita1",price:"159 DKK",src:"https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg",ingredients:"Cheese and other delicious ingredients and more"},{name:"Margherita2",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients even more"},{name:"Margherita3",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients"},{name:"Margherita4",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients"}]}},methods:{renderMenuImage:function(e){console.log(e),this.firstImage=e.src,this.firstItemDescription=e.ingredients}}},w=z,_=(i("b9d3"),i("4de4"),i("4160"),i("3835")),j=i("5530"),y=(i("8adc"),i("58df")),x=i("0789"),M=i("9d26"),k=i("a9ad"),I=i("4e82"),K=i("7560"),D=i("f2e7"),S=i("1c87"),V=i("af2b"),O=i("d9bd"),B=Object(y["a"])(k["a"],V["a"],S["a"],K["a"],Object(I["a"])("chipGroup"),Object(D["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(j["a"])(Object(j["a"])(Object(j["a"])(Object(j["a"])({"v-chip":!0},S["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(S["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this,t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((function(t){var i=Object(_["a"])(t,2),a=i[0],n=i[1];e.$attrs.hasOwnProperty(a)&&Object(O["a"])(a,n,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(M["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(x["b"],e)},genClose:function(){var e=this;return this.$createElement(M["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],i=this.generateRouteLink(),a=i.tag,n=i.data;n.attrs=Object(j["a"])(Object(j["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var s=this.textColor||this.outlined&&this.color;return e(a,this.setTextColor(s,n),t)}}),$=(i("a9e3"),i("8b37"),i("80d2")),R=Object(y["a"])(K["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(j["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object($["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),E=Object(l["a"])(w,C,b,!1,null,"a8cabb4e",null),N=E.exports;d()(E,{VChip:B,VCol:u["a"],VContainer:h["a"],VImg:g["a"],VRow:m["a"],VSimpleTable:R});var A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"my-10",attrs:{"fill-height":""}},[i("v-row",{staticClass:"pa-0 image-with-background bordered-container",attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{align:"center",justify:"center"}},[i("v-simple-table",{staticClass:"table-width",scopedSlots:e._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[e._v("Name")]),i("th",{staticClass:"text-center"},[e._v("Price")])])]),i("tbody",e._l(e.pizzas,(function(t){return i("tr",{key:t.name,staticClass:"menu-item",on:{click:function(i){return e.renderMenuImage(t)}}},[i("td",[e._v(e._s(t.name))]),i("td",{staticClass:"text-center"},[e._v(e._s(t.price))])])})),0)]},proxy:!0}])})],1),i("v-col",{staticClass:"menu-data-table pa-0",attrs:{align:"center",justify:"center"}},[i("v-img",{staticClass:"menu-image",attrs:{src:e.firstImage}})],1)],1),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[e._v(e._s(e.firstItemDescription))])],1)],1)},J=[],P={name:"MenuSliderComponent2",data:function(){return{firstItemDescription:"Click on menu and select pizza to see ingredients and options.",firstImage:"https://lh3.googleusercontent.com/proxy/kpBqpLSYAYOkUvbJ8zftZ-JmE5dAZ6YbeAnM5bSvsRMo8AVQnsRjwMLmRrApqDiyW1ArXB3N5B8z4R5X-Jpfv8RijtXhwgmCwCJo2ggRzbhdWNyyUy0akp0D",pizzas:[{name:"Margherita5",price:"159 DKK",src:"https://lh3.googleusercontent.com/proxy/yCRvsavLXDjFVVCK4ARLwM5zMOfS5P0dOJj77Y8UtZslhB-GAfa4ALbeEwvNLXeF5m-ZYSPtHcpSob0ctmIUk4rqa1DEw8NZOr-BRG0c1jPWJP28o0FKSVA_uMdSGbru-0qlbN8x",ingredients:"Cheese and other delicious ingredients"},{name:"Margherita6",price:"159 DKK",src:"https://lh3.googleusercontent.com/proxy/zYoyD8i_qqiMYaqtNrBjs7s4Oj2kcdtpfpWlbmAJCuRRIAFni9Sb_5BqJ_WTNGxXoxx9V-sSa9_eI5kgYT41M2lUK8TB1JXG7azJ4HimBojKMzrMauPdDN24IdC-5wy2yaNfN1fFHDhtduw",ingredients:"Cheese and other delicious ingredients and more"},{name:"Margherita7",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients even more"},{name:"Margherita8",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients"},{name:"Margherita9",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients"}]}},methods:{renderMenuImage:function(e){console.log(e),this.firstImage=e.src,this.firstItemDescription=e.ingredients}}},G=P,F=(i("f33e"),Object(l["a"])(G,A,J,!1,null,"4adbd5da",null)),H=F.exports;d()(F,{VChip:B,VCol:u["a"],VContainer:h["a"],VImg:g["a"],VRow:m["a"],VSimpleTable:R});var T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"my-10",attrs:{"fill-height":""}},[i("v-row",{staticClass:"pa-0 image-with-background bordered-container",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"pa-0",attrs:{align:"center",justify:"center"}},[i("v-img",{staticClass:"menu-image",attrs:{src:e.firstImage}})],1),i("v-col",{staticClass:"menu-data-table",attrs:{align:"center",justify:"center"}},[i("v-simple-table",{staticClass:"table-width",scopedSlots:e._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[e._v("Name")]),i("th",{staticClass:"text-center"},[e._v("Price")])])]),i("tbody",e._l(e.pizzas,(function(t){return i("tr",{key:t.name,staticClass:"menu-item",on:{click:function(i){return e.renderMenuImage(t)}}},[i("td",[e._v(e._s(t.name))]),i("td",{staticClass:"text-center"},[e._v(e._s(t.price))])])})),0)]},proxy:!0}])})],1)],1),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[e._v(e._s(e.firstItemDescription))])],1)],1)},q=[],L={name:"MenuSliderComponent3",data:function(){return{firstItemDescription:"Click on menu and select pizza to see ingredients and options.",firstImage:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",pizzas:[{name:"Margherita10",price:"159 DKK",src:"https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg",ingredients:"Cheese and other delicious ingredients"},{name:"Margherita11",price:"159 DKK",src:"https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg",ingredients:"Cheese and other delicious ingredients and more"},{name:"Margherita12",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients even more"},{name:"Margherita13",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients"},{name:"Margherita14",price:"159 DKK",src:"https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",ingredients:"Cheese and other delicious ingredients"}]}},methods:{renderMenuImage:function(e){console.log(e),this.firstImage=e.src,this.firstItemDescription=e.ingredients}}},Y=L,W=(i("c20d"),Object(l["a"])(Y,T,q,!1,null,"501757ac",null)),X=W.exports;d()(W,{VChip:B,VCol:u["a"],VContainer:h["a"],VImg:g["a"],VRow:m["a"],VSimpleTable:R});var U={name:"Menu",components:{MenuHeader:v,MenuSliderComponent:N,MenuSliderComponent2:H,MenuSliderComponent3:X}},Z=U,Q=Object(l["a"])(Z,a,n,!1,null,"460bd45a",null);t["default"]=Q.exports;d()(Q,{VContainer:h["a"]})},3798:function(e,t,i){},"8adc":function(e,t,i){},"8b37":function(e,t,i){},b9d3:function(e,t,i){"use strict";var a=i("cc56"),n=i.n(a);n.a},c03d:function(e,t,i){"use strict";var a=i("3798"),n=i.n(a);n.a},c20d:function(e,t,i){"use strict";var a=i("125c"),n=i.n(a);n.a},cc56:function(e,t,i){},f33e:function(e,t,i){"use strict";var a=i("2489"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-734239c0.5d5a30f4.js.map