import React from 'react';
import {Button, Alert, bsStyle} from 'react-bootstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";

export const VehicleList = (props) => {
  return (
      <div className="main-content">
          <div className="wrap-inner-content">
            <div className="col-md-12">
                <div className="col-md-12">
                    { props.errorMsg &&
                          <Alert bsStyle="danger">
                                  { props.errorMsg }
                          </Alert>
                    }

                    {props.isUpdateDone &&
                        props.successMsg &&
                            <Alert bsStyle="success">
                                {props.successMsg}
                            </Alert>
                    }
                </div>
              <div className="inner-content">
                <div className="row page-header">
                  <div className="col-md-6">
                    <h1 className="page-title">Vehicle List</h1>
                  </div>
                  <div className="col-md-6 text-right">
                    <button className="blue btn text-btn" onClick={props.add_vehicle_show_handle.bind(null, '')}>Add</button>
                  </div>
                </div>

                <div className="table-responsive">
                    <div className="table-wrap">
                        <div className="table-search">
                            <input 
                                value={props.filterAll}
                                onChange={props.vehicleSearch}
                                className="table-search-input"
                                placeholder="Search"
                            />
                        </div>
                        <ReactTable
                            noDataText="No found !!"
                            data={props.vehicleList}
                            filterable
                            defaultFilterMethod={(filter, row) =>String(row[filter.id]) === filter.value}
                            filtered={props.filtered}
                            columns={[
                                {
                                    Header    : '',
                                    accessor  : 'vehicle_avatar',
                                    className : 'grid-header',
                                    filterable  : false,
                                    sortable: false,
                                    Cell: row => <div className="table-profile-img">
                                                          <img src={row.value} />
                                                      </div>,
                                    width: 90
                                },
                                {
                                    Header    : 'Vehicle Name',
                                    accessor  : 'vehicle_name',
                                    className : 'grid-header',
                                    filterable  : false,
                                    filterMethod: (filter, row) => {
                                        return row[filter.id].includes(filter.value);
                                    }
                                },
                                {
                                    Header    : 'Vehicle Type',
                                    accessor  : 'vehicle_type',
                                    className : 'grid-header',
                                    filterable  : false,
                                    filterMethod: (filter, row) => {
                                        return row[filter.id].includes(filter.value);
                                    }
                                },
                                {
                                    Header    : 'Vehicle Model',
                                    accessor  : 'vehicle_model',
                                    className : 'grid-header',
                                    filterable  : false,
                                    filterMethod: (filter, row) => {
                                        return row[filter.id].includes(filter.value);
                                    }
                                },
                                {
                                    Header    : 'Vehicle Registration',
                                    accessor  : 'registration_number',
                                    className : 'grid-header',
                                    filterable  : false,
                                    filterMethod: (filter, row) => {
                                        return row[filter.id].includes(filter.value);
                                    }
                                },
                                {
                                    Header: 'Actions',
                                    accessor  : 'vehicle_id',
                                    filterable  : false,
                                    sortable: false,
                                    headerClassName: 'grid-header-action',
                                    className :'',
                                    Cell: row => <div>
                                                    <a href="javascript:void(0)" className="green btn table-btn" onClick={props.add_vehicle_show_handle.bind(null, row.original)} >Edit</a>
                                                    <a href="javascript:void(0)" className="red btn table-btn" onClick={props.deleteVehicle.bind(null,row.original.vehicle_id)} >Delete</a>
                                                </div>
                                }
                            ]}
                            defaultSorted={[
                                {
                                    id: 'vehicle_name',
                                    desc: false
                                }
                            ]}
                            defaultPageSize={10}
                            minRows= {props.vehicleList}
                            className="table table-bordered responsive"
                            loading={props.loading}
                            filterable
                            Sorted
                            pages={props.pages}
                            showPagination={true}
                            showPaginationTop={true}
                            showPaginationBottom={false}
                            pageSizeOptions={[10, 20, 50]}
                            manual // For server side pagination
                            onFetchData={(state, instance) => {
                                props.getVehicleList(state.page, state.pageSize, state.sorted, state.filtered);
                            }}
                        />
                    </div>
                </div>

              </div>
            </div>
          </div>
      </div>
  );
}
