(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{364:function(t,e,a){},365:function(t,e,a){},448:function(t,e,a){},450:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(14),c=a.n(i),r=(a(364),a(365),a(117)),s=a(139),u=a(340),l=a(341),d=a(347),h=a(346),j=a(342),b=a.n(j),f=a(226),g=a.n(f),v=a(77),m=a(231),O=a(307),p=a(482),S=a(483),x=(a(448),a(27)),P=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).columns=[{title:"Products",field:"productName"},{title:"Sub Category",field:"subCategoriesName",editComponent:function(t){var e,a=t.value,o=t.onRowDataChange,i=t.rowData;return Object(x.jsx)(m.a,{value:a,onChange:function(t){var e;o(Object(s.a)(Object(s.a)({},i),{},{secondPerson:null!==(e=t.target.value)&&void 0!==e?e:""}))},children:null===(e=n.state.dataSource)||void 0===e?void 0:e.map((function(t){return Object(x.jsx)(O.a,{value:t.subCategoriesName,children:t.subCategoriesName},t._id)}))})}},{title:"Category",field:"categorieName",editComponent:function(t){var e,a=t.value,o=t.onRowDataChange,i=t.rowData;return Object(x.jsx)(m.a,{value:a,onChange:function(t){var e;o(Object(s.a)(Object(s.a)({},i),{},{relation:null!==(e=t.target.value)&&void 0!==e?e:""}))},children:null===(e=n.state.dataSource)||void 0===e?void 0:e.map((function(t){return Object(x.jsx)(O.a,{value:t.categorieName,children:t.categorieName},t._id)}))})}}],n.getInitialData=function(){b.a.get("/api/products/getAllProducts").then((function(t){t.data.result?(console.log(t.data.result),n.setState({dataSource:t.data.result})):console.log("can't get initial data")})).catch((function(t){console.log(t)}))},n.state={dataSource:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getInitialData()}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{children:[Object(x.jsxs)(p.a,{maxWidth:"md",children:[Object(x.jsx)(v.a,{variant:"h4",align:"center",gutterBottom:!0,children:"To demonstrate the usage of material table, UI and rest-api"}),Object(x.jsxs)(v.a,{variant:"h5",align:"center",gutterBottom:!0,children:["Developers Info :-",Object(x.jsx)(S.a,{href:"http://rushikesh619.github.io/",children:"http://rushikesh619.github.io/"})]})]}),Object(x.jsx)(p.a,{maxWidth:"md",children:Object(x.jsx)(g.a,{title:"Products Table",data:this.state.dataSource,columns:this.columns,editable:{onRowAdd:function(e){return new Promise((function(a,n){console.log(e);var o={firstPerson:e.firstPerson,relation:e.relation,secondPerson:e.secondPerson};setTimeout((function(){t.setState({dataSource:[].concat(Object(r.a)(t.state.dataSource),[o])}),a()}),1e3)}))},onRowUpdate:function(e,a){return new Promise((function(n,o){setTimeout((function(){var o=Object(r.a)(t.state.dataSource),i=a.tableData.id,c={firstPerson:e.firstPerson,relation:e.relation,secondPerson:e.secondPerson};o[i]=c,t.setState({dataSource:Object(r.a)(o)}),n()}),1e3)}))},onRowDelete:function(e){return new Promise((function(a,n){setTimeout((function(){var n=Object(r.a)(t.state.dataSource),o=e.tableData.id;n.splice(o,1),t.setState({dataSource:Object(r.a)(n)}),a()}),1e3)}))}}})})]})}}]),a}(o.a.Component);var C=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(P,{})})},w=function(t){t&&t instanceof Function&&a.e(6).then(a.bind(null,874)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),o(t),i(t),c(t)}))};c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),w()}},[[450,1,3]]]);
//# sourceMappingURL=main.9fdbe83b.chunk.js.map