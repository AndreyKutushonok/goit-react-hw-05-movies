"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[380],{5700:function(r,e,t){t.d(e,{Z:function(){return u}});var n="Container_Container__dPyVg",a=t(184);function u(r){var e=r.children;return(0,a.jsx)("div",{className:n,children:e})}},1967:function(r,e,t){var n=t(501),a=t(184);e.Z=function(r){var e=r.movies;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:e&&e.map((function(r){var e=r.id,t=r.title,u=r.original_name;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(e),children:t||u})},e)}))})})}},9256:function(r,e,t){t.d(e,{Gc:function(){return f},HI:function(){return o},t2:function(){return p},jr:function(){return v},JN:function(){return s}});var n=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"8aee03cb2478db5e76cfede337c072a1",language:"en-US"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("/trending/all/day",{});case 3:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no tranding movies"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("/search/movie",{params:{query:e}});case 3:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("movie/".concat(e),{});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information about this movie"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("movie/".concat(e,"/credits"),{});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information about actors"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("movie/".concat(e,"/reviews"),{});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no reviews"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},5380:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(5861),a=t(885),u=t(7757),c=t.n(u),i=t(2791),s=t(501),o=t(9256),p=t(1967),f=t(5700),v=t(184);function l(){var r=(0,i.useState)(""),e=(0,a.Z)(r,2),t=e[0],u=e[1],l=(0,i.useState)(null),h=(0,a.Z)(l,2),m=h[0],d=h[1],x=(0,s.lr)(),b=(0,a.Z)(x,2),w=b[0],j=b[1],y=w.get("query");return(0,i.useEffect)((function(){function r(){return(r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.HI)(y);case 3:e=r.sent,d(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}y&&(!function(){r.apply(this,arguments)}(),u(""),d(""))}),[y]),(0,v.jsxs)(f.Z,{children:[(0,v.jsx)("div",{children:(0,v.jsxs)("form",{onSubmit:function(r){r.preventDefault(),j({query:t.toLowerCase().trim()})},children:[(0,v.jsx)("input",{type:"text",name:"searchQuery",value:t,onChange:function(r){u(r.currentTarget.value)}}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})}),m&&(0,v.jsx)(p.Z,{movies:m})]})}}}]);
//# sourceMappingURL=380.eac67fc7.chunk.js.map