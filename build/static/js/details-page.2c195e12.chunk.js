(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{112:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(58),r=n.n(c),i=n(59),o=n(54),s=n(55),u=n(57),h=n(56),l=n(0),j=n(53),d=n(8),p=function(t){var e=t.onClick;return Object(a.jsx)("button",{type:"button",className:"Button",onClick:function(){return e()},children:"Back"})},m=n(72),f=function(t){var e=t.movie,n=e.title,c=void 0===n?"\u0423\u043f\u0441! \u0427\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...":n,r=e.poster_path,i=e.vote_average,o=e.overview,s=e.genres,u=void 0===s?[]:s;return Object(a.jsxs)("div",{className:"Card",children:[Object(a.jsx)("h1",{children:c}),r?Object(a.jsx)("img",{src:"".concat(j.a).concat(r),alt:c}):Object(a.jsx)("img",{src:m.a,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(a.jsxs)("p",{children:["User Score: ",i>0?10*i:0,"%"]}),Object(a.jsx)("h2",{children:"Overview"}),Object(a.jsx)("p",{children:o}),Object(a.jsx)("h3",{children:"Genres"}),u.length>0&&Object(a.jsx)("ul",{children:u.map((function(t,e){return Object(a.jsx)("li",{children:t.name},e)}))})]})},v=n(3),b=n(10);var O=Object(v.f)((function(t){var e=t.url,n=t.location;return Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{exact:!0,to:{pathname:"".concat(e).concat(d.a.cast),state:{from:n}},className:"NavLink",activeClassName:"NavLink--active",children:"Cast"})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.c,{exact:!0,to:{pathname:"".concat(e).concat(d.a.reviews),state:{from:n}},className:"NavLink",activeClassName:"NavLink--active",children:"Reviews"})})]})})),x=Object(l.lazy)((function(){return n.e(1).then(n.bind(null,114))})),g=Object(l.lazy)((function(){return n.e(6).then(n.bind(null,115))})),k=function(t){var e=t.url,n=t.path;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:"Additional information"}),Object(a.jsx)(O,{url:e}),Object(a.jsx)(l.Suspense,{children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{path:"".concat(n).concat(d.a.cast),component:x}),Object(a.jsx)(v.a,{path:"".concat(n).concat(d.a.reviews),component:g})]})})]})},y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={movie:{},locationFrom:null},t.handleButtonBack=function(){var e=t.props.history,n=t.state.locationFrom;if(n)return e.push(n);e.push(d.a.home)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(r.a.mark((function t(){var e,n,a,c=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.location,n=e.state.from?e.state.from:null,this.setState({locationFrom:n}),!this.props.match.params||!this.props.match.params.movieId){t.next=7;break}return a=this.props.match.params.movieId,t.next=7,Object(j.c)(a).then((function(t){return c.setState({movie:t})}));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.match,e=this.state.movie;return Object(a.jsx)(a.Fragment,{children:e&&Object(a.jsxs)("div",{className:"Container",children:[Object(a.jsx)("hr",{}),Object(a.jsx)(p,{onClick:this.handleButtonBack}),Object(a.jsx)(f,{movie:this.state.movie}),Object(a.jsx)(k,{url:t.url,path:t.path})]})})}}]),n}(l.Component);e.default=y},53:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return h}));var a=n(60),c=n.n(a),r="8add86c956039dd3121ecd9270a2bde1",i="https://api.themoviedb.org/3/",o="".concat(i,"trending/movie/day"),s="".concat(i,"movie/"),u="".concat(i,"search/movie"),h="https://image.tmdb.org/t/p/original/";function l(){return c.a.get("".concat(o),{params:{page:1,api_key:r}}).then((function(t){return t.data.results})).catch((function(t){return t}))}function j(t){return c.a.get("".concat(s).concat(t),{params:{api_key:r,language:"en-US"}}).then((function(t){return t.data})).catch((function(t){return t}))}function d(t){return c.a.get("".concat(s).concat(t,"/credits"),{params:{api_key:r,language:"en-US"}}).then((function(t){return t.data.cast})).catch((function(t){return t}))}function p(t){return c.a.get("".concat(s).concat(t,"/reviews"),{params:{page:1,api_key:r,language:"en-US"}}).then((function(t){return t.data.results})).catch((function(t){return t}))}function m(t){return c.a.get("".concat(u),{params:{page:1,api_key:r,language:"en-US",include_adult:!0,query:t}}).then((function(t){return t.data.results})).catch((function(t){return t}))}},72:function(t,e,n){"use strict";e.a=n.p+"static/media/image-not-found.da4174d9.svg"}}]);
//# sourceMappingURL=details-page.2c195e12.chunk.js.map