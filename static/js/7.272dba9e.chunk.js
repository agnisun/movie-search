(this.webpackJsonpMovie=this.webpackJsonpMovie||[]).push([[7],{237:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(25),a=n(50),r=n(104),o=n(6),c=n(8),l=n(216),b=n.n(l),x=(n(237),n(208)),d=n(199),p=n(238),j=n(137),g=function(e){return e>=8?"\u2605\u2605\u2605\u2605\u2605":e>=6&&e<8?"\u2605\u2605\u2605\u2605\u2606":e>=4&&e<6?"\u2605\u2605\u2605\u2606\u2606":e>=2&&e<4?"\u2605\u2605\u2606\u2606\u2606":"\u2605\u2606\u2606\u2606\u2606"},u=function(e){return window.innerWidth<400?(console.log(e.length),e.length<160?e:e.slice(0,157)+"..."):e.length<450?e:e.slice(0,447)+"..."},h=function(e,t){for(var n=0;n<e.length;n++)if(t.indexOf(e[n].id)>-1)return e[n].name;return"Unknown"},O=n(3),f=function(e){var t=e.genres,n=e.genre_ids;return Object(O.jsx)(r.a,{color:"lightBlue",p:"4px 8px",background:"rgba(29, 29, 29, 0.5)",borderRadius:"0px 8px",fontSize:"14px",lineHeight:"16px",children:h(t,n)})},v=n(26),m=function(e){var t=e.movie,n=t.title,s=t.overview,a=t.genre_ids,o=t.vote_average,c=t.backdrop_path,l=t.id,b=Object(i.c)((function(e){return e.data.genresMovies})),h=Object(i.c)((function(e){return e.data.config})),m=h&&h.images.base_url,w=h&&h.images.backdrop_sizes[2];return Object(O.jsxs)(r.a,{bg:"url(".concat(m).concat(w).concat(c,") center top / cover no-repeat"),minH:{base:"100vh",md:"800px","3xl":"60vh"},position:"relative",children:[Object(O.jsx)(r.a,{zIndex:"1",pos:"absolute",w:"100%",h:"100%",background:"linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)"}),Object(O.jsx)(r.a,{zIndex:"2",maxW:"620px",position:"absolute",top:{base:"110px",lg:"168px"},left:{base:"30px","2md":"75px",lg:"190px"},children:Object(O.jsxs)(x.b,{alignItems:"flex-start",spacing:"16px",pb:{base:"56px","3xl":"90px"},pr:{base:"20px",lg:"0"},position:"relative",minH:"416px",children:[Object(O.jsx)(f,{genres:b,genre_ids:a}),Object(O.jsx)(r.a,{children:g(o)}),Object(O.jsx)(d.a,{fontSize:{base:"24px",md:"36px",lg:"56px","3xl":"75px"},lineHeight:{base:"1.5",lg:"64px","3xl":"1.5"},children:n}),Object(O.jsx)(p.a,{fontSize:{base:"16px","3xl":"24px"},lineHeight:"32px",fontWeight:"400",children:u(s)}),Object(O.jsx)(v.b,{to:"/movie/".concat(l),children:Object(O.jsx)(j.a,{position:"absolute",left:"0",bottom:"0",w:{base:"150px",lg:"200px"},h:{base:"56px"},fontSize:"16px",fontWeight:"400",border:"1px solid rgba(225, 8, 86, 0.5);",boxShadow:"0px 16px 16px 4px rgba(0, 0, 0, 0.12)",borderRadius:"40px",transition:"all .3s ease-in-out",bg:"rgba(245, 101, 101, 0.5)",_hover:{background:"red.300"},zIndex:15,children:"Watch now"})})]})})]})},w={dots:!0,lazyLoad:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0},S=function(){var e=Object(i.c)((function(e){return e.nowPlaying.movies.results})),t=Object(s.useState)([]),n=Object(c.a)(t,2),a=n[0],l=n[1];return Object(s.useEffect)((function(){e&&l([e[0],e[1],e[2]])}),[e]),Object(O.jsx)(r.a,{as:"section",children:Object(O.jsx)(b.a,Object(o.a)(Object(o.a)({},w),{},{children:a.map((function(e,t){return Object(O.jsx)(m,{movie:e},t)}))}))})},_=n(207),k=n.p+"static/media/arrow-right.e0ccefd0.svg",z={lazyLoad:!0,dots:!1,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:3,draggable:!1,responsive:[{breakpoint:1640,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:1180,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:600,settings:{swipe:!0,slidesToShow:2,slidesToScroll:1}}]},T=n(119),y=n(107),H=function(e){var t=e.genres,n=e.genre_ids,s=e.vote_average,a=e.title,o=e.image,c=Object(i.c)((function(e){return e.data.config})),l=c&&c.images.base_url;return Object(O.jsxs)(O.Fragment,{children:[o?Object(O.jsx)(_.a,{w:"100%",h:{base:"275px",sm:"370px","3md":"470px"},src:"".concat(l,"w300").concat(o)}):Object(O.jsx)(_.a,{src:y.a,alt:"",h:{base:"280px",sm:"370px","3md":"470px"}}),Object(O.jsxs)(x.b,{pointerEvents:"none",background:"linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)",w:"100%",pos:"absolute",bottom:"0",left:"0",alignItems:"flex-start",justifyContent:"flex-end",h:"70%",p:{base:"16px"},children:[Object(O.jsx)(f,{genres:t,genre_ids:n}),Object(O.jsx)(r.a,{fontSize:{base:"12px",md:"16px","2xl":"20px"},children:g(s)}),Object(O.jsx)(r.a,{fontSize:{base:"16px",md:"18px","2xl":"24px"},children:Object(T.a)(a)})]})]})},I=n(120),W=function(e){var t=e.product,n=e.data,s=n.id,a=n.poster_path,o=n.name,c=n.title,l=n.vote_average,b=n.genre_ids,x=e.data,d=Object(i.c)((function(e){return"movie"===t?e.data.genresMovies:e.data.genresSerials})),p=o||c;return Object(O.jsxs)(r.a,{position:"relative",m:{base:"0 5px","2md":"0 10px 0 0"},children:[Object(O.jsx)(v.b,{to:"/".concat(t,"/").concat(s),children:Object(O.jsx)(H,{image:a,title:p,vote_average:l,genre_ids:b,genres:d})}),Object(O.jsx)(I.a,{product:x})]})},M=function(e){var t=e.product,n="movie"===t?"New releases ":"Featured TV shows ",s=Object(i.c)((function(e){return"movie"===t?e.nowPlaying.movies.results:e.nowPlaying.serials.results}));return Object(O.jsxs)(r.a,{as:"section",children:[Object(O.jsx)(r.a,{as:"h3",fontSize:{"2xl":"22px"},children:Object(O.jsxs)(v.b,{to:"/".concat(t),children:[n,Object(O.jsx)(_.a,{display:"inline-block",src:k})]})}),Object(O.jsx)(b.a,Object(o.a)(Object(o.a)({},z),{},{children:s&&s.map((function(e){return Object(O.jsx)(W,{data:e,product:t},e.id)}))}))]})};t.default=function(){var e=Object(i.b)();return Object(s.useEffect)((function(){e(Object(a.f)())}),[]),Object(O.jsxs)(r.a,{minH:"100vh",children:[Object(O.jsx)(S,{}),Object(O.jsxs)(r.a,{pl:{base:"0","2md":"56px"},children:[Object(O.jsx)(M,{product:"movie"}),Object(O.jsx)(M,{product:"tv"})]})]})}}}]);
//# sourceMappingURL=7.272dba9e.chunk.js.map