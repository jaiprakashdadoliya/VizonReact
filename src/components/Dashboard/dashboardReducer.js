import {configConstants } from '../../_constants';
import { dashboardConstants } from './dashboardConstants';
/**
 * dashboardReducer
 *
 * @package                Vizon
 * @subpackage             dashboardReducer
 * @category               Reducers
 * @DateOfCreation         10 sept 2018
 * @ShortDescription       This is responsible for all state related
 */
const initialState = {
    dashboardCountList     : [],
    sendingRequest  : false,
    afterUpdate     : false,
    loader          : true,
    successMessage  : '',
    errorMsg        : false,
    detail          : {},
};
export function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        
        // Fetch Reducer's
        case dashboardConstants.DASHBOARD_FETCH_REQUEST:
          return {
            ...state,
            errorMsg         : false,
            is_loaded:false
          };
        case dashboardConstants.DASHBOARD_FETCH_SUCCESS:
          return { 
            ...state,
            successMessage     : action.success, 
            dashboardCountList        : action.result,
            errorMsg           : false ,
            is_loaded         :true
          };
        case dashboardConstants.DASHBOARD_FETCH_FAILURE:
          return { 
            ...state,
            errorMsg        : action.error
          };

        case dashboardConstants.DASHBOARD_RESET_STATE:
          return {
              ...state,
              sendingRequest  : false, 
              errorMsg        : false,
              successMessage  : false,
              submitted       : false,
              closeForm       : false              
           };
        case configConstants.UNAUTHENTICATE_CODE:
          return {
            ...state,
            isUserNotValid : true,
            errorMsg       : false
          } 
        default:
            return state
    }
}