import{V as e,O as t}from"./vue-class-component.esm-bundler.3ca2e5d5.js";import{o,e as a,l}from"./vendor.4fbcbf5d.js";var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let s=class extends e{};s=((e,t,o,a)=>{for(var l,s=a>1?void 0:a?r(t,o):t,i=e.length-1;i>=0;i--)(l=e[i])&&(s=(a?l(t,o,s):l(s))||s);return a&&s&&n(t,o,s),s})([t({props:{isToRight:{default:!1,type:Boolean},spacing:{default:!0,type:Boolean},spacingHorizontal:{default:!0,type:Boolean},isDefault:{default:!1,type:Boolean},isReverse:{default:!0,type:Boolean},height:{default:"lg:h-screen",type:String},paddingHorizonal:{default:40,type:Number}}})],s),s.render=function(e,t,n,r,s,i){return o(),a("div",{class:`\n      ${e.height}\n      ${e.spacing&&!e.isDefault?"py-20":""}\n      ${e.spacingHorizontal&&!e.isDefault?"lg:space-x-20":""}\n      ${e.isDefault?"":`px-8 lg:px-${e.paddingHorizonal}`}\n      ${e.isToRight?`flex-col ${e.spacing?"space-y-20":""} bg-gradient-to-r`:(e.isReverse?"flex-col-reverse":"")+" bg-gradient-to-l"} \n      flex lg:flex-row\n      from-cool-gray-900\n      to-cool-gray-800\n      text-white`},[l(e.$slots,"default")],2)};var i=s;export{i as P};
