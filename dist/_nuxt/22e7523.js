(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{395:function(t,e,l){"use strict";l.r(e);var n={props:{value:{type:String,default:null},placeholder:{type:String,default:null}},data:function(){return{val:this.value}},watch:{value:function(t){this.val=t},val:function(t){this.$emit("input",t)}}},o=l(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports}}]);