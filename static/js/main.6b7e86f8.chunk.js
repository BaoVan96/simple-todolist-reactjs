(this["webpackJsonpsimple-todolist-react"]=this["webpackJsonpsimple-todolist-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),s=(n(15),n(2)),o=n(3),u=n(5),l=n(4),d=(n(16),"none"),h="search",j="create",b=n(6),p=n(0),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={value:e.value||""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(b.a)(a)),a.clear=a.clear.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"clear",value:function(){this.setState({value:""})}},{key:"handleKeyUp",value:function(e){var t=this.props.addNew,n=this.state.value.trim();13==e.keyCode&&(t(n),this.setState({value:""}))}},{key:"render",value:function(){return Object(p.jsx)("input",{type:"text",autoFocus:!0,className:"form-control add-todo",placeholder:"Add New",onChange:this.handleChange,onKeyUp:this.handleKeyUp,value:this.state.value})}}]),n}(c.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.query,n=e.searchToDo;return Object(p.jsx)("input",{type:"text",className:"form-control search",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Search"})}}]),n}(c.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.addNew,a=e.query,c=e.searchToDo;switch(t){case j:return Object(p.jsx)(f,{addNew:n});case h:return Object(p.jsx)(O,{query:a,searchToDo:c});default:return null}}}]),n}(c.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.addNew,n=e.mode,a=e.query,c=e.searchToDo;return Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"Thing To Dos"}),Object(p.jsx)(v,{addNew:t,mode:n,query:a,searchToDo:c})]})}}]),n}(c.a.Component),x=n(7);function g(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}var y="active",k="completed";var C=function(){var e;return e={},Object(x.a)(e,"all","All"),Object(x.a)(e,y,"Active"),Object(x.a)(e,k,"Completed"),e}(),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.change,n=function(t){return t===e.props.filter?"selected":""};return Object(p.jsx)("ul",{className:"filters list-unstyled clearfix",children:Object.keys(C).map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){return t(e)},className:n(e),children:C[e]})},e)}))})}}]),n}(c.a.Component),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.changeMode,a=function(){return t===j},c=function(){return t===h};return Object(p.jsxs)("div",{className:"pull-left buttons",children:[Object(p.jsx)("a",{title:"Add New",className:"button add "+(a()?"selected":""),onClick:function(){return n(a()?d:j)}}),Object(p.jsx)("a",{title:"Search",className:"button search "+(c()?"selected":""),onClick:function(){return n(c()?d:h)}})]})}}]),n}(c.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.filter,a=e.change,c=e.mode,r=e.changeMode;return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"todo-footer clearfix d-flex justify-content-between",children:[Object(p.jsx)(S,{mode:c,changeMode:r}),Object(p.jsxs)("div",{className:"pull-left",children:[Object(p.jsx)("strong",{children:Object(p.jsx)("span",{className:"count-todos",children:t})})," items left"]}),Object(p.jsx)("div",{className:"pull-right",children:Object(p.jsx)(N,{filter:n,change:a})})]})})}}]),n}(c.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={checked:a.props.checked},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target.checked;this.setState({checked:t}),this.props.changeStatus(t)}},{key:"render",value:function(){return Object(p.jsx)("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleChange,id:this.props.id})}}]),n}(c.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data;return Object(p.jsx)("li",{className:t.completed?"ui-state-default completed":"ui-state-default",children:Object(p.jsxs)("div",{className:"checkbox",children:[Object(p.jsx)(T,{changeStatus:function(n){return e.props.changeStatus(t.id,n)},id:t.id,checked:t.completed}),Object(p.jsx)("label",{htmlFor:t.id,children:t.text})]})},t.id)}}]),n}(c.a.Component),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.filteredItems;return Object(p.jsx)("ul",{className:"list-unstyled",children:t.length>0?Object(p.jsx)("ul",{className:"list-unstyled",children:t.map((function(t){return Object(p.jsx)(D,{changeStatus:e.props.changeStatus,data:t},t.id)}))}):Object(p.jsx)("p",{className:"alert alert-info",children:"There are no items."})})}}]),n}(c.a.Component),q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.data,t=e.list,n=e.filter,a=e.mode,c=e.query,r=this.props.actions,i=r.addNew,s=r.changeFilter,o=r.changeStatus,u=r.changeMode,l=r.searchToDo,d=function(e,t){var n=t.trim().toLowerCase();return e.filter((function(e){var t,a;return t=e.text.toLowerCase(),a=n,-1!==t.indexOf(a)}))}(function(e,t){switch(t){case k:return e.filter((function(e){return!0===e.completed}));case y:return e.filter((function(e){return!0!==e.completed}));default:return e}}(t,n),c);return Object(p.jsxs)("div",{className:"todolist",children:[Object(p.jsx)(m,{addNew:i,mode:a,query:c,searchToDo:l}),Object(p.jsx)(F,{filteredItems:d,changeStatus:o}),Object(p.jsx)(w,{changeMode:u,count:d.length,filter:n,change:s,mode:a})]})}}]),n}(c.a.Component),M=n(10),L=n.n(M);var A=1;var I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={mode:j,list:[{id:1,text:"Learn Javascript",completed:!1},{id:2,text:"Learn React",completed:!1},{id:3,text:"Build a React App",completed:!1}],filter:"all",query:""},a.addNew=a.addNew.bind(Object(b.a)(a)),a.changeFilter=a.changeFilter.bind(Object(b.a)(a)),a.changeStatus=a.changeStatus.bind(Object(b.a)(a)),a.changeMode=a.changeMode.bind(Object(b.a)(a)),a.searchToDo=a.searchToDo.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"changeMode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.setState({mode:e})}},{key:"searchToDo",value:function(e){this.setState({query:e||""})}},{key:"addNew",value:function(e){var t=function(e,t){var n=Object.assign({id:[{id:1,text:"Learn Javascript",completed:!1},{id:2,text:"Learn React",completed:!1},{id:3,text:"Build a React App",completed:!1}].length+A++},t);return e.concat([n])}(this.state.list,{text:e,completed:!1});this.setState({list:t})}},{key:"changeFilter",value:function(e){this.setState({filter:e})}},{key:"changeStatus",value:function(e,t){var n=function(e,t,n){var a=e.findIndex((function(e){return e.id===t}));return L()(e,Object(x.a)({},a,{completed:{$set:n}}))}(this.state.list,e,t);this.setState({list:n})}},{key:"render",value:function(){var e=function(e,t){return c.a.Children.map(e,(function(e){return c.a.cloneElement(e,t)}))}(this.props.children,{data:this.state,actions:g(this,["addNew","changeFilter","changeStatus","changeMode","searchToDo"])});return Object(p.jsx)("div",{children:e})}}]),n}(c.a.Component),K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(I,{children:Object(p.jsx)(q,{})})})})}}]),n}(c.a.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(19);i.a.render(Object(p.jsx)(K,{}),document.getElementById("root")),U()}},[[20,1,2]]]);
//# sourceMappingURL=main.6b7e86f8.chunk.js.map