import{Aa as A,Ba as d,Ca as m,Da as $,E as x,I as l,J as v,N as O,Na as T,O as w,Oa as z,Pa as B,Qa as D,Ra as N,Sa as j,W as F,X as p,Y as I,_a as M,bb as L,ca as f,ea as c,fb as P,ha as n,hb as _,ia as o,ja as u,ka as S,la as k,ma as y,sa as r,ta as h,ua as E}from"./chunk-JFN2GGIO.js";var G=e=>({"background-image":e}),V=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l({type:t,selectors:[["app-article-item"]],inputs:{data:"data"},decls:18,vars:12,consts:[[1,"image",3,"ngStyle"],[1,"slope"],[1,"badge","rounded-pill","text-bg-success","price"],[1,"material-icons","star","favorite"],[1,"title"],[1,"content"],[1,"metadata"],[1,"metadata__author-photo"],[3,"src"],[1,"metadata__author-name"],[1,"metadata__date"]],template:function(i,a){i&1&&(n(0,"div",0),u(1,"div",1),n(2,"span",2),r(3),o(),n(4,"span",3),r(5,"star"),o()(),n(6,"div",4),r(7),o(),n(8,"div",5),r(9),o(),n(10,"div",6)(11,"div",7),u(12,"img",8),o(),n(13,"div",9),r(14),o(),n(15,"div",10),r(16),d(17,"date"),o()()),i&2&&(c("ngStyle",A(10,G,"url("+a.data.image+")")),p(3),E("$",a.data.monthlyPrice,"/MO"),p(4),h(a.data.title),p(2),h(a.data.content),p(3),c("src",a.data.author.avatar,F),p(2),h(a.data.author.name),p(2),h($(17,7,a.data.datetime,"MMM dd")))},dependencies:[B,N],styles:["[_nghost-%COMP%]{background-color:#fff;display:flex;flex-direction:column;height:100%;border-radius:5px}.image[_ngcontent-%COMP%]{height:200px;background-size:cover;background-position:center;position:relative;border-top-left-radius:5px;border-top-right-radius:5px}.image[_ngcontent-%COMP%]   .slope[_ngcontent-%COMP%]{clip-path:polygon(100% 0%,100% 0%,100% 100%,55px 100%);background:#fff;height:24px;position:absolute;z-index:1;width:100%;bottom:0}.image[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{padding:6px 10px;position:absolute;top:10px;left:13px}.image[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{color:#b4c2d3;position:absolute;top:10px;right:10px;cursor:pointer}.image[_ngcontent-%COMP%]   .star.favorite[_ngcontent-%COMP%]{background:-webkit-linear-gradient(#FFC726,#F99716);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.title[_ngcontent-%COMP%]{margin:20px 24px 8px;font-size:21px;font-weight:900;color:#161c2d}.content[_ngcontent-%COMP%]{flex:auto;margin:0 24px;font-size:16px;font-weight:400;color:#6b7c93}.metadata[_ngcontent-%COMP%]{height:40px;display:flex;align-items:center;margin:0 24px 20px;border-top:solid 2px #F3F7FB;color:#6b7c93;font-size:12px;font-weight:900;text-transform:uppercase;padding-top:10px}.metadata__author-name[_ngcontent-%COMP%]{flex:auto;margin-left:8px}.metadata__author-photo[_ngcontent-%COMP%]{width:24px;height:24px}.metadata__author-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}"]});let e=t;return e})();function J(e,t){if(e&1&&(n(0,"article"),u(1,"app-article-item",6),o()),e&2){let g=t.$implicit;p(),c("data",g)}}function K(e,t){if(e&1&&(n(0,"div",3)(1,"div",4),f(2,J,2,1,"article",5),d(3,"async"),o()()),e&2){let g=y();p(2),c("ngForOf",m(3,1,g.posts$))}}function Q(e,t){if(e&1){let g=S();n(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"button",11),k("click",function(){O(g);let i=y();return w(i.loadMorePosts())}),r(5,"Load more"),n(6,"span",12),r(7,"arrow_right_alt"),o()()()()()()}}function W(e,t){e&1&&(n(0,"div",13)(1,"div",14)(2,"span",15),r(3,"Loading..."),o()()())}var R=(()=>{let t=class t{constructor(s){this.store=s,this.posts$=this.store.select(_.getAllPosts),this.loading$=this.store.select(_.isLoading),this.hasPaginationFinished$=this.store.select(_.hasPaginationFinished),this.store.dispatch(P.loadPosts())}loadMorePosts(){this.store.dispatch(P.loadPosts())}};t.\u0275fac=function(i){return new(i||t)(I(L))},t.\u0275cmp=l({type:t,selectors:[["app-articles"]],decls:7,vars:11,consts:[["class","container",4,"ngIf"],["class","container mt-4",4,"ngIf"],["class","container text-center my-3",4,"ngIf"],[1,"container"],[1,"list"],[4,"ngFor","ngForOf"],[3,"data"],[1,"container","mt-4"],[1,"row"],[1,"col-md-6","offset-md-3"],[1,"d-grid"],["type","button",1,"btn","btn-outline-primary","btn-lg","load-more-button",3,"click"],[1,"material-icons"],[1,"container","text-center","my-3"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(i,a){if(i&1&&(f(0,K,4,3,"div",0),d(1,"async"),f(2,Q,8,0,"div",1),d(3,"async"),d(4,"async"),f(5,W,4,0,"div",2),d(6,"async")),i&2){let b;c("ngIf",(b=m(1,3,a.posts$))==null?null:b.length),p(2),c("ngIf",!m(3,5,a.loading$)&&!m(4,7,a.hasPaginationFinished$)),p(3),c("ngIf",m(6,9,a.loading$))}},dependencies:[T,z,V,D],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-gap:40px}.list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{height:439px}@media (min-width: 600px){.list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-width: 1024px){.list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 575.98px){.list[_ngcontent-%COMP%]{grid-gap:1rem}}.load-more-button[_ngcontent-%COMP%]{position:relative;font-weight:900;font-size:17px}.load-more-button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{vertical-align:middle;font-size:30px;position:absolute;right:20px}"]});let e=t;return e})();var U=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l({type:t,selectors:[["app-article"]],decls:2,vars:0,template:function(i,a){i&1&&(n(0,"h1"),r(1,"ARTICLE #X"),o())}});let e=t;return e})();var Y=[{path:"",component:R},{path:":id",component:U}],X=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[M.forChild(Y),M]});let e=t;return e})();var ht=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[j,X]});let e=t;return e})();export{ht as ArticlesModule};