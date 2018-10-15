import axios from 'axios';
import { configConstants } from '../_constants';
import { utilityHelper, headerHelper } from '../_helpers';
/**
 * get driverService
 *
 * @package                Vizon
 * @subpackage             driverService
 * @category               Service
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible for calling API
 */
export const driverService = {
    getUserList,
    submitData,
    doDeleteDriver
};

/**
* @DateOfCreation        26 July 2018
* @ShortDescription      This function is responsible to call Fetch route list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getUserList(page, pageSize, sorted, filtered, userType) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();

    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'drivers',
        data    : {'page':page, 'pageSize':pageSize, 'sorted':sorted, 'filtered':filtered, 'user_type':userType},
        headers : headerHelper.getHeaderWithAuthorization()
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}

/**
* @DateOfCreation        23 August 2018
* @ShortDescription      This function is responsible to call Fetch route list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function submitData(user) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
   
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'add_driver',
        data    : headerHelper.getJsonDataToFormData(user),
        headers : headerHelper.getHeaderWithAuthorization('multipart/form-data')
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}

/**
* @DateOfCreation        7 Sept 2018
* @ShortDescription      This function is responsible to call delete user record api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function doDeleteDriver(userId) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'delete_driver',
        data    : {'user_id':userId},
        headers : headerHelper.getHeaderWithAuthorization()
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}
