(this.webpackJsonpsaatva=this.webpackJsonpsaatva||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),i=t.n(o),l=(t(80),t(11)),c=t(25),s=t(145),d=t(163),m=t(146),u=(t(81),t(29)),g=t(168),p=t(64),h=t.n(p),b=t(58),f=t(167),E=t(153),v=t(157),w=t(156),x=t(154),y=t(150),k=t(104),O=t(155),j=t(166),S=t(152),C=t(149),N=t(151),R=t(148),A=t(143),P=r.a.forwardRef((function(e,a){return r.a.createElement(A.a,Object.assign({direction:"up",ref:a},e))})),z=Object(s.a)((function(e){return{root:{overflow:"initial"},manttresMattressName:{fontSize:"1.5rem",fontWeight:600},manttresMattressPrice:{fontSize:"1.35rem",opacity:"0.6"},media:{width:"112%",marginLeft:"-6%"},mediaDG:{width:"100%",marginLeft:"0",borderRadius:20},ButtonGroup:{margin:"0 5px 5px",justifyContent:"space-between",width:"100%",borderRadius:8},btn:{width:"100%",borderRadius:8,background:"var(--dark-main-color)",padding:8},btnBuy:{minWidth:"100px",borderRadius:8,background:"var(--warning-color)",padding:8,color:"var(--dark-main-color)",textShadow:"none"}}}));function I(e){var a=z(),t=Object(n.useState)(e.product.name),o=Object(l.a)(t,2),i=o[0],c=o[1],s=Object(n.useState)(e.product.price),d=Object(l.a)(s,2),g=d[0],p=d[1],h=Object(n.useState)(e.product.reviewRating),b=Object(l.a)(h,2),A=b[0],I=b[1],B=Object(n.useState)(e.product.description),F=Object(l.a)(B,2),W=F[0],J=F[1],D=Object(n.useState)(!1),G=Object(l.a)(D,2),L=G[0],M=G[1],T=Object(n.useState)(e.product.imageFileName),$=Object(l.a)(T,2),H=$[0],V=$[1],X=Object(n.useState)(!1),Z=Object(l.a)(X,2),_=Z[0],q=Z[1],K=function(){q(!_)};Object(n.useEffect)((function(){c(e.product.name),p(e.product.price),I(e.product.reviewRating),V(e.product.imageFileName),J(e.product.description)}),[e]);var Q=function(){e.onClick(),q(!1)};return r.a.createElement(m.a,{item:!0,xs:12,lg:3},r.a.createElement(j.a,{open:_,TransitionComponent:P,keepMounted:!0,onClose:K,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",maxWidth:"md"},r.a.createElement(R.a,{id:"alert-dialog-slide-title"},r.a.createElement(m.a,{container:!0,spacing:0},r.a.createElement(m.a,{item:!0,xs:12,lg:8,style:{textAlign:"left"}},r.a.createElement(u.a,{gutterBottom:!0,variant:"h1",component:"h1"},i)),r.a.createElement(m.a,{item:!0,xs:12,lg:4,style:{textAlign:"right"}},r.a.createElement(f.a,{name:"rating",defaultValue:A,precision:.1,readOnly:!0,size:"large"})))),r.a.createElement(C.a,null,r.a.createElement(y.a,{component:"img",alt:i,height:"auto",image:"./images/"+H,title:i,classes:{media:a.mediaDG}}),r.a.createElement(N.a,{id:"alert-dialog-slide-description"},r.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"right"}},r.a.createElement("h1",null,"$",g)),W)),r.a.createElement(S.a,null,r.a.createElement(k.a,{onClick:K,color:"primary"},"Close"),r.a.createElement(k.a,{className:a.btnBuy,onClick:Q},"Buy"))),r.a.createElement(E.a,{elevation:4,className:a.root},r.a.createElement(y.a,{component:"img",alt:i,height:"auto",image:"./images/"+H,title:i,classes:{media:a.media}}),r.a.createElement(x.a,null,r.a.createElement(m.a,{container:!0,spacing:0},r.a.createElement(m.a,{item:!0,xs:12,lg:8,style:{textAlign:"left"}},r.a.createElement(u.a,{gutterBottom:!0,variant:"h2",component:"h2"},i)),r.a.createElement(m.a,{item:!0,xs:12,lg:4,style:{textAlign:"right"}},r.a.createElement(f.a,{name:"rating",defaultValue:A,precision:.1,readOnly:!0,size:"small"})),r.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"right"}},r.a.createElement(u.a,{gutterBottom:!0,variant:"h3",component:"h3"},"$",g))),r.a.createElement(O.a,{in:L},r.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},W))),r.a.createElement(w.a,null,r.a.createElement(v.a,{variant:"contained",color:"primary",className:a.ButtonGroup,"aria-label":" primary button group"},r.a.createElement(k.a,{className:a.btn,onClick:function(){q(!_)}},"View"),r.a.createElement(k.a,{className:a.btn,onClick:function(){M((function(e){return!e}))}},"Details"),r.a.createElement(k.a,{className:a.btnBuy,onClick:Q},"Buy")))))}var B=Object(s.a)((function(e){return{stars:{display:"flex",flexDirection:"column","& > * + *":{marginTop:e.spacing(1)}},root:{flexGrow:1,boxShadow:"inset 0 -1px 2px rgba(0,0,0,0.12)",borderRadius:15,color:"var(--dark-main-color)",background:"linear-gradient(60deg, #ffffff, transparent)",padding:100,"@media screen and (prefers-color-scheme: dark) ":{background:"linear-gradient(60deg, rgba(0,0,0,0.3), transparent)",color:"var(--main-color)"}},colorDefault:{borderRadius:"15px 15px 0 0 ",background:"linear-gradient(60deg, var(--dark-main-color), var(--dark-main-color-washed))",color:"#e6b417 !important",overflow:"hidden","&:hover":{color:"var(--dark-main-color)"},"@media screen and (prefers-color-scheme: dark) ":{background:"linear-gradient(60deg, var(--dark-secondary-color), var(--dark-warning-color))"}},textColorPrimary:{backgroundColor:"var(--third-color)",height:4}}}));function F(e){var a=B(),t=Object(n.useState)(e.products),o=Object(l.a)(t,2),i=o[0],c=o[1];return Object(n.useEffect)((function(){c(e.products)}),[e]),r.a.createElement("div",{className:a.root},r.a.createElement(m.a,{container:!0,spacing:10},i&&i.map((function(a,t){return r.a.createElement(I,{key:t,product:a,onClick:e.onClick})}))))}var W=t(162),J=t(164),D=t(161),G=t(165),L=t(63),M=t.n(L),T=t(66),$=t(158),H=t(169),V=t(160),X=t(159),Z=t(61),_=t.n(Z),q=t(39),K=t.n(q),Q=t(62),U=t.n(Q),Y=Object(s.a)((function(e){return{cart:{background:"var(--dark-main-color)",borderRadius:"0 0 20px 20px",position:"absolute",padding:0,right:20,top:75,zIndex:"0"},List:{background:"white",margin:"0 10px 10px",borderRadius:"0 0 15px 15px",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"}}}));function ee(e){var a=Y(),t=Object(n.useState)(e.isOpen),o=Object(l.a)(t,2),i=o[0],c=o[1];return Object(n.useEffect)((function(){c(e.isOpen)}),[e]),r.a.createElement(A.a,{direction:"down",in:i,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(T.a,{className:a.cart,elevation:24},r.a.createElement($.a,{dense:!0,className:a.List},r.a.createElement(H.a,null,r.a.createElement(X.a,null,"Item - $999"),r.a.createElement(V.a,null,r.a.createElement(D.a,{edge:"end","aria-label":"delete"},r.a.createElement(_.a,null)))),r.a.createElement(H.a,null,r.a.createElement(X.a,null,"Item - $999"),r.a.createElement(V.a,null,r.a.createElement(D.a,{edge:"end","aria-label":"delete"},r.a.createElement(U.a,null)))),r.a.createElement(H.a,null,r.a.createElement(X.a,null,"Item - $999"),r.a.createElement(V.a,null,r.a.createElement(D.a,{edge:"end","aria-label":"delete"},r.a.createElement(K.a,null)))),r.a.createElement(H.a,null,r.a.createElement(X.a,null,"Item - $999"),r.a.createElement(V.a,null,r.a.createElement(D.a,{edge:"end","aria-label":"delete"},r.a.createElement(K.a,null)))),r.a.createElement(H.a,null,r.a.createElement(X.a,null,"Item - $999"),r.a.createElement(V.a,null,r.a.createElement(D.a,{edge:"end","aria-label":"delete"},r.a.createElement(K.a,null)))))))}var ae=Object(s.a)((function(e){return{grow:{flexGrow:1},sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("xs"),{display:"flex"}),colorPrimary:{background:"linear-gradient(60deg,white,var(--main-color))",color:"var(--dark-main-color)",zIndex:999,padding:10,"@media screen and (prefers-color-scheme: dark) ":{background:"linear-gradient(60deg, var(--dark-main-color), #023475)",color:"var(--dark-warning-color)"}},colorSecondary:{background:"var(--warning-color)",color:"var(--dark-secondary-color)",textShadow:"none","@media screen and (prefers-color-scheme: dark) ":{background:"var(--warning-color)",color:"var(--main-color)"}}}}));function te(e){var a=ae(),t=Object(n.useState)(0),o=Object(l.a)(t,2),i=o[0],c=o[1],s=Object(n.useState)(e.isOpen),m=Object(l.a)(s,2),u=m[0],g=m[1];Object(n.useEffect)((function(){e.onClick()}),[u]);return Object(n.useEffect)((function(){c(e.cartItems)}),[e]),r.a.createElement(W.a,{position:"static",className:a.grow,elevation:2,classes:{colorPrimary:a.colorPrimary}},r.a.createElement(d.a,{maxWidth:"xl",disableGutters:!0},r.a.createElement(J.a,null,r.a.createElement(ee,{isOpen:u}),r.a.createElement("div",{className:"logo"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"99px",height:"22px"},r.a.createElement("text",{kerning:"auto",fontFamily:"Myriad Pro",fill:"rgb(0, 0, 0)",x:"0px",y:"21.721px"},r.a.createElement("tspan",{style:{fontSize:"25.321px",fontFamily:"Norwester"},fill:"#000000"},"logoHere")))),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.sectionDesktop},r.a.createElement(D.a,{"aria-label":"show cart items",color:"inherit",onClick:function(e,a){g(!u)}},r.a.createElement(G.a,{badgeContent:i,color:"secondary",classes:{colorSecondary:a.colorSecondary}},r.a.createElement(M.a,null)))))))}var ne=Object(s.a)((function(e){var a;return{mattressesContaner:{padding:20,"@media screen and (min-width: 600px)":{padding:50}},contained:{marginTop:40,backgroundColor:"var(--warning-color)",borderRadius:10,color:"#282c34",textShadow:"none",lineHeight:"1.5 !important",fontSize:"1.05rem !important","&:hover":{backgroundColor:"rgb(255,190,0)",color:"#282c34 !important"}},title:{fontFamily:"Suez One !important",fontSize:"3.6rem !important"},search:(a={position:"relative",borderRadius:20,backgroundColor:"var(--main-color)",transition:"all 0.2s ease-in-out",overflow:"hidden",paddingRight:20,marginRight:20,color:"var(--dark-color)","&:hover":{backgroundColor:"var(--secondary-color)","@media screen and (prefers-color-scheme: dark) ":{background:"var(--dark-secondary-color)"}},marginLeft:0,width:"100%"},Object(c.a)(a,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(c.a)(a,"@media screen and (prefers-color-scheme: dark) ",{background:"var(--dark-warning-color)",color:"var(--dark-color)"}),a),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{},inputInput:Object(c.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function re(){var e=ne(),a=Object(n.useState)([]),t=Object(l.a)(a,2),o=t[0],i=t[1],c=Object(n.useState)(0),s=Object(l.a)(c,2),p=s[0],f=s[1],E=Object(n.useState)(""),v=Object(l.a)(E,2),w=v[0],x=v[1],y=Object(n.useState)(!1),k=Object(l.a)(y,2),O=k[0],j=k[1],S=function(){i(b)};return Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){if(""!==w){var e=o.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));i(e)}else S()}),[w,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{cartItems:p,onClick:function(){j(!O)},isOpen:O}),r.a.createElement(d.a,{fixed:!0,maxWidth:"lg",style:{padding:"40px 0 0"}},r.a.createElement(m.a,{container:!0,spacing:0},r.a.createElement(m.a,{item:!0,xs:12,lg:10,style:{textAlign:"left"}},r.a.createElement(u.a,{gutterBottom:!0,variant:"h1",component:"h1",className:e.title},"Products Collection")),r.a.createElement(m.a,{item:!0,xs:12,lg:2,style:{textAlign:"right"}},r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(h.a,null)),r.a.createElement(g.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){x(e.target.value)}}))))),r.a.createElement(d.a,{fixed:!0,maxWidth:"xl",className:e.mattressesContaner},r.a.createElement(m.a,{container:!0,spacing:8},r.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"left"}},r.a.createElement(F,{products:o,onClick:function(e){f(p+1)}})))))}var oe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e){e.exports=JSON.parse('[{"id":1,"name":"Jordan Mens MAX Aura","description":"Amazon Best Sellers Rank: #168,737 in Clothing, Shoes & Jewelry (See Top 100 in Clothing, Shoes & Jewelry","price":290,"reviewRating":4.7,"imageFileName":"jordan_Aura.jpg"},{"id":2,"name":"AirPods","description":"AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they\u2019re ready to use right out of the case.","price":249,"reviewRating":3.6,"imageFileName":"AirPods.jpg"},{"id":3,"name":"Nintendo Switch","description":"Gaming system that lets you play the games you want, wherever you are, however you like. Includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy\u2011Con controllers-one red, one blue. Also includes all the extras you need to get started. Model number: HAC-001(-01) (product serial number begins with \u201cXKW\u201d) This model includes battery life of approximately 4.5 - 9 hours. The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild (games sold separately).","price":420,"reviewRating":3.8,"imageFileName":"nintendo_sw.jpg"},{"id":4,"name":"Victrola Vintage","description":"Our Euro pillow top packs in more cushioning materials than a standard pillow top and is tucked underneath our organic cotton cover for a clean look. We\'ve also added our exclusive Guardin\xae botanical antimicrobial fabric treatment to our organic cover and finished it all with an organic damask bronze trim","price":180,"reviewRating":2.3,"imageFileName":"vitrola.jpg"},{"id":5,"name":"PIONEER HDJ-X10-S","description":"Stay on top of your game with the flagship HDJ-X10 over-ear headphones. Refined with input from professional DJs to serve you at festivals, clubs and everywhere in between, they\u2019ll change the way you experience music. Producing high-resolution sound ranging from 5 Hz to 40 kHz thanks to a new 50mm driver, they\u2019re ideal for DJ monitoring, delivering clear left and right channel separation as well as greater separation of rich bass tones and crisp mid to high frequencies.","price":359,"reviewRating":4.6,"imageFileName":"SX679.jpg"},{"id":6,"name":"Zenhaven","description":"Our Euro pillow top packs in more cushioning materials than a standard pillow top and is tucked underneath our organic cotton cover for a clean look. We\'ve also added our exclusive Guardin\xae botanical antimicrobial fabric treatment to our organic cover and finished it all with an organic damask bronze trim","price":1599,"reviewRating":4.1,"imageFileName":"zen.jpg"}]')},75:function(e,a,t){e.exports=t(103)},80:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.91a9717d.chunk.js.map