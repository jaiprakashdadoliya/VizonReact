import { loginConstants, configConstants } from '../_constants';
import { userLoginService } from '../_services';
import { utilityHelper} from '../_helpers';
import { sessionService } from '../_packages/redux-react-session';

/**
 * userLoginActions
 *
 * @package                Vizon
 * @subpackage             userLoginActions
 * @category               Actions
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible to handle all action related to login
 */
export const userLoginActions = {
    loginSubmit,
    updateState
};

/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible for submit the login form
* @param                 JSON user, This contains full user input data
* @return                JSON Object
*/
function loginSubmit(user) {
    return dispatch => {
        dispatch(request({ user }));
        userLoginService.login(user)
            .then(
                response => {
                    var data = response.data;
                    var error_message;
                    if(data.code == configConstants.SUCCESS_CODE){
                        // Set access token and user in cookies
                        sessionService.saveSession(data.result.token);
                        sessionService.saveUser(data.result.user);
                        dispatch(success(data.result.user));
                    }else if(data.code == configConstants.ERROR_CODE){
                        error_message = utilityHelper.getFirstErrorMessage(data.error);
                        dispatch(failure(error_message));

                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        error_message  = data.message;
                        dispatch(failure(error_message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };

// Actions defination that will perform according dispatch call and send data to reducer
    function request(user) { return { type: loginConstants.LOGIN_REQUEST, user } }
    function success(result) { return { type: loginConstants.LOGIN_SUCCESS, result } }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }
}

/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to update the states and props
* @return                JSON Object
*/
function updateState(){
     return dispatch => {
        dispatch(request());
    }
    function request() { return { type: loginConstants.LOGIN_UPDATE_STATE } }
}
