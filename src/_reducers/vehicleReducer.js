import { vehicleConstants, configConstants } from '../_constants';
/**
 * vehicleReducer
 *
 * @package                Vizon
 * @subpackage             vehicleReducer
 * @category               Reducers
 * @DateOfCreation         29 July 2018
 * @ShortDescription       This is responsible for all state related
 */
const initialState = {
    vehicleList     : [],
    sendingRequest  : false,
    afterUpdate     : false,
    loader          : true,
    successMessage  : '',
    errorMsg        : false,
    detail          : {},
    dataGridRefresh : false,
    isUpdateDone    : false
};
export function vehicleReducer(state = initialState, action) {
    switch (action.type) {
        
        // Fetch Reducer's
        case vehicleConstants.VEHICLE_FETCH_REQUEST:
          return {
            ...state,
            errorMsg : false,
            is_loaded:false,
            dataGridRefresh: false,
          };
        case vehicleConstants.VEHICLE_FETCH_SUCCESS:
          return { 
            ...state,
            successMessage     : action.success, 
            vehicleList        : action.result.data,
            errorMsg           : false ,
            pages              : action.result.pages,
            is_loaded          :true
          };
        case vehicleConstants.VEHICLE_FETCH_FAILURE:
          return { 
            ...state,
            errorMsg        : action.error
          };

        // vehicle save reducers
        case vehicleConstants.VEHICLE_SAVE_REQUEST:
          return {
            ...state,
            errorMsg     : false,
            submitted    : true
          };
        case vehicleConstants.VEHICLE_SAVE_SUCCESS:
          return  { 
              ...state,
              submitted      : false,  
              successMessage : action.message,
              loader         : false,
              vehicleList    :   [...state.vehicleList],
              errorMsg  : false,
              closeForm      : true
          };
        case vehicleConstants.VEHICLE_SAVE_FAILURE:
          return {
            ...state, 
            submitted       : false,
            errorMsg        : action.error,
            closeForm       : false,
           };

        case vehicleConstants.VEHICLE_UPDATE_STATE:
          return {
            ...state,
            errorMsg      : false,
            successMsg    : false,
            isUpdateDone  : false,
            isInsertDone  : false
          }

        case vehicleConstants.VEHICLE_DELETE_SUCCESS:
            return {
                ...state, 
                successMsg       : action.result.message,
                dataGridRefresh  : true,
                errorMsg         : false,
                isUpdateDone     : true,
            };
        case vehicleConstants.VEHICLE_DELETE_FAILURE:
            return {
                ...state,
                dataGridRefresh  : false ,
                successMsg       : false ,
                isUpdateDone     : false,
                errorMsg         : action.errorMsg,
            };

        case vehicleConstants.VEHICLE_RESET_STATE:
          return {
              ...state,
              sendingRequest  : false,
              errorMsg        : false,
              successMessage  : false,
              submitted       : false,
              closeForm       : false,
              dataGridRefresh : false,
              isUpdateDone    : false,
              successMsg      : false ,
           };

        case vehicleConstants.VEHICLE_RESET_STATE:
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