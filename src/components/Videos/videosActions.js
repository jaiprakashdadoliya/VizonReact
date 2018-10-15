import { configConstants } from '../../_constants';
import { videosConstants } from './videosConstants';
import { videosService } from './videosService';
import { utilityHelper } from '../../_helpers';

/**
 * videosActions
 *
 * @package                Vizon
 * @subpackage             Trips
 * @category               Actions
 * @DateOfCreation         19 Sept 2018
 * @ShortDescription       This is responsible for all videos actions
 */ 
export const videosActions = {
    getList,
    getVideoUrl,
    resetState
};

/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible for get videos list
* @return                JSON Object
*/
function getList(requestData) {
    return dispatch => {
        dispatch(request());
        videosService.getList(requestData)
            .then(
                response => { 
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));
                    }else if(data.code == configConstants.ERROR_CODE){
                       dispatch(failure(data.message));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        dispatch(failure(data.message));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        dispatch(unauthorize(data.message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
                dispatch(failure(response));
            });
    };
    function request() { return { type: videosConstants.VIDEOS_GET_REQUEST } }
    function success(videosList) { return { type: videosConstants.VIDEOS_GET_SUCCESS, videosList} }
    function failure(error) { return { type: videosConstants.VIDEOS_GET_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
 * @DateOfCreation        19 sept 2018
 * @ShortDescription      This function is responsible for get videos list
 * @return                JSON Object
 */
function getVideoUrl(requestData) {
    return dispatch => {
        dispatch(request());
        videosService.getVideoUrl(requestData)
            .then(
                response => {
                    var data = response.data;
                    if(data.code == configConstants.SUCCESS_CODE){
                        dispatch(success(data.result));
                    }else if(data.code == configConstants.ERROR_CODE){
                        dispatch(failure(data.message));
                    }else if(data.code == configConstants.EXCEPTION_CODE){
                        dispatch(failure(data.message));
                    }else if(data.code == configConstants.UNAUTHENTICATE_CODE){
                        dispatch(unauthorize(data.message));
                    }else{
                        dispatch(failure(response));
                    }
                }
            ).catch(function (response) {
            dispatch(failure(response));
        });
    };
    function request() { return { type: videosConstants.VIDEO_URL_GET_REQUEST } }
    function success(videoUrl) { return { type: videosConstants.VIDEO_URL_GET_SUCCESS, videoUrl} }
    function failure(error) { return { type: videosConstants.VIDEO_URL_GET_FAILURE, errorMsg:error } }
    function unauthorize(error) { return { type: configConstants.UNAUTHENTICATE_CODE, error } }
}

/**
* @DateOfCreation        19 sept 2018
* @ShortDescription      This function is responsible to update the states and props
* @return                JSON Object
*/
function resetState(){
    return dispatch => { dispatch(request());}
    function request() { return { type: videosConstants.VIDEOS_GET_RESET_STATE } }
}
