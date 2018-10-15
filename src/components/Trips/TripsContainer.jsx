import React from 'react';
import { connect } from 'react-redux';
import {Trips} from './Trips';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import { tripsActions }  from './tripsActions';
import { headerActions, vehicleAssignmentActions }  from '../../_actions';
import moment from 'moment';
import { utilityHelper } from '../../_helpers';

class TripsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.showTripsModalOpen = this.showTripsModalOpen.bind(this);
        this.hideTripsModalOpen = this.hideTripsModalOpen.bind(this);
        this.getTripsByDate = this.getTripsByDate.bind(this);
        this.state              = this.initialState;
    }

    /* Set intital state */
    get initialState() {
        var ts = new Date();
        return {
            tripsModal : false,
            data : [] ,
            selectedDate: ts,
            filterData: {
                driver_id       : '',
                vehicle_id      : '',
                seleted_date    : moment(),
            },
        }
    }

    /**
     * @DateOfCreation        26 Sep 2018
     * @ShortDescription      This function is responsible to handle changes in Select state
     * @param                 Event Object
     * @return                Nothing
     */
    handleSelectChange(selectedOption, name) {
        const { filterData }  = this.state;
        this.setState({
            filterData : {
                ...filterData,
                [name]: selectedOption.value
            }
        },function(){
            const { dispatch }  = this.props;
            dispatch(tripsActions.getList(this.state.filterData));
        });
    }

    /**
     * @DateOfCreation        21 Sep 2018
     * @ShortDescription      This function is responsible to handle date changes in Select state
     * @param                 Event Object
     * @return                Nothing
     */
    handleDateChange(selectOptions, name){
        const { filterData } = this.state;
        this.setState({
            filterData: {
                ...filterData,
                [name]: selectOptions
            }
        }, function(){
            const { dispatch }  = this.props;
            dispatch(tripsActions.getList(this.state.filterData));
        });
    }

    /**
     * @DateOfCreation        21 Sep 2018
     * @ShortDescription      This function is responsible to clear all filters
     * @param                 Event Object
     * @return                Nothing
     */
    clearAll() {
        this.state          = this.initialState;
        const { dispatch }  = this.props;
        this.setState(this.initialState);
        dispatch(tripsActions.getList(this.state.filterData));
    }

    /* Method responsible to mount just after render */
    componentDidMount(){
        const { dispatch } = this.props;
        var userType = utilityHelper.getUserInfo().user_type;
        dispatch(vehicleAssignmentActions.getVehicleAssignmentList(0, 10, '', ''));
        dispatch(tripsActions.getList(this.state.filterData));
    }

    componentWillReceiveProps(nextProps){
        let driverListData  = utilityHelper.getDataConvertToOptionType(nextProps.driverList, 'label', 'value');
    }

    /**
     * @DateOfCreation        6 Sept 2018
     * @ShortDescription      This function is responsible to redirect unauthorise users
     * @return                Redirect
    */
    componentDidUpdate(){
        const { dispatch }  = this.props;
        if(this.props.isUserNotValid){
          dispatch(headerActions.logout());
        }
    }

    /* Handle show trip modal state and pass trip data to that modal */
    showTripsModalOpen(data){
        const { dispatch } = this.props;
        dispatch(tripsActions.getLocationList(data.trip_id, data.user_id, data.start_time_db, data.end_time_db));
        this.setState({ tripsModal: true, data: data});
    }

    /* Hide trip modal */
    hideTripsModalOpen(){
        this.setState({ tripsModal: false });
    }

    getTripsByDate(action){
        var currentDate = this.state.selectedDate;
        var newDate = new Date(currentDate);

        //add a day to the date
        if(action == 'previous'){
            newDate.setDate(newDate.getDate() - 1);
        } else {
            newDate.setDate(newDate.getDate() + 1);
        }


        this.setState({
            selectedDate:newDate
        }, function(){
            const { dispatch } = this.props;
            dispatch(tripsActions.getList(this.state.selectedDate));
        })

    }

    /* Responsible to render on the view */
    render() {
        return (
            <div className="page-container">
                <SideMenu/>
                <HeaderContainer />
                <Trips
                    driverList = {this.props.driverList}
                    vehicleList = {this.props.vehicleList}
                    handleSelectChange = {this.handleSelectChange}
                    payload                    = {this.state}
                    handleDateChange  = {this.handleDateChange}
                    showTripsModalOpen = {this.showTripsModalOpen}
                    hideTripsModalOpen = {this.hideTripsModalOpen}
                    tripsModal = {this.state.tripsModal}
                    sendTripsDataToModal = {this.state.data}
                    tripsList = {this.props.tripsList}
                    getTripsByDate = {this.getTripsByDate}
                    currentDate = {this.state.selectedDate}
                    loader = {this.props.loader}
                    clearAll = {this.clearAll}
                />
            </div>
        )
    }
}


/**
 * @DateOfCreation        06 sept 2018
 * @ShortDescription      connect state to props on reducer and get trips list
 * @return                Trip list detail
 */
function mapStateToProps(state) {
    const { driverList, vehicleList, submitted, error_message } = state.vehicleAssignmentReducer;
    const { tripsList, errorMsg, loader, isUserNotValid } = state.tripsReducer;
    return {
        submitted,
        error_message,
        vehicleList,
        driverList,
        tripsList,
        errorMsg,
        loader,
        isUserNotValid
    };
}
const connectedTripsContainer = connect(mapStateToProps)(TripsContainer);
export { connectedTripsContainer as TripsContainer };


