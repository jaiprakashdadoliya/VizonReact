/**
 * addVehicleAssignValidator
 *
 * @package                Vizon
 * @subpackage             addVehicleAssignValidator
 * @category               Validator
 * @DateOfCreation         30 August 2018
 * @ShortDescription       This is responsible for Add Vehicle assign validation rules
 */

import validator from 'validator';
import { utilityHelper } from '../_helpers';

export const addVehicleAssignValidator = {
    isVehicleAssignDataValid
};


/**
* @DateOfCreation        30 August 2018
* @ShortDescription      This function is responsible to validate vehicle data
* @param                 JSON jsonObj
* @return                JSON jsonObj
*/
function isVehicleAssignDataValid(that) {
    const { vehicle } = that.state.addAssignVehicle;
    const { vehicleValidate } = that.state.addAssignVehicle;
    const validationState = {};
    const numericReg = /^[0-9]*$/; //numeric

    // check vehilce name is required
    if (validator.isEmpty(validator.trim(String(vehicle.vehicle_id)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.vehicle_id = {
            isValid: false,
            message: 'Please select vehicle name..'
        }
    }
    // check user name is required
    if (validator.isEmpty(validator.trim(String(vehicle.user_id)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.user_id = {
            isValid: false,
            message: 'Please select driver name.'
        }
    }
    // check start_time is required
    if (validator.isEmpty(validator.trim(String(vehicle.start_time)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.start_time = {
            isValid: false,
            message: 'Please select start time.'
        }
    }
    // check end_time is required
    if (validator.isEmpty(validator.trim(String(vehicle.end_time)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.end_time = {
            isValid: false,
            message: 'Please select end time.'
        }
    }    
    // check description is required
    if (validator.isEmpty(validator.trim(String(vehicle.description)))) {
        // We can return string or jsx as the 'error' prop for the validated Component
        validationState.description = {
            isValid: false,
            message: 'Description make is required.'
        }
    }

    if(!utilityHelper.isObjectEmpty(validationState)){
        that.setState({
            addAssignVehicle: {
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
