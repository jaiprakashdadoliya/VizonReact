import { configConstants, tripConstants } from '../_constants';
import { tripService } from '../_services';
import { utilityHelper} from '../_helpers';

/**
 * tripActions
 *
 * @package                Vizon
 * @subpackage             tripActions
 * @category               Actions
 * @DateOfCreation         30 Aug 2018
 * @ShortDescription       This is responsible to handle all action related
 */
export const tripActions = {
    getTripsList,
    resetTripState
};

/**
* @DateOfCreation        30 Aug 2018
* @ShortDescription      This function is responsible for Get trip List
* @param                 JSON user, This contains full trip input data 
* @return                JSON Object
*/
function getTripsList(page, pageSize, sorted, filtered, vehicle_id) {
    return dispatch => {
        dispatch(request());
        tripService.getTripList(page, pageSize, sorted, filtered, vehicle_id)
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
    function request() { return { type: tripConstants.TRIP_FETCH_REQUEST } }
    function success(result) { return { type: tripConstants.TRIP_FETCH_SUCCESS, result } }
    function failure(error) { return { type: tripConstants.TRIP_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}


function resetTripState(){
    return dispatch => { dispatch(request()); }
    function request() { return {type : tripConstants.TRIP_RESET_STATE }}
}