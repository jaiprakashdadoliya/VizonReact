import React from 'react';
import { connect } from 'react-redux';
import {Button, Modal, Tabs, Tab, DropdownButton, title, Link, Alert} from 'react-bootstrap';
import ReactTable from "react-table";
import { compose } from 'recompose';
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';
import "react-table/react-table.css";
import { utilityHelper } from '../../_helpers';
import { tripsActions }  from './tripsActions';

var temp=[];
var data1 = [];
var userArray = [];
var post = {};
var markers =[];
var pathCoordinates;
class ShowTrips extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    /* Method responsible to mount just after render */
    componentDidMount(){

    }

    render() {
        const { compose } = require('recompose');
        const {
            withGoogleMap,
            GoogleMap,
        } = require('react-google-maps');
        const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');
        const { MarkerWithLabel } = require('react-google-maps/lib/components/addons/MarkerWithLabel');
        if(typeof this.props.locationList != "undefined" ){
            pathCoordinates = this.props.locationList[0];
        } else {
            pathCoordinates = [
                {lat: 0, lng: 0},
            ];
        }

        const MapWithAMarkerWithLabel = compose(
            withGoogleMap
        )(props =>

            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: parseFloat(this.props.sendTripsDataToModal.start_latitude), lng: parseFloat(this.props.sendTripsDataToModal.start_longitude) }}
            >

                <Marker
                    position={{lat: parseFloat(this.props.sendTripsDataToModal.start_latitude), lng: parseFloat(this.props.sendTripsDataToModal.start_longitude)}}
                    title="Start"
                    style={{height: '2xpx', width: '2px'}}
                    markerWithLabel={window.MarkerWithLabel}
                    draggable= {false}
                >
                </Marker>
                <Marker
                    position={{lat: parseFloat(this.props.sendTripsDataToModal.end_latitude), lng: parseFloat(this.props.sendTripsDataToModal.end_longitude)}}
                    title="End"
                    style={{height: '2xpx', width: '2px'}}
                    markerWithLabel={window.MarkerWithLabel}
                    draggable= {false}
                >
                </Marker>
                    <Polyline
                        path={pathCoordinates}
                        geodesic={true}
                        options={{
                            strokeColor: '#ff2527',
                            strokeOpacity: 1.0,
                            strokeWeight: 5,
                            icons: [{
                                offset: '0',
                                repeat: '10px'
                            }],
                        }}
                    />
            </GoogleMap>
        );
        return (
            <div>
                <Modal show={this.props.showTrips} onHide={this.props.HideTrips} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.sendTripsDataToModal.getDiffBetweenTime}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="start-end-location">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="start-location">
                                        {this.props.sendTripsDataToModal.start_address}
                                    </div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="start-time">{ this.props.sendTripsDataToModal.start_time }</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="end-location">
                                    {this.props.sendTripsDataToModal.end_address}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="end-time text-right">{ this.props.sendTripsDataToModal.end_time }</div>
                            </div>
                        </div>

                        <MapWithAMarkerWithLabel
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ height: '500px' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn text-btn red" onClick={this.props.HideTrips}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <div className="row" ref="mapContainer"></div>
            </div>
        );
    }

}

/**
 * @DateOfCreation        23 August 2018
 * @ShortDescription      This function is responsible to connect store to props
 * @return                View
 */
function mapStateToProps(state) {
    const { locationList, locationLoader } = state.tripsReducer;
    return {
        locationList,
        locationLoader
    };
}

// Connection with State
const connectedShowTrips = connect(mapStateToProps)(ShowTrips);
export { connectedShowTrips as ShowTrips };