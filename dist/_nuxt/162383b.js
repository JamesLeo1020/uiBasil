(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{316:function(t,e,l){"use strict";l.r(e);var c={props:{data:{default:function(){return{}},type:Object},title:{default:null,type:String},labelTrue:{default:null,type:String},labelFalse:{default:null,type:String},isSelected:{default:!1,type:Boolean},type:{default:null,type:String}},data:function(){return{lang:this.$store.getters["app/getLanguage"]}},mounted:function(){console.log("check data init",this.isSelected)}},r=l(37),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row align-items-center mb-2"},[l("div",{staticClass:"col"},[l("label",{directives:[{name:"show",rawName:"v-show",value:t.data.title,expression:"data.title"}],staticClass:"col-form-label"},[l("strong",[t._v(t._s(t.data.title[t.lang]))])])])]),t._v(" "),l("div",{staticClass:"row align-items-center mb-4"},[l("div",{staticClass:"col"},[l("div",{staticClass:"form-check form-check-inline border rounded mb-0 form-check-border py-1"},[l("input",{staticClass:"form-check-input",attrs:{id:"produk-"+t.type+"-true",type:"radio",name:t.type},domProps:{checked:t.isSelected},on:{click:function(e){return t.$emit("click",!0)}}}),l("label",{staticClass:"form-check-label",attrs:{for:"produk-"+t.type+"-true"}},[t._v(t._s(t.data.action.true[t.lang]))])]),t._v(" "),l("div",{staticClass:"form-check form-check-inline border rounded mb-0 form-check-border py-1"},[l("input",{staticClass:"form-check-input",attrs:{id:"produk-"+t.type+"-false",type:"radio",name:t.type},domProps:{checked:!t.isSelected},on:{click:function(e){return t.$emit("click",!1)}}}),l("label",{staticClass:"form-check-label",attrs:{for:"produk-"+t.type+"-false"}},[t._v(t._s(t.data.action.false[t.lang]))])])])]),t._v(" "),l("hr")])}),[],!1,null,null,null);e.default=component.exports}}]);