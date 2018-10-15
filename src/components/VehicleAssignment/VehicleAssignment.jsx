import React from 'react';
import {Button, Alert} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import ReactTable from "react-table";
import "react-table/react-table.css";

export const VehicleAssignment = (props) => {
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
                        props.successMessage &&
                            <Alert bsStyle="success">
                                {props.successMessage}
                            </Alert>
                    }
                </div>
                <div className="inner-content">
                    <div className="row page-header">
                        <div className="col-md-6">
                            <h1 className="page-title">Vehicle Assignment</h1>
                        </div>
                        <div className="col-md-6 text-right">
                            <button className="blue btn text-btn" onClick={props.addVehicleShowHandle.bind(null, '')}>Add</button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <div className="table-wrap">
                            <div className="table-search">
                                <input 
                                    value={props.filterAll}
                                    onChange={props.vehicleAssignmentSearch}
                                    className="table-search-input"
                                    placeholder="Search"
                                />
                            </div>
                            <ReactTable
                                noDataText="No found !!"
                                data={props.vehicleAssignList}
                                filterable
                                defaultFilterMethod={(filter, row) =>String(row[filter.id]) === filter.value}
                                filtered={props.filtered}
                                columns={[
                                    {
                                        Header    : 'Vehicle',
                                        accessor  : 'vehicle_name',
                                        className : 'grid-header',
                                        filterable  : false,
                                    },
                                    {
                                        Header    : 'Driver Name',
                                        accessor  : 'first_name',
                                        className : 'grid-header',
                                        filterable  : false,
                                        filterMethod: (filter, row) => {
                                            return row[filter.id].includes(filter.value);
                                        }
                                    },
                                    {
                                        Header    : 'Description',
                                        accessor  : 'description',
                                        className : 'grid-header',
                                        filterable  : false,
                                        filterMethod: (filter, row) => {
                                            return row[filter.id].includes(filter.value);
                                        }
                                    },
                                    {
                                        Header: 'Actions',
                                        accessor  : 'user_id',
                                        filterable  : false,
                                        sortable: false,
                                        headerClassName: 'grid-header-action',
                                        className :'',
                                        Cell: row => <div>
                                                        <a href="javascript:void(0)" className="green btn table-btn" onClick={props.addVehicleShowHandle.bind(null, row.original)}>Edit</a>
                                                        <a href="javascript:void(0)" className="red btn table-btn" onClick={props.deleteVehicleAssignment.bind(null,row.original.vehicle_assignment_id)}>Delete</a>
                                                    </div>
                                    }
                                ]}
                                defaultSorted={[
                                    {
                                        id: 'vehicle_assignment_id',
                                        desc: false
                                    }
                                ]}
                                defaultPageSize={10}
                                minRows= {props.vehicleAssignList}
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
                                    props.getVehicleAssignmentList(state.page, state.pageSize, state.sorted, state.filtered);
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
