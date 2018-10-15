import React from 'react';
import {Button, Modal, Alert, bsStyle } from 'react-bootstrap';
import {ShowTrips} from './ShowTrips';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { utilityHelper } from '../../_helpers';
import moment from 'moment';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import {Loading} from '../Common/Loading';
import DatePicker from 'react-datepicker';

export const Trips = (props) => {
    return (
        <div className="main-content">
            <div className="wrap-inner-content">
                <div className="col-md-12">
                    <ShowTrips
                        showTrips = {props.tripsModal}
                        HideTrips = {props.hideTripsModalOpen}
                        sendTripsDataToModal = {props.sendTripsDataToModal}
                    />
                    <div className="inner-content">
                        <div className="row page-header">
                            <div className="col-md-12">
                                <h1 className="page-title">Trips</h1>
                            </div>
                        </div>
                        <div className="trips-list">
                            <div className="filters">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="single-date">
                                            <Select
                                                name = "driver_id"
                                                className = "custom-select"
                                                clearable = {false}
                                                placeholder = "Select Driver"
                                                options = {utilityHelper.getDataConvertToOptionType(props.driverList, 'label', 'value')}
                                                onChange = {(value, name) => props.handleSelectChange(value, 'driver_id')}
                                                value = {props.payload.filterData.driver_id}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="single-date">
                                            <Select
                                                name = "vehicle_id"
                                                className = "custom-select"
                                                clearable = {false}
                                                placeholder = "Select Vehicle"
                                                options = {utilityHelper.getDataConvertToOptionType(props.vehicleList, 'label', 'value')}
                                                onChange = {(value, name) => props.handleSelectChange(value, 'vehicle_id')}
                                                value = {props.payload.filterData.vehicle_id}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="single-date">
                                            <DatePicker
                                                className="custom-datepicker"
                                                selected={props.payload.filterData.seleted_date}
                                                placeholderText="Selete Date"
                                                selectsStart
                                                onChange = { (value, name) => props.handleDateChange(value, 'seleted_date') }
                                                name = "seleted_date"
                                                showDisabledMonthNavigation
                                                dateFormat="DD/MM/YYYY"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <Button className="btn filter-btn" onClick={props.clearAll}>Clear all</Button>
                                    </div>
                                </div>
                            </div>
                            {props.loader ? <div id="preloader">
                                    <div id="loader">Loading..................</div>
                                </div>:
                                <div>
                                    {props.tripsList.length > 0 && !props.loader ? props.tripsList.map((list, tripIndex) => {
                                        return (
                                            <div className="trip-details" key={tripIndex}>
                                                <div className="trip-heading-date">
                                                    <div className="row">
                                                        <div className="col-md-6"><i className="fa fa-calendar-alt"></i> {
                                                            props.currentDate.toDateString() }</div>
                                                        <div className="col-md-6 text-right ">
                                                            <div className="total-trips">{list.userdetails.length} trip</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="trip-single-list">
                                                    <div className="trip-heading">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="driver-name">{list.fullname}</div>
                                                                <div className="single-date">{ props.currentDate.toDateString() }</div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="total-trips-details">{list.userdetails.length} Trip {utilityHelper.changeDiffToHoursMins(list.timediff)} driving</div>

                                                                <div className="trip-break">0m between trips</div>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="total-miles">{list.totaldistance} <span className="mile-unit">ml</span></div>
                                                            </div>
                                                            <div className="col-md-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {list.userdetails.map((userTripDetail, userDetailIndex) => {
                                                        return (
                                                            <div  key={userDetailIndex} className="trip-single-details" data-toggle="modal"
                                                                  data-target="#trip-details-popup">
                                                                <div className="row">
                                                                    <div className="col-md-4 sub-trips">
                                                                        <div className="start-end-time">{userTripDetail.start_time} - {userTripDetail.end_time}</div>
                                                                        <div className="duration">{userTripDetail.getDiffBetweenTime}</div>
                                                                    </div>
                                                                    <div className="col-md-4" onClick={props.showTripsModalOpen.bind(null, userTripDetail)}>
                                                                        <div className="address">{userTripDetail.start_address}</div>
                                                                        <div className="city">{userTripDetail.end_address}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <div className="total-miles">{userTripDetail.distance} <span
                                                                            className="mile-unit">ml</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }) : <div className="on-location">No record found.</div>
                                    }
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}