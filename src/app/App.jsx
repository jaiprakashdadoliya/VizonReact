/**
 * App
 *
 * @package                Vizon
 * @subpackage             App
 * @category               Component
 * @DateOfCreation         24 August 2018
 * @ShortDescription       This is the parent most component for full app
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import 'react-select/dist/react-select.css';
import "../assets/css/bootstrap.css";
import "../assets/css/style.css";

const Loading = () =>
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
    </div>
;

const LoginContainer = Loadable({
    loader: () => import('../components/Login').then(object => object.LoginContainer),
    loading: Loading
});

const ForgotPasswordContainer = Loadable({
    loader: () => import('../components/ForgotPassword').then(object => object.ForgotPasswordContainer),
    loading: Loading
});

const Dashboard = Loadable({
    loader: () => import('../components/Dashboard').then(object => object.Dashboard),
    loading: Loading
});


//Admin
const Drivers = Loadable({
    loader: () => import('../components/Drivers').then(object => object.Drivers),
    loading: Loading
});
const Companies = Loadable({
    loader: () => import('../components/Companies').then(object => object.Companies),
    loading: Loading
});
const TripsContainer = Loadable({
    loader: () => import('../components/Trips').then(object => object.TripsContainer),
    loading: Loading
});
const LiveMap = Loadable({
    loader: () => import('../components/LiveMap').then(object => object.LiveMap),
    loading: Loading
});
const VehicleListContainer = Loadable({
    loader: () => import('../components/VehicleList').then(object => object.VehicleListContainer),
    loading: Loading
});
const VehicleAssignment = Loadable({
    loader: () => import('../components/VehicleAssignment').then(object => object.VehicleAssignmentContainer),
    loading: Loading
});
const Videos = Loadable({
    loader: () => import('../components/Videos').then(object => object.VideosContainer),
    loading: Loading
});

const Message = Loadable({
    loader: () => import('../components/Message').then(object => object.MessagesContainer),
    loading: Loading
});


const AdminRoute = Loadable({
    loader: () => import('./AdminRoute').then(object => object.AdminRoute),
    loading: Loading
});

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Router basename={process.env.BASENAME}>
                { this.props.checked &&
                    <Switch>
                        <Route exact path='/' component={LoginContainer} />
                        <Route exact path='/forgotpassword' component={ForgotPasswordContainer} />

                        <AdminRoute exact path='/dashboard' component={Dashboard} authenticated={this.props.authenticated} allowuser={['admin', 'company']}/>
                        <AdminRoute exact path='/drivers' component={Drivers} authenticated={this.props.authenticated} allowuser={['company']}/>

                        <AdminRoute exact path='/companies' component={Companies} authenticated={this.props.authenticated} allowuser={['admin']}/>

                        <AdminRoute exact path='/vehicle-list' component={VehicleListContainer} authenticated={this.props.authenticated} allowuser={['company']}/>
                        <AdminRoute exact path='/vehicle-assignment' component={VehicleAssignment} authenticated={this.props.authenticated} allowuser={['company']}/>
                        <AdminRoute exact path='/trips' component={TripsContainer} authenticated={this.props.authenticated} allowuser={['company']}/>
                        <AdminRoute exact path='/live-map' component={LiveMap} authenticated={this.props.authenticated} allowuser={['company']}/>
                        <AdminRoute exact path='/videos' component={Videos} authenticated={this.props.authenticated} allowuser={['company']}/>
                        <AdminRoute exact path='/message' component={Message} authenticated={this.props.authenticated} allowuser={['company']}/>
                    </Switch>
                }
            </Router>
        );
    }
}

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

// Connection with State
const connectedApp = connect(mapState)(App);
export { connectedApp as App };
