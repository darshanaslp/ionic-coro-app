(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8cDG":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var a=u("pMnS"),b=u("MKJQ"),t=u("sZkV"),i=u("SVse"),c=u("H/yF");class r{constructor(l){this.newsService=l}ngOnInit(){this.newsService.getData("get-current-statistical").subscribe(l=>{console.log(l),this.data=l.data},l=>{console.log(l)})}}var s=o.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]],data:{}});function h(l){return o.Hb(0,[(l()(),o.ob(0,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,b.Q,b.r)),o.nb(1,49152,null,0,t.U,[o.h,o.k,o.x],{type:[0,"type"]},null)],(function(l,n){l(n,1,0,"indeterminate")}),null)}function d(l){return o.Hb(0,[(l()(),o.ob(0,0,null,null,31,"ion-card-content",[],null,null,null,b.D,b.f)),o.nb(1,49152,null,0,t.l,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,0,"img",[["class","info-img"],["src","../../assets/img/local-cover.jpg"]],null,null,null,null,null)),(l()(),o.ob(3,0,null,0,7,"ion-item",[["class","ion-padding-top"],["color","secondary"],["lines","none"]],null,null,null,b.N,b.o)),o.nb(4,49152,null,0,t.F,[o.h,o.k,o.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),o.ob(5,0,null,0,1,"ion-icon",[["name","calendar-outline"],["slot","start"]],null,null,null,b.M,b.n)),o.nb(6,49152,null,0,t.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(7,0,null,0,3,"ion-label",[["text-wrap",""]],null,null,null,b.O,b.p)),o.nb(8,49152,null,0,t.L,[o.h,o.k,o.x],null,null),(l()(),o.Fb(9,0,["Last Update : "," "])),o.Cb(10,2),(l()(),o.ob(11,0,null,0,6,"ion-item",[["color","warning"],["lines","none"]],null,null,null,b.N,b.o)),o.nb(12,49152,null,0,t.F,[o.h,o.k,o.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),o.ob(13,0,null,0,1,"ion-icon",[["name","clipboard"],["slot","start"]],null,null,null,b.M,b.n)),o.nb(14,49152,null,0,t.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(15,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,b.O,b.p)),o.nb(16,49152,null,0,t.L,[o.h,o.k,o.x],null,null),(l()(),o.Fb(17,0,["Total Local cased : ",""])),(l()(),o.ob(18,0,null,0,6,"ion-item",[["color","success"],["lines","none"]],null,null,null,b.N,b.o)),o.nb(19,49152,null,0,t.F,[o.h,o.k,o.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),o.ob(20,0,null,0,1,"ion-icon",[["name","medical"],["slot","start"]],null,null,null,b.M,b.n)),o.nb(21,49152,null,0,t.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(22,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,b.O,b.p)),o.nb(23,49152,null,0,t.L,[o.h,o.k,o.x],null,null),(l()(),o.Fb(24,0,["Total Local Recoverd : "," "])),(l()(),o.ob(25,0,null,0,6,"ion-item",[["color","danger"],["lines","none"]],null,null,null,b.N,b.o)),o.nb(26,49152,null,0,t.F,[o.h,o.k,o.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),o.ob(27,0,null,0,1,"ion-icon",[["name","people"],["slot","start"]],null,null,null,b.M,b.n)),o.nb(28,49152,null,0,t.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(29,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,b.O,b.p)),o.nb(30,49152,null,0,t.L,[o.h,o.k,o.x],null,null),(l()(),o.Fb(31,0,["Total Local Dead : "," "]))],(function(l,n){l(n,4,0,"secondary","none"),l(n,6,0,"calendar-outline"),l(n,12,0,"warning","none"),l(n,14,0,"clipboard"),l(n,19,0,"success","none"),l(n,21,0,"medical"),l(n,26,0,"danger","none"),l(n,28,0,"people")}),(function(l,n){var u=n.component,e=o.Gb(n,9,0,l(n,10,0,o.Ab(n.parent,0),u.data.update_date_time,"MM/dd/yyyy 'at' h:mma"));l(n,9,0,e),l(n,17,0,u.data.local_total_cases),l(n,24,0,u.data.local_recovered),l(n,31,0,u.data.local_deaths)}))}function k(l){return o.Hb(0,[o.Bb(0,i.d,[o.s]),(l()(),o.ob(1,0,null,null,6,"ion-header",[],null,null,null,b.L,b.m)),o.nb(2,49152,null,0,t.z,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,b.X,b.y)),o.nb(4,49152,null,0,t.xb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.ob(5,0,null,0,2,"ion-title",[],null,null,null,b.W,b.x)),o.nb(6,49152,null,0,t.vb,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Local Updates"])),(l()(),o.ob(8,0,null,null,39,"ion-content",[],null,null,null,b.J,b.k)),o.nb(9,49152,null,0,t.s,[o.h,o.k,o.x],null,null),(l()(),o.ob(10,0,null,0,11,"ion-card",[],null,null,null,b.H,b.e)),o.nb(11,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(12,0,null,0,5,"ion-card-header",[],null,null,null,b.E,b.g)),o.nb(13,49152,null,0,t.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(14,0,null,0,1,"ion-card-title",[],null,null,null,b.G,b.i)),o.nb(15,49152,null,0,t.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(16,0,null,0,1,"ion-card-subtitle",[],null,null,null,b.F,b.h)),o.nb(17,49152,null,0,t.n,[o.h,o.k,o.x],null,null),(l()(),o.db(16777216,null,0,1,null,h)),o.nb(19,16384,null,0,i.j,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,0,1,null,d)),o.nb(21,16384,null,0,i.j,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.ob(22,0,null,0,25,"ion-card",[],null,null,null,b.H,b.e)),o.nb(23,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(24,0,null,0,23,"ion-card",[],null,null,null,b.H,b.e)),o.nb(25,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(26,0,null,0,1,"header",[["class","ion-padding-bottom"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Srilanka Health Organization"])),(l()(),o.ob(28,0,null,0,19,"section",[],null,null,null,null,null)),(l()(),o.ob(29,0,null,null,18,"ion-grid",[],null,null,null,b.K,b.l)),o.nb(30,49152,null,0,t.y,[o.h,o.k,o.x],null,null),(l()(),o.ob(31,0,null,0,16,"ion-row",[],null,null,null,b.R,b.s)),o.nb(32,49152,null,0,t.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(33,0,null,0,6,"ion-col",[["size","4"]],null,null,null,b.I,b.j)),o.nb(34,49152,null,0,t.r,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.ob(35,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),o.ob(36,0,null,null,3,"ion-button",[["color","primary"],["href","https://www.facebook.com/hpbsrilanka/"]],null,null,null,b.B,b.c)),o.nb(37,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],href:[1,"href"]},null),(l()(),o.ob(38,0,null,0,1,"ion-icon",[["name","logo-facebook"],["slot","icon-only"]],null,null,null,b.M,b.n)),o.nb(39,49152,null,0,t.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(40,0,null,0,7,"ion-col",[["size","4"]],null,null,null,b.I,b.j)),o.nb(41,49152,null,0,t.r,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.ob(42,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),o.ob(43,0,null,null,4,"ion-button",[["color","light"],["href","https://www.hpb.health.gov.lk"]],null,null,null,b.B,b.c)),o.nb(44,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],href:[1,"href"]},null),(l()(),o.ob(45,0,null,0,1,"ion-icon",[["name","globe"],["slot","icon-only"]],null,null,null,b.M,b.n)),o.nb(46,49152,null,0,t.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.Fb(-1,0,[" .com "]))],(function(l,n){var u=n.component;l(n,4,0,"dark"),l(n,19,0,!u.data),l(n,21,0,u.data),l(n,34,0,"4"),l(n,37,0,"primary","https://www.facebook.com/hpbsrilanka/"),l(n,39,0,"logo-facebook"),l(n,41,0,"4"),l(n,44,0,"light","https://www.hpb.health.gov.lk"),l(n,46,0,"globe")}),null)}function p(l){return o.Hb(0,[(l()(),o.ob(0,0,null,null,1,"app-tab2",[],null,null,null,k,s)),o.nb(1,114688,null,0,r,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=o.kb("app-tab2",r,p,{},{},[]),x=u("s7LF"),g=u("qtYk"),y=u("iInd");u.d(n,"Tab2PageModuleNgFactory",(function(){return f}));var f=o.lb(e,[],(function(l){return o.xb([o.yb(512,o.j,o.W,[[8,[a.a,m]],[3,o.j],o.v]),o.yb(4608,i.l,i.k,[o.s,[2,i.r]]),o.yb(4608,t.a,t.a,[o.x,o.g]),o.yb(4608,t.Bb,t.Bb,[t.a,o.j,o.p]),o.yb(4608,t.Eb,t.Eb,[t.a,o.j,o.p]),o.yb(4608,x.c,x.c,[]),o.yb(1073742336,i.b,i.b,[]),o.yb(1073742336,t.zb,t.zb,[]),o.yb(1073742336,x.b,x.b,[]),o.yb(1073742336,x.a,x.a,[]),o.yb(1073742336,g.a,g.a,[]),o.yb(1073742336,y.n,y.n,[[2,y.s],[2,y.m]]),o.yb(1073742336,e,e,[]),o.yb(1024,y.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);