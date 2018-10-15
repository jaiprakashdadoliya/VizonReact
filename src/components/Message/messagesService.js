/**
 * videosService
 *
 * @package                Vizon
 * @subpackage             videosService
 * @category               Service
 * @DateOfCreation         19 Sept 2018
 * @ShortDescription       This is responsible for calling all api related to videos
 */
import axios from 'axios';
import { configConstants } from '../../_constants';
import { utilityHelper } from '../../_helpers';

/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible to call service api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
export const messagesService = {
    getConversationList,
    getConversationHistory,
    sendMessage
};

/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible to call Fetch service api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getConversationList(requestData) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    var user_details = utilityHelper.getUserInfo();
    var requestData = {"user_type":"company", "company_id":user_details.user_id}
    var bodyFormData = new FormData();
    bodyFormData = utilityHelper.jsonToFormData(requestData, bodyFormData);
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'get_chat_users',  // need to create and add get_videos method
        data    : bodyFormData,
        headers : {
            'Authorization' : 'Bearer '+loginAccessToken,
            'unencrypted' : '1'
        }
    }).then(function (response) {
        return response;
    }).catch(function (response) {
        return response;
    });
}


/**
 * @DateOfCreation        19 sept 2018
 * @ShortDescription      This function is responsible to call Fetch service api
 * @param                 JSON jsonObj
 * @return                Response JSON jsonObj
 */
function getConversationHistory(requestData) {
    var bodyFormData = new FormData();
    bodyFormData = utilityHelper.jsonToFormData(requestData, bodyFormData);
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'get_chat_history',  // need to create and add get_videos method
        data    : bodyFormData,
        headers : {
            'Authorization' : 'Bearer '+loginAccessToken,
            'unencrypted' : '1'
        }
    }).then(function (response) {
        return response;
    }).catch(function (response) {
        return response;
    });
}

/**
 * @DateOfCreation        19 sept 2018
 * @ShortDescription      This function is responsible to call Fetch service api
 * @param                 JSON jsonObj
 * @return                Response JSON jsonObj
 */
function sendMessage(requestData) {
    var bodyFormData = new FormData();
    bodyFormData = utilityHelper.jsonToFormData(requestData, bodyFormData);
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'send_message',  // need to create and add get_videos method
        data    : bodyFormData,
        headers : {
            'Authorization' : 'Bearer '+loginAccessToken,
            'unencrypted' : '1'
        }
    }).then(function (response) {
        return response;
    }).catch(function (response) {
        return response;
    });
}


