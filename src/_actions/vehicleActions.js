import { configConstants, vehicleConstants } from '../_constants';
import { vehicleService } from '../_services';
import { utilityHelper} from '../_helpers';

/**
 * vehicleActions
 *
 * @package                Vizon
 * @subpackage             vehicleActions
 * @category               Actions
 * @DateOfCreation         29 August 2018
 * @ShortDescription       This is responsible to handle all action related
 */
export const vehicleActions = {
    getVehicleList,
    resetVehicleState,
    addVehicleSubmit,
    deleteVehicle
};

/**
* @DateOfCreation        29 August 2018
* @ShortDescription      This function is responsible for Get vehicle List
* @param                 JSON user, This contains full route input data 
* @return                JSON Object
*/
function getVehicleList(page, pageSize, sorted, filtered) {
    return dispatch => {
        dispatch(request());
        vehicleService.getVehicleList(page, pageSize, sorted, filtered)
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

// Actions defination that will perform according dispatch call and send data to reducer
    function request() { return { type: vehicleConstants.VEHICLE_FETCH_REQUEST } }
    function success(result) { return { type: vehicleConstants.VEHICLE_FETCH_SUCCESS, result } }
    function failure(error) { return { type: vehicleConstants.VEHICLE_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        7 Sept 2018
* @ShortDescription      This function is responsible for submit the add vehicle form
* @param                 JSON user, This contains full user input data
* @return                JSON Object
*/
function addVehicleSubmit(vehicle, vehicleList) {
    return dispatch => {
        dispatch(request({vehicle}));
        vehicleService.submitVehicleData(vehicle)
            .then(
                response => { 
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){ 
                        console.log('Successss =', data);                
                        // Set new added vehicle
                        const index = vehicleList.findIndex(
                                    i => 
                                        i.vehicle_id == vehicle.vehicle_id
                                    );
                        if(vehicleList[index]) {
                            vehicleList[index] = data.result;
                        }else{
                            vehicle['vehicle_id'] = data.result.vehicle_id;
                            vehicleList.push(data.result);
                        }
                        var successMsg = { 'message' : data.message, 'detail' : data.result, 'vehicleList' : vehicleList };
                        dispatch(success(successMsg));                     
                    }else if(data.code == configConstants.ERROR_CODE){
                        errorMsg = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(errorMsg));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        errorMsg  = data.message;
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
    function request() { return { type: vehicleConstants.VEHICLE_SAVE_REQUEST } }
    function success(result) { return { type: vehicleConstants.VEHICLE_SAVE_SUCCESS, result } }
    function failure(error) { return { type: vehicleConstants.VEHICLE_SAVE_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        7 Sept 2018
* @ShortDescription      This function is responsible for Delete the vehicle record
                         Alphnumeric vehicleId   
* @return                JSON Object
*/
function deleteVehicle(vehicleId) {
    return dispatch => {
        dispatch(request());
        vehicleService.doDeleteVehicle(vehicleId)
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
    function request() { return { type: vehicleConstants.VEHICLE_DELETE_REQUEST } }
    function success(result) { return { type: vehicleConstants.VEHICLE_DELETE_SUCCESS, result } }
    function failure(error) { return { type: vehicleConstants.VEHICLE_DELETE_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}


function resetVehicleState(){
    return dispatch => { dispatch(request()); }
    function request() { return {type : vehicleConstants.VEHICLE_RESET_STATE }}
}