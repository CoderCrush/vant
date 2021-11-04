import{c as v,u as y}from"./use-translate.b8dd01c6.js";import{m as g,c as L,t as T,w as F}from"./with-install.b43d27ad.js";import{I as E}from"./index.a6ba9341.js";import{B as A}from"./index.2a879481.js";import{z as _,e as t,C as D,r as I,o as N,a as P,w as s,A as e,h as B,t as b,d as V,F as w}from"./vue-libs.311a0de3.js";import{C as U}from"./index.9ffff3d0.js";import{T as S}from"./function-call.497f808f.js";import"./constant.80c6de18.js";import"./use-route.fbe6f823.js";import"./index.a1845386.js";import"./use-expose.a6a25a51.js";import"./useChildren.9c836bf0.js";import"./index.886fe652.js";import"./Checker.2c4e4d12.js";import"./useParent.c4a91987.js";import"./mount-component.c1f7730b.js";import"./index.3f3c7397.js";import"./interceptor.14c08b72.js";import"./use-touch.41b8a2c4.js";import"./index.e4a9f28d.js";import"./utils.39620306.js";import"./index.2702a97e.js";import"./use-lazy-render.a1d3dbed.js";import"./on-popup-reopen.179515e2.js";import"./index.40018584.js";const[z,o,$]=v("submit-bar"),q={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:g("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:g("danger"),buttonColor:String,suffixLabel:String,decimalLength:L(2),safeAreaInsetBottom:T};var G=_({name:z,props:q,emits:["submit"],setup(u,{emit:i,slots:n}){const c=()=>{const{price:a,label:r,currency:p,textAlign:C,suffixLabel:x,decimalLength:k}=u;if(typeof a=="number"){const j=(a/100).toFixed(+k).split("."),h=k?`.${j[1]}`:"";return t("div",{class:o("text"),style:{textAlign:C}},[t("span",null,[r||$("label")]),t("span",{class:o("price")},[p,t("span",{class:o("price-integer")},[j[0]]),h]),x&&t("span",{class:o("suffix-label")},[x])])}},d=()=>{var p;const{tip:a,tipIcon:r}=u;if(n.tip||a)return t("div",{class:o("tip")},[r&&t(E,{class:o("tip-icon"),name:r},null),a&&t("span",{class:o("tip-text")},[a]),(p=n.tip)==null?void 0:p.call(n)])},f=()=>i("submit"),l=()=>n.button?n.button():t(A,{round:!0,type:u.buttonType,text:u.buttonText,class:o("button",u.buttonType),color:u.buttonColor,loading:u.loading,disabled:u.disabled,onClick:f},null);return()=>{var a,r;return t("div",{class:[o(),{"van-safe-area-bottom":u.safeAreaInsetBottom}]},[(a=n.top)==null?void 0:a.call(n),d(),t("div",{class:o("bar")},[(r=n.default)==null?void 0:r.call(n),c(),l()])])}}});const m=F(G);const bt=_({setup(u){const i=y({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=D(!0),c=()=>S(i("clickButton")),d=()=>S(i("clickLink"));return(f,l)=>{const a=I("demo-block");return N(),P(w,null,[t(a,{title:e(i)("basicUsage")},{default:s(()=>[t(e(m),{price:3050,"button-text":e(i)("submit"),onSubmit:c},null,8,["button-text"])]),_:1},8,["title"]),t(a,{title:e(i)("disabled")},{default:s(()=>[t(e(m),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:c},null,8,["button-text","tip"])]),_:1},8,["title"]),t(a,{title:e(i)("loadingStatus")},{default:s(()=>[t(e(m),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:c},null,8,["button-text"])]),_:1},8,["title"]),t(a,{title:e(i)("advancedUsage")},{default:s(()=>[t(e(m),{price:3050,"button-text":e(i)("submit"),onSubmit:c},{tip:s(()=>[B(b(e(i)("tip2"))+" ",1),V("span",{class:"edit-address",onClick:d},b(e(i)("tip3")),1)]),default:s(()=>[t(e(U),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r)},{default:s(()=>[B(b(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{bt as default};