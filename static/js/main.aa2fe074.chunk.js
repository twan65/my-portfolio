(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(16),n=s.n(a),i=(s(24),s(6)),r=s(7),l=s(9),j=s(8),d=s(13),o=s(17),h=s.n(o),b=(s(27),s(18)),O=s(5),m=s.n(O),u=s(1),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.blog,t=this.props.data.github,s=this.props.data.name,c=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"circle",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#interest-skill",children:"Interest Skill"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:s})}),Object(u.jsx)(m.a,{bottom:!0,duration:1200,children:Object(u.jsx)("h3",{children:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,className:"button btn blog-btn",children:[Object(u.jsx)("i",{className:"fa fa-book"}),"Blog"]}),Object(u.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.data?Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("div",{className:"twelve columns",children:Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{children:"\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002"})})})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})}):null}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=this.props.data.address.city,a=this.props.data.email;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(m.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:t,alt:"Anveloper Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:e}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:a})]})]})})]})]})})})}}]),s}(c.Component),f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{className:"division",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h5",{children:["\u30dd\u30b8\u30b7\u30e7\u30f3",Object(u.jsx)("span",{children:"\u2022"}),"\u671f\u9593"]}),Object(u.jsxs)("p",{className:"info",children:[e.position,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"\u62c5\u5f53\u5de5\u7a0b"}),Object(u.jsx)("p",{className:"info",children:e.process})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"\u4f7f\u7528\u6280\u8853"}),Object(u.jsx)("p",{className:"info",children:e.tech})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"\u4e3b\u306a\u6a5f\u80fd"}),Object(u.jsx)("p",{className:"info",children:e.main_function})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"\u696d\u52d9\u5185\u5bb9"}),Object(u.jsx)("p",{children:e.description})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"\u8ab2\u984c\u30fb\u554f\u984c"}),Object(u.jsx)("p",{children:e.hard_point})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"\u5b66\u3073"}),Object(u.jsx)("p",{children:e.feel})]})]},e.title)})),a=this.props.data.skills.map((function(t){var s=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),a=t.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:s},className:c}),Object(u.jsx)("em",{children:t.name})]},t.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsxs)("span",{children:["Work(",this.props.data.work.length,")"]})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:t}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),s}(c.Component),N=s(19),g=s.n(N),w=0,k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(u.jsx)("div",{className:"columns interest-skill-item",children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)(g.a,{alt:e.title,src:t}),Object(u.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},w++)}));return Object(u.jsx)("section",{id:"interest-skill",children:Object(u.jsx)(m.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",children:[Object(u.jsx)("h1",{children:"\u6700\u8fd1\u3001\u8208\u5473\u3092\u6301\u3063\u3066\u3044\u308b\u6280\u8853"}),Object(u.jsx)("div",{id:"interest-skill-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),y=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.resume}),Object(u.jsx)(k,{data:this.state.resumeData.portfolio}),Object(u.jsx)(p,{data:this.state.resumeData.main})]})}}]),s}(c.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(y,{}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.aa2fe074.chunk.js.map