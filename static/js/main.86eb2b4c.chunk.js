(this["webpackJsonppowerbi-app"]=this["webpackJsonppowerbi-app"]||[]).push([[0],{42:function(e,c,i){},77:function(e,c,i){},84:function(e,c,i){},85:function(e,c,i){},92:function(e,c,i){"use strict";i.r(c);var t=i(0),n=i.n(t),o=i(16),a=i.n(o),r=i(48),d=i(5),p=i(28),s=i.n(p),b=i(43),l=i(44),j=i(45),I=i(51),h=i(50),m=i(26),u=i(19),f=(i(33),i(42),i(96)),J=i(95),y=i(97),O=(i(77),i(1));var V=function(){return Object(O.jsx)(f.a,{bg:"primary",variant:"dark",children:Object(O.jsx)(J.a,{children:Object(O.jsxs)(y.a,{className:"me-auto",children:[Object(O.jsx)(y.a.Link,{href:"https://ashvinit.github.io/powerbi-app/#/View-Report",children:"View Report"}),Object(O.jsx)(y.a.Link,{href:"https://ashvinit.github.io/powerbi-app/#/Embedded-Report",children:"Embed-Report"})]})})})},Z=function(e){Object(I.a)(i,e);var c=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=c.call.apply(c,[this].concat(n))).state={loading:!0},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){var e=Object(b.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.powerbi.com/v1.0/myorg/groups/4cfc74fc-a3c6-4394-becc-f089e508034e/reports/e99b4751-02cb-495b-9d5f-4fa07dce7dc9/GenerateToken",c=new Request("https://api.powerbi.com/v1.0/myorg/groups/4cfc74fc-a3c6-4394-becc-f089e508034e/reports/e99b4751-02cb-495b-9d5f-4fa07dce7dc9/GenerateToken",{method:"POST",body:{accessLevel:"View",allowSaveAs:"true"}}),fetch(c).then((function(e){var c=JSON.stringify(e.body);console.log(c)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"powerbiDiv",children:Object(O.jsx)(m.PowerBIEmbed,{embedConfig:{type:"report",id:"e99b4751-02cb-495b-9d5f-4fa07dce7dc9",embedUrl:"https://app.powerbi.com/reportEmbed?reportId=e99b4751-02cb-495b-9d5f-4fa07dce7dc9&groupId=4cfc74fc-a3c6-4394-becc-f089e508034e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGZkNGZkY2UtZjMzZi00ZWE4LWExODQtMTdhZTNlMzgzMWY4LyIsImlhdCI6MTYyODgxMjg4NywibmJmIjoxNjI4ODEyODg3LCJleHAiOjE2Mjg4MTY3ODcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFsT3hwamw0VHM1SWpNSEQ0S3BGWkdIcDc1WmVGQms5dUt3UVZSc1ZTbGMzZjlsVEpmUW05TlZPeXAzaU1GUVpIIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiVGhvbWFzIiwiZ2l2ZW5fbmFtZSI6IkFzaHZpbmkiLCJpcGFkZHIiOiIxMDQuMTM2LjE4OC43OSIsIm5hbWUiOiJBc2h2aW5pIFRob21hcyIsIm9pZCI6IjJjZTk2MmM4LTgyMDAtNGIzNS05YmU5LTRlMzg2YTQyYTUwZSIsInB1aWQiOiIxMDAzMjAwMTZCMjc2NTY1IiwicmgiOiIwLkFRY0F6djNVVHpfenFFNmhoQmV1UGpneC1BOEJISWRoWHJGUGc2eVlZUXAta1JBSEFPSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJ0MTJUd0ctMlVXUVRJMl84Y21oSTZiTjIyVnNLWWZGcFBUUm9rSlp5a3FzIiwidGlkIjoiNGZkNGZkY2UtZjMzZi00ZWE4LWExODQtMTdhZTNlMzgzMWY4IiwidW5pcXVlX25hbWUiOiJhc2h2aW5pLnRob21hc0BrYXNodGVjaGxsYy5jb20iLCJ1cG4iOiJhc2h2aW5pLnRob21hc0BrYXNodGVjaGxsYy5jb20iLCJ1dGkiOiJoN2JzaUpnS0NFV1FweHRKVlpUdUFnIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.U3OE36_eN-1KyhtR1lhc_7yCUQssmToxyiwpxEyDxO88Vu2T-KKMRjDJoDuh5EkWIMNZOUcoj1RsPDdW7IEi719zxNEs7Za3r2cGWYGcxVh6QHghkpviDujbd8sVziCRlB0i2NqUbuzfPGoRW1ST8WyPJOnQTL2-2kNffBvnA7yv0AFAK0z6eNI_84p_11Ngl4BJEb7pV68hpmzZvMc-V90vehBb7KovGLK3VJB8zO-LFkabaW0iRv4dZXFgMaMhxLKfTZwnKTSaJ2UQKTDQWh_JX8PAkCkatf3s8SKPvzrfnh_QUaHPXfxUphDBImFYDEJjBMh_85_AdzyBiwm66Q",tokenType:u.models.TokenType.Aad,settings:{panes:{filters:{expanded:!1,visible:!1}},background:u.models.BackgroundType.Transparent}},eventHandlers:new Map([["loaded",function(){console.log("Report loaded")}],["rendered",function(){console.log("Report rendered")}],["error",function(e){console.log(e.detail)}]]),cssClassName:"Embed-container",getEmbeddedComponent:function(e){window.report=e}})})}}]),i}(n.a.Component);i(84);var W=function(){return Object(O.jsx)("a",{className:"reportButton",href:"https://app.powerbi.com/reportEmbed?reportId=e99b4751-02cb-495b-9d5f-4fa07dce7dc9&autoAuth=true&ctid=4fd4fdce-f33f-4ea8-a184-17ae3e3831f8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",target:"_blank",children:"View Report"})};i(85);var M=function(){return Object(O.jsx)("div",{className:"reportButtonDiv",children:Object(O.jsx)(W,{})})};var w=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(V,{}),Object(O.jsx)(r.a,{children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{exact:!0,path:"/Embedded-Report",component:Z}),Object(O.jsx)(d.a,{exact:!0,path:"/View-Report",component:M})]})})]})};i(91);a.a.render(Object(O.jsx)(w,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.86eb2b4c.chunk.js.map