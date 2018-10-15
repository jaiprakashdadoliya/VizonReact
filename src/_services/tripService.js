import axios from 'axios'; 
import { configConstants } from '../_constants';
import { utilityHelper } from '../_helpers';

/**
 * get tripService
 *
 * @package                Vizon
 * @subpackage             tripService
 * @category               Service
 * @DateOfCreation         18 Aug 2018
 * @ShortDescription       This is responsible for calling API
 */
export const tripService = {
    getTripList
};

/**
* @DateOfCreation        14 Aug 2018
* @ShortDescription      This function is responsible to call Fetch route list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getTripList(page, pageSize, sorted, filtered,vehicle_id) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'trips',
        data : {'page':page, 'pageSize':pageSize, 'sorted':sorted, 'filtered':filtered, 'vehicle_id':vehicle_id},
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
