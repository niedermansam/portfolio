(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(50)},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/ski-resort-explorer.f74737a0.PNG"},39:function(e,t,a){e.exports=a.p+"static/media/census-searcher-tool.f1de9dac.PNG"},40:function(e,t,a){e.exports=a.p+"static/media/trump-twitter-map.fd76018e.PNG"},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(32),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),p=(a(33),a(6));var d=function(){var e={color:"white",textDecoration:"none"};return r.a.createElement("nav",null,r.a.createElement(p.b,{style:e,exact:!0,to:"/portfolio"},r.a.createElement("h1",{id:"header-logo"},"S")),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(p.b,{style:e,exact:!0,to:"/portfolio"},r.a.createElement("li",{className:"link"},"About")),r.a.createElement(p.b,{style:e,to:"/portfolio/resume"},r.a.createElement("li",{className:"link"},"Resume")),r.a.createElement(p.b,{style:e,to:"/portfolio/projects"},r.a.createElement("li",{className:"link"},"Projects"))))},h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"resume",className:"text-container"},r.a.createElement("h1",null,"Resume"),r.a.createElement("div",{className:"text-container"},r.a.createElement("h2",null,"Education"),r.a.createElement("p",null," ",r.a.createElement("strong",null,"BA in Economics,")," University of Montana, 2017"),r.a.createElement("p",null,r.a.createElement("strong",null,"BA in Spanish,")," University of Montana, 2017"),r.a.createElement("p",null,r.a.createElement("strong",null,"MA in Economics,")," University of Montana, 2019"),r.a.createElement("h2",null,"Experience"),r.a.createElement("p",null,"Graduate Teaching Assistant - University of Montana, August 2017 - May 2019 "),r.a.createElement("p",null,"Digital Media Intern - Montana World Affairs Council, June 2016- May 2017 ")))}}]),t}(r.a.Component),f=[{name:"Ski Searcher",description:"An interactive leaflet.js map\n    that provides information about North American Ski resorts. If the\n    user clicks on a point in the map in the United States, the app calls\n    the NOAA API to get a forecast for that point.",url:"www.averageanalytics.com/snow-forecast",github:"https://github.com/niedermansam/snow-forecast",keywords:["Javascript","HTML/CSS","leaflet.js","Web Scraping","NOAA API"],img:a(38)},{name:"Census Time Series",description:"A Javascript application\n    that uses plotly to visualize American Community Survey data from\n     2010 to present.",url:"www.averageanalytics.com/census-search/",github:"https://github.com/niedermansam/census-search",keywords:["Javascript","HTML/CSS","Plot.ly","JQuery","Census API"],img:a(39)},{name:"Trump Twittermap",description:"An R/Shiny application\n    that visualizes the twitter habits of the 45th President of the\n    United States.",url:"http://68.183.17.153:3838/trump-tweets/",github:"",keywords:["R/Shiny","Data Visualization","ggplot"],img:a(40)}];function E(e){var t={backgroundImage:"url('".concat(e.img,"')")};return r.a.createElement("div",{className:"project-card",key:e.key},r.a.createElement("a",{href:"//"+e.url,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card-header",style:t},r.a.createElement("h2",{className:"project-name"},e.name),r.a.createElement("div",{className:"project-card-overlay"},r.a.createElement("p",{className:"project-description"},e.description)))),r.a.createElement("div",{className:"project-button-bar"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"Project")),r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"GitHub"))),r.a.createElement("div",{className:"project-skills"},r.a.createElement("h3",null,"Skills Used:"),r.a.createElement("ul",null,e.keywords.map(function(e,t){return r.a.createElement("li",{key:t},e)}))))}var v=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=e.number,r=e.title;return n||(n=f.length),"all"===n&&(n=f.length),r||(r="Projects"),a.state={number:n,title:r},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-container project-page"},r.a.createElement("h1",null,this.state.title),r.a.createElement("div",{className:"projects"},f.map(function(t,a){if(t.key=a,a<e.state.number)return new E(t)})))}}]),t}(r.a.Component),b=a(7),y=a(18);var g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{id:"greeting"},r.a.createElement("h2",null,"Hi! My name is Sam."),r.a.createElement("p",null," I'm a web developer and data analyst. ")),r.a.createElement("div",{id:"about-me"},r.a.createElement("div",{className:"about-bullet"}," ",r.a.createElement("i",{className:"fa fa-graduation-cap fa-3x"})," ",r.a.createElement("p",null," I recently graduated from the University of Montana with a Master's degree in Economics. ")),r.a.createElement("div",{className:"about-bullet"},r.a.createElement("i",{className:"fa fa-code fa-3x"})," ",r.a.createElement("p",null," I have experience with HTML, CSS, and Javascript, along with React, node.js, MySQL, and MongoDB. ")),r.a.createElement("div",{className:"about-bullet"}," ",r.a.createElement("i",{className:"fa fa-bar-chart fa-3x"})," ",r.a.createElement("p",null," I use R/Shiny and Stata for more complex data visualitzation, analysis, and econometric modeling.")))),r.a.createElement(v,{title:"A Sample of My Work",number:"2"}))}}]),t}(r.a.Component),w=function(){function e(e){return Object(y.b)(e,{stiffness:150,damping:22})}var t={atEnter:{opacity:0,scale:.8},atLeave:{opacity:e(0),scale:e(.8)},atActive:{opacity:e(1),scale:e(1)}};return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(y.a,{atEnter:t.atEnter,atLeave:t.atLeave,atActive:t.atActive,mapStyles:function(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}},className:"route-wrapper"},r.a.createElement(b.a,{path:"/portfolio",exact:!0,component:g}),r.a.createElement(b.a,{path:"/portfolio/resume",component:h}),r.a.createElement(b.a,{path:"/portfolio/projects",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.6e8f53d1.chunk.js.map