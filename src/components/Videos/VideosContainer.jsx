import React from 'react';
import { connect } from 'react-redux';
import {Videos} from './Videos';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {headerActions, vehicleAssignmentActions} from '../../_actions';
import {videosActions} from './videosActions';
import { utilityHelper } from '../../_helpers';
import moment from 'moment';
import {tripsActions} from "../Trips/tripsActions";

class VideosContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state          = this.initialState;
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.showVideoModalOpen = this.showVideoModalOpen.bind(this);
        this.hideVideoModalOpen = this.hideVideoModalOpen.bind(this);
    }

    /* Set intital state */
    get initialState() {
        return {
            filterData: {
                driver_id   : '',
                vehicle_id         : '',
                seleted_date          : moment(),
            },
            videoModal : false
        }
    }

    /* Method responsible to mount just after render */
    componentWillMount(){
        const { dispatch } = this.props;
        var userType = utilityHelper.getUserInfo().user_type;
        dispatch(vehicleAssignmentActions.getVehicleAssignmentList(0, 10, '', ''));
        dispatch(videosActions.getList(this.state.filterData));
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

    componentWillReceiveProps(nextProps){
        let driverListData 	= utilityHelper.getDataConvertToOptionType(nextProps.driverList, 'label', 'value');
    }

    /**
     * @DateOfCreation        21 Sep 2018
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
            dispatch(videosActions.getList(this.state.filterData));
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
            dispatch(videosActions.getList(this.state.filterData));
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
        dispatch(videosActions.getList(this.state.filterData));
    }


    /* Handle show trip modal state and pass trip data to that modal */
    showVideoModalOpen(data){
        const { dispatch } = this.props;
        this.setState({ videoModal: true },
            function(){
                dispatch(videosActions.getVideoUrl(data));
            });

    }

    /* Hide trip modal */
    hideVideoModalOpen(){
        this.setState({ videoModal: false });
    }


    /* Responsible to render on the view */
    render() {
        return (
            <div className="page-container">
                <SideMenu/>
                <HeaderContainer />
                <Videos
                    driverList = {this.props.driverList}
                    vehicleList = {this.props.vehicleList}
                    handleSelectChange = {this.handleSelectChange}
                    payload                    = {this.state}
                    handleDateChange  = {this.handleDateChange}
                    videosList = {this.props.videosList}
                    clearAll = {this.clearAll}
                    showVideoModalOpen = {this.showVideoModalOpen}
                    hideVideoModalOpen = {this.hideVideoModalOpen}
                    videoModal = {this.state.videoModal}
                    videoUrl = {this.props.videoUrl}
                    videoLoader = {this.props.videoLoader}
                    loader = {this.props.loader}
                />
            </div>
        )
    }
}


/**
 * @DateOfCreation        23 August 2018
 * @ShortDescription      This function is responsible to connect store to props
 * @return                View
 */
function mapStateToProps(state) {
    const { driverList, vehicleList, submitted, error_message, isUserNotValid } = state.vehicleAssignmentReducer;
    const { videosList, loader, videoLoader, videoUrl } = state.videosReducer;
    return {
        submitted,
        error_message,
        vehicleList,
        driverList,
        isUserNotValid,
        videosList,
        loader,
        videoLoader,
        videoUrl
    };
}

// Connection with State
const connectedVideosContainer = connect(mapStateToProps)(VideosContainer);
export { connectedVideosContainer as VideosContainer };

