(this["webpackJsonprevit-react"]=this["webpackJsonprevit-react"]||[]).push([[0],{126:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(14),o=c.n(s),r=(c(126),c(69)),i=c(16),l=c(37),d=c(38),j=c(42),h=c(41),b=c(9),u=function(e){var t=e.projects;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h3",{children:"Projects"}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Filename"}),Object(b.jsx)("th",{scope:"col",children:"Elements"}),Object(b.jsx)("th",{scope:"col"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:e.id}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.dataCount}),Object(b.jsx)("td",{children:Object(b.jsx)(r.b,{className:"btn btn-primary btn-sm",to:"project/".concat(e.id),children:"Detail"})})]},t.toString())}))})]})]})},p=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={projects:[]},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/Projects/").then((function(e){return e.json()})).then((function(t){e.setState({projects:t})})).catch(console.log)}},{key:"render",value:function(){return Object(b.jsx)("div",{class:"row",children:Object(b.jsx)(u,{projects:this.state.projects})})}}]),c}(n.Component),O=c(98),x=[{field:"id",headerName:"ID",width:"80"},{field:"name",headerName:"Name",width:250},{field:"categoryLocalizedName",headerName:"Category",width:250},{field:"categoryEnumName",headerName:"Category",width:250}],m=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),console.log("XX1",e),(n=t.call(this,e)).id=e.index,n.state={project:[]},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/Projects/"+this.id).then((function(e){return e.json()})).then((function(t){e.setState({title:t.title}),console.log("injson",t);var c={};return t.data.map((function(e){"undefined"==typeof c[e.categoryLocalizedName]&&(c[e.categoryLocalizedName]=[]),c[e.categoryLocalizedName].push(e)})),c})).then((function(t){console.log("outjson",t),e.setState({project:t}),console.log("state",e.state)})).catch(console.log)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"row",style:{height:"100vh",width:"100%"},children:[Object(b.jsx)("h4",{children:this.state.title}),Object(b.jsx)("div",{class:"accordion",id:"accordionFlushExample",children:Object.keys(this.state.project).map((function(t,c){return Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("h2",{className:"accordion-header",id:"flush-heading_"+c,children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapse_"+c,"aria-expanded":"false","aria-controls":"flush-collapse_"+c,children:t})}),Object(b.jsx)("div",{id:"flush-collapse_"+c,class:"accordion-collapse collapse","aria-labelledby":"flush-heading_"+c,"data-bs-parent":"#accordionFlushExample",children:Object(b.jsx)("div",{className:"accordion-body",children:Object(b.jsx)("div",{style:{height:"400px",width:"100%"},children:Object(b.jsx)(O.a,{pageSize:10,rowHeight:28,rows:e.state.project[t],columns:x})})})})]},"gr_"+c)}))})]})}}]),c}(n.Component),f=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).id=e.match.params.id,n}return Object(d.a)(c,[{key:"render",value:function(){return console.log(this.state),Object(b.jsx)(m,{index:this.id})}}]),c}(n.Component),v=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(b.jsx)(i.a,{path:"/project/:id",component:f})]})};var g=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(v,{})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.bdb1a99e.chunk.js.map