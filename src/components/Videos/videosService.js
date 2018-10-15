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
export const videosService = {
    getList,
    getVideoUrl
};

/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible to call Fetch service api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getList(requestData) {
    var bodyFormData = new FormData();
    var changeDate = {};
    changeDate= requestData;
    changeDate.seleted_date_modified = utilityHelper.dateDataConvert(changeDate.seleted_date);
    bodyFormData = utilityHelper.jsonToFormData(changeDate, bodyFormData);
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'get_user_videos',  // need to create and add get_videos method
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
function getVideoUrl(requestData) {
    var bodyFormData = new FormData();
    bodyFormData = utilityHelper.jsonToFormData(requestData, bodyFormData);
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'get_user_video_url',  // need to create and add get_videos method
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


