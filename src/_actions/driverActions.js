import { driverConstants, configConstants } from '../_constants';
import { driverService } from '../_services';
import { utilityHelper} from '../_helpers';
import { sessionService } from '../_packages/redux-react-session';

/**
 * driverActions
 *
 * @package                Vizon
 * @subpackage             driverActions
 * @category               Actions
 * @DateOfCreation         23 August 2018
 * @ShortDescription       This is responsible to handle all action related to add driver
 */
export const driverActions = {
    addDriverSubmit,
    getUserList,
    resetUserState,
    driverDelete
}

/**
* @DateOfCreation        23 August 2018
* @ShortDescription      This function is responsible for Get vehicle List
* @param                 JSON user, This contains full route input data 
* @return                JSON Object
*/
function getUserList(page, pageSize, sorted, filtered, userType) {
    return dispatch => {
        dispatch(request());
        driverService.getUserList(page, pageSize, sorted, filtered, userType)
            .then(
                response => { 
                    var data = response.data;
                    var error_message;
                    if(data.code == configConstants.SUCCESS_CODE){                        
                        dispatch(success(data.result));                        
                    }else if(data.code == configConstants.ERROR_CODE){
                        error_message = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(error_message));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        error_message = data.message;
                        dispatch(failure(error_message));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        error_message = data.message;
                        dispatch(unauthorize(error_message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

// Actions defination that will perform according dispatch call and send data to reducer
    function request() { return { type: driverConstants.DRIVER_FETCH_REQUEST } }
    function success(result) { return { type: driverConstants.DRIVER_FETCH_SUCCESS, result } }
    function failure(error) { return { type: driverConstants.DRIVER_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        23 August 2018
* @ShortDescription      This function is responsible for submit the add driver form
* @param                 JSON user, This contains full user input data
* @return                JSON Object
*/
function addDriverSubmit(user, userList) {
    return dispatch => {
        dispatch(request({user}));
        driverService.submitData(user)
            .then(
                response => { 
                    var data = response.data;
                    var error_message;
                    if(data.code == configConstants.SUCCESS_CODE){ 

                        // Set new added addDriver
                        const index = userList.findIndex(
                                    i => 
                                        i.user_id == user.user_id
                                    );
                        if(userList[index]) {
                            userList[index] = data.result;
                        }else{
                            userList.push(data.result);
                        }
                        var successMsg = { 'message' : data.message, 'detail' : data.result, 'userList' : userList };
                        dispatch(success(successMsg));                     
                    }else if(data.code == configConstants.ERROR_CODE){
                        error_message = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(error_message));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        error_message  = data.message;
                        dispatch(failure(error_message));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        error_message = data.message;
                        dispatch(unauthorize(error_message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };
    // Actions defination that will perform according dispatch call and send data to reducer
    function request(user) { return { type: driverConstants.DRIVER_SAVE_REQUEST, user } }
    function success(result) { return { type: driverConstants.DRIVER_SAVE_SUCCESS, result } }
    function failure(error) { return { type: driverConstants.DRIVER_SAVE_FAILURE, error } }
}

/**
* @DateOfCreation        07 Sept 2018
* @ShortDescription      This function is responsible for Delete the Driver entry 
                         Alphnumeric userId   
* @return                JSON Object
*/
function driverDelete(userId) {
    return dispatch => {
        dispatch(request());
        driverService.doDeleteDriver(userId)
            .then(
                response => { 
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE){
                        var result = {
                            'message'  :   data.message
                        };                                             
                        dispatch(success(result));                        
                    }else if(data.code == configConstants.ERROR_CODE){
                        var errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        var errorMsg  = data.message;
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        var errorMsg = data.message;
                        dispatch(unauthorize(errorMsg));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response.message));
            });
    };
    // Actions defination that will perform according dispatch call and send data to reducer
    function request() { return { type: driverConstants.DRIVER_DELETE_REQUEST } }
    function success(result) { return { type: driverConstants.DRIVER_DELETE_SUCCESS, result } }
    function failure(error) { return { type: driverConstants.DRIVER_DELETE_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        23 August 2018
* @ShortDescription      This function is responsible to update the states and props
* @return                JSON Object
*/
function resetUserState(){
     return dispatch => {
        dispatch(request());
    }
    function request() { return { type: driverConstants.DRIVER_RESET_STATE } }
}
