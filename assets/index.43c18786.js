import{c as e,a as t,b as n,d as o,e as r,o as a,r as i,f as s}from"./vendor.4fbcbf5d.js";let c;const p={},m=function(e,t){if(!t||0===t.length)return e();if(void 0===c){const e=document.createElement("link").relList;c=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in p)return;p[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":c,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},d=()=>m((()=>import("./index.3c794a29.js")),["assets/index.3c794a29.js","assets/index.a6b380ef.css","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/MainAppController.cd41222d.js"]),l=t({history:e(),routes:[{path:"/",name:"Home",component:d,children:[{path:"",name:"Home",component:()=>m((()=>import("./index.17f5dc92.js")),["assets/index.17f5dc92.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js"])}]},{path:"/blog",name:"Blog",component:d,children:[{path:"",name:"Blog",component:()=>m((()=>import("./index.826f06e5.js")),["assets/index.826f06e5.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js","assets/sidebar.40c9a499.js","assets/utils.173b3430.js","assets/MainAppController.cd41222d.js"])}]},{path:"/blog",name:"Blog | Detail",component:d,children:[{path:":title",name:"Blog | Detail",component:()=>m((()=>import("./detail.71e72973.js")),["assets/detail.71e72973.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js","assets/sidebar.40c9a499.js","assets/utils.173b3430.js","assets/MainAppController.cd41222d.js"])}]},{path:"/my-shop",name:"My Shop",component:d,children:[{path:"",redirect:"/my-shop/overview",name:"My Shop",component:()=>m((()=>import("./index.3129430f.js")),["assets/index.3129430f.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js"]),children:[{path:"overview",name:"My Shop | Overview",component:()=>m((()=>import("./index.5325fdd9.js")),["assets/index.5325fdd9.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js"])},{path:"products",name:"My Shop | Products",component:()=>m((()=>import("./index.ce126d4d.js")),["assets/index.ce126d4d.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js","assets/coming-soon.a42c2c73.js","assets/utils.173b3430.js","assets/MainAppController.cd41222d.js"])},{path:"products/:title",name:"My Shop | Products | Detail",component:()=>m((()=>import("./detail.6d07865f.js")),["assets/detail.6d07865f.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js","assets/coming-soon.a42c2c73.js","assets/utils.173b3430.js"])}]}]},{path:"/:pathMatch(.*)",name:"Not Found",component:d,children:[{path:"",name:"Not Found",component:()=>m((()=>import("./index.4cf4ac62.js")),["assets/index.4cf4ac62.js","assets/vue-class-component.esm-bundler.3ca2e5d5.js","assets/vendor.4fbcbf5d.js","assets/page-sections.907afb45.js"])}]}]});l.beforeEach((async(e,t,n)=>{document.title="FR",null!=e.name&&(document.title="FR - "+e.name),n()}));const{store:_}=n({state:{count:0},getters:{countString:e=>0===e.count?"zero":1===e.count?"once":`${e.count} times`},mutations:{increment(e){e.count++}}});var h=_.original,u=o({name:"App"});u.render=function(e,t,n,o,s,c){const p=i("router-view");return a(),r(p)};const E=s(u);E.use(l),E.use(h),E.mount("#app");export{l as r,h as s};
