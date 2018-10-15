import { configConstants } from '../../_constants';
import { tripsConstants } from './tripsConstants';
import { tripsService } from './tripsService';
import { utilityHelper } from '../../_helpers';

/**
 * tripsActions
 *
 * @package                Vizon
 * @subpackage             Trips
 * @category               Actions
 * @DateOfCreation         05 Sept 2018
 * @ShortDescription       This is responsible for all trips actions
 */ 
export const tripsActions = {
    getList,
    getLocationList,
    resetState
};

/**
* @DateOfCreation        05 sept 2018
* @ShortDescription      This function is responsible for get trips list
* @return                JSON Object
*/
function getList(requestData) {
    return dispatch => {
        dispatch(request());
        tripsService.getList(requestData)
            .then(
                response => { 
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));
                    }else if(data.code == configConstants.ERROR_CODE){
                       dispatch(failure(data.message));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        dispatch(failure(data.message));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        dispatch(unauthorize(data.message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };
    function request() { return { type: tripsConstants.TRIP_GET_REQUEST } }
    function success(tripsList) { return { type: tripsConstants.TRIP_GET_SUCCESS, tripsList} }
    function failure(error) { return { type: tripsConstants.TRIP_GET_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        05 sept 2018
 * @ShortDescription      This function is responsible for get trips list
 * @return                JSON Object
 */
function getLocationList(trip_id, user_id, start_time, end_time) {
    return dispatch => {
        dispatch(request());
        tripsService.getLocationList(trip_id, user_id, start_time, end_time)
            .then(
                response => {
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));
                    }else if(data.code == configConstants.ERROR_CODE){
                        dispatch(failure(data.message));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        dispatch(failure(data.message));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        dispatch(unauthorize(data.message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
            dispatch(failure(response));
        });
    };
    function request() { return { type: tripsConstants.TRIP_LOCATION_GET_REQUEST } }
    function success(locationList) { return { type: tripsConstants.TRIP_LOCATION_GET_SUCCESS, locationList} }
    function failure(error) { return { type: tripsConstants.TRIP_LOCATION_GET_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}


/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to update the states and props
* @return                JSON Object
*/
function resetState(){
    return dispatch => { dispatch(request());}
    function request() { return { type: tripsConstants.TRIP_GET_RESET_STATE } }
}
