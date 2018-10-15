import axios from 'axios'; 
import { configConstants } from '../_constants';
import { utilityHelper } from '../_helpers';
/**
 * get vehicleAssignmentService
 *
 * @package                Vizon
 * @subpackage             vehicleAssignmentService
 * @category               Service
 * @DateOfCreation         30 August 2018
 * @ShortDescription       This is responsible for calling API
 */
export const vehicleAssignmentService = {
    getVehicleAssignmentList,
    submitVehicleAssignData,
    dodeleteVehicleAssignment
};

/**
* @DateOfCreation        30 August 2018
* @ShortDescription      This function is responsible to call Fetch route list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getVehicleAssignmentList(page, pageSize, sorted, filtered) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'get_vehicle_assignments',
        data : {'page':page, 'pageSize':pageSize, 'sorted':sorted, 'filtered':filtered},
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
* @DateOfCreation        30 July 2018
* @ShortDescription      This function is responsible to call submit vehicle assign data
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function submitVehicleAssignData(vehicle) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'add_vehicles_assignments',
        data    : vehicle,
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
* @DateOfCreation        7 Sept 2018
* @ShortDescription      This function is responsible to call delete vehicle assign data
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function dodeleteVehicleAssignment(assignmentId) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
   
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'delete_vehicles_assignments',
        data    : {'vehicle_assignment_id' : assignmentId},
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
