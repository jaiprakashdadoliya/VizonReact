import React from 'react';
import {Button, Modal, Alert, bsStyle } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Select from 'react-select';
import {ShowVideos} from './ShowVideos';
import 'react-datepicker/dist/react-datepicker.css';
import { utilityHelper } from '../../_helpers';
import {Loading} from '../Common/Loading';
export const Videos = (props) => {
    return (
        <div className="main-content">
            <div className="wrap-inner-content">
                <div className="col-md-12">
                    <ShowVideos
                        showVideo = {props.videoModal}
                        hideVideoModalOpen = {props.hideVideoModalOpen}
                        videoLoader = {props.videoLoader}
                        videoUrl = {props.videoUrl}
                    />
                    <div className="inner-content">
                        <div className="row page-header">
                            <div className="col-md-12">
                                <h1 className="page-title">Videos</h1>
                            </div>
                        </div>
                        <div className="trips-list">
                            <div className="filters">
                                <div className="row">
                                    <div className="col-md-6">
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
                                </div>
                            </div>
                            <div className="row">
                                {props.loader ?
                                    <div className="col-md-12 text-center">
                                        <Loading/>
                                    </div> :
                                    <div>
                                        {props.videosList.length > 0 && !props.loader ? props.videosList.map((list, videoIndex) => {
                                                return (
                                                    <div className="col-md-2 col-sm-3 col-xs-3" key={videoIndex}>
                                                        <a title="Image 1" data-toggle="modal" href="javascript:void(0)" onClick={props.showVideoModalOpen.bind(null, list)}>
                                                            <img className="thumbnail img-responsive"
                                                                 src={list.video_thumbnail_url}/>
                                                        </a>
                                                    </div>
                                                )
                                        }) : <div className="text-center">No Video Found</div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}