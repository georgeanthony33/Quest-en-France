(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{197:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(31),l=t.n(s),r=t(12),i=t(19),m=(t(88),t(89),t(6)),o=t(32),u=t(33),d=Object(i.f)((function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(0),i=Object(m.a)(l,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){return u(window.scrollY)})),function(){return window.removeEventListener("scroll",(function(){return u(window.scrollY)}))}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:o<45?"navbar is-dark is-size-5 contacts-nav":"closed"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{href:"mailto:georgeanthony33@gmail.com"},c.a.createElement("div",{className:"contact-links"},c.a.createElement("i",{className:"fas fa-envelope"}),c.a.createElement("p",null,"sales@questenfrance.com"))),c.a.createElement("div",{className:"contact-links"},c.a.createElement("i",{className:"fas fa-phone"}),c.a.createElement("p",null,"01204 415425 or 07985 093397")))))),c.a.createElement("nav",{className:"navbar is-dark is-size-5 is-fixed-top"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement(r.b,{className:"navbar-item",to:"/"},c.a.createElement("div",{className:o<45?"logo":"logo small"})),c.a.createElement(r.b,{className:"navbar-item",to:"/sites/france"},"Sites France"),c.a.createElement(r.b,{className:"navbar-item",to:"/sites/portugal"},"Sites Portugal"),c.a.createElement("a",{className:"navbar-burger ".concat(t?"is-active":""),onClick:function(){s(!0)}},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},c.a.createElement("div",{className:"navbar-end"},c.a.createElement(r.b,{className:"navbar-item",to:"/profile"},"Bookings"))))))})),E=t(16),v=t.n(E),h=t(25),b=t(27),p=t.n(b),N=(t(61),t(26)),f=t.n(N),g=function(e){var a=e.name,t=e.id,n=e.main_image,s=e.short_description;return c.a.createElement("div",{key:t,className:"column is-one-third-desktop is-one-third-tablet is-half-mobile"},c.a.createElement(r.b,{to:"/sites/".concat(t),className:"focus-border-is-dark"},c.a.createElement("div",{className:"card card-border"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"card-header-title"},a)),c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image"},c.a.createElement("img",{src:n,alt:a}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("h5",{className:"title is-6"},s)))))},O=t(81),y=t(82),w=t(47),j=t.n(w),k=(t(73),function(e){Object(y.a)(t,e);var a=Object(O.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={currentIndex:0,itemsInSlide:1,responsive:e.props.responsive,galleryItems:e.props.items},e.slidePrevPage=function(){var a=e.state.currentIndex-e.state.itemsInSlide;e.setState({currentIndex:a})},e.slideNextPage=function(){var a=e.state,t=a.itemsInSlide,n=a.galleryItems.length,c=e.state.currentIndex+t;c>n&&(c=n),e.setState({currentIndex:c})},e.handleOnSlideChange=function(a){var t=a.item;e.setState({itemsInSlide:1,currentIndex:t})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.currentIndex,t=e.galleryItems,n=e.responsive;return c.a.createElement("div",null,c.a.createElement(j.a,{items:t,slideToIndex:a,responsive:n,onInitialized:this.handleOnSlideChange,onSlideChanged:this.handleOnSlideChange,onResized:this.handleOnSlideChange,autoPlayInterval:2e3,autoPlayDirection:"rtl",autoPlay:!0,fadeOutAnimation:!0,mouseTrackingEnabled:!0,disableAutoPlayOnAction:!0,dotsDisabled:!0,buttonsDisabled:!0}),c.a.createElement("div",{onClick:this.slidePrevPage,class:"carousel-button prev"},c.a.createElement("img",{onClick:this.slidePrevPage,src:"../previous.svg",class:"carousel-button"})),c.a.createElement("div",{onClick:this.slideNextPage,class:"carousel-button next"},c.a.createElement("img",{onClick:this.slideNextPage,src:"../next.svg",class:"carousel-button"})))}}]),t}(c.a.Component)),x=function(e){var a=e.image_location,t=e.home_type,n=e.room;return c.a.createElement("div",{className:"homecard-container"},c.a.createElement("img",{src:a,className:"homepage-alice-image"}),c.a.createElement("div",{className:"homecard-text-container columns is-vcentered"},c.a.createElement("div",{className:"column"},c.a.createElement("p",{className:"has-text-centered has-text-white is-uppercase is-size-6"},t),c.a.createElement("h3",{className:"has-text-centered has-text-white is-size-4"},n))))},S=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(""),r=Object(m.a)(l,2),i=r[0],o=r[1],u=Object(n.useState)("Choose a site"),d=Object(m.a)(u,2),E=d[0],b=d[1],N=Object(n.useState)((new Date).setDate((new Date).getDate()+1)),O=Object(m.a)(N,2),y=O[0],w=O[1],j=Object(n.useState)((new Date).setDate((new Date).getDate()+7)),S=Object(m.a)(j,2),C=S[0],D=S[1],I=Object(n.useState)(1),P=Object(m.a)(I,2),_=P[0],M=P[1],z=Object(n.useState)(0),F=Object(m.a)(z,2),T=F[0],A=F[1],q=Object(n.useState)(""),L=Object(m.a)(q,2),W=L[0],K=L[1],R=Object(n.useState)(),B=Object(m.a)(R,2),G=B[0],H=B[1],J=Object(n.useRef)();Object(n.useEffect)((function(){U(),Y(),V()}),[]);var U=function(){var e=Object(h.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/sites/");case 2:a=e.sent,t=a.data.sort(Q),s(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(h.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/sites/reviews/");case 2:a=e.sent,t=a.data.sort(Q),o(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(e,a){var t=e.id,n=a.id,c=0;return t>n?c=1:t<n&&(c=-1),c},V=function(){var e=Object(h.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/home_images/");case 2:a=e.sent,H(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return document.addEventListener("click",X),function(){document.removeEventListener("click",X)}}),[]);var X=function(e){J.current.contains(e.target)||K("")};return t&&i&&G?c.a.createElement("div",{className:"has-navbar-fixed-top"},c.a.createElement("section",{className:"homepage-top-outer-container"},c.a.createElement("div",{className:"homepage-top-inner-container columns"},c.a.createElement("div",{className:"column is-1"}),c.a.createElement("div",{className:"column is-4"},c.a.createElement("form",{className:"homepage-search"},c.a.createElement("h2",{className:"has-text-weight-bold"},"Book your dream holiday in France or Portugal with Quest en France"),c.a.createElement("br",null),c.a.createElement("div",{className:"columns reduce-margin-top"},c.a.createElement("div",{className:"field column"},c.a.createElement("label",{className:"label"},"Where"),c.a.createElement("div",{className:"dropdown ".concat(W),ref:J,onClick:function(e){e.preventDefault(),K(W?"":"is-active")}},c.a.createElement("div",{className:"dropdown-trigger"},c.a.createElement("button",{className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},c.a.createElement("span",null,E),c.a.createElement("span",{className:"icon is-small"},c.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),c.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},c.a.createElement("div",{className:"dropdown-content"},t.map((function(e){return c.a.createElement("a",{className:"dropdown-item",key:e.id,onClick:function(){return b(e.name)}},e.name)}))))))),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Check In"),c.a.createElement("div",{className:"control"},c.a.createElement(p.a,{className:"input",selected:y,onChange:function(e){return w(e)},dateFormat:"d MMMM yyyy",name:"date",required:!0}))),c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Check Out"),c.a.createElement("div",{className:"control"},c.a.createElement(p.a,{className:"input",selected:C,onChange:function(e){return D(e)},dateFormat:"d MMMM yyyy",name:"date",required:!0})))),c.a.createElement("div",{className:"columns guest-numbers"},c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Adults"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"number",name:"adults",value:_,onChange:function(e){return M(e.target.value)},placeholder:"Choose site"}))),c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Kids"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"number",name:"kids",value:T,onChange:function(e){return A(e.target.value)},placeholder:"Choose site"})))),c.a.createElement("div",{className:"home-submit"},c.a.createElement("input",{className:"button is-danger",type:"submit",value:"Search"})))),c.a.createElement("div",{className:"column is-7"}))),c.a.createElement("section",{className:"section has-background-white"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title has-text-weight-bold is-size-2"},"Explore our sites"),c.a.createElement("div",{className:"columns is-mobile is-multiline"},t.map((function(e){return c.a.createElement(g,Object.assign({key:e.id},e))}))))),c.a.createElement("section",{className:"section has-background-light"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"has-text-weight-bold"},"We have a selection of 2 and 3 bedroomed modern cottage style mobile homes with either open or semi-covered verandas. The 2 bedroomed homes will accommodate between 4-6 people as the lounge seating area can convert to a bed that sleeps up to 2 people. The 3 bedroomed homes will accommodate 6 people."),c.a.createElement("br",null),c.a.createElement("div",{className:"homepage-carousel"},c.a.createElement(k,{items:G.map((function(e){return c.a.createElement(x,Object.assign({key:e.id},e))})),responsive:{0:{items:1},625:{items:3}}})),c.a.createElement("br",null),c.a.createElement("div",{className:"container columns is-centered"},c.a.createElement("button",{className:"button is-danger is-medium"},"Explore our homes")))),c.a.createElement("section",{className:"section has-background-white"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title has-text-weight-bold is-size-2"},"What others say..."),c.a.createElement("div",{className:"columns is-mobile is-multiline"},i.map((function(e){return c.a.createElement("div",{key:e.id,className:"column is-one-third-desktop is-one-third-tablet is-half-mobile"},c.a.createElement("div",{className:"card card-border has-background-light curved-corners"},c.a.createElement("div",{className:"card-content homepage-reviews"},c.a.createElement("div",{className:"quotations"}),c.a.createElement("h5",{className:"title is-6"},e.text)),c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"card-header-title"},e.name))))})))))):null},C=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)((new Date).setDate((new Date).getDate()+1)),r=Object(m.a)(l,2),i=r[0],o=r[1],u=Object(n.useState)((new Date).setDate((new Date).getDate()+7)),d=Object(m.a)(u,2),E=d[0],b=d[1],N=Object(n.useState)(1),g=Object(m.a)(N,2),O=g[0],y=g[1],w=Object(n.useState)(0),j=Object(m.a)(w,2),x=j[0],S=j[1],C=Object(n.useState)(""),D=Object(m.a)(C,2);D[0],D[1];Object(n.useEffect)((function(){var e=window.location.pathname.replace(/\D/g,"");I(e)}),[]);var I=function(){var e=Object(h.a)(v.a.mark((function e(a){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/sites/".concat(a,"/"));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return t?c.a.createElement("div",{className:"has-navbar-fixed-top"},c.a.createElement("div",{className:"site-outer-container"},c.a.createElement("div",{className:"site-top-banner"},c.a.createElement("h2",{className:"title has-text-weight-bold is-size-2 column is-3"},t.name),c.a.createElement("h2",{className:"title has-text-weight-bold is-size-4 column is-9 site-area",id:"check-availability"},t.area,", ",t.country)),c.a.createElement("section",{className:"site-top-outer-container ".concat(t.name)},c.a.createElement("div",{className:"homepage-top-inner-container columns"},c.a.createElement("div",{className:"column is-1"}),c.a.createElement("div",{className:"column is-8"},c.a.createElement("form",{className:"sitepage-search"},c.a.createElement("h3",{className:"has-text-weight-bold is-size-5"},t.short_description),c.a.createElement("br",null),c.a.createElement("div",{className:"columns reduce-margin-top"},c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Check In"),c.a.createElement("div",{className:"control"},c.a.createElement(p.a,{className:"input",selected:i,onChange:function(e){return o(e)},dateFormat:"d MMMM yyyy",name:"date",required:!0}))),c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Check Out"),c.a.createElement("div",{className:"control"},c.a.createElement(p.a,{className:"input",selected:E,onChange:function(e){return b(e)},dateFormat:"d MMMM yyyy",name:"date",required:!0})))),c.a.createElement("div",{className:"columns reduce-margin-top"},c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Adults"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"number",name:"adults",id:"guests-input",value:O,onChange:function(e){return y(e.target.value)},placeholder:"Choose site"}))),c.a.createElement("div",{className:"field column is-half"},c.a.createElement("label",{className:"label"},"Kids"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"number",name:"kids",id:"guests-input",value:x,onChange:function(e){return S(e.target.value)},placeholder:"Choose site"})))),c.a.createElement("div",{className:"site-check-availability"},c.a.createElement("input",{className:"button is-danger",type:"submit",value:"Check Availability",id:"details"})))),c.a.createElement("div",{className:"column is-3"}))),c.a.createElement("nav",{className:"is-size-5 site-navbar"},c.a.createElement("a",{className:"site-navbar-anchor",href:"#check-availability"},"Check Availability"),c.a.createElement("a",{className:"site-navbar-anchor",href:"#details"},"Details"),c.a.createElement("a",{className:"site-navbar-anchor",href:"#gallery"},"Gallery"),c.a.createElement("a",{className:"site-navbar-anchor",href:"#attractions"},"Attractions"),c.a.createElement("a",{className:"site-navbar-anchor",href:"#location"},"Location")),c.a.createElement("section",{className:"section has-background-white"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-1"}),c.a.createElement("div",{className:"column is-6"},c.a.createElement("p",{className:"has-text-weight-bold"},t.long_description[0]),c.a.createElement("br",null),t.long_description.slice(1).map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,e),c.a.createElement("br",null))}))),c.a.createElement("div",{className:"column is-5"},c.a.createElement("div",{className:"facilities card has-background-light"},c.a.createElement("h1",{className:"title has-text-weight-bold is-size-2"},"Facilities"),t.facilities.map((function(e){return c.a.createElement("div",{className:"columns"},c.a.createElement("span",{class:"icon has-text-danger tick"},c.a.createElement("i",{class:"fas fa-check-square"})),c.a.createElement("p",null,e))})))))),c.a.createElement("section",{className:"section has-background-light"},c.a.createElement("div",{className:"site-page-carousel"},c.a.createElement(k,{items:t.gallery_images.map((function(e){return c.a.createElement("img",{key:e,src:"../".concat(t.name,"/Gallery/").concat(e,".jpg")})})),responsive:{0:{items:1},625:{items:1}}}))))):null};t(194).config();"http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT);var D=function(){return c.a.createElement(r.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:S}),c.a.createElement(i.a,{exact:!0,path:"/sites/:id",component:C}))))};l.a.render(c.a.createElement(D,null),document.getElementById("root"))},83:function(e,a,t){e.exports=t(197)},89:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.6bfcbfdc.chunk.js.map