(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{428:function(t,e,a){},605:function(t,e,a){"use strict";a(428)},616:function(t,e,a){"use strict";a.r(e);var n={props:{title:String,show:{type:Boolean,default:!1},titleTag:{type:String,default:"h4"},contentTag:{type:String,default:"p"}},data:function(){return{active:!1}},mounted:function(){this.active=!!this.$props.show}},s=(a(605),a(7)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a(t.titleTag,{tag:"component",staticClass:"tab__header"},[a("span",{on:{click:function(e){e.preventDefault(),t.active=!t.active}}},[t.$slots.title?[t._t("title")]:[a("strong",[t._v(t._s(t.title))])],t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.active,expression:"!active"}],staticClass:"down-Arrow"},[t._v("▼")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"up-Arrow"},[t._v("▲")])],2)]),t._v(" "),a(t.contentTag,{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],tag:"component",staticClass:"tab__content"},[t._t("default")],2)],1)}),[],!1,null,"6ac31f16",null);e.default=i.exports}}]);