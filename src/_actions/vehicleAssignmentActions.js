import { configConstants, vehicleAssignmentConstants } from '../_constants';
import { vehicleAssignmentService } from '../_services';
import { utilityHelper} from '../_helpers';

/**
 * vehicleAssignmentActions
 *
 * @package                Vizon
 * @subpackage             vehicleAssignmentActions
 * @category               Actions
 * @DateOfCreation         30 August 2018
 * @ShortDescription       This is responsible to handle all action related
 */
export const vehicleAssignmentActions = {
    getVehicleAssignmentList,
    resetVehicleAssignState,
    addVehicleAssignSubmit,
    deleteVehicleAssignment
};

/**
* @DateOfCreation        30 August 2018
* @ShortDescription      This function is responsible for Get vehicle assignmnet List
* @param                 JSON user, This contains full route input data 
* @return                JSON Object
*/
function getVehicleAssignmentList(page, pageSize, sorted, filtered) {
    return dispatch => {
        dispatch(request());
        vehicleAssignmentService.getVehicleAssignmentList(page, pageSize, sorted, filtered)
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
    function request() { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_REQUEST } }
    function success(result) { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_SUCCESS, result } }
    function failure(error) { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        30 August 2018
* @ShortDescription      This function is responsible for submit the add vehicle form
* @param                 JSON user, This contains full user input data
* @return                JSON Object
*/
function addVehicleAssignSubmit(vehicle, vehicleAssignList) {
    return dispatch => {
        dispatch(request({vehicle}));
        vehicleAssignmentService.submitVehicleAssignData(vehicle)
            .then(
                response => { 
                    var data = response.data;
                    var errorMsg;
                    if(data.code == configConstants.SUCCESS_CODE){       
                        // Set new added vehicle
                        const index = vehicleAssignList.findIndex(
                                    i => 
                                        i.vehicle_assignment_id == vehicle.vehicle_assignment_id
                                    );
                        if(vehicleAssignList[index]) {
                            vehicleAssignList[index] = data.result;
                        }else{
                            vehicle['vehicle_assignment_id'] = data.result.vehicle_assignment_id;
                            vehicleAssignList.push(data.result);
                        }
                        var successMsg = { 'message' : data.message, 'detail' : data.result, 'vehicleAssignList' : vehicleAssignList };
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
    function request() { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_REQUEST } }
    function success(result) { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_SUCCESS, result } }
    function failure(error) { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        7 Sept 2018
* @ShortDescription      This function is responsible for Delete the vehicle record
                         Alphnumeric vehicleId   
* @return                JSON Object
*/
function deleteVehicleAssignment(vehicleId) {
    return dispatch => {
        dispatch(request());
        vehicleAssignmentService.dodeleteVehicleAssignment(vehicleId)
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
    function request() { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_REQUEST } }
    function success(result) { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_SUCCESS, result } }
    function failure(error) { return { type: vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

function resetVehicleAssignState(){
    return dispatch => { dispatch(request()); }
    function request() { return {type : vehicleAssignmentConstants.VEHICLE_ASSIGN_RESET_STATE }}
}