(window.webpackJsonp=window.webpackJsonp||[]).push([[24,25],{308:function(r,t,o){"use strict";o.r(t);var e={props:{isError:{default:!1,type:Boolean},isLoading:{default:!1,type:Boolean},isEmpty:{default:!1,type:Boolean}}},n=o(37),component=Object(n.a)(e,(function(r,t){var o=t._c;return t.props.isLoading?o("div",[t._t("loader")],2):o("div",[t.props.isError||t.props.isEmpty?o("div",[t.props.isError?o("div",[t._t("error")],2):t._e(),t._v(" "),t.props.isEmpty&&!t.props.isError?o("div",[t._t("empty")],2):t._e()]):o("div",[t._t("content")],2)])}),[],!0,null,null,null);t.default=component.exports},328:function(r,t,o){"use strict";o.r(t);var e={components:{layoutManager:o(308).default},props:{isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}}},n=o(37),component=Object(n.a)(e,(function(r,t){var o=t._c;return o("ul",{staticClass:"list-group"},[o("li",{staticClass:"list-group-item border-top-0 border-bottom-0 border-left-0 border-right-0 bg-transparent pb-2 sticky-top-lower"},[t._t("title")],2),t._v(" "),o("layoutManager",{staticClass:"w-100",attrs:{"is-loading":t.props.isLoading,"is-error":t.props.isError,"is-empty":t.props.isEmpty},scopedSlots:t._u([{key:"error",fn:function(){return[t._t("error")]},proxy:!0},{key:"loader",fn:function(){return[t._t("loader")]},proxy:!0},{key:"content",fn:function(){return[t._t("content")]},proxy:!0},{key:"empty",fn:function(){return[t._t("empty")]},proxy:!0}],null,!0)})],1)}),[],!0,null,null,null);t.default=component.exports}}]);