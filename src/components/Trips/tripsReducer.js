import { tripsConstants } from './tripsConstants';
import { configConstants } from '../../_constants';
/**
 * tripsReducer
 *
 * @package                Vizon
 * @subpackage             tripsReducer
 * @category               Reducers
 * @DateOfCreation         05 sept 2018
 * @ShortDescription       This is responsible for all state related to trips service
 */

//Initial State on load state and intial action with their type
const initialState = {
    tripsList: [],
    sendingRequest: false,
    afterUpdate: false,
    loader: false,
    addSuccessMessage: false,
    editSuccessMessage: false,
    deleteSuccessMessage:false,
    isUserNotValid:false,
    detail:{},
    errorMsg: false,
    locationList:[]
};

export function tripsReducer(state = initialState, action) {
    switch (action.type) {
        case tripsConstants.TRIP_GET_REQUEST:
            return  {
                ...state,
                sendingRequest  : true,
                loader          : true,
                tripsList     : []
            };
        case tripsConstants.TRIP_GET_SUCCESS:
            return  {
                ...state,
                sendingRequest  : false,
                loader          : false,
                tripsList :       action.tripsList,
            };
        case tripsConstants.TRIP_GET_FAILURE:
            return  {
                ...state,
                sendingRequest  : false,
                loader          : false,
                errorMsg        : action.errorMsg
            };
        case tripsConstants.TRIP_LOCATION_GET_REQUEST:
            return  {
                ...state,
                sendingRequest  : true,
                locationLoader          : true,
                locationList     : []
            };
        case tripsConstants.TRIP_LOCATION_GET_SUCCESS:
            return  {
                ...state,
                sendingRequest  : false,
                locationLoader          : false,
                locationList :       action.locationList,
            };
        case tripsConstants.TRIP_LOCATION_GET_FAILURE:
            return  {
                ...state,
                sendingRequest  : false,
                locationLoader          : false,
                errorMsg        : action.errorMsg
            };
        case configConstants.UNAUTHENTICATE_CODE:
            return {
                ...state,
                isUserNotValid  : true,
                errorMsg        : false
            };
        default:
            return state
    }
}