"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{9256:function(r,e,t){t.d(e,{Gc:function(){return h},HI:function(){return i},t2:function(){return p},jr:function(){return f},JN:function(){return o}});var n=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"8aee03cb2478db5e76cfede337c072a1",language:"en-US"}}),o=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s("/trending/all/day",{});case 3:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 8:throw r.prev=8,r.t0=r.catch(0),Object.error("There is no tranding movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s("/search/movie",{params:{query:e}});case 3:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),Object.error("There is no information about the movie yet...");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s("movie/".concat(e),{});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),Object.error("There is no information about this movie");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s("movie/".concat(e,"/credits"),{});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),Object.error("There is no information about actors");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s("movie/".concat(e,"/reviews"),{});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),Object.error("There is no reviews");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},9631:function(r,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(5861),a=t(885),c=t(7757),u=t.n(c),s=t(9256),o=t(2791),i=t(6871),p=t(184);function h(){var r=(0,i.UO)().movieId,e=(0,o.useState)([]),t=(0,a.Z)(e,2),c=t[0],h=t[1];return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.jr)(r);case 3:t=e.sent,h(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Reviews"}),c&&(0,p.jsx)("ul",{children:c.map((function(r){var e=r.id,t=r.author,n=r.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",t]}),(0,p.jsx)("p",{children:n})]},e)}))}),0===c.length&&(0,p.jsx)("h2",{children:"There is no reviews"})]})}}}]);
//# sourceMappingURL=631.c6d8f967.chunk.js.map