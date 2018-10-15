import { headerConstants, configConstants } from '../_constants';
import { headerService } from '../_services';
import { utilityHelper } from '../_helpers';
/**
 * headerActions
 *
 * @package                Vizon
 * @subpackage             headerActions
 * @category               Actions
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible to handle all action related to Header
 */
export const headerActions = {
    logout
};

/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible for logout
* @return                JSON object
*/
function logout() {
    return dispatch => {
       headerService.logout()
            .then(
                response => {
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE || data.code == configConstants.UNAUTHENTICATE_CODE){
                        utilityHelper.doLogout();                        
                        var successMsg = data.message;
                        dispatch(success(successMsg));                      
                    }else{
                        var errorMsg = data.hasOwnProperty('error') ? utilityHelper.getFirstErrorMessage(data.error) : '';
                        errorMsg = (errorMsg === '' && data.hasOwnProperty('message')) ? data.message : errorMsg;
                        dispatch(failure(errorMsg));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };
// Actions defination that will perform according dispatch call and send data to reducer
    function success(success) { return  { type   : headerConstants.LOGOUT_SUCCESS, success } }
    function failure(error) { return    { type   : headerConstants.LOGOUT_FAILURE, error } }
}
