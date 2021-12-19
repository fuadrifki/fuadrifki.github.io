import{V as e,O as t}from"./vue-class-component.esm-bundler.808f657a.js";import{P as s}from"./page-sections.8416bed3.js";import{b as l,S as r}from"./sidebar.082f6c67.js";import{e as i}from"./index.41969661.js";import{M as a}from"./MainAppController.508e9783.js";import{r as o,o as n,e as c,w as g,g as p,F as m,j as f,t as d}from"./vendor.f26241b3.js";var u=Object.defineProperty,x=Object.getOwnPropertyDescriptor;let b=class extends e{get blogListData(){return l}get isLargeScreen(){return a.isLargeScreen}ellipsisString(e){return i(e,this.isLargeScreen?170:110)}toDetail(e){a.toDetailBlog(e)}};b=((e,t,s,l)=>{for(var r,i=l>1?void 0:l?x(t,s):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(l?r(t,s,i):r(i))||i);return l&&i&&u(t,s,i),i})([t({components:{PageSections:s,SidebarBlog:r}})],b);const h={class:"w-full lg:w-3/4 mt-10 lg:mt-32 py-10 text-left mr-8"},j={class:"flex flex-col space-y-2"};b.render=function(e,t,s,l,r,i){const a=o("SidebarBlog"),u=o("PageSections");return n(),c(u,{"is-to-right":"",height:"h-full min-h-screen",spacing:!1,"spacing-horizontal":!1},{default:g((()=>[p("div",h,[(n(!0),c(m,null,f(e.blogListData,(t=>(n(),c("div",{key:t.id,class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4"},[p("img",{class:"h-40 lg:h-36 cursor-pointer object-cover",src:`/images/${t.image}`,alt:t.image,onClick:()=>e.toDetail(t.title)},null,8,["src","alt","onClick"]),p("div",j,[p("h1",{class:"\n              cursor-pointer\n              text-18px\n              lg:text-20px\n              font-semibold\n              leading-tight\n            ",onClick:()=>e.toDetail(t.title)},d(t.title),9,["onClick"]),p("p",{class:"text-14px leading-loose",innerHTML:`<span class='font-semibold'>${t.user}</span> - ${e.ellipsisString(t.text)}`},null,8,["innerHTML"])])])))),128))]),p(a)])),_:1})};var v=b;export default v;
