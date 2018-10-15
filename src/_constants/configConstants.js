/**
 * configConstants
 *
 * @package                Vizon
 * @subpackage             configConstants
 * @category               Constants
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This is responsible for all config related constants
 */

export const configConstants = {
    API_BASE_PATH       : process.env.API_BASE_PATH,
    SUCCESS_CODE        : '1000',
    ERROR_CODE          : '5000',
    EXCEPTION_CODE      : '3000',
    UNAUTHENTICATE_CODE : '7000',
    RESOURCE_TYPE       : 1,
    LOGIN_TOKEN         : '_lgbds',
    USER_INFO           : '_ugdhs',
    START_YEAR          : '1970',
    END_YEAR            : '2018',
    START_MONTH         : '1',
    END_MONTH           : '12',
    USER_TYPE_ADMIN     : 'admin',
    USER_TYPE_COMPANY   : 'company',
    UNAUTHENTICATE      : 'UNAUTHENTICATE',
    MAX_FILE_SIZE       : 4000000
};
