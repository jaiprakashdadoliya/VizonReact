import { configConstants } from '../../_constants';
import { messagesConstants } from './messagesConstants';
import { messagesService } from './messagesService';
import { utilityHelper } from '../../_helpers';

/**
 * videosActions
 *
 * @package                Vizon
 * @subpackage             Trips
 * @category               Actions
 * @DateOfCreation         19 Sept 2018
 * @ShortDescription       This is responsible for all videos actions
 */ 
export const messagesActions = {
    getConversationList,
    getConversationHistory,
    sendMessage,
    resetState
};

/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible for get videos list
* @return                JSON Object
*/
function getConversationList(requestData) {
    return dispatch => {
        dispatch(request());
        messagesService.getConversationList(requestData)
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
    function request() { return { type: messagesConstants.CONVERSATIONS_GET_REQUEST } }
    function success(conversationList) { return { type: messagesConstants.CONVERSATIONS_GET_SUCCESS, conversationList} }
    function failure(error) { return { type: messagesConstants.CONVERSATIONS_GET_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: messagesConstants.UNAUTHENTICATE_CODE, error } }
}


/**
 * @DateOfCreation        19 sept 2018
 * @ShortDescription      This function is responsible for get videos list
 * @return                JSON Object
 */
function getConversationHistory(requestData) {
    return dispatch => {
        dispatch(request());
        messagesService.getConversationHistory(requestData)
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
    function request() { return { type: messagesConstants.CONVERSATIONS_HISTORY_GET_REQUEST } }
    function success(conversationHistory) { return { type: messagesConstants.CONVERSATIONS_HISTORY_GET_SUCCESS, conversationHistory} }
    function failure(error) { return { type: messagesConstants.CONVERSATIONS_HISTORY_GET_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: messagesConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        19 sept 2018
 * @ShortDescription      This function is responsible for get videos list
 * @return                JSON Object
 */
function sendMessage(requestData) {
    return dispatch => {
        dispatch(request());
        messagesService.sendMessage(requestData)
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
    function request() { return { type: messagesConstants.MESSAGE_SEND_REQUEST } }
    function success(sendMessage) { return { type: messagesConstants.MESSAGE_SEND_SUCCESS, sendMessage} }
    function failure(error) { return { type: messagesConstants.MESSAGE_SEND_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: messagesConstants.UNAUTHENTICATE_CODE, error } }
}



/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible to update the states and props
* @return                JSON Object
*/
function resetState(){
    return dispatch => { dispatch(request());}
    function request() { return { type: messageConstants.VIDEOS_GET_RESET_STATE } }
}
