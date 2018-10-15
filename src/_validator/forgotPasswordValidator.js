/**
 * forgotPasswordValidator
 *
 * @package                Vizon
 * @subpackage             forgotPasswordValidator
 * @category               Validator
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible for forgot Password validation rules
 */

import validator from 'validator';
import { utilityHelper } from '../_helpers';

export const forgotPasswordValidator = {
    isForgotPasswordValid
};


/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to validate forgot data
* @param                 JSON jsonObj
* @return                JSON jsonObj
*/
function isForgotPasswordValid(that) {
    const { user } = that.state.forgotPassword;
    const { userValidate } = that.state.forgotPassword;
    const validationState = {};

    // Check the input is number or email

    if (!validator.isInt(validator.trim(user.email))) {
        if(!validator.isEmail(validator.trim(user.email))){
            validationState.email = {
                isValid: false,
                message: 'Please enter a valid email address.'
            }
        }
    }

    if(!utilityHelper.isObjectEmpty(validationState)){
        that.setState({
            forgotPassword: {
                user: {
                    ...user
                },
                userValidate:{
                    ...userValidate,
                    ...validationState
                }
            }
        });
        return false;
    }else{
        return true;
    }
}
