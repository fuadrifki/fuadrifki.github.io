import{V as e,O as t}from"./vue-class-component.esm-bundler.808f657a.js";import{P as r}from"./page-sections.8416bed3.js";import{r as s,o,e as a,w as n,g as i,F as l,j as c,t as u}from"./vendor.f26241b3.js";var p=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let m=class extends e{constructor(){super(...arguments),this.tabs=[{name:"My Shop | Overview",title:"Overview"},{name:"My Shop | Products",title:"Products"}]}changeTabs(e){this.$router.push({name:e})}isTabActive(e){return this.$route.name.toLowerCase().includes(e.toLowerCase())}};m=((e,t,r,s)=>{for(var o,a=s>1?void 0:s?d(t,r):t,n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s?o(t,r,a):o(a))||a);return s&&a&&p(t,r,a),a})([t({components:{PageSections:r}})],m);const b={class:"mt-20 lg:mt-32 w-full bg-transparent overflow-hidden"},v={class:"px-8 lg:px-40"},f={class:"flex gap-x-6 text-16px border-b border-gray-600 w-full"};m.render=function(e,t,r,p,d,m){const h=s("router-view"),g=s("PageSections");return o(),a(g,{"is-default":"",height:"h-full min-h-screen","is-reverse":!1},{default:n((()=>[i("div",b,[i("div",v,[i("div",f,[(o(!0),a(l,null,c(e.tabs,(t=>(o(),a("h1",{key:t.name,class:"pb-4 font-medium hover:text-primary-200 focus:outline-none cursor-pointer "+(e.isTabActive(t.title)?"text-primary-200 border-b-2 border-primary-200":"text-white"),onClick:r=>e.changeTabs(t.name)},u(t.title),11,["onClick"])))),128))])]),i(h)])])),_:1})};var h=m;export default h;
