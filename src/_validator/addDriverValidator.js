/**
 * addDriverValidator
 *
 * @package                Vizon
 * @subpackage             addDriverValidator
 * @category               Validator
 * @DateOfCreation         23 August 2018
 * @ShortDescription       This is responsible for Add driver validation rules
 */

import validator from 'validator';
import { utilityHelper } from '../_helpers';

export const addDriverValidator = {
    isDriverDataValid
};


/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to validate driver data
* @param                 JSON jsonObj
* @return                JSON jsonObj
*/
function isDriverDataValid(that) {
    const { basic } = that.state.addDriver;
    const { basicValidate } = that.state.addDriver;
    const validationState = {};
    const numericReg = /^[0-9]*$/; //numeric

    // Check the input is number or email
    if (!validator.isInt(validator.trim(String(basic.email)))) {
        if(!validator.isEmail(validator.trim(String(basic.email)))){
            validationState.email = {
                isValid: false,
                message: 'Please enter a valid email address.'
            }
        }
    }

    // check first_name is required
    if (validator.isEmpty(validator.trim(String(basic.first_name)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.first_name = {
            isValid: false,
            message: 'First name is required.'
        }
    }

    // check last_name is required
    if (validator.isEmpty(validator.trim(String(basic.last_name)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.last_name = {
            isValid: false,
            message: 'Last name is required.'
        }
    }    

    // check mobile is required
    if (validator.isEmpty(validator.trim(String(basic.mobile)))) {       
        validationState.mobile = {
            isValid: false,
            message: 'Mobile number is required.'
        }
    }else if(!numericReg.test(validator.trim(String(basic.mobile)))){
        validationState.mobile = {
            isValid: false,
            message: 'Mobile number is numeric only.'
        }  
    }
    /*if(String(basic.mobile).length != 10){
        validationState.mobile = {
            isValid: false,
            message: 'Please enter a valid 10 digits mobile number.'
        }
    }*/


    if(!utilityHelper.isObjectEmpty(validationState)){
        that.setState({
            addDriver: {
                basic: {
                    ...basic
                },
                basicValidate:{
                    ...basicValidate,
                    ...validationState
                }
            }
        });
        return false;
    }else{
        return true;
    }
}
