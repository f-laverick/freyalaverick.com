(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(o,t,e){var content=e(182);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(52).default)("3b7840e8",content,!0,{sourceMap:!1})},181:function(o,t,e){"use strict";e(179)},182:function(o,t,e){var n=e(51)(!1);n.push([o.i,".modal{align-items:center;display:flex;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal,.modal-background{top:0;left:0;right:0;bottom:0}.modal-background{position:absolute;background:rgba(0,0,0,.4)}.modal-content{position:relative;margin:0 auto;max-height:calc(100vh - 40px);background:#fff;border-radius:10px;padding:2rem;flex:0 0 540px}.modal-content>*{overflow:auto}.modal-close{position:absolute;top:1vh;right:1vw}",""]),o.exports=n},187:function(o,t,e){"use strict";e.r(t);var n={name:"Modal",props:{show:{type:Boolean,default:!1}}},l=(e(181),e(8)),component=Object(l.a)(n,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("transition",{attrs:{name:"modal"}},[o.show?e("div",{staticClass:"modal"},[e("div",{staticClass:"modal-background",on:{click:function(t){return o.$emit("close")}}}),o._v(" "),e("div",{staticClass:"modal-content"},[o._t("default")],2),o._v(" "),e("button",{staticClass:"modal-close",attrs:{"aria-label":"close"},on:{click:function(t){return o.$emit("close")}}},[o._v("\n      X\n    ")])]):o._e()])}),[],!1,null,null,null);t.default=component.exports}}]);