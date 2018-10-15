import axios from 'axios';
import { configConstants } from '../_constants';
import { utilityHelper, history } from '../_helpers';

/**
 * loginService
 *
 * @package                Vizon
 * @subpackage             loginService
 * @category               Service
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible for calling API
 */
export const userLoginService = {
    login
};

/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to call login api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function login(user) {
    var bodyFormData = new FormData();
    bodyFormData = utilityHelper.jsonToFormData(user, bodyFormData);
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'admin_login',
        data    : bodyFormData,
        headers : {
            'Content-Type' : 'application/json',
            'unencrypted' : '1',
        }
    })
    .then(response => {
        return response;
    })
    .catch(response => {
        return response;
    });
}
