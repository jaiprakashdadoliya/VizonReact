import { tripConstants, configConstants } from '../_constants';
/**
 * tripReducer
 *
 * @package                Vizon
 * @subpackage             tripReducer
 * @category               Reducers
 * @DateOfCreation         18 Aug 2018
 * @ShortDescription       This is responsible for all state related
 */
const initialState = {
    tripList     : [],
    sendingRequest  : false,
    afterUpdate     : false,
    loader          : true,
    successMessage  : '',
    errorMsg        : false,
    detail          : {},
};
export function tripReducer(state = initialState, action) {
    switch (action.type) {
        
        // Fetch Reducer's
        case tripConstants.TRIP_FETCH_REQUEST:
          return {
            ...state,
            errorMsg         : false,
            is_loaded:false
          };
        case tripConstants.TRIP_FETCH_SUCCESS:
          return { 
            ...state,
            successMessage     : action.success, 
            tripList        : action.result.data,
            errorMsg           : false ,
            pages               : action.result.pages,
            is_loaded         :true
          };
        case tripConstants.TRIP_FETCH_FAILURE:
          return { 
            ...state,
            errorMsg        : action.error
          };

        case tripConstants.TRIP_UPDATE_STATE:
        return {
          ...state,
          errorMsg      : false,
          successMsg    : false,
          isUpdateDone  : false,
          isInsertDone  : false
        }

        case tripConstants.TRIP_RESET_STATE:
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