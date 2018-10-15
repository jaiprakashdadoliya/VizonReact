import axios from 'axios';
import { configConstants } from '../_constants';
import { utilityHelper } from '../_helpers';

/**
 * forgotPasswordService
 *
 * @package                Vizon
 * @subpackage             forgotPasswordService
 * @category               Service
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible for calling forgot password API
 */
export const forgotPasswordService = {
    getResetToken
};

/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to call forgot api
* @param                 JSON jsonObj
* @return                Response JSON jsonObj
*/
function getResetToken(user) {
    return axios({
        method  : 'post',
        url     : configConstants.API_BASE_PATH + 'forgot_password',
        data    : user,
        headers: {
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
