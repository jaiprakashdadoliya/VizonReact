(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(926);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},126:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var i=n(1),o=a(i),r=n(124),l=n(285),s=a(l);t.Header=function(e){var t="";return t="company"==e.logged_in_type?e.logged_in_company_name:e.logged_in_user_name,o.default.createElement("div",{className:"col-md-12 col-sm-12 clearfix top-menu"},o.default.createElement(s.default,{url:"https://static1.squarespace.com/static/5a1454447131a597cf39d061/t/5b6489bc562fa710cb0249ba/favicon.ico"}),o.default.createElement(r.Nav,{className:"user-info pull-right pull-none-xsm"},o.default.createElement(r.NavDropdown,{className:"profile-info dropdown",eventKey:1,title:o.default.createElement("div",null,o.default.createElement("img",{className:"img-circle",src:e.logged_in_user_picture,alt:"Photo",width:"44",height:"44"}),t),id:"dropdown-menu"},o.default.createElement(r.MenuItem,{eventKey:1.3,onClick:e.handle_logout},"Logout"))))}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(126);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var i=n(138);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(139);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},138:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){var t=e.headerReducer,n=t.is_logout_done,a=t.success_message,i=t.error_message;e.userLogin.user_details;return{is_logout_done:n,success_message:a,error_message:i,user:e.session.user,authenticated:e.session.authenticated}}Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderContainer=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(19);n(26);var d=n(126),f=n(123),m=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.handle_logout=n.handle_logout.bind(n),n}return o(t,e),l(t,[{key:"handle_logout",value:function(){(0,this.props.dispatch)(f.headerActions.logout())}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.Header,{handle_logout:this.handle_logout,logged_in_user_name:this.props.user.first_name+" "+this.props.user.last_name,logged_in_user_picture:this.props.user.profile_picture,logged_in_company_name:this.props.user.company_name,logged_in_type:this.props.user.user_type}))}}]),t}(c.default.Component),p=(0,u.connect)(r)(m);t.HeaderContainer=p},139:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SideMenu=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),c=a(s),u=(n(18),n(20)),d=n(297),f=a(d),m=n(298),p=a(m),g=n(6),h=n(12);t.SideMenu=function(e){function t(e,n){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return r(t,e),l(t,[{key:"render",value:function(){var e=h.utilityHelper.getUserInfo().user_type,t=[];t=e==g.configConstants.USER_TYPE_ADMIN?[{label:"Dashboard",to:"dashboard"},{label:"Companies",to:"companies"}]:[{label:"Dashboard",to:"dashboard"},{label:"Drivers",to:"drivers"},{label:"Vehicles",content:[{label:"Vehicle List",to:"vehicle-list"},{label:"Vehicle Assignment",to:"vehicle-assignment"}]},{label:"Trips",to:"trips"},{label:"Live Map",to:"live-map"},{label:"Videos",to:"videos"},{label:"Messages",to:"message"}];var a=function(e){return c.default.createElement("div",null,c.default.createElement(f.default,{content:t,LinkComponent:p.default}))};return c.default.createElement("div",{className:"sidebar-menu fixed"},c.default.createElement("div",{className:"sidebar-menu-inner"},c.default.createElement("header",{className:"logo-env"},c.default.createElement("div",{className:"logo"},c.default.createElement("a",{href:"/dashboard"},c.default.createElement("img",{src:n(140)})))),c.default.createElement(u.Route,{path:"/",component:a})))}}]),t}(c.default.Component)},140:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAlCAYAAAHpUY2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM1M0M5NTYyQTEzNDExRTg5N0Y4RjI5QUNDMjBBRUQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM1M0M5NTYzQTEzNDExRTg5N0Y4RjI5QUNDMjBBRUQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzUzQzk1NjBBMTM0MTFFODk3RjhGMjlBQ0MyMEFFRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzUzQzk1NjFBMTM0MTFFODk3RjhGMjlBQ0MyMEFFRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HH2csAAAJyElEQVR42mL4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"},926:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=e.driverReducer,n=t.userList;return{submitted:t.submitted,error_message:t.error_message,userList:n,isUserNotValid:t.isUserNotValid}}Object.defineProperty(t,"__esModule",{value:!0}),t.LiveMap=void 0;var s,c,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(1),m=a(f),p=n(19),g=(n(124),n(134)),h=n(135),y=n(6),v=n(927),b=a(v),A=n(123),w=n(12),_=[],E=w.utilityHelper.getUserInfo().user_id,M=new WebSocket("ws://18.188.210.10:3001/"+E+"/"+E+"/company"),k=new google.maps.InfoWindow,I=function(e){function t(e,n){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.componentDidUpdate=a.componentDidUpdate.bind(a),a.handleLiveCam=a.handleLiveCam.bind(a),a.state={markerArray:[],loader:!1,currentLat:null,currentLong:null},a}return r(t,e),d(t,[{key:"handleData",value:function(e){var t=JSON.parse(e),n=t.user_id,a=(t.b,this.state.markerArray.findIndex(function(e){return e.user_id==n}));if(-1!=a)if(0==t.ol)void 0!=_[n]&&_[n].setMap(null),_[n]=void 0;else{var i=this.state.markerArray;i[a].b=t.b,this.setState({markerArray:i},function(){var e=google.maps.geometry.spherical.computeHeading(_[n].getPosition(),new google.maps.LatLng(t.lat,t.long));c.rotation=e,_[n].setIcon(c),_[n].animateTo(new google.maps.LatLng(t.lat,t.long))})}else{var o=this.state.markerArray;o.push(t),this.setState({markerArray:o},function(){})}}},{key:"componentDidUpdate",value:function(e,t){t.markerArray.map(function(n,a){if(void 0===_[n.user_id]){var i={};if(void 0!=e.userList&&e.userList.length>0&&"object"===u(e.userList)){var o=e.userList.findIndex(function(e){return e.user_id==n.user_id});i=e.userList[o]}c={path:"M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z",scale:.7,strokeColor:"white",strokeWeight:.1,fillOpacity:1,fillColor:"#40C4FF",offset:"5%",anchor:new google.maps.Point(10,25)};var r=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:s,title:n.user_id,icon:c});!function(e,n){google.maps.event.addListener(e,"click",function(a){var o=(t.markerArray.findIndex(function(t){return t.user_id==e.title}),"<a href='#' id='live_cam_"+n.user_id+"' name='"+n.user_id+"' >View live streaming</a >"),r='<div class="vehicle-map-details" id="live_cam_outer_'+e.title+'"><div class="vehicle-number">'+i.first_name+" "+i.last_name+'</div><div class="vehicle-status">Status: <span>Moving</span></div><div class="vehicle-status">Duration: <span>2 minutes</span></div>'+o+"</div>";k.setContent(r),k.open(s,e)}.bind(this))}(r,n),_[n.user_id]=r}else console.log("")});var n=this.props.dispatch;this.props.isUserNotValid&&n(A.headerActions.logout())}},{key:"handleLiveCam",value:function(e){var t=y.configConstants.API_BASE_PATH+"live-streaming/"+e;document.getElementById("live_cam_outer_"+e).innerHTML="<iframe style='margin-left: 11px;' width='388px' height='266' margin='0' padding='0' src='"+t+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen>Loading......</iframe>"}},{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=w.utilityHelper.getUserInfo().user_type;e(A.driverActions.getUserList(0,-1,"","",t)),s=new google.maps.Map(this.refs.mapContainer,{zoom:12,center:{lat:39.61792809,lng:-104.89796343},mapTypeId:"terrain",fullscreenControl:!1});var n=document.createElement("div");n.style.backgroundColor="#fff",n.style.border="2px solid #fff",n.style.borderRadius="3px",n.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",n.style.cursor="pointer",n.style.marginTop="9px",n.style.marginRight="9px",n.style.textAlign="center",n.title="Click to view full screen map",n.class="gm-control-active gm-fullscreen-control";var a=document.createElement("div");a.class="gm-control-active gm-fullscreen-control",a.style.color="rgb(25,25,25)",a.style.fontFamily="Roboto,Arial,sans-serif",a.style.fontSize="16px",a.style.lineHeight="38px",a.style.paddingLeft="5px",a.style.paddingRight="5px",a.innerHTML="Full Screen",n.appendChild(a),s.controls[google.maps.ControlPosition.RIGHT_TOP].push(n);document.getElementById("card-block");n.addEventListener("click",function(){document.getElementsByClassName("gm-fullscreen-control")[0].click()}),google.maps.event.addListener(s,"idle",function(){var e=s.getBounds(),t=e.getNorthEast(),n=e.getSouthWest(),a={action:"set_geofence",ne_lat:t.lat(),ne_long:t.lng(),sw_lat:n.lat(),sw_long:n.lng(),user_id:E};setTimeout(function(){M.send(JSON.stringify(a))},3e3)}),google.maps.event.addDomListener(this.refs.mapContainer,"click",function(e){if(e.target.id=="live_cam_"+e.target.name){this.handleLiveCam(e.target.name);var t={action:"send_brodcast_request",from:"admin",requested_user_id:e.target.name};M.send(JSON.stringify(t))}}.bind(this))}},{key:"render",value:function(){return m.default.createElement("div",{className:"page-container"},m.default.createElement(h.SideMenu,null),m.default.createElement(g.HeaderContainer,null),m.default.createElement("div",{className:"main-content"},m.default.createElement("div",{className:"wrap-inner-content"},m.default.createElement("div",{className:"col-md-12"},m.default.createElement("div",{className:"inner-content"},m.default.createElement("div",{className:"row page-header"},m.default.createElement("div",{className:"col-md-12"},m.default.createElement("h1",{className:"page-title"},"Live Map"),m.default.createElement("div",{className:"card map-holder"},m.default.createElement("div",{className:"card-block",ref:"mapContainer"}),m.default.createElement(b.default,{url:"ws://18.188.210.10:3001/"+E+"/"+E+"/company",onMessage:this.handleData.bind(this)})))))))))}}]),t}(m.default.Component),C=(0,p.connect)(l)(I);t.LiveMap=C,google.maps.Marker.prototype.animateTo=function(e,t){var n={duration:1e3,easing:"linear",complete:null},t=t||{};for(var a in n)t[a]=t[a]||n[a];if("linear"!=t.easing&&("undefined"==typeof jQuery||!jQuery.easing[t.easing]))throw'"'+t.easing+"\" easing function doesn't exist. Include jQuery and/or the jQuery easing plugin and use the right function name.";window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame,this.AT_startPosition_lat=this.getPosition().lat(),this.AT_startPosition_lng=this.getPosition().lng();var i=e.lat(),o=e.lng();Math.abs(o-this.AT_startPosition_lng)>180&&(o>this.AT_startPosition_lng?o-=360:o+=360);window.cancelAnimationFrame?window.cancelAnimationFrame(this.AT_animationHandler):clearTimeout(this.AT_animationHandler),function n(a,r){var l=(new Date).getTime()-r,s=l/t.duration,c=s;if("linear"!==t.easing&&(c=jQuery.easing[t.easing](s,l,0,1,t.duration)),s<1){var u=new google.maps.LatLng(a.AT_startPosition_lat+(i-a.AT_startPosition_lat)*c,a.AT_startPosition_lng+(o-a.AT_startPosition_lng)*c);a.setPosition(u),window.requestAnimationFrame?a.AT_animationHandler=window.requestAnimationFrame(function(){n(a,r)}):a.AT_animationHandler=setTimeout(function(){n(a,r)},17)}else a.setPosition(e),"function"==typeof t.complete&&t.complete()}(this,(new Date).getTime())}}}]);