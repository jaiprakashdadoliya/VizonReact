/**
 * tripsService
 *
 * @package                Vizon
 * @subpackage             tripsService
 * @category               Service
 * @DateOfCreation         05 Sept 2018
 * @ShortDescription       This is responsible for calling all api related to trips Category
 */
import axios from 'axios';
import { configConstants } from '../../_constants';
import { utilityHelper } from '../../_helpers';

/**
* @DateOfCreation        05 sept 2018
* @ShortDescription      This function is responsible to call service api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
export const tripsService = {
    getList,
    getLocationList
};

/**
* @DateOfCreation        05 sept 2018
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
        data    : bodyFormData,
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'get_trip',
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
 * @DateOfCreation        05 sept 2018
 * @ShortDescription      This function is responsible to call Fetch service api
 * @param                 JSON jsonObj
 * @return                Response JSON jsonObj
 */
function getLocationList(trip_id, user_id, start_time, end_time) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        data    : {trip_id:trip_id, user_id:user_id, start_time:start_time, end_time:end_time},
        method  : 'post',
        url     : configConstants.API_BASE_PATH+'get_user_trip_locations',
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


