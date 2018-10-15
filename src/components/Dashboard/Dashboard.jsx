import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {dashboardActions} from './dashboardActions';
import { Link } from 'react-router-dom'
import { utilityHelper } from '../../_helpers';
import { headerActions } from '../../_actions';

class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.userType = utilityHelper.getUserInfo().user_type;
    }

    /**
    * @DateOfCreation        10 Sept 2018
    * @ShortDescription      This function is responsible to clear the state on load
    * @return                Nothing
    */
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(dashboardActions.getCount(this.userType));
    }

    /**
    * @DateOfCreation        23 Aug 2018
    * @ShortDescription      This function is responsible to redirect unauthorise users
    * @return                Redirect
    */
    componentDidUpdate(){
        const { dispatch }  = this.props;
        if(this.props.isUserNotValid){
            dispatch(headerActions.logout());
        }
    }

    render() {
        let divContent = '';
        if(this.userType == 'admin'){
            divContent = (<div className="col-sm-3 col-xs-6">
                                <div className="tile-stats yellow-bg">
                                    <div className="icon"><i className="fa fa-users fa-8x"></i></div>
                                    <Link to="/companies"><div className="num" data-start="0" data-end="123" data-postfix="" data-duration="1000" data-delay="1500">{this.props.dashboardCountList.totalCompanies}</div></Link>
                                    <h3>Total Companies</h3>
                                </div>
                            </div>
                        )
        }else{
            divContent = (<div><div className="col-sm-3 col-xs-6">
                                <div className="tile-stats green-bg">
                                    <div className="icon"><i className="fa fa-location-arrow fa-8x"></i></div>
                                    <Link to="/trips"><div className="num" data-start="0" data-end="246" data-postfix="" data-duration="1000" data-delay="0">{this.props.dashboardCountList.totalRunningTrips}</div></Link>
                                    <h3>Total Running Trips</h3>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="tile-stats red-bg">
                                    <div className="icon"><i className="fa fa-location-arrow fa-8x"></i></div>
                                    <Link to="/trips"><div className="num" data-start="0" data-end="163" data-postfix="" data-duration="1000" data-delay="500">{this.props.dashboardCountList.totalClosedTrips}</div></Link>
                                    <h3>Total Closed Trips</h3>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="tile-stats purple-bg">
                                    <div className="icon"><i className="fa fa-bus fa-8x"></i></div>
                                    <Link to="vehicle-list"><div className="num" data-start="0" data-end="135" data-postfix="" data-duration="1000" data-delay="1000">{this.props.dashboardCountList.totalVehicles}</div></Link>
                                    <h3>Total Vehicles</h3>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="tile-stats yellow-bg">
                                    <div className="icon"><i className="fa fa-users fa-8x"></i></div>
                                    <Link to="/drivers"><div className="num" data-start="0" data-end="123" data-postfix="" data-duration="1000" data-delay="1500">{this.props.dashboardCountList.totalDrivers}</div></Link>
                                    <h3>Total Drivers</h3>
                                </div>
                            </div></div>
                        )
        }
        return (
            <div className="page-container">
                <SideMenu />
                <HeaderContainer />
                  <div className="main-content">
                    <div className="col-md-12">
                        <div className="wrap-inner-content">
                            <div className="row">
                                {divContent}
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        );
    }
}

/**
* @DateOfCreation        10 Sept 2018
* @ShortDescription      This function is responsible to connect store to props
* @return                View
*/
function mapStateToProps(state) {
    const { dashboardCountList, errorMsg, isUserNotValid } = state.dashboardReducer;
    return {
        dashboardCountList,
        errorMsg,
        isUserNotValid
    };
}

// Connection with State
const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

