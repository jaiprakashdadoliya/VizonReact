import axios from 'axios'; 
import { configConstants } from '../_constants';
import { utilityHelper } from '../_helpers';

/**
 * get common list
 *
 * @package                Education
 * @subpackage             get common list
 * @category               Service
 * @DateOfCreation         23 July 2018
 * @ShortDescription       This is responsible for calling API
 */
export const commonService = {
    getVehicleList,
    exportFile,
    export_studentAllocation,
    export_staffAllocation,
    export_scheduleRoute,
    export_student,
    export_beacons
};

/**
* @DateOfCreation        23 July 2018
* @ShortDescription      This function is responsible to call Fetch Vehicle list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getVehicleList() {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'vehicle_list',
        headers : { 
            'Authorization' : 'Bearer '+loginAccessToken,
            'unencrypted' : '1'
        }
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}


/**
 * @DateOfCreation      06 July 2018
 * @ShortDescription    This function is responsible to Download vehicle list CSV API.
 * @param               JSON jsonObj
 * @return              Response JSON jsonObj
 */
function exportFile(exportFileName) {
    var userInfo = utilityHelper.getUserInfo();
    window.open(configConstants.API_BASE_PATH + 'export_file/' + userInfo.user_id + '/'+exportFileName);
}


/**
 * @DateOfCreation      27 July 2018
 * @ShortDescription    This function is responsible to Download export list CSV API.
 * @param               JSON jsonObj
 * @return              Response JSON jsonObj
 */
function export_studentAllocation(exportFileName) {
    var userInfo = utilityHelper.getUserInfo();
    window.open(configConstants.API_BASE_PATH + 'export_studentAllocation/' + userInfo.user_id);
}

/**
 * @DateOfCreation      27 July 2018
 * @ShortDescription    This function is responsible to Download export list CSV API.
 * @param               JSON jsonObj
 * @return              Response JSON jsonObj
 */
function export_staffAllocation(exportFileName) {
    var userInfo = utilityHelper.getUserInfo();
    window.open(configConstants.API_BASE_PATH + 'export_staffAllocation/' + userInfo.user_id);
}

/**
 * @DateOfCreation      27 July 2018
 * @ShortDescription    This function is responsible to Download export list CSV API.
 * @param               JSON jsonObj
 * @return              Response JSON jsonObj
 */
function export_scheduleRoute(exportFileName) {
    var userInfo = utilityHelper.getUserInfo();
    window.open(configConstants.API_BASE_PATH + 'export_scheduleRoute/' + userInfo.user_id);
}

/**
 * @DateOfCreation      17 August 2018
 * @ShortDescription    This function is responsible to Download export list CSV API.
 * @param               JSON jsonObj
 * @return              Response JSON jsonObj
 */
function export_student(exportFileName) {
    var userInfo = utilityHelper.getUserInfo();
    window.open(configConstants.API_BASE_PATH + 'export_student/' + userInfo.user_id);
}

/**
 * @DateOfCreation      17 August 2018
 * @ShortDescription    This function is responsible to Download export list CSV API.
 * @param               JSON jsonObj
 * @return              Response JSON jsonObj
 */
function export_beacons(exportFileName) {
    var userInfo = utilityHelper.getUserInfo();
    window.open(configConstants.API_BASE_PATH + 'export_beacons_save/' + userInfo.user_id);
}