import { Cookies } from 'react-cookie';
import { configConstants } from '../_constants';
import { sessionService } from '../_packages/redux-react-session';

/**
 * utilityHelper
 *
 * @package                Education
 * @subpackage             utilityHelper
 * @category               Helper
 * @DateOfCreation         11 May 2018
 * @ShortDescription       This is responsible for exporting all utility functions
 */

export const utilityHelper = {
    jsonToFormData,
    getFirstErrorMessage,
    isObjectEmpty,
    getLoginAccessToken,
    getUserInfo,
    doLogout,
    setUserAndLoginToken,
    getMonths,
    getYears,
    getMultipleErrorMessage,
    inArray,
    mergeMultipleObject,
    getDataConvertToOptionType,
    changeTimingFormat,
    changeDiffToHoursMins,
    dateDataConvert
};

/**
* @DateOfCreation        11 May 2018
* @ShortDescription      This function is responsible to convert json to formdata 
* @param                 JSON jsonObj
* @param                 FORMDATA formDataObj
* @return                FORMDATA OBJ
*/
function jsonToFormData(jsonObj, formDataObj) {
    for ( var key in jsonObj ) {
        formDataObj.append(key, jsonObj[key]);
    }
    return formDataObj;
}

/**
* @DateOfCreation        12 July 2018
* @ShortDescription      This function is responsible to check value in array
* @param                 JSON jsonObj
* @param                 FORMDATA formDataObj
* @return                FORMDATA OBJ
*/
function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

/**
* @DateOfCreation        11 May 2018
* @ShortDescription      This function is responsible to get first error from response 
* @param                 JSON jsonObj contains error object
* @return                String
*/
function getFirstErrorMessage(jsonObj){
    var key = Object.keys(jsonObj)[0];
    var value = jsonObj[key][0];
    return value;
}

function getMultipleErrorMessage(jsonObj){
    return jsonObj;
}


/**
* @DateOfCreation        11 May 2018
* @ShortDescription      This function is responsible to check is object empty 
* @param                 JSON jsonObj
* @return                Boolean
*/
function isObjectEmpty(JSONObj){
    if(Object.keys(JSONObj).length === 0){
        return true;
    }else{
        return false;
    }
}

/**
* @DateOfCreation        24 May 2018
* @ShortDescription      This function is responsible set the login access token 
                         and user info to cookies 
* @return                String
*/
function setUserAndLoginToken(accessToken, user) {
    const cookies = new Cookies();
    cookies.set(configConstants.LOGIN_TOKEN, accessToken);
    cookies.set(configConstants.USER_INFO, user);
    return true;
}

/**
* @DateOfCreation        18 May 2018
* @ShortDescription      This function is responsible get the login access token 
                         from cookies 
* @return                String
*/
function getLoginAccessToken(){
    const cookies = new Cookies();
    return cookies.get(configConstants.LOGIN_TOKEN);
}

/**
* @DateOfCreation        18 May 2018
* @ShortDescription      This function is responsible to get user info from Cookies
* @return                json object
*/
function getUserInfo(){
    const cookies = new Cookies();
    return cookies.get(configConstants.USER_INFO);
}

/**
* @DateOfCreation        22 May 2018
* @ShortDescription      This function is responsible remove all cookies
* @return                Boolean
*/
function doLogout(){
    sessionService.deleteSession();
    sessionService.deleteUser();
    return true;
}

/**
* @DateOfCreation        28 May 2018
* @ShortDescription      This function is responsible make the JSON of years
* @return                Boolean
*/
function getYears(){
    var years = [];
    for (var i = configConstants.START_YEAR; i <= configConstants.END_YEAR; i++) {
        years.push({
            value: String(i),
            label: i
        });
    }
    return years;
}

/**
* @DateOfCreation        28 May 2018
* @ShortDescription      This function is responsible make the JSON of months
* @return                Boolean
*/
function getMonths(){
    var months = [];
    var monthNameList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (var i = configConstants.START_MONTH; i <= configConstants.END_MONTH; i++) {
        months.push({
            value: String(i),
            label: monthNameList[i-1]
        });
    }
    return months;
}

/**
 * @DateOfCreation        6 Sept 2018
 * @ShortDescription      This function is responsible to get specific value object from data object
 * @return                json
 */
function mergeMultipleObject(objectArray){
    let finalData = {};
     for(var row in objectArray) {
        finalData = Object.assign({}, objectArray[row], finalData);
     }
     return finalData;
}

/**
 * @DateOfCreation        7 Sept 2018
 * @ShortDescription      This function is responsible make the JSON of states
 * @return                json
 */
function getDataConvertToOptionType(data, name, id){
    var dataArray = [];
    var count = 0;
    for(var row in data) {
        dataArray.push({
            value: String(data[row][id]),
            label: data[row][name]
        });
    }
    return dataArray;
}

/*
 * @DateOfCreation        05 sept 2018
 * @ShortDescription      This function is responsible for changing time to proper format from Database
 * @return                json
 */
function changeTimingFormat(dbTiming){
    if(dbTiming == ''){
        time = "";
    }else{
        var hours =  dbTiming.slice(0,2);
        var minutes =  dbTiming.slice(2);

        var hh =  ("0" + ((hours>12) ? (hours-12) : hours)).slice(-2);
        var mm =  ("0" + minutes).slice(-2);
        var ap = ['AM', 'PM']; // AM-PM
        var time = hh + ':' + mm +' '+ ap[Math.floor(hours/12)];
    }
    return time;
}

/**
 * @DateOfCreation        07 Sept 2018
 * @ShortDescription      This function is responsible for changing hh:mm:ss to hh:mm
 * @return                json
 */
function changeDiffToHoursMins(totalDiff){
    if(totalDiff != null && totalDiff != ''){
        var convertTime;
        var splitData = totalDiff.split(':');
        if(splitData[0] == '00' || splitData[0] == ''){
            convertTime = splitData[1] +" Mins";
        } else {
            convertTime = splitData[0] +" Hour "+ splitData[1] +" Mins";
        }
        return convertTime;
    } else {
        return "0 Mins";
    }
}

/* @DateOfCreation        28 June 2018
 * @ShortDescription      This function is responsible to convert input date object to date string only
 * @return                value
 */
function dateDataConvert(dateValue){
    var value = '';
    if(typeof dateValue === 'object'  && dateValue!==null){
        value =  dateValue.format('YYYY-MM-DD');

    }else if(typeof dateValue === 'string'  && dateValue!==null && dateValue!=''){
        value = moment(dateValue).format('YYYY-MM-DD')
    }
    return value;

}