/**
 * addVehicleValidator
 *
 * @package                Vizon
 * @subpackage             addVehicleValidator
 * @category               Validator
 * @DateOfCreation         30 August 2018
 * @ShortDescription       This is responsible for Add Vehicle validation rules
 */

import validator from 'validator';
import { utilityHelper } from '../_helpers';

export const addVehicleValidator = {
    isVehicleDataValid
};


/**
* @DateOfCreation        30 August 2018
* @ShortDescription      This function is responsible to validate vehicle data
* @param                 JSON jsonObj
* @return                JSON jsonObj
*/
function isVehicleDataValid(that) {
    const { vehicle } = that.state.addVehicle;
    const { vehicleValidate } = that.state.addVehicle;
    const validationState = {};
    const numericReg = /^[0-9]*$/; //numeric

    // check vehilce name is required
    if (validator.isEmpty(validator.trim(String(vehicle.vehicle_name)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.vehicle_name = {
            isValid: false,
            message: 'Vehicle name is required.'
        }
    }
    // check insurance number is required
    if (validator.isEmpty(validator.trim(String(vehicle.insurance_number)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.insurance_number = {
            isValid: false,
            message: 'Insurance number is required.'
        }
    }
    // check registration_number is required
    if (validator.isEmpty(validator.trim(String(vehicle.registration_number)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.registration_number = {
            isValid: false,
            message: 'Registration number is required.'
        }
    }
    // check vehicle_type is required
    if (validator.isEmpty(validator.trim(String(vehicle.vehicle_type)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.vehicle_type = {
            isValid: false,
            message: 'Please select vehicle type.'
        }
    }

    if(!utilityHelper.isObjectEmpty(validationState)){
        that.setState({
            addVehicle: {
                vehicle: {
                    ...vehicle
                },
                vehicleValidate:{
                    ...vehicleValidate,
                    ...validationState
                }
            }
        });
        return false;
    }else{
        return true;
    }
}
