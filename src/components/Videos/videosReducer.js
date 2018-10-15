import { videosConstants } from './videosConstants';
import { configConstants } from '../../_constants';
/**
 * videosReducer
 *
 * @package                Vizon
 * @subpackage             videosReducer
 * @category               Reducers
 * @DateOfCreation         19 sept 2018
 * @ShortDescription       This is responsible for all state related to videos service
 */

//Initial State on load state and intial action with their type
const initialState = {
    videosList: [],
    sendingRequest: false,
    afterUpdate: false,
    loader: false,
    addSuccessMessage: false,
    editSuccessMessage: false,
    deleteSuccessMessage:false,
    isUserNotValid:false,
    detail:{},
    errorMsg: false,
    videoUrl:'',
    videoLoader: false,
};

export function videosReducer(state = initialState, action) {
    switch (action.type) {
        case videosConstants.VIDEOS_GET_REQUEST:
            return  {
                ...state,
                sendingRequest  : true,
                loader          : true,
                videosList     : []
            };
        case videosConstants.VIDEOS_GET_SUCCESS:
            return  {
                ...state,
                sendingRequest  : false,
                loader          : false,
                videosList :       action.videosList,
            };
        case videosConstants.VIDEOS_GET_FAILURE:
            return  {
                ...state,
                sendingRequest  : false,
                loader          : false,
                errorMsg        : action.errorMsg
            };
        case videosConstants.VIDEO_URL_GET_REQUEST:
            return  {
                ...state,
                videoLoader          : true,
                videoUrl     : ''
            };
        case videosConstants.VIDEO_URL_GET_SUCCESS:
            return  {
                ...state,
                videoLoader          : false,
                videoUrl :       action.videoUrl,
            };
        case videosConstants.VIDEO_URL_GET_FAILURE:
            return  {
                ...state,
                videoLoader          : false,
                videoUrl     : '',
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