(this["webpackJsonppowerbi-app"]=this["webpackJsonppowerbi-app"]||[]).push([[0],{123:function(e,t){},124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},169:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),a=c(15),r=c.n(a),o=c(59),d=c(6),s=c(21),b=c.n(s),p=c(52),j=c(53),l=c(54),u=c(62),f=c(61),m=c(31),h=c(20),O=(c(38),c(48),c(173)),I=c(172),Z=c(174),w=(c(87),c(1));var J=function(){return Object(w.jsx)(O.a,{bg:"primary",variant:"dark",children:Object(w.jsx)(I.a,{children:Object(w.jsxs)(Z.a,{className:"me-auto",children:[Object(w.jsx)(Z.a.Link,{href:"https://ashvinit.github.io/powerbi-app/#/View-Report",children:"View Report"}),Object(w.jsx)(Z.a.Link,{href:"https://ashvinit.github.io/powerbi-app/#/Embedded-Report",children:"Embed-Report"})]})})})},y=function(e){Object(u.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(j.a)(this,c);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.powerbi.com/v1.0/myorg/groups/4cfc74fc-a3c6-4394-becc-f089e508034e/reports/e99b4751-02cb-495b-9d5f-4fa07dce7dc9/GenerateToken",t=new Request("https://api.powerbi.com/v1.0/myorg/groups/4cfc74fc-a3c6-4394-becc-f089e508034e/reports/e99b4751-02cb-495b-9d5f-4fa07dce7dc9/GenerateToken",{method:"POST",body:{accessLevel:"View",allowSaveAs:"true"}}),fetch(t).then((function(e){var t=JSON.stringify(e.body);console.log(t)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(w.jsx)("div",{className:"powerbiDiv",children:Object(w.jsx)(m.PowerBIEmbed,{embedConfig:{type:"report",id:"e99b4751-02cb-495b-9d5f-4fa07dce7dc9",embedUrl:"https://app.powerbi.com/reportEmbed?reportId=e99b4751-02cb-495b-9d5f-4fa07dce7dc9&groupId=4cfc74fc-a3c6-4394-becc-f089e508034e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGZkNGZkY2UtZjMzZi00ZWE4LWExODQtMTdhZTNlMzgzMWY4LyIsImlhdCI6MTYyODg2MzU4NSwibmJmIjoxNjI4ODYzNTg1LCJleHAiOjE2Mjg4Njc0ODUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFUbWVWZkdzZmVJcmpOVXpUYjNrNThuYnd1MzJpZDc0MXJDN3ZnaldHcXV2enh1N1YyODRmNG9oczROUm9mVnBDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiVGhvbWFzIiwiZ2l2ZW5fbmFtZSI6IkFzaHZpbmkiLCJpcGFkZHIiOiIxMDQuMTM2LjE4OC43OSIsIm5hbWUiOiJBc2h2aW5pIFRob21hcyIsIm9pZCI6IjJjZTk2MmM4LTgyMDAtNGIzNS05YmU5LTRlMzg2YTQyYTUwZSIsInB1aWQiOiIxMDAzMjAwMTZCMjc2NTY1IiwicmgiOiIwLkFRY0F6djNVVHpfenFFNmhoQmV1UGpneC1BOEJISWRoWHJGUGc2eVlZUXAta1JBSEFPSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJ0MTJUd0ctMlVXUVRJMl84Y21oSTZiTjIyVnNLWWZGcFBUUm9rSlp5a3FzIiwidGlkIjoiNGZkNGZkY2UtZjMzZi00ZWE4LWExODQtMTdhZTNlMzgzMWY4IiwidW5pcXVlX25hbWUiOiJhc2h2aW5pLnRob21hc0BrYXNodGVjaGxsYy5jb20iLCJ1cG4iOiJhc2h2aW5pLnRob21hc0BrYXNodGVjaGxsYy5jb20iLCJ1dGkiOiI0QkRRTG1NdHZFU3JzM2JkVm9GV0F3IiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Tc3GCz2zfG531wKjIacMZUOO8lQKNzwQRaLdSJy7O_jKKHSAfASDalvDoNZ_wAi5wwjvbSwN_Ngf_aAknWgUqLOCYBW2t_gzirW1_UEBQa7Vz6zc5-D_B-mLLnhoU-qaoA0bNx6v7GCF0ld6zRDakx6o5cingKCGlsqt7RuE0hamGwgs7U_v5skWKm6Mdnl7e0pRMjE_hjkJL2_2o2GeXQ7e7nZ7GnwzXLSDD3Wn3f9m_uVBN4OjZFg0MCEmrGLTvEP7RsJlb2oWkZiEtJ2lHa0Hu-qbAHXyxp7HQy73yGCe0yrxCt6bayqSbBwxZ-PSL3EfHG8b4vJJwynr8ayYZg",tokenType:h.models.TokenType.Aad,settings:{panes:{filters:{expanded:!1,visible:!1}},background:h.models.BackgroundType.Transparent}},eventHandlers:new Map([["loaded",function(){console.log("Report loaded")}],["rendered",function(){console.log("Report rendered")}],["error",function(e){console.log(e.detail)}]]),cssClassName:"Embed-container",getEmbeddedComponent:function(e){window.report=e}})})}}]),c}(n.a.Component);c(94);var N=function(){return Object(w.jsx)("a",{className:"reportButton",href:"https://app.powerbi.com/groups/fd3dd68f-243a-4910-9182-388116f324ba/datasets/688879c3-2f09-46f3-a43c-e6777341319e",target:"_blank",children:"View Report"})};c(95),c(96);var v=function(){return Object(w.jsx)("a",{className:"createButton",href:"https://app.powerbi.com/groups/fd3dd68f-243a-4910-9182-388116f324ba/datasets/688879c3-2f09-46f3-a43c-e6777341319e",target:"_blank",children:"Create Report"})},V=c(37),k=c(5),W=c(58),M=(c(161),c(162),c.p+"static/media/Finance_Report.11f75211.pdf");var x=function(){var e=Object(i.useState)(M),t=Object(V.a)(e,1)[0],c=Object(i.useState)(!0),n=Object(V.a)(c,2),a=(n[0],n[1],Object(W.defaultLayoutPlugin)());return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"pdfContainer",children:t&&Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(k.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:Object(w.jsx)(k.Viewer,{fileUrl:t,plugins:[a]})})})})})};var g=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"createButtonDiv",children:Object(w.jsx)(v,{})}),Object(w.jsx)("div",{className:"reportButtonDiv",children:Object(w.jsx)(N,{})}),Object(w.jsx)("div",{className:"pdfDiv",children:Object(w.jsx)(x,{})})]})};var L=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(J,{}),Object(w.jsx)(o.a,{children:Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{exact:!0,path:"/Embedded-Report",component:y}),Object(w.jsx)(d.a,{exact:!0,path:"/View-Report",component:g})]})})]})};c(168);r.a.render(Object(w.jsx)(L,{}),document.getElementById("root"))},48:function(e,t,c){},51:function(e,t){},87:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){}},[[169,1,2]]]);
//# sourceMappingURL=main.9918f618.chunk.js.map