(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{111:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(58),c=e.n(r),i=e(59),u=e(54),o=e(55),s=e(57),f=e(56),d=e(0),h=e(17),p=e(53),g=e(63),l=function(t){Object(s.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={movies:[],isLoading:!1},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=Object(i.a)(c.a.mark((function t(){var n=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,Object(p.e)().then((function(t){n.setState({movies:t})})).finally((function(){return n.setState({isLoading:!1})}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.movies,e=t.isLoading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Trending today"}),e&&Object(a.jsx)(h.a,{}),n.length>0&&Object(a.jsx)(g.a,{movies:n})]})}}]),e}(d.Component);n.default=l},53:function(t,n,e){"use strict";e.d(n,"e",(function(){return d})),e.d(n,"c",(function(){return h})),e.d(n,"b",(function(){return p})),e.d(n,"f",(function(){return g})),e.d(n,"d",(function(){return l})),e.d(n,"a",(function(){return f}));var a=e(60),r=e.n(a),c="8add86c956039dd3121ecd9270a2bde1",i="https://api.themoviedb.org/3/",u="".concat(i,"trending/movie/day"),o="".concat(i,"movie/"),s="".concat(i,"search/movie"),f="https://image.tmdb.org/t/p/original/";function d(){return r.a.get("".concat(u),{params:{page:1,api_key:c}}).then((function(t){return t.data.results})).catch((function(t){return t}))}function h(t){return r.a.get("".concat(o).concat(t),{params:{api_key:c,language:"en-US"}}).then((function(t){return t.data})).catch((function(t){return t}))}function p(t){return r.a.get("".concat(o).concat(t,"/credits"),{params:{api_key:c,language:"en-US"}}).then((function(t){return t.data.cast})).catch((function(t){return t}))}function g(t){return r.a.get("".concat(o).concat(t,"/reviews"),{params:{page:1,api_key:c,language:"en-US"}}).then((function(t){return t.data.results})).catch((function(t){return t}))}function l(t){return r.a.get("".concat(s),{params:{page:1,api_key:c,language:"en-US",include_adult:!0,query:t}}).then((function(t){return t.data.results})).catch((function(t){return t}))}},63:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var a=e(1),r=e(10),c=e(3),i=e(8),u=Object(c.f)((function(t){var n=t.movies,e=t.location;return Object(a.jsx)("ul",{className:"MoviesList",children:n.map((function(t){var n=t.id,c=t.title;return Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:{pathname:"".concat(i.a.movies,"/").concat(n),state:{from:e}},children:c})},n)}))})}))}}]);
//# sourceMappingURL=home-page.f25d19ef.chunk.js.map