(this.webpackJsonpmaartenhogeveen=this.webpackJsonpmaartenhogeveen||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/profile.c1f51e90.webp"},function(e,a,t){e.exports=t.p+"static/media/tic_tac_toe.e00e972a.webp"},function(e,a,t){e.exports=t.p+"static/media/github_repo_timeline.aa30e3b3.webp"},function(e,a,t){e.exports=t.p+"static/media/dnd_dice_roller.f58c21d2.webp"},function(e,a,t){e.exports=t.p+"static/media/checklist.efea0e56.webp"},function(e,a,t){e.exports=t(23)},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(2),r=t.n(l),i=t(4),o=t(1),s=t(3),m=t(6),d={home:!1,over:!1,portfolio:!1,contact:!1},u=Object(i.a)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_MENU":return!e;default:return e}},positions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_POS":return Object(m.a)(Object(m.a)({},d),{},Object(s.a)({},a.payload,!0));default:return e}}}),h=(t(22),function(e){var a=e.menu,t=e.handleToggleMenu,n=e.sections;return c.a.createElement("nav",{className:a?"drawer active":"drawer"},c.a.createElement("div",{className:"drawer-background"}),n.map((function(e){return c.a.createElement("a",{key:e.id,className:"drawer-item",href:"#".concat(e.id),onClick:t},c.a.createElement("span",{className:"drawer-item-title"},e.name),c.a.createElement("div",{className:"drawer-item-dot"}))})))}),g=Object(o.b)((function(e){return{positions:e.positions}}),{updatePos:function(e){return{type:"UPDATE_POS",payload:e}}})((function(e){var a=e.sections,t=e.positions,l=e.updatePos;Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){!0===e.isIntersecting&&l(e.target.id)}))}),{root:null,rootMargin:"-30% 0px -30% 0px",threshold:.1});e.observe(document.querySelector("#home")),e.observe(document.querySelector("#over")),e.observe(document.querySelector("#portfolio"))}),[l]);return c.a.createElement("div",{className:"indicator"},a.map((function(e){return c.a.createElement("a",{href:"#".concat(e.id),className:"indicator-dot",key:e.id,role:"button"},c.a.createElement("div",{className:"dot-inactive"}),c.a.createElement("div",{className:t[e.id]?"dot-active dot-full":"dot-active"}))})))})),f=function(){return c.a.createElement("div",{className:"social-icons"},c.a.createElement("a",{href:"mailto:mhogeveen94@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"icon",role:"button"},c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"at",className:"svg-inline--fa fa-at fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"}))),c.a.createElement("a",{href:"https://github.com/mhogeveen",target:"_blank",rel:"noopener noreferrer",className:"icon",role:"button"},c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},c.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),c.a.createElement("a",{href:"https://www.linkedin.com/in/maarten-hogeveen-b0481a112/",target:"_blank",rel:"noopener noreferrer",className:"icon",role:"button"},c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},c.a.createElement("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))))},v=[{name:"Home",id:"home"},{name:"Over mij",id:"over"},{name:"Portfolio",id:"portfolio"}],p=Object(o.b)((function(e){return{menu:e.menu}}),{toggleMenu:function(){return{type:"TOGGLE_MENU"}}})((function(e){var a=e.menu,t=e.toggleMenu,n=function(){t()};return c.a.createElement("header",null,c.a.createElement("div",{className:a?"navbar-menu-button active-menu":"navbar-menu-button",onClick:n,role:"button"},c.a.createElement("div",{className:"menu-button-bar"}),c.a.createElement("div",{className:"menu-button-bar"}),c.a.createElement("div",{className:"menu-button-bar"})),c.a.createElement(g,{sections:v}),c.a.createElement(f,null),c.a.createElement(h,{sections:v,menu:a,handleToggleMenu:n}))})),w=function(){return c.a.createElement("div",{className:"grid grid-background"},c.a.createElement("div",{className:"grid-line"}),c.a.createElement("div",{className:"grid-line"}),c.a.createElement("div",{className:"grid-line"}),c.a.createElement("div",{className:"grid-line"}),c.a.createElement("div",{className:"grid-line"}),c.a.createElement("div",{className:"grid-line"}))},E=function(){return c.a.createElement("section",{id:"home",className:"grid"},c.a.createElement("div",{className:"home-container"},c.a.createElement("div",{className:"home-intro"},c.a.createElement("p",null,"Hoi, mijn naam is ",c.a.createElement("span",{className:"home-intro-name"},"Maarten Hogeveen"),".",c.a.createElement("br",null),"Front-end web developer / designer")),c.a.createElement("div",{className:"home-button"},c.a.createElement("a",{href:"#portfolio",className:"button",role:"button"},"Bekijk mijn werk"))))},b=t(9),z=t.n(b),N=function(){return c.a.createElement("section",{id:"over",className:"grid"},c.a.createElement("div",{className:"over-image"},c.a.createElement("img",{src:z.a,alt:"Profile",loading:"lazy"})),c.a.createElement("div",{className:"over-tekst"},"Sinds mijn jeugd heb ik al een affiniteit gehad met ",c.a.createElement("strong",null,"technologie"),". Mijn moeder, die zelf ook een web developer en designer was, heeft mij van jongs af aan blootgesteld aan de online wereld en het werk wat er achter het web schuilt.",c.a.createElement("br",null),c.a.createElement("br",null),"Mijn interesses hebben ook altijd mijn affiniteit met technologie gereflecteerd. Of het nou het repareren van computers, gamen, video bewerking of streamen was om maar een paar dingen te noemen. Naast deze technische interesses heb ik ook altijd veel voldoening gehaald uit het helpen en gelukkig maken van anderen. Het maken van websites is een prachtig manier om deze twee aspecten van mij te combineren.",c.a.createElement("br",null),c.a.createElement("br",null),"Hieronder vindt u een representatie van aantal van mijn vaardigheden op het gebied van",c.a.createElement("strong",null," web development/design")," met daar onder mijn portfolio."))},x=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"external-link-alt",className:"svg-inline--fa fa-external-link-alt fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}))},j=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"code",className:"svg-inline--fa fa-code fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},c.a.createElement("path",{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}))},k=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},c.a.createElement("path",{d:"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"}),c.a.createElement("path",{d:"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"}),c.a.createElement("path",{d:"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"}))},M=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"react",className:"svg-inline--fa fa-react fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}))},_=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"js",className:"svg-inline--fa fa-js fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},c.a.createElement("path",{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"}))},L=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"64",width:"64",viewBox:"0 0 32 32"},c.a.createElement("path",{d:"M2.144 7.705c-2.83 4.07-2.48 9.364-.316 13.7.05.104.105.206.158.308l.1.195c.02.038.042.075.063.112.037.07.075.134.113.202l.207.354.118.194.24.375.102.158c.113.168.228.336.347.5l.068.092a16.39 16.39 0 0 0 .316.42l.12.152.292.36.112.134c.133.157.27.313.407.465.014.015.02.02.024.026a20.44 20.44 0 0 0 .414.436l.133.134.33.324.135.13a16.98 16.98 0 0 0 .453.412l.496.42.17.136.343.268.183.14.385.276.18.127c.123.085.248.166.374.247l.162.108a20.81 20.81 0 0 0 .585.358l.162.1.44.246c.08.043.162.084.243.125l.314.163.073.035.13.062.498.23.105.047a17.83 17.83 0 0 0 .581.241l.14.056.548.203.07.024a21.72 21.72 0 0 0 .61.2l.148.044c.2.063.416.14.63.178 13.694 2.497 17.67-8.23 17.67-8.23-3.34 4.352-9.27 5.5-14.9 4.222-.213-.048-.42-.114-.627-.176l-.156-.047a18.62 18.62 0 0 1-.604-.197l-.083-.03a20.87 20.87 0 0 1-.532-.197l-.15-.06a15.16 15.16 0 0 1-.575-.24l-.115-.05-.485-.226-.14-.067c-.126-.06-.25-.127-.375-.2l-.25-.13c-.152-.08-.3-.166-.45-.252l-.152-.085a21.76 21.76 0 0 1-.585-.358c-.053-.034-.105-.07-.158-.105l-.416-.277c-.046-.03-.1-.064-.134-.094l-.394-.285-.175-.132-.355-.278-.158-.127-.442-.373a.73.73 0 0 0-.05-.04l-.465-.423-.13-.126-.332-.33-.13-.13c-.14-.143-.276-.287-.4-.434-.007-.007-.014-.014-.02-.022a16.98 16.98 0 0 1-.416-.474l-.1-.13-.3-.37-.1-.137-.346-.46C2.982 15.6 1.86 9.722 4.354 4.902m6.58-.625c-2.048 2.947-1.937 6.9-.34 10.008a13.06 13.06 0 0 0 .906 1.512c.307.44.647.963 1.054 1.316.148.163.302.32.46.477l.12.12a13.41 13.41 0 0 0 .469.436c.007.005.012.012.02.017.182.16.366.3.553.458l.124.097a13.46 13.46 0 0 0 .574.419l.017.012c.086.06.174.115.262.173.042.027.082.056.124.082a11.64 11.64 0 0 0 .425.26l.06.035.376.2c.044.025.1.046.134.07l.263.136c.013.007.027.012.04.018a11.39 11.39 0 0 0 .548.255l.12.05a14.16 14.16 0 0 0 .45.182l.192.07a14.26 14.26 0 0 0 .413.143l.187.06c.197.06.4.14.597.173 10.573 1.752 13.014-6.4 13.014-6.4-2.2 3.17-6.46 4.68-11.008 3.5a13.06 13.06 0 0 1-.599-.173c-.06-.018-.12-.038-.18-.058l-.42-.144-.2-.07a15.08 15.08 0 0 1-.45-.182l-.122-.05a12.58 12.58 0 0 1-.552-.256l-.277-.14-.16-.082a13.16 13.16 0 0 1-.35-.197l-.084-.047a12.34 12.34 0 0 1-.424-.26c-.043-.027-.085-.057-.128-.085l-.275-.182a13.24 13.24 0 0 1-.57-.418l-.13-.1c-2-1.572-3.568-3.72-4.318-6.154-.786-2.525-.617-5.36.745-7.66m5.732-.183C17.12 3.5 17 5.698 17.838 7.66c.883 2.083 2.693 3.716 4.806 4.5l.262.1.116.036.377.1c5.838 1.128 7.42-2.996 7.843-3.603-1.387 1.997-3.718 2.476-6.578 1.782-.226-.055-.474-.137-.692-.214a8.46 8.46 0 0 1-.822-.341 8.5 8.5 0 0 1-1.441-.879C19.15 7.2 17.56 3.486 19.23.47"}))},C=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"sass",className:"svg-inline--fa fa-sass fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},c.a.createElement("path",{d:"M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"}))},H=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"html5",className:"svg-inline--fa fa-html5 fa-w-12",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},c.a.createElement("path",{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}))},y=function(){return c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"css3-alt",className:"svg-inline--fa fa-css3-alt fa-w-12",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},c.a.createElement("path",{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}))},V=function(){return c.a.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"500px",height:"500px"},c.a.createElement("path",{d:"M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4\tV26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026\tc0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096\tc0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"}))},O={redux:c.a.createElement(k,null),react:c.a.createElement(M,null),javascript:c.a.createElement(_,null),typescript:c.a.createElement(V,null),jquery:c.a.createElement(L,null),sass:c.a.createElement(C,null),html:c.a.createElement(H,null),css:c.a.createElement(y,null)},B=function(e){var a=e.project;return c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project-title"},c.a.createElement("h3",null,a.name)),c.a.createElement("div",{className:"project-buttons"},c.a.createElement("a",{href:a.website,target:"_blank",rel:"noopener noreferrer",className:"button-website",role:"button"},c.a.createElement(x,null)),c.a.createElement("a",{href:a.code,target:"_blank",rel:"noopener noreferrer",className:"button-code",role:"button"},c.a.createElement(j,null))),c.a.createElement("div",{className:"project-image"},c.a.createElement("img",{src:a.image,alt:a.name,loading:"lazy"})),c.a.createElement("div",{className:"project-technologies"},a.icons.map((function(e){return c.a.createElement("div",{className:"tech-icon",key:e},O[e])}))))},T=t(10),S=t.n(T),P=t(11),D=t.n(P),q=t(12),A=t.n(q),G=t(13),J=t.n(G),U=[{name:"Tic-Tac-Toe",website:"https://mhogeveen.github.io/tic-tac-toe",code:"https://github.com/mhogeveen/tic-tac-toe",image:S.a,icons:["react","redux","typescript","sass"]},{name:"Github Repo Timeline",website:"https://mhogeveen.github.io/github_repo_timeline/",code:"https://github.com/mhogeveen/github_repo_timeline",image:D.a,icons:["react","redux","javascript","sass"]},{name:"DnD Dice Roller",website:"https://mhogeveen.github.io/dnd_dice_roller/",code:"https://github.com/mhogeveen/dnd_dice_roller",image:A.a,icons:["react","redux","javascript","sass"]},{name:"Checklist",website:"https://mhogeveen.github.io/JavaScript_ToDoList/",code:"https://github.com/mhogeveen/JavaScript_ToDoList",image:J.a,icons:["javascript","sass","html"]}],F=function(){return c.a.createElement("section",{id:"portfolio",className:"grid"},U.map((function(e){return c.a.createElement(B,{project:e,key:e.name})})))},I=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement("main",null,c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement(F,null)),c.a.createElement(w,null))},R=Object(i.b)(u);r.a.render(c.a.createElement(o.a,{store:R},c.a.createElement(I,null)),document.querySelector("#root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.00f0f91c.chunk.js.map