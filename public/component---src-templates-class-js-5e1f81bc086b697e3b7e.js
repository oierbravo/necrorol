(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i}),n.d(t,"pageQuery",function(){return s});var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n=t.frontmatter;return n.id||(n.id=e),n.category_id||(n.category_id=config.postDefaultCategoryID),l.a.createElement(Layout,null,l.a.createElement("div",null,l.a.createElement(Helmet,null,l.a.createElement("title",null,n.title+" | "+config.siteTitle)),l.a.createElement(SEO,{postPath:e,postNode:t,postSEO:!0}),l.a.createElement("div",null,l.a.createElement("h1",null,n.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),l.a.createElement("div",{className:"post-meta"},l.a.createElement(PostTags,{tags:n.tags}),l.a.createElement(SocialLinks,{postPath:e,postNode:t})),l.a.createElement(UserInfo,{config:config}),l.a.createElement(Disqus,{postNode:t}))))},t}(l.a.Component),s="3373174313"}}]);
//# sourceMappingURL=component---src-templates-class-js-5e1f81bc086b697e3b7e.js.map