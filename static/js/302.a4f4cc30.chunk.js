"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[302],{5700:function(r,e,n){n.d(e,{Z:function(){return u}});var t="Container_Container__dPyVg",a=n(184);function u(r){var e=r.children;return(0,a.jsx)("div",{className:t,children:e})}},1967:function(r,e,n){var t=n(501),a=n(184);e.Z=function(r){var e=r.movies;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:e&&e.map((function(r){var e=r.id,n=r.title,u=r.original_name;return(0,a.jsx)("li",{children:(0,a.jsx)(t.rU,{to:"/movies/".concat(e),children:n||u})},e)}))})})}},9256:function(r,e,n){n.d(e,{Gc:function(){return f},HI:function(){return o},t2:function(){return p},jr:function(){return v},JN:function(){return s}});var t=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c)().create({url:"",baseURL:"https://api.themoviedb.org/3",params:{api_key:"8aee03cb2478db5e76cfede337c072a1",language:"en-US"}}),s=function(){var r=(0,t.Z)(u().mark((function r(){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("/trending/all/day",{});case 3:return e=r.sent,n=e.data.results,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no tranding movies"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("/search/movie",{params:{query:e}});case 3:return n=r.sent,t=n.data.results,r.abrupt("return",t);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information about the movie yet..."));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("movie/".concat(e),{});case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information about this movie"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("movie/".concat(e,"/credits"),{});case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no information about actors"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i("movie/".concat(e,"/reviews"),{});case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",Promise.reject("There is no reviews"));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},3302:function(r,e,n){n.r(e),n.d(e,{default:function(){return l}});var t=n(5861),a=n(885),u=n(7757),c=n.n(u),i=n(9256),s=n(2791),o=n(1967),p=n(5700),f="Homepage_trMovies__LunY2",v=n(184);function l(){var r=(0,s.useState)(null),e=(0,a.Z)(r,2),n=e[0],u=e[1];return(0,s.useEffect)((function(){function r(){return(r=(0,t.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.JN)();case 3:e=r.sent,u(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[]),(0,v.jsxs)(p.Z,{children:[(0,v.jsx)("h2",{className:f,children:"Tranding movies"}),(0,v.jsx)(o.Z,{movies:n})]})}}}]);
//# sourceMappingURL=302.a4f4cc30.chunk.js.map