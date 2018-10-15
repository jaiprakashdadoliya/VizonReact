import axios from 'axios'; 
import { configConstants } from '../_constants';
import { utilityHelper, headerHelper } from '../_helpers';
/**
 * get vehicleService
 *
 * @package                Vizon
 * @subpackage             vehicleService
 * @category               Service
 * @DateOfCreation         29 August 2018
 * @ShortDescription       This is responsible for calling API
 */
export const vehicleService = {
    getVehicleList,
    submitVehicleData,
    doDeleteVehicle
};

/**
* @DateOfCreation        26 July 2018
* @ShortDescription      This function is responsible to call Fetch route list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getVehicleList(page, pageSize, sorted, filtered) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'vehicles',
        data : {'page':page, 'pageSize':pageSize, 'sorted':sorted, 'filtered':filtered},
        headers :headerHelper.getHeaderWithAuthorization()
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}

/**
* @DateOfCreation        30 July 2018
* @ShortDescription      This function is responsible to call submit vehicle data
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function submitVehicleData(vehicle) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'add_vehicles',
        data    : headerHelper.getJsonDataToFormData(vehicle),
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
* @DateOfCreation        30 July 2018
* @ShortDescription      This function is responsible to call submit vehicle data
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function doDeleteVehicle(vehicleId) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'delete_vehicle',
        data    : {'vehicle_id': vehicleId},
        headers : headerHelper.getHeaderWithAuthorization()
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}
