(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(268);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(269);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var s=n(270);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var i=n(271);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var c=n(272);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})});var u=n(273);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var a=n(274);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(267);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(275);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var s=n(276);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var i=n(277);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var c=n(278);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})});var u=n(279);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var a=n(280);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var E=n(281);Object.keys(E).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return E[e]}})})},267:function(e,t,n){"use strict";function r(e){function t(e){return{type:s.loginConstants.LOGIN_REQUEST,user:e}}function n(e){return{type:s.loginConstants.LOGIN_SUCCESS,result:e}}function r(e){return{type:s.loginConstants.LOGIN_FAILURE,error:e}}return function(o){o(t({user:e})),i.userLoginService.login(e).then(function(e){var t,i=e.data;i.code==s.configConstants.SUCCESS_CODE?(u.sessionService.saveSession(i.result.token),u.sessionService.saveUser(i.result.user),o(n(i.result.user))):i.code==s.configConstants.ERROR_CODE?(t=c.utilityHelper.getFirstErrorMessage(i.error),o(r(t))):i.code==s.configConstants.EXCEPTION_CODE?(t=i.message,o(r(t))):o(r(e))}).catch(function(e){o(r(e))})}}function o(){function e(){return{type:s.loginConstants.LOGIN_UPDATE_STATE}}return function(t){t(e())}}Object.defineProperty(t,"__esModule",{value:!0}),t.userLoginActions=void 0;var s=n(6),i=n(121),c=n(12),u=n(13);t.userLoginActions={loginSubmit:r,updateState:o}},268:function(e,t,n){"use strict";function r(e){var t=new FormData;return t=c.utilityHelper.jsonToFormData(e,t),(0,s.default)({method:"post",url:i.configConstants.API_BASE_PATH+"admin_login",data:t,headers:{"Content-Type":"application/json",unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.userLoginService=void 0;var o=n(122),s=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(6),c=n(12);t.userLoginService={login:r}},269:function(e,t,n){"use strict";function r(e){return(0,s.default)({method:"post",url:i.configConstants.API_BASE_PATH+"forgot_password",data:e,headers:{unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.forgotPasswordService=void 0;var o=n(122),s=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(6);n(12),t.forgotPasswordService={getResetToken:r}},270:function(e,t,n){"use strict";function r(){var e=(c.utilityHelper.getLoginAccessToken(),c.utilityHelper.getUserInfo());return(0,s.default)({method:"post",url:i.configConstants.API_BASE_PATH+"admin_logout",data:{user_id:e.user_id},headers:{unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.headerService=void 0;var o=n(122),s=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(6),c=n(12);t.headerService={logout:r}},271:function(e,t,n){"use strict";function r(){var e=l.utilityHelper.getLoginAccessToken();return(0,f.default)({method:"post",url:C.configConstants.API_BASE_PATH+"vehicle_list",headers:{Authorization:"Bearer "+e,unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}function o(e){var t=l.utilityHelper.getUserInfo();window.open(C.configConstants.API_BASE_PATH+"export_file/"+t.user_id+"/"+e)}function s(e){var t=l.utilityHelper.getUserInfo();window.open(C.configConstants.API_BASE_PATH+"export_studentAllocation/"+t.user_id)}function i(e){var t=l.utilityHelper.getUserInfo();window.open(C.configConstants.API_BASE_PATH+"export_staffAllocation/"+t.user_id)}function c(e){var t=l.utilityHelper.getUserInfo();window.open(C.configConstants.API_BASE_PATH+"export_scheduleRoute/"+t.user_id)}function u(e){var t=l.utilityHelper.getUserInfo();window.open(C.configConstants.API_BASE_PATH+"export_student/"+t.user_id)}function a(e){var t=l.utilityHelper.getUserInfo();window.open(C.configConstants.API_BASE_PATH+"export_beacons_save/"+t.user_id)}Object.defineProperty(t,"__esModule",{value:!0}),t.commonService=void 0;var E=n(122),f=function(e){return e&&e.__esModule?e:{default:e}}(E),C=n(6),l=n(12);t.commonService={getVehicleList:r,exportFile:o,export_studentAllocation:s,export_staffAllocation:i,export_scheduleRoute:c,export_student:u,export_beacons:a}},272:function(e,t,n){"use strict";function r(e,t,n,r){a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"vehicles",data:{page:e,pageSize:t,sorted:n,filtered:r},headers:a.headerHelper.getHeaderWithAuthorization()}).then(function(e){return e}).catch(function(e){return e})}function o(e){a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"add_vehicles",data:a.headerHelper.getJsonDataToFormData(e),headers:a.headerHelper.getHeaderWithAuthorization("multipart/form-data")}).then(function(e){return e}).catch(function(e){return e})}function s(e){a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"delete_vehicle",data:{vehicle_id:e},headers:a.headerHelper.getHeaderWithAuthorization()}).then(function(e){return e}).catch(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.vehicleService=void 0;var i=n(122),c=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(6),a=n(12);t.vehicleService={getVehicleList:r,submitVehicleData:o,doDeleteVehicle:s}},273:function(e,t,n){"use strict";function r(e,t,n,r,o){a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"drivers",data:{page:e,pageSize:t,sorted:n,filtered:r,user_type:o},headers:a.headerHelper.getHeaderWithAuthorization()}).then(function(e){return e}).catch(function(e){return e})}function o(e){a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"add_driver",data:a.headerHelper.getJsonDataToFormData(e),headers:a.headerHelper.getHeaderWithAuthorization("multipart/form-data")}).then(function(e){return e}).catch(function(e){return e})}function s(e){a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"delete_driver",data:{user_id:e},headers:a.headerHelper.getHeaderWithAuthorization()}).then(function(e){return e}).catch(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.driverService=void 0;var i=n(122),c=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(6),a=n(12);t.driverService={getUserList:r,submitData:o,doDeleteDriver:s}},274:function(e,t,n){"use strict";function r(e,t,n,r){var o=a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"get_vehicle_assignments",data:{page:e,pageSize:t,sorted:n,filtered:r},headers:{Authorization:"Bearer "+o,unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}function o(e){var t=a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"add_vehicles_assignments",data:e,headers:{Authorization:"Bearer "+t,unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}function s(e){var t=a.utilityHelper.getLoginAccessToken();return(0,c.default)({method:"post",url:u.configConstants.API_BASE_PATH+"delete_vehicles_assignments",data:{vehicle_assignment_id:e},headers:{Authorization:"Bearer "+t,unencrypted:"1"}}).then(function(e){return e}).catch(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.vehicleAssignmentService=void 0;var i=n(122),c=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(6),a=n(12);t.vehicleAssignmentService={getVehicleAssignmentList:r,submitVehicleAssignData:o,dodeleteVehicleAssignment:s}},275:function(e,t,n){"use strict";function r(e){function t(e){return{type:o.forgotConstants.FORGOT_REQUEST,user:e}}function n(e){return{type:o.forgotConstants.FORGOT_SUCCESS,success:e}}function r(e){return{type:o.forgotConstants.FORGOT_FAILURE,error:e}}return function(c){c(t({user:e})),s.forgotPasswordService.getResetToken(e).then(function(e){var t=e.data;if(t.code==o.configConstants.SUCCESS_CODE){var s=t.message;c(n(s))}else if(t.code==o.configConstants.ERROR_CODE){var u=i.utilityHelper.getFirstErrorMessage(t.error);c(r(u))}else c(t.code==o.configConstants.EXCEPTION_CODE?r(u):r(e))}).catch(function(e){c(r(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.forgotPasswordActions=void 0;var o=n(6),s=n(121),i=n(12);t.forgotPasswordActions={forgotSubmit:r}},276:function(e,t,n){"use strict";function r(){function e(e){return{type:o.headerConstants.LOGOUT_SUCCESS,success:e}}function t(e){return{type:o.headerConstants.LOGOUT_FAILURE,error:e}}return function(n){s.headerService.logout().then(function(r){var s=r.data;if(s.code==o.configConstants.SUCCESS_CODE||s.code==o.configConstants.UNAUTHENTICATE_CODE){i.utilityHelper.doLogout();var c=s.message;n(e(c))}else{var u=s.hasOwnProperty("error")?i.utilityHelper.getFirstErrorMessage(s.error):"";u=""===u&&s.hasOwnProperty("message")?s.message:u,n(t(u))}}).catch(function(e){n(t(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.headerActions=void 0;var o=n(6),s=n(121),i=n(12);t.headerActions={logout:r}},277:function(e,t,n){"use strict";function r(){function e(){return{type:E.commonConstants.VEHICLES_FETCH_REQUEST}}function t(e){return{type:E.commonConstants.VEHICLES_FETCH_SUCCESS,result:e}}function n(e){return{type:E.commonConstants.VEHICLES_FETCH_FAILURE,error:e}}function r(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(o){o(e()),f.commonService.getVehicleList().then(function(e){var s=e.data;if(s.code==E.configConstants.SUCCESS_CODE)o(t(s.result));else if(s.code==E.configConstants.ERROR_CODE){var i=C.utilityHelper.getFirstErrorMessage(s.error);o(n(i))}else s.code==E.configConstants.EXCEPTION_CODE?(i=s.message,o(n(i))):s.code==E.configConstants.UNAUTHENTICATE_CODE?(i=s.message,o(r(i))):o(n(e))}).catch(function(e){o(n(e))})}}function o(e){function t(){return{type:E.commonConstants.EXPORT_FETCH_REQUEST}}function n(e){return{type:E.commonConstants.EXPORT_FETCH_SUCCESS,result:e}}function r(e){return{type:E.commonConstants.EXPORT_FETCH_FAILURE,error:e}}function o(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),f.commonService.exportFile(e).then(function(e){var t,i=e.data;i.code==E.configConstants.SUCCESS_CODE?s(n(i.result)):i.code==E.configConstants.ERROR_CODE?(t=C.utilityHelper.getFirstErrorMessage(i.error),s(r(t))):i.code==E.configConstants.EXCEPTION_CODE?(t=i.message,s(r(t))):i.code==E.configConstants.UNAUTHENTICATE_CODE?(t=i.message,s(o(t))):s(r(e))}).catch(function(e){s(r(e))})}}function s(e){function t(){return{type:E.commonConstants.EXPORT_FETCH_REQUEST}}function n(e){return{type:E.commonConstants.EXPORT_FETCH_SUCCESS,result:e}}function r(e){return{type:E.commonConstants.EXPORT_FETCH_FAILURE,error:e}}function o(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),f.commonService.export_staffAllocation(e).then(function(e){var t,i=e.data;i.code==E.configConstants.SUCCESS_CODE?s(n(i.result)):i.code==E.configConstants.ERROR_CODE?(t=C.utilityHelper.getFirstErrorMessage(i.error),s(r(t))):i.code==E.configConstants.EXCEPTION_CODE?(t=i.message,s(r(t))):i.code==E.configConstants.UNAUTHENTICATE_CODE?(t=i.message,s(o(t))):s(r(e))}).catch(function(e){s(r(e))})}}function i(e){function t(){return{type:E.commonConstants.EXPORT_FETCH_REQUEST}}function n(e){return{type:E.commonConstants.EXPORT_FETCH_SUCCESS,result:e}}function r(e){return{type:E.commonConstants.EXPORT_FETCH_FAILURE,error:e}}function o(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),f.commonService.export_studentAllocation(e).then(function(e){var t,i=e.data;i.code==E.configConstants.SUCCESS_CODE?s(n(i.result)):i.code==E.configConstants.ERROR_CODE?(t=C.utilityHelper.getFirstErrorMessage(i.error),s(r(t))):i.code==E.configConstants.EXCEPTION_CODE?(t=i.message,s(r(t))):i.code==E.configConstants.UNAUTHENTICATE_CODE?(t=i.message,s(o(t))):s(r(e))}).catch(function(e){s(r(e))})}}function c(e){function t(){return{type:E.commonConstants.EXPORT_FETCH_REQUEST}}function n(e){return{type:E.commonConstants.EXPORT_FETCH_SUCCESS,result:e}}function r(e){return{type:E.commonConstants.EXPORT_FETCH_FAILURE,error:e}}function o(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),f.commonService.export_scheduleRoute(e).then(function(e){var t,i=e.data;i.code==E.configConstants.SUCCESS_CODE?s(n(i.result)):i.code==E.configConstants.ERROR_CODE?(t=C.utilityHelper.getFirstErrorMessage(i.error),s(r(t))):i.code==E.configConstants.EXCEPTION_CODE?(t=i.message,s(r(t))):i.code==E.configConstants.UNAUTHENTICATE_CODE?(t=i.message,s(o(t))):s(r(e))}).catch(function(e){s(r(e))})}}function u(e){function t(){return{type:E.commonConstants.EXPORT_FETCH_REQUEST}}function n(e){return{type:E.commonConstants.EXPORT_FETCH_SUCCESS,result:e}}function r(e){return{type:E.commonConstants.EXPORT_FETCH_FAILURE,error:e}}function o(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),f.commonService.export_student(e).then(function(e){var t,i=e.data;i.code==E.configConstants.SUCCESS_CODE?s(n(i.result)):i.code==E.configConstants.ERROR_CODE?(t=C.utilityHelper.getFirstErrorMessage(i.error),s(r(t))):i.code==E.configConstants.EXCEPTION_CODE?(t=i.message,s(r(t))):i.code==E.configConstants.UNAUTHENTICATE_CODE?(t=i.message,s(o(t))):s(r(e))}).catch(function(e){s(r(e))})}}function a(e){function t(){return{type:E.commonConstants.EXPORT_FETCH_REQUEST}}function n(e){return{type:E.commonConstants.EXPORT_FETCH_SUCCESS,result:e}}function r(e){return{type:E.commonConstants.EXPORT_FETCH_FAILURE,error:e}}function o(e){return{type:E.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),f.commonService.export_beacons(e).then(function(e){var t,i=e.data;i.code==E.configConstants.SUCCESS_CODE?s(n(i.result)):i.code==E.configConstants.ERROR_CODE?(t=C.utilityHelper.getFirstErrorMessage(i.error),s(r(t))):i.code==E.configConstants.EXCEPTION_CODE?(t=i.message,s(r(t))):i.code==E.configConstants.UNAUTHENTICATE_CODE?(t=i.message,s(o(t))):s(r(e))}).catch(function(e){s(r(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.commonActions=void 0;var E=n(6),f=n(121),C=n(12);t.commonActions={getVehicleList:r,exportFile:o,export_studentAllocation:i,export_staffAllocation:s,export_scheduleRoute:c,export_student:u,export_beacons:a}},278:function(e,t,n){"use strict";function r(e,t,n,r){function o(){return{type:c.vehicleConstants.VEHICLE_FETCH_REQUEST}}function s(e){return{type:c.vehicleConstants.VEHICLE_FETCH_SUCCESS,result:e}}function i(e){return{type:c.vehicleConstants.VEHICLE_FETCH_FAILURE,error:e}}function E(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(f){f(o()),u.vehicleService.getVehicleList(e,t,n,r).then(function(e){var t,n=e.data;n.code==c.configConstants.SUCCESS_CODE?f(s(n.result)):n.code==c.configConstants.ERROR_CODE?(t=a.utilityHelper.getFirstErrorMessage(n.error),f(i(t))):n.code==c.configConstants.EXCEPTION_CODE?(t=n.message,f(i(t))):n.code==c.configConstants.UNAUTHENTICATE_CODE?(t=n.message,f(E(t))):f(i(e))}).catch(function(e){f(i(e))})}}function o(e,t){function n(){return{type:c.vehicleConstants.VEHICLE_SAVE_REQUEST}}function r(e){return{type:c.vehicleConstants.VEHICLE_SAVE_SUCCESS,result:e}}function o(e){return{type:c.vehicleConstants.VEHICLE_SAVE_FAILURE,error:e}}function s(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(i){i(n()),u.vehicleService.submitVehicleData(e).then(function(n){var u,E=n.data;if(E.code==c.configConstants.SUCCESS_CODE){console.log("Successss =",E);var f=t.findIndex(function(t){return t.vehicle_id==e.vehicle_id});t[f]?t[f]=E.result:(e.vehicle_id=E.result.vehicle_id,t.push(E.result));var C={message:E.message,detail:E.result,vehicleList:t};i(r(C))}else E.code==c.configConstants.ERROR_CODE?(u=a.utilityHelper.getFirstErrorMessage(E.error),i(o(u))):E.code==c.configConstants.EXCEPTION_CODE?(u=E.message,i(o(u))):E.code==c.configConstants.UNAUTHENTICATE_CODE?(u=E.message,i(s(u))):i(o(n))}).catch(function(e){i(o(e))})}}function s(e){function t(){return{type:c.vehicleConstants.VEHICLE_DELETE_REQUEST}}function n(e){return{type:c.vehicleConstants.VEHICLE_DELETE_SUCCESS,result:e}}function r(e){return{type:c.vehicleConstants.VEHICLE_DELETE_FAILURE,errorMsg:e}}function o(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),u.vehicleService.doDeleteVehicle(e).then(function(e){var t=e.data;if(t.code==c.configConstants.SUCCESS_CODE){var i={message:t.message};s(n(i))}else if(t.code==c.configConstants.ERROR_CODE){var u=a.utilityHelper.getFirstErrorMessage(t.error);s(r(u))}else if(t.code==c.configConstants.EXCEPTION_CODE){var u=t.message;s(r(u))}else if(t.code==c.configConstants.UNAUTHENTICATE_CODE){var u=t.message;s(o(u))}else s(r(e))}).catch(function(e){s(r(e.message))})}}function i(){function e(){return{type:c.vehicleConstants.VEHICLE_RESET_STATE}}return function(t){t(e())}}Object.defineProperty(t,"__esModule",{value:!0}),t.vehicleActions=void 0;var c=n(6),u=n(121),a=n(12);t.vehicleActions={getVehicleList:r,resetVehicleState:i,addVehicleSubmit:o,deleteVehicle:s}},279:function(e,t,n){"use strict";function r(e,t,n,r,o){function u(){return{type:s.tripConstants.TRIP_FETCH_REQUEST}}function a(e){return{type:s.tripConstants.TRIP_FETCH_SUCCESS,result:e}}function E(e){return{type:s.tripConstants.TRIP_FETCH_FAILURE,error:e}}function f(e){return{type:s.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(C){C(u()),i.tripService.getTripList(e,t,n,r,o).then(function(e){var t,n=e.data;n.code==s.configConstants.SUCCESS_CODE?C(a(n.result)):n.code==s.configConstants.ERROR_CODE?(t=c.utilityHelper.getFirstErrorMessage(n.error),C(E(t))):n.code==s.configConstants.EXCEPTION_CODE?(t=n.message,C(E(t))):n.code==s.configConstants.UNAUTHENTICATE_CODE?(t=n.message,C(f(t))):C(E(e))}).catch(function(e){C(E(e))})}}function o(){function e(){return{type:s.tripConstants.TRIP_RESET_STATE}}return function(t){t(e())}}Object.defineProperty(t,"__esModule",{value:!0}),t.tripActions=void 0;var s=n(6),i=n(121),c=n(12);t.tripActions={getTripsList:r,resetTripState:o}},280:function(e,t,n){"use strict";function r(e,t,n,r,o){function s(){return{type:c.driverConstants.DRIVER_FETCH_REQUEST}}function i(e){return{type:c.driverConstants.DRIVER_FETCH_SUCCESS,result:e}}function E(e){return{type:c.driverConstants.DRIVER_FETCH_FAILURE,error:e}}function f(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(C){C(s()),u.driverService.getUserList(e,t,n,r,o).then(function(e){var t,n=e.data;n.code==c.configConstants.SUCCESS_CODE?C(i(n.result)):n.code==c.configConstants.ERROR_CODE?(t=a.utilityHelper.getFirstErrorMessage(n.error),C(E(t))):n.code==c.configConstants.EXCEPTION_CODE?(t=n.message,C(E(t))):n.code==c.configConstants.UNAUTHENTICATE_CODE?(t=n.message,C(f(t))):C(E(e))}).catch(function(e){C(E(e))})}}function o(e,t){function n(e){return{type:c.driverConstants.DRIVER_SAVE_REQUEST,user:e}}function r(e){return{type:c.driverConstants.DRIVER_SAVE_SUCCESS,result:e}}function o(e){return{type:c.driverConstants.DRIVER_SAVE_FAILURE,error:e}}return function(s){s(n({user:e})),u.driverService.submitData(e).then(function(n){var i,u=n.data;if(u.code==c.configConstants.SUCCESS_CODE){var E=t.findIndex(function(t){return t.user_id==e.user_id});t[E]?t[E]=u.result:t.push(u.result);var f={message:u.message,detail:u.result,userList:t};s(r(f))}else u.code==c.configConstants.ERROR_CODE?(i=a.utilityHelper.getFirstErrorMessage(u.error),s(o(i))):u.code==c.configConstants.EXCEPTION_CODE?(i=u.message,s(o(i))):u.code==c.configConstants.UNAUTHENTICATE_CODE?(i=u.message,s(unauthorize(i))):s(o(n))}).catch(function(e){s(o(e))})}}function s(e){function t(){return{type:c.driverConstants.DRIVER_DELETE_REQUEST}}function n(e){return{type:c.driverConstants.DRIVER_DELETE_SUCCESS,result:e}}function r(e){return{type:c.driverConstants.DRIVER_DELETE_FAILURE,errorMsg:e}}function o(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),u.driverService.doDeleteDriver(e).then(function(e){var t=e.data;if(t.code==c.configConstants.SUCCESS_CODE){var i={message:t.message};s(n(i))}else if(t.code==c.configConstants.ERROR_CODE){var u=a.utilityHelper.getFirstErrorMessage(t.error);s(r(u))}else if(t.code==c.configConstants.EXCEPTION_CODE){var u=t.message;s(r(u))}else if(t.code==c.configConstants.UNAUTHENTICATE_CODE){var u=t.message;s(o(u))}else s(r(e))}).catch(function(e){s(r(e.message))})}}function i(){function e(){return{type:c.driverConstants.DRIVER_RESET_STATE}}return function(t){t(e())}}Object.defineProperty(t,"__esModule",{value:!0}),t.driverActions=void 0;var c=n(6),u=n(121),a=n(12);n(13),t.driverActions={addDriverSubmit:o,getUserList:r,resetUserState:i,driverDelete:s}},281:function(e,t,n){"use strict";function r(e,t,n,r){function o(){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_REQUEST}}function s(e){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_SUCCESS,result:e}}function i(e){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_FAILURE,error:e}}function E(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(f){f(o()),u.vehicleAssignmentService.getVehicleAssignmentList(e,t,n,r).then(function(e){var t,n=e.data;n.code==c.configConstants.SUCCESS_CODE?f(s(n.result)):n.code==c.configConstants.ERROR_CODE?(t=a.utilityHelper.getFirstErrorMessage(n.error),f(i(t))):n.code==c.configConstants.EXCEPTION_CODE?(t=n.message,f(i(t))):n.code==c.configConstants.UNAUTHENTICATE_CODE?(t=n.message,f(E(t))):f(i(e))}).catch(function(e){f(i(e))})}}function o(e,t){function n(){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_REQUEST}}function r(e){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_SUCCESS,result:e}}function o(e){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_FAILURE,error:e}}function s(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(i){i(n()),u.vehicleAssignmentService.submitVehicleAssignData(e).then(function(n){var u,E=n.data;if(E.code==c.configConstants.SUCCESS_CODE){var f=t.findIndex(function(t){return t.vehicle_assignment_id==e.vehicle_assignment_id});t[f]?t[f]=E.result:(e.vehicle_assignment_id=E.result.vehicle_assignment_id,t.push(E.result));var C={message:E.message,detail:E.result,vehicleAssignList:t};i(r(C))}else E.code==c.configConstants.ERROR_CODE?(u=a.utilityHelper.getFirstErrorMessage(E.error),i(o(u))):E.code==c.configConstants.EXCEPTION_CODE?(u=E.message,i(o(u))):E.code==c.configConstants.UNAUTHENTICATE_CODE?(u=E.message,i(s(u))):i(o(n))}).catch(function(e){i(o(e))})}}function s(e){function t(){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_REQUEST}}function n(e){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_SUCCESS,result:e}}function r(e){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_FAILURE,errorMsg:e}}function o(e){return{type:c.configConstants.UNAUTHENTICATE_CODE,error:e}}return function(s){s(t()),u.vehicleAssignmentService.dodeleteVehicleAssignment(e).then(function(e){var t=e.data;if(t.code==c.configConstants.SUCCESS_CODE){var i={message:t.message};s(n(i))}else if(t.code==c.configConstants.ERROR_CODE){var u=a.utilityHelper.getFirstErrorMessage(t.error);s(r(u))}else if(t.code==c.configConstants.EXCEPTION_CODE){var u=t.message;s(r(u))}else if(t.code==c.configConstants.UNAUTHENTICATE_CODE){var u=t.message;s(o(u))}else s(r(e))}).catch(function(e){s(r(e.message))})}}function i(){function e(){return{type:c.vehicleAssignmentConstants.VEHICLE_ASSIGN_RESET_STATE}}return function(t){t(e())}}Object.defineProperty(t,"__esModule",{value:!0}),t.vehicleAssignmentActions=void 0;var c=n(6),u=n(121),a=n(12);t.vehicleAssignmentActions={getVehicleAssignmentList:r,resetVehicleAssignState:i,addVehicleAssignSubmit:o,deleteVehicleAssignment:s}}}]);