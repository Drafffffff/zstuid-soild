import{j as r,b as j}from"./entry-client-c1430928.js";var a=()=>{},k=o=>typeof o=="function"&&!o.length?o():o,m={pages:1,maxPages:10,showDisabled:!0,showFirst:!0,showPrev:!0,showNext:!0,showLast:!0,firstContent:"|<",prevContent:"<",nextContent:">",lastContent:">|"},p=(o,t,s,l)=>typeof t=="boolean"?t:typeof t=="function"?t(s,l):m[o],K=o=>{const t=r(()=>Object.assign({},m,k(o))),[s,l]=j(t().initialPage||1),n=e=>(typeof e=="function"&&(e=e(s())),e>=1&&e<=t().pages?l(e):s()),c=(e,b)=>({ArrowLeft:()=>n(i=>i-1),ArrowRight:()=>n(i=>i+1),Home:()=>n(1),End:()=>n(t().pages),Space:()=>n(e),Return:()=>n(e)}[b.key]||a)(),u=r(()=>Math.min(t().maxPages,t().pages)),f=r(e=>[...Array(t().pages)].map((b,i)=>e[i]||(g=>Object.defineProperties({children:g.toString(),onClick:[n,g],onKeyUp:[c,g]},{"aria-current":{get:()=>s()===g?"true":void 0,set:a,enumerable:!0},page:{value:g,enumerable:!1}}))(i+1)),[]),d=Object.defineProperties({onClick:[n,1],onKeyUp:[c,1]},{disabled:{get:()=>s()<=1,set:a,enumerable:!0},children:{get:()=>t().firstContent,set:a,enumerable:!0},page:{value:1,enumerable:!1}}),w=Object.defineProperties({onClick:()=>n(e=>e>1?e-1:e),onKeyUp:e=>c(s()-1,e)},{disabled:{get:()=>s()<=1,set:a,enumerable:!0},children:{get:()=>t().prevContent,set:a,enumerable:!0},page:{get:()=>Math.min(1,s()-1),enumerable:!1}}),P=Object.defineProperties({onClick:()=>n(e=>e<t().pages?e+1:e),onKeyUp:e=>c(s()-1,e)},{disabled:{get:()=>s()>=t().pages,set:a,enumerable:!0},children:{get:()=>t().nextContent,set:a,enumerable:!0},page:{get:()=>Math.max(t().pages,s()+1),enumerable:!1}}),x=Object.defineProperties({onClick:()=>n(t().pages),onKeyUp:e=>c(t().pages,e)},{disabled:{get:()=>s()>=t().pages,set:a,enumerable:!0},children:{get:()=>t().lastContent,set:a,enumerable:!0},page:{get:()=>t().pages,enumerable:!1}}),h=r(()=>Math.min(t().pages-u(),Math.max(1,s()-(u()>>1))-1)),C=r(()=>p("showFirst",t().showFirst,s(),t().pages)),y=r(()=>p("showPrev",t().showPrev,s(),t().pages)),v=r(()=>p("showNext",t().showNext,s(),t().pages)),O=r(()=>p("showLast",t().showLast,s(),t().pages));return[r(()=>{const e=[];return C()&&e.push(d),y()&&e.push(w),e.push(...f().slice(h(),h()+u())),v()&&e.push(P),O()&&e.push(x),e}),s,n]};export{K as c};
