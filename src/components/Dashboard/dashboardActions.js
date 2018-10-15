import { configConstants } from '../../_constants';
import { dashboardConstants } from './dashboardConstants';
import { dashboardService } from './dashboardService';
import { utilityHelper} from '../../_helpers';

/**
 * dashboardActions
 *
 * @package                Vizon
 * @subpackage             dashboradActions
 * @category               Actions
 * @DateOfCreation         10 Sept 2018
 * @ShortDescription       This is responsible to handle all action related
 */
export const dashboardActions = {
    getCount,
    resetDashboardState
};

/**
* @DateOfCreation        10 Sept 2018
* @ShortDescription      This function is responsible for Get Dashobrad count
* @return                JSON Object
*/
function getCount(userType) {
    return dispatch => {
        dispatch(request());
        dashboardService.getCount(userType)
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
    function request() { return { type: dashboardConstants.DASHBOARD_FETCH_REQUEST } }
    function success(result) { return { type: dashboardConstants.DASHBOARD_FETCH_SUCCESS, result } }
    function failure(error) { return { type: dashboardConstants.DASHBOARD_FETCH_FAILURE, error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}


function resetDashboardState(){
    return dispatch => { dispatch(request()); }
    function request() { return {type : dashboardConstants.DASHBOARD_RESET_STATE }}
}