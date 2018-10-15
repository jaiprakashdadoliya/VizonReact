import { vehicleAssignmentConstants, configConstants } from '../_constants';
/**
 * vehicleAssignmentReducer
 *
 * @package                Vizon
 * @subpackage             vehicleAssignmentReducer
 * @category               Reducers
 * @DateOfCreation         30 July 2018
 * @ShortDescription       This is responsible for all state related
 */
const initialState = {
    vehicleAssignList     : [],
    vehicleList 	   : [],
	  driverList	    : [],
    sendingRequest  : false,
    afterUpdate     : false,
    loader          : true,
    successMessage  : '',
    errorMsg        : false,
    detail          : {},
    dataGridRefresh : false,
    isUpdateDone    : false
};
export function vehicleAssignmentReducer(state = initialState, action) {
    switch (action.type) {
        
        // Fetch Reducer's
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_REQUEST:
          return {
            ...state,
            errorMsg : false,
            is_loaded: false,
            dataGridRefresh : false,
          };
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_SUCCESS:
          return { 
            ...state,
            vehicleAssignList  : action.result.list.data,
            vehicleList 	     : action.result.vehicleList,
			      driverList		     : action.result.driverList, 
            errorMsg           : false ,
            pages              : action.result.pages,
            is_loaded          : true
          };
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_FETCH_FAILURE:
          return { 
            ...state,
              errorMsg  : action.error,
              is_loaded : false
          };

        // vehicle save reducers
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_REQUEST:
          return {
            ...state,
            errorMsg     : false,
            submitted    : true,
            is_loaded    : false

          };
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_SUCCESS:
          return  { 
              ...state,
              submitted         : false,  
              successMessage    : action.message,
              loader            : false,
              vehicleAssignList :   [...state.vehicleAssignList],
              errorMsg          : false,
              closeForm         : true,
              dataGridRefresh   : true,
              isUpdateDone      : true
          };
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_SAVE_FAILURE:
          return {
              ...state, 
              submitted         : false,
              errorMsg          : action.error,
              closeForm         : false,
              dataGridRefresh   : false,
              isUpdateDone      : false
           };

        case vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_REQUEST:
          return {
            ...state,
            errorMsg     : false,
            submitted    : false,
            is_loaded    : false, 
            dataGridRefresh: false,
            isUpdateDone: false

          };
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_SUCCESS:
            return {
                ...state, 
                successMessage   : action.result.message,
                dataGridRefresh  : true,
                errorMsg         : false,
                isUpdateDone     : true,
            };
        case vehicleAssignmentConstants.VEHICLE_ASSIGN_DELETE_FAILURE:
            return {
                ...state,
                dataGridRefresh  : false ,
                successMessage   : false ,
                isUpdateDone     : false,
                errorMsg         : action.errorMsg,
            };

        case vehicleAssignmentConstants.VEHICLE_ASSIGN_UPDATE_STATE:
          return {
            ...state,
            errorMsg      : false,
            successMessage: false,
            isUpdateDone  : false,
            isInsertDone  : false,
            dataGridRefresh   : false,
          }

        case vehicleAssignmentConstants.VEHICLE_ASSIGN_RESET_STATE:
          return {
              ...state,
              sendingRequest  : false, 
              errorMsg        : false,
              successMessage  : false,
              submitted       : false,
              closeForm       : false,
              isUpdateDone    : false,
              dataGridRefresh : false,

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