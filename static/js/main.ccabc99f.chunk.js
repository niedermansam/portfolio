(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(50)},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/ski-resort-explorer.f74737a0.PNG"},40:function(e,t,a){e.exports=a.p+"static/media/census-searcher-tool.f1de9dac.PNG"},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),o=(a(33),a(7)),c=a(8),s=a(10),m=a(9),u=a(11),d=(a(34),a(3)),h=a(12),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleScroll=a.handleScroll.bind(Object(d.a)(a)),a.handleHamburgerMenu=a.handleHamburgerMenu.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleScroll",value:function(){window.pageYOffset>50?document.querySelector("nav").style.height="40px":document.querySelector("nav").style.height="80px"}},{key:"handleHamburgerMenu",value:function(){document.getElementById("hamburger-menu").classList.toggle("change"),document.getElementById("nav-links").classList.toggle("closed"),document.getElementById("overlay").classList.toggle("hidden")}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e={color:"white",textDecoration:"none"};return r.a.createElement("nav",{id:"nav-header"},r.a.createElement(h.b,{style:e,exact:!0,to:"/portfolio"},r.a.createElement("h1",{id:"header-logo"},"S")),r.a.createElement("div",{className:"logo-menu"},r.a.createElement("div",{className:"hamburger-menu",id:"hamburger-menu",onClick:this.handleHamburgerMenu},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))),r.a.createElement("ul",{className:"nav-links closed",id:"nav-links"},r.a.createElement(h.b,{style:e,exact:!0,to:"/portfolio"},r.a.createElement("li",{className:"link"},"About")),r.a.createElement(h.b,{style:e,to:"/portfolio/resume"},r.a.createElement("li",{className:"link"},"Resume")),r.a.createElement(h.b,{style:e,to:"/portfolio/projects"},r.a.createElement("li",{className:"link"},"Projects"))),r.a.createElement("div",{className:"overlay hidden",id:"overlay"}))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).baseState={name:"",nameMessage:"Jane Doe",email:"",emailMessage:"Jane@example.com",subject:"",message:"",showForm:!0},a.state=a.baseState,a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleName=a.handleName.bind(Object(d.a)(a)),a.handleEmail=a.handleEmail.bind(Object(d.a)(a)),a.handleSubject=a.handleSubject.bind(Object(d.a)(a)),a.handleMessage=a.handleMessage.bind(Object(d.a)(a)),a.sendAnother=a.sendAnother.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.name&&this.state.email&&this.setState({showForm:!1})}},{key:"sendAnother",value:function(){this.setState(this.baseState)}},{key:"handleChange",value:function(e){console.log("changed"),console.log(e.target.name);({})[e.target.name]=e.target.value}},{key:"handleName",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value});var t=e.target.value,a=document.getElementById("email-form");-1===t.indexOf("@")||t.indexOf("@")>t.lastIndexOf(".")?(a.style.borderColor="red",a.style.backgroundColor="#F9B7B7"):(a.style.borderColor="",a.style.backgroundColor="")}},{key:"handleSubject",value:function(e){this.setState({subject:e.target.value})}},{key:"handleMessage",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){if(this.state.showForm)return r.a.createElement("div",{className:"contact-section",id:"contact-section"},r.a.createElement("h1",{style:{marginBottom:0}},"Get in Touch"),r.a.createElement("h2",{style:{marginTop:0}},"(Just kidding... this form doesn't do anything yet)"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{className:"name-label"},"Name: ")," ",r.a.createElement("br",null),r.a.createElement("input",{value:this.state.name,onChange:this.handleName,className:"name",placeholder:this.state.nameMessage,type:"text",name:"name"})," ",r.a.createElement("br",null),r.a.createElement("p",{id:"name-validation"}),r.a.createElement("label",{className:"email-label"},"Email: ")," ",r.a.createElement("br",null),r.a.createElement("input",{id:"email-form",value:this.state.email,onChange:this.handleEmail,className:"email",placeholder:this.state.emailMessage,type:"email",name:"email"}),r.a.createElement("br",null),r.a.createElement("p",{className:"email-validation"}),r.a.createElement("label",null,"Subject: ")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"subject",value:this.state.subject,onChange:this.handleSubject})," ",r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("label",{className:"message-label",value:this.state.message,onChange:this.handleMessage},"Message: ")," ",r.a.createElement("br",null),r.a.createElement("textarea",{className:"message",name:"message",cols:"40",rows:"5"})," ",r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("input",{type:"submit"})));var e=document.querySelector("#contact-section").clientHeight;return r.a.createElement("div",{className:"contact-section",style:{height:e+"px"}},r.a.createElement("h2",null,"Thanks for getting in touch, ",this.state.name.split(" ")[0],"!"),r.a.createElement("button",{onClick:this.sendAnother,style:{width:"200px",padding:"5px 10px",alignSelf:"center"}},"Send Another Message"))}}]),t}(r.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-container resume"},r.a.createElement("h1",{className:"resume-header"},"Resume"),r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(y,null)),r.a.createElement(g,null))}}]),t}(r.a.Component),f=function(e){var t=e.education||[{degree:"Master of Arts in Economics",institution:"University of Montana",year:2019,description:["In the graduate economics program at the University of Montana\n                                            I honed my skills in data collection, analysis, and visualization in\n                                            classes like microeconomic theory, macroeconomic theory/forecasting,\n                                            and advanced econometrics. I also took a number of courses in geographic informations systems,\n                                            where I learned to collect and display geographic data using a variety\n                                            of programs, including R/Shiny, Python, and ArcGIS."]},{degree:"Bachelor of Arts in Economics",institution:"University of Montana",year:2017,description:"As an undergraduate economics student,\n                                            I began developing my skills in economic modelling and\n                                            statistical analysis in classes like Labor Economics,\n                                            Environmental Economics, and Public Finance."},{degree:"Bachelor of Arts in Spanish",institution:"University of Montana",year:2017,description:"As an undergraduate Spanish student, I wrote papers and gave presentations\n                                            in advanced seminar classes, and learned about the history of a variety of\n                                            Hispanic communities and cultures through literature and lectures."}];return r.a.createElement("div",{className:"education-section"},r.a.createElement("h2",null,"Education"),t.map(function(e){return t=e,r.a.createElement("div",{key:t.degree},r.a.createElement("h3",{style:{paddingBottom:"0",margin:0}},t.degree),r.a.createElement("p",{style:{margin:0}},r.a.createElement("strong",null,t.institution,", ",t.year)),r.a.createElement("p",{style:{marginBottom:"3em",marginTop:".5em"}},t.description));var t}))},E=function(e){var t=[{position:"Graduate Teaching Assistant",location:"University of Montana",time:"August 2017 - May 2019",description:"During academic year 2017-2018 I ran lab\n                                            sections for an Intro to Probability and Linear\n                                            Algebra Class. In 2018-2019 I was a teaching assistant\n                                            for various upper-level economics classes, including\n                                            Public Finance, Communicating Economics, Advanced\n                                            Econometrics, and Microeconomic Theory."},{position:"Digital Media Intern",location:"The Montana World Affairs Council",time:"June 2016 - May 2017",description:["At the Montana World Affairs Council, I created web\n                                             pages to engage users and organize content, in\n                                             addition to event management and other standard tasks\n                                             around the office, I helped develop and create ",r.a.createElement("a",{href:"https://www.montanaworldaffairs.org/citcguide/",target:"_blank",rel:"noopener noreferrer",key:"https://www.montanaworldaffairs.org/citcguide/"},"Council in the Classroom Teacher Guides")," to help\n                                             instructors better engage with the educational material\n                                             the Council creates."]},{position:"Office Assistant and Web Designer",location:"Studio Modera, PLLC",time:"June 2015 - January 2017",description:["Tasked with business writing, tech support, creating\n                                           3D Google Sketchup models from AutoCAD floor plans of\n                                           houses for an architectural firm, and other\n                                           miscellaneous tasks. I remade the firm's website and\n                                           optimized it for seach engine indexing. The site,\n                                            www.studiomodera.com, was the 3rd unpaid link in\n                                            Google's search results for \"Missoula Architect\" as\n                                            of August 23rd, 2018, but is currently inactive."]}],a=e.experience||t,n=e.title||"Experience";return r.a.createElement("div",{className:"experience-section"},r.a.createElement("h2",null,n),a.map(function(e){return t=e,r.a.createElement("div",{key:t.position,className:"experience"},r.a.createElement("h3",{style:{paddingBottom:"0",margin:0}},t.position),r.a.createElement("p",{style:{margin:0}},r.a.createElement("strong",null,t.location,", ",t.time)),r.a.createElement("p",{style:{marginBottom:"3em",marginTop:".5em"}},t.description));var t}))},v=function(e){return r.a.createElement("div",{className:"skill"},e.skill)},y=function(e){var t=e.skills||["HTML","CSS","Javascript","React","Node","MongoDB","SQL","Linux","WordPress","R/Shiny","Python","STATA","Plot.ly","Leaflet","Google Earth Engine","ArcGIS","Sketchup","Adobe Suite","Microsoft Office","Latex"];t.length%2===1&&t.pop();var a=e.title||"Skills";return r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("div",{className:"skill-list"},t.map(function(e,t){return r.a.createElement(v,{skill:e,key:t})})))},k=b,S=[{name:"Ski Searcher",description:"An interactive leaflet.js map\n    that provides information about North American Ski resorts. If the\n    user clicks on a point in the map in the United States, the app calls\n    the NOAA API to get a forecast for that point.",url:"www.averageanalytics.com/snow-forecast",github:"https://github.com/niedermansam/snow-forecast",keywords:["Javascript","HTML/CSS","leaflet.js","Web Scraping","NOAA API"],img:a(39),include:!0},{name:"Census Time Series",description:"A Javascript application\n    that uses plotly to visualize American Community Survey data from\n     2010 to present.",url:"www.averageanalytics.com/census-search/",github:"https://github.com/niedermansam/census-search",keywords:["Javascript","HTML/CSS","Plot.ly","JQuery","Census API"],img:a(40),include:!0}];function j(e){var t={backgroundImage:"url('".concat(e.img,"')")};return r.a.createElement("div",{className:"project-card",key:e.key},r.a.createElement("a",{href:"//"+e.url,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card-header",style:t},r.a.createElement("h2",{className:"project-name"},e.name),r.a.createElement("div",{className:"project-card-overlay"},r.a.createElement("p",{className:"project-description"},e.description)))),r.a.createElement("div",{className:"project-button-bar"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"Project")),r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"GitHub"))),r.a.createElement("div",{className:"project-skills"},r.a.createElement("h3",null,"Skills Used:"),r.a.createElement("ul",null,e.keywords.map(function(e,t){return r.a.createElement("li",{key:t},e)}))))}var w=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=e.number,r=e.title;return n||(n=S.length),"all"===n&&(n=S.length),r||(r="Projects"),a.state={number:n,title:r},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"createProjectComponentArray",value:function(e){e=e.filter(function(e){return e.include});for(var t=[],a=0;a<e.length;a++)e[a].key=a,a<this.state.number&&t.push(j(e[a]));return t}},{key:"render",value:function(){var e=this.createProjectComponentArray(S);return r.a.createElement("div",{className:"text-container project-page"},r.a.createElement("h1",null,this.state.title),r.a.createElement("div",{className:"projects"},e),r.a.createElement(g,null))}}]),t}(r.a.Component),N=a(13),A=a(19);var O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{id:"greeting"},r.a.createElement("h2",null,"Hi! My name is Sam."),r.a.createElement("p",null," I'm a web developer and data analyst. ")),r.a.createElement("div",{id:"about-me"},r.a.createElement("div",{className:"about-bullet"}," ",r.a.createElement("i",{className:"fa fa-graduation-cap fa-3x"})," ",r.a.createElement("p",null," I recently graduated from the University of Montana with a Master's degree in Economics. ")),r.a.createElement("div",{className:"about-bullet"},r.a.createElement("i",{className:"fa fa-code fa-3x"})," ",r.a.createElement("p",null," I have experience with HTML, CSS, and Javascript, along with React, node.js, MySQL, and MongoDB. ")),r.a.createElement("div",{className:"about-bullet"}," ",r.a.createElement("i",{className:"fa fa-bar-chart fa-3x"})," ",r.a.createElement("p",null," I use R/Shiny and Stata for more complex data visualitzation, analysis, and econometric modeling.")))),r.a.createElement(w,{title:"A Sample of My Work",number:"2"}))}}]),t}(r.a.Component),M=function(){function e(e){return Object(A.b)(e,{stiffness:150,damping:22})}var t={atEnter:{opacity:0,scale:.8},atLeave:{opacity:e(0),scale:e(.8)},atActive:{opacity:e(1),scale:e(1)}};return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(A.a,{atEnter:t.atEnter,atLeave:t.atLeave,atActive:t.atActive,mapStyles:function(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}},className:"route-wrapper"},r.a.createElement(N.a,{path:"/portfolio",exact:!0,component:O}),r.a.createElement(N.a,{path:"/portfolio/resume",component:k}),r.a.createElement(N.a,{path:"/portfolio/projects",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.ccabc99f.chunk.js.map