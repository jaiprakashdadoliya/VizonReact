import axios from 'axios';
import { configConstants } from '../../_constants';
import { utilityHelper } from '../../_helpers';

/**
 * get dashboardService
 *
 * @package                Vizon
 * @subpackage             dashboardService
 * @category               Service
 * @DateOfCreation         10 sept 2018
 * @ShortDescription       This is responsible for calling API
 */
export const dashboardService = {
    getCount
};

/**
* @DateOfCreation        10 Sept 2018
* @ShortDescription      This function is responsible to call Fetch route list api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getCount(userType) {
    var loginAccessToken = utilityHelper.getLoginAccessToken();
    
    return axios({
        method  : 'post',
        data    : {'user_type': userType},
        url     : configConstants.API_BASE_PATH + 'get_dashboard_count',
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