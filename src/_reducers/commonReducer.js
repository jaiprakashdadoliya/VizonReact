import { commonConstants } from '../_constants';
/**
 * commonConstants
 *
 * @package                Education
 * @subpackage             commonConstants
 * @category               Reducers
 * @DateOfCreation         17 May 2018
 * @ShortDescription       This is responsible for all state related to all module for drop down
 */
const initialState = {
    vehicleList     : [],
    locationList     : [],
    sendingRequest  : false,
    afterUpdate     : false,
    loader          : true,
    successMessage  : '' ,
    detail          : {}
};
export function commonReducer(state = initialState, action) {
    switch (action.type) {
        // Fetch Vehicle list Reducer's
        case commonConstants.VEHICLES_FETCH_REQUEST:
          return {
            ...state,
            errorMsg         : false,
            is_loaded        : false
          };
        case commonConstants.VEHICLES_FETCH_SUCCESS:
          return { 
            ...state,
            successMessage     : action.success, 
            vehicleList        : action.result,
            errorMsg           : false ,
            is_loaded          : true
          };
        case commonConstants.VEHICLES_FETCH_FAILURE:
          return { 
            ...state,
            errorMsg        : action.error
          };

        // Fetch location list Reducer's
        case commonConstants.LOCATIONS_FETCH_REQUEST:
          return {
            ...state,
            errorMsg         : false,
            is_loaded        : false
          };
        case commonConstants.LOCATIONS_FETCH_SUCCESS:
          return { 
            ...state,
            //successMessage     : action.success, 
            locationList        : action.result,
            errorMsg           : false ,
            is_loaded          : true
          };
        case commonConstants.LOCATIONS_FETCH_FAILURE:
          return { 
            ...state,
            errorMsg        : action.error
          };

        // Fetch Vehicle list Reducer's
        case commonConstants.EXPORT_FETCH_REQUEST:
          return {
            ...state,
            errorMsg         : false,
            is_loaded        : false
          };
        case commonConstants.EXPORT_FETCH_SUCCESS:
          return { 
            ...state,
            successMessage     : action.success, 
            errorMsg           : false ,
            is_loaded          : true
          };
        case commonConstants.EXPORT_FETCH_FAILURE:
          return { 
            ...state,
            errorMsg        : action.error
          };

        default:
            return state
    }
}