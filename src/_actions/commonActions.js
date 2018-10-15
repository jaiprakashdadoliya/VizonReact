import { configConstants, commonConstants } from '../_constants';
import { commonService } from '../_services';
import { utilityHelper} from '../_helpers';

/**
 * commonActions
 *
 * @package                Education
 * @subpackage             commonActions
 * @category               Actions
 * @DateOfCreation         10 May 2018
 * @ShortDescription       This is create all comman action used in all module
 */
export const commonActions = {
    getVehicleList,
    exportFile,
    export_studentAllocation,
    export_staffAllocation,
    export_scheduleRoute,
    export_student,
    export_beacons
};

/**
* @DateOfCreation        05 June 2018
* @ShortDescription      This function is responsible for Get vehicle List
* @return                JSON Object
*/
function getVehicleList() {
    return dispatch => {
        dispatch(request());
        commonService.getVehicleList()
            .then(
                response => { 
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE){                        
                        dispatch(success(data.result));                        
                    }else if(data.code == configConstants.ERROR_CODE){
                        var errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

// Actions defination that will perform according dispatch call and send data to reducer
    function request() { return { type: commonConstants.VEHICLES_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.VEHICLES_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.VEHICLES_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        05 July 2018
 * @ShortDescription      This function is responsible for export csv.
 * @param                 JSON user, This contains full input data.
 * @return                JSON Object
 */
function exportFile(exportFile) {
    return dispatch => {
        dispatch(request());
        commonService.exportFile(exportFile)
            .then(
                response => {
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));             
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

    // Actions defination that will perform according dispatch call and send data to reducer.
    function request() { return { type: commonConstants.EXPORT_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.EXPORT_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.EXPORT_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        05 July 2018
 * @ShortDescription      This function is responsible for export_staffAllocation csv.
 * @param                 JSON user, This contains full export_staffAllocation input data.
 * @return                JSON Object
 */
function export_staffAllocation(exportFile) {
    return dispatch => {
        dispatch(request());
        commonService.export_staffAllocation(exportFile)
            .then(
                response => {
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));             
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

    // Actions defination that will perform according dispatch call and send data to reducer.
    function request() { return { type: commonConstants.EXPORT_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.EXPORT_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.EXPORT_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        05 July 2018
 * @ShortDescription      This function is responsible for export_studentAllocation csv.
 * @param                 JSON user, This contains full export_studentAllocation input data.
 * @return                JSON Object
 */
function export_studentAllocation(exportFile) {
    return dispatch => {
        dispatch(request());
        commonService.export_studentAllocation(exportFile)
            .then(
                response => {
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));             
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

    // Actions defination that will perform according dispatch call and send data to reducer.
    function request() { return { type: commonConstants.EXPORT_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.EXPORT_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.EXPORT_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        09 Aug 2018
 * @ShortDescription      This function is responsible for export scheduleRoute csv.
 * @param                 JSON user, This contains full export_scheduleRoute input data.
 * @return                JSON Object
 */
function export_scheduleRoute(exportFile) {
    return dispatch => {
        dispatch(request());
        commonService.export_scheduleRoute(exportFile)
            .then(
                response => {
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));             
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

    // Actions defination that will perform according dispatch call and send data to reducer.
    function request() { return { type: commonConstants.EXPORT_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.EXPORT_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.EXPORT_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        09 Aug 2018
 * @ShortDescription      This function is responsible for export scheduleRoute csv.
 * @param                 JSON user, This contains full export_scheduleRoute input data.
 * @return                JSON Object
 */
function export_student(exportFile) {
    return dispatch => {
        dispatch(request());
        commonService.export_student(exportFile)
         .then(
                response => {
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));             
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

    // Actions defination that will perform according dispatch call and send data to reducer.
    function request() { return { type: commonConstants.EXPORT_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.EXPORT_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.EXPORT_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}
/*
 * @DateOfCreation        17 August 2018
 * @ShortDescription      This function is responsible for export beacons csv.
 * @param                 JSON user, This contains full export_beacons input data.
 * @return                JSON Object
 */
function export_beacons(exportFile) {
    return dispatch => {
        dispatch(request());
        commonService.export_beacons(exportFile)
            .then(
                response => {
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));             
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

    // Actions defination that will perform according dispatch call and send data to reducer.
    function request() { return { type: commonConstants.EXPORT_FETCH_REQUEST } }
    function success(result) { return { type: commonConstants.EXPORT_FETCH_SUCCESS, result } }
    function failure(error) { return { type: commonConstants.EXPORT_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}