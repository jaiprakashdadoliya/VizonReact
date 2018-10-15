import { combineReducers } from 'redux';
import { sessionReducer } from '../_packages/redux-react-session';
import { userLogin } from './userLoginReducer';
import { forgotPass } from './forgotPassReducer';
import { headerReducer } from './headerReducer';
import { vehicleReducer } from './vehicleReducer';
import { driverReducer } from './driverReducer';
import { tripsReducer } from '../components/Trips/tripsReducer';
import { videosReducer } from '../components/Videos/videosReducer';
import { vehicleAssignmentReducer } from './vehicleAssignmentReducer';
import { dashboardReducer } from '../components/Dashboard/dashboardReducer';
import {messagesReducer} from '../components/Message/messagesReducer';

const appReducer = combineReducers({
	session: sessionReducer,
	userLogin,
	forgotPass,
	headerReducer,
	vehicleReducer,
	driverReducer,
	tripsReducer,
	vehicleAssignmentReducer,
	dashboardReducer,
	videosReducer,
    messagesReducer
});

const rootReducer = ( state, action ) => {
	if ( action.type === 'LOGOUT_SUCCESS' ) {
		state = undefined;
	}

	return appReducer(state, action)
}

export default rootReducer;
