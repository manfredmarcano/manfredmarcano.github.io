import{$a as R,Da as L,Ea as c,F as M,Ga as b,Ha as u,Ia as N,J as P,K as O,Kb as q,L as k,Lb as G,N as I,O as w,Oa as j,Pa as D,Ra as V,Sa as C,U as y,X as E,Y as a,Z as m,ba as x,da as d,fa as F,ha as r,ia as p,ja as v,ka as S,la as T,ma as B,nb as $,oa as A,pa as _,rb as U,ua as z,va as s,wa as g,xa as f}from"./chunk-7JWTNBWP.js";var J=(()=>{let t=class t{transform(o,n=100,i="..."){return o.length<=n?o:o.substring(0,n)+i}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=k({name:"truncate",type:t,pure:!0});let e=t;return e})();var W=e=>({"background-image":e});function X(e,t){if(e&1&&(S(0),s(1),c(2,"truncate"),T()),e&2){let l=_();a(),f(" ",u(2,1,l.data.title,l.titleLength,"")," ")}}function Y(e,t){if(e&1&&(s(0),c(1,"truncate"),r(2,"span",13),s(3,"[...]"),p()),e&2){let l=_();f(" ",u(1,2,l.data.title,l.titleLength,"")," "),a(2),d("ngbTooltip",l.data.title)}}var at=(()=>{let t=class t{set favorites(o){this.isFavorite=o.map(n=>+n).includes(+this.data.id)}constructor(o,n,i){this.hostElement=o,this.router=n,this.store=i,this.isFavorite=!1,this.titleLength=50,this.contentLength=100}ngAfterViewInit(){this.hostElement.nativeElement.addEventListener("click",this.goToArticle.bind(this))}goToArticle(){this.router.navigate([`articles/${this.data.id}`])}setFavorite(o){o.stopPropagation(),this.store.dispatch(U.toggleFavorite({id:+this.data.id}))}};t.\u0275fac=function(n){return new(n||t)(m(y),m(R),m($))},t.\u0275cmp=P({type:t,selectors:[["app-article-item"]],inputs:{data:"data",favorites:"favorites"},decls:22,vars:22,consts:[["ellipsis",""],[1,"image",3,"ngStyle"],[1,"slope"],[1,"badge","rounded-pill","text-bg-success","price"],[1,"material-icons","star","favoriteNO",3,"click"],[1,"title"],[4,"ngIf","ngIfElse"],[1,"content"],[1,"metadata"],[1,"metadata__author-photo"],[3,"src"],[1,"metadata__author-name"],[1,"metadata__date"],["placement","top right",3,"ngbTooltip"]],template:function(n,i){if(n&1){let h=B();r(0,"div",1),v(1,"div",2),r(2,"span",3),s(3),p(),r(4,"span",4),A("click",function(K){return I(h),w(i.setFavorite(K))}),s(5,"star"),p()(),r(6,"div",5),x(7,X,3,5,"ng-container",6),c(8,"truncate"),x(9,Y,4,6,"ng-template",null,0,N),p(),r(11,"div",7),s(12),c(13,"truncate"),p(),r(14,"div",8)(15,"div",9),v(16,"img",10),p(),r(17,"div",11),s(18),p(),r(19,"div",12),s(20),c(21,"date"),p()()}if(n&2){let h=z(10);d("ngStyle",L(20,W,"url("+i.data.image+")")),a(3),f("$",i.data.monthlyPrice,"/MO"),a(),F("favorite",i.isFavorite),a(3),d("ngIf",u(8,10,i.data.title,i.titleLength,"")===i.data.title)("ngIfElse",h),a(5),g(b(13,14,i.data.content,i.contentLength)),a(4),d("src",i.data.author.avatar,E),a(2),g(i.data.author.name),a(2),g(b(21,17,i.data.datetime,"MMM dd"))}},dependencies:[j,D,q,V,J],styles:["[_nghost-%COMP%]{background-color:#fff;display:flex;flex-direction:column;height:100%;border-radius:5px;cursor:pointer}.image[_ngcontent-%COMP%]{height:200px;background-size:cover;background-position:center;position:relative;border-top-left-radius:5px;border-top-right-radius:5px}.image[_ngcontent-%COMP%]   .slope[_ngcontent-%COMP%]{clip-path:polygon(100% 0%,100% 0%,100% 100%,55px 100%);background:#fff;height:24px;position:absolute;z-index:1;width:100%;bottom:0}.image[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{padding:6px 10px;position:absolute;top:10px;left:13px}.image[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{color:#b4c2d3;position:absolute;top:10px;right:10px;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out;background:-webkit-linear-gradient(#B4C2D3,#B4C2D3);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.image[_ngcontent-%COMP%]   .star.favorite[_ngcontent-%COMP%], .image[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover{background:-webkit-linear-gradient(#FFC726,#F99716);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.image[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover{transform:rotate(360deg)}.title[_ngcontent-%COMP%]{margin:20px 24px 8px;font-size:21px;font-weight:900;color:#161c2d}.content[_ngcontent-%COMP%]{flex:auto;margin:0 24px;font-size:16px;font-weight:400;color:#6b7c93}.metadata[_ngcontent-%COMP%]{height:40px;display:flex;align-items:center;margin:0 24px 20px;border-top:solid 2px #F3F7FB;color:#6b7c93;font-size:12px;font-weight:900;text-transform:uppercase;padding-top:10px}.metadata__author-name[_ngcontent-%COMP%]{flex:auto;margin-left:8px}.metadata__author-photo[_ngcontent-%COMP%]{width:24px;height:24px}.metadata__author-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}"]});let e=t;return e})();var gt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=O({type:t}),t.\u0275inj=M({imports:[C,G,C]});let e=t;return e})();export{at as a,gt as b};