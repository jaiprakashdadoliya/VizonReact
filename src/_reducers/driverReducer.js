import { driverConstants, configConstants } from '../_constants';
/**
 * driverReducer
 *
 * @package                Vizon
 * @subpackage             driverReducer
 * @category               Reducers
 * @DateOfCreation         22 Augsut 2018
 * @ShortDescription       This is responsible for all state related
 */
const initialState = {
    userList     : [],
    sendingRequest  : false,
    afterUpdate     : false,
    loader          : true,
    successMessage  : '',
    error_message   : false,
    detail          : {},
    isUserNotValid  : false,
    submitted       : false,
    dataGridRefresh : false,
    isUpdateDone    : false,
    successMsg      : false ,
};
export function driverReducer(state = initialState, action) {
    switch (action.type) {

        // Fetch Driver Reducer's
        case driverConstants.DRIVER_FETCH_REQUEST:
          return {
            ...state,
            error_message: false,
            is_loaded:false,
            dataGridRefresh: false,
          };
        case driverConstants.DRIVER_FETCH_SUCCESS:
          return {
            ...state,
            successMessage : action.success,
            userList       : action.result.data,
            error_message  : false ,
            pages          : action.result.pages,
            is_loaded      :true
          };
        case driverConstants.DRIVER_FETCH_FAILURE:
          return {
            ...state,
            error_message : action.error
          };

        // Add / Update Reducer's  
        case driverConstants.DRIVER_SAVE_REQUEST:
          return {
            ...state,
            error_message : false,
            submitted     : false,
            submitted     : true, 
          };
        case driverConstants.DRIVER_SAVE_SUCCESS:
          return  { 
              ...state,
              submitted     : false, 
              successMessage : action.message,
              loader         : false,
              userList       :   [...state.userList],
              error_message  : false,
              closeForm      : true,
              dataGridRefresh : true,
              isUpdateDone    : true,
          };
        case driverConstants.DRIVER_SAVE_FAILURE:
          return {
            ...state, 
            submitted      : false,
            error_message       : action.error,
            closeForm      : false,
           };

        case driverConstants.DRIVER_UPDATE_STATE:
        return {
          ...state,
          error_message   : false,
          isInsertDone    : false,
          sendingRequest  : false,
          successMessage  : false,
          submitted       : false,
          closeForm       : false,
          dataGridRefresh : false,
          isUpdateDone    : false,
          successMsg      : false ,
        }

        case driverConstants.DRIVER_DELETE_REQUEST:
            return {
                ...state,
                error_message    : false,
                successMsg       : false,
            };
        case driverConstants.DRIVER_DELETE_SUCCESS:
            return {
                ...state, 
                successMsg       : action.result.message,
                dataGridRefresh  : true,
                error_message    : false,
                isUpdateDone     : true,
            };
        case driverConstants.DRIVER_DELETE_FAILURE:
            return {
                ...state,
                dataGridRefresh  : false ,
                successMsg       : false ,
                isUpdateDone     : false,
                error_message    : action.errorMsg,
            };

        case driverConstants.DRIVER_RESET_STATE:
          return {
              ...state,
              sendingRequest  : false,
              error_message   : false,
              successMessage  : false,
              submitted       : false,
              closeForm       : false,
              dataGridRefresh : false,
              isUpdateDone    : false,
              successMsg      : false ,
           };
        case configConstants.UNAUTHENTICATE_CODE:
          return {
            ...state,
            isUserNotValid : true,
            error_message  : false
          }
        default:
            return state
    }
}
