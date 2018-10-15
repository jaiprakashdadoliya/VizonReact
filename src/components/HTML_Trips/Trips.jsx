import React from 'react';
import {Button} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import ReactTable from "react-table";
import "react-table/react-table.css";

export class Trips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.add_user_show_handle = this.add_user_show_handle.bind(this);
    this.add_user_hide_handle = this.add_user_hide_handle.bind(this);

    this.state = {
			      add_user_show: false,
			      data:[{
			      image:'<img src={require(http://localhost:8080/assets/images/7.jpg)}/>',
			      full_name:'Williams',
			      user_type: 'Driver',
			      email: 'jhondeo@email.com',
			      contact: '+919876543210'
      			},
      			{
			      image:'<img src={require(http://localhost:8080/assets/images/7.jpg)}/>',
			      full_name:'Jhon Deo',
			      user_type: 'Driver',
			      email: 'jhondeo@email.com',
			      contact: '+919876543210'
      			},
      			{
			      image:'<img src={require(http://localhost:8080/assets/images/7.jpg)}/>',
			      full_name:'Johnson',
			      user_type: 'Driver',
			      email: 'jhondeo@email.com',
			      contact: '+919876543210'
      			},
      			{
			      image:'<img src={require(http://localhost:8080/assets/images/7.jpg)}/>',
			      full_name:'Jhon Deo',
			      user_type: 'Driver',
			      email: 'jhondeo@email.com',
			      contact: '+919876543210'
      			},
      			{
			      image:'<img src={require(http://localhost:8080/assets/images/7.jpg)}/>',
			      full_name:'Davis',
			      user_type: 'Driver',
			      email: 'jhondeo@email.com',
			      contact: '+919876543210'
      			},
      			{
			      image:'<img src={require(http://localhost:8080/assets/images/7.jpg)}/>',
			      full_name:'Williams',
			      user_type: 'Driver',
			      email: 'jhondeo@email.com',
			      contact: '+919876543210'
      			}
      ]
    };
  }
  add_user_show_handle() {
    this.setState({ add_user_show: true });
  }

  add_user_hide_handle() {
    this.setState({ add_user_show: false });
  }
  render() {
        return (
      <div className="page-container">
      <SideMenu/>
      <HeaderContainer />
      
        <div className="main-content">
            <div className="wrap-inner-content">
            <div className="col-md-12">
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
                                <input className="form-control" type="text" name="" placeholder="Search" />
                            </div>
                            <div className="text-right col-md-9">
                                <div className="pagination">
                                    <a href="" className="pre-page"><i className="fa fa-chevron-left"></i></a>
                                    <a href="" className="next-page"><i className="fa fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div className="trip-details">
                                <div className="trip-heading-date">
                                    <div className="row">
                                        <div className="col-md-6"><i className="fa fa-calendar-alt"></i> Fri Aug 17, 2018</div>
                                        <div className="col-md-6 text-right ">
                                            <div className="total-trips">1 trip</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trip-single-list">
                                    <div className="trip-heading">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="driver-name">Jhon smith</div>
                                                <div className="single-date">Fri Aug 17, 2018</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="total-trips-details">1 Trip 39 mins driving</div>
                                                <div className="trip-break">0m between trips</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trip-single-details" data-toggle="modal" data-target="#trip-details-popup">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="start-end-time">6:16 AM - 6:55 AM</div>
                                                <div className="duration">39 mins</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="address">1401-1587 Cockrell Avenue</div>
                                                <div className="city">Dallas, Tx <span className="total-time">3hr 57m</span></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2 text-right">
                                                <button className="btn red table-btn">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trip-details">
                                <div className="trip-heading-date">
                                    <div className="row">
                                        <div className="col-md-6"><i className="fa fa-calendar-alt"></i> Sat Aug 18, 2018</div>
                                        <div className="col-md-6 text-right ">
                                            <div className="total-trips">2 trip</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trip-single-list">
                                    <div className="trip-heading">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="driver-name">Adams nelson</div>
                                                <div className="single-date">Sat Aug 18, 2018</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="total-trips-details">2 Trip 1hr 8mins driving</div>
                                                <div className="trip-break">31m between trips</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trip-single-details" data-toggle="modal" data-target="#trip-details-popup">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="start-end-time">6:16 AM - 6:55 AM</div>
                                                <div className="duration">20 mins</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="address">1910 West Airfield Drive</div>
                                                <div className="city">Dallas, Tx <span className="total-time">3hr 57m</span></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2 text-right">
                                                <button className="btn red table-btn">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trip-single-details" data-toggle="modal" data-target="#trip-details-popup">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="start-end-time">6:16 AM - 6:55 AM</div>
                                                <div className="duration">48 mins</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="address">1401-1587 Cockrell Avenue</div>
                                                <div className="city">Dallas, Tx <span className="total-time">3hr 57m</span></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2 text-right">
                                                <button className="btn red table-btn">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trip-details">
                                <div className="trip-heading-date">
                                    <div className="row">
                                        <div className="col-md-6"><i className="fa fa-calendar-alt"></i> Sat Aug 18, 2018</div>
                                        <div className="col-md-6 text-right ">
                                            <div className="total-trips">3 trip</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trip-single-list">
                                    <div className="trip-heading">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="driver-name">Robert mitchell</div>
                                                <div className="single-date">Sat Aug 18, 2018</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="total-trips-details">3 Trip 1hr 8mins driving</div>
                                                <div className="trip-break">31m between trips</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trip-single-details" data-toggle="modal" data-target="#trip-details-popup">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="start-end-time">6:16 AM - 6:55 AM</div>
                                                <div className="duration">20 mins</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="address">1910 West Airfield Drive</div>
                                                <div className="city">Dallas, Tx <span className="total-time">3hr 57m</span></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2 text-right">
                                                <button className="btn red table-btn">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trip-single-details" data-toggle="modal" data-target="#trip-details-popup">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="start-end-time">6:16 AM - 6:55 AM</div>
                                                <div className="duration">48 mins</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="address">1401-1587 Cockrell Avenue</div>
                                                <div className="city">Dallas, Tx <span className="total-time">3hr 57m</span></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2 text-right">
                                                <button className="btn red table-btn">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trip-single-details" data-toggle="modal" data-target="#trip-details-popup">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="start-end-time">6:16 AM - 6:55 AM</div>
                                                <div className="duration">48 mins</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="address">1401-1587 Cockrell Avenue</div>
                                                <div className="city">Dallas, Tx <span className="total-time">3hr 57m</span></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="total-miles">22.2 <span className="mile-unit">ml</span></div>
                                            </div>
                                            <div className="col-md-2 text-right">
                                                <button className="btn red table-btn">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </div>

    );
}
}
