import { messagesConstants } from './messagesConstants';
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
    conversationList: [],
    sendingRequest: false,
    loader: false,
    historyRequest:false,
    conversationHistory:[],
    sendingMessageRequest:false
};

export function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case messagesConstants.CONVERSATIONS_GET_REQUEST:
            return  {
                ...state,
                sendingRequest  : true,
                loader          : true,
                conversationList     : []
            };
        case messagesConstants.CONVERSATIONS_GET_SUCCESS:
            return  {
                ...state,
                sendingRequest  : false,
                loader          : false,
                conversationList :       action.conversationList,
            };
        case messagesConstants.CONVERSATIONS_GET_FAILURE:
            return  {
                ...state,
                sendingRequest  : false,
                loader          : false,
                errorMsg        : action.errorMsg
            };
        case messagesConstants.CONVERSATIONS_HISTORY_GET_REQUEST:
            return  {
                ...state,
                historyRequest  : true,
                conversationHistory     : []
            };
        case messagesConstants.CONVERSATIONS_HISTORY_GET_SUCCESS:
            return  {
                ...state,
                historyRequest  : false,
                conversationHistory :       action.conversationHistory,
            };
        case messagesConstants.CONVERSATIONS_HISTORY_GET_FAILURE:
            return  {
                ...state,
                historyRequest  : false,
                errorMsg        : action.errorMsg
            };

        case messagesConstants.MESSAGE_SEND_REQUEST:
            return  {
                ...state,
                sendingMessageRequest  : true,
            };
        case messagesConstants.MESSAGE_SEND_SUCCESS:
            return  {
                ...state,
                sendingMessageRequest  : false,
            };
        case messagesConstants.MESSAGE_SEND_FAILURE:
            return  {
                ...state,
                sendingMessageRequest  : false,
                errorMsg        : action.errorMsg
            };
        case messagesConstants.UNAUTHENTICATE_CODE:
            return {
                ...state,
                isUserNotValid  : true,
                errorMsg        : false
            };
        default:
            return state
    }
}