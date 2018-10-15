import React from 'react';
import {Button} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import { connect } from 'react-redux';
import {SideMenu} from '../SideMenu';
import {AddUser} from './AddUser';
import { configConstants } from '../../_constants';
import { userActions, headerActions, commonActions } from '../../_actions';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Users extends React.Component {
  /**
   * @DateOfCreation        22 August 2018
   * @ShortDescription      Contructor is responsible to function declaration and define intial state
   * @param                 props
   * @return                Nothing
   */
  constructor(props, context) {
    super(props, context);

    this.add_user_show_handle = this.add_user_show_handle.bind(this);
    this.add_user_hide_handle = this.add_user_hide_handle.bind(this);
    this.getUserList       = this.getUserList.bind(this);

    this.state = {
			      add_user_show: false,
			      data:[]
    };
  }

  /**
    * @DateOfCreation     22 August 2018
    * @ShortDescription   Add new user form
    * @return Nothing
  */
  add_user_show_handle() {
    this.setState({ add_user_show: true });
  }

  /**
    * @DateOfCreation     22 August 2018
    * @ShortDescription   Show and hide user form
    * @return Nothing
  */
  add_user_hide_handle() {
    this.setState({ add_user_show: false });
  }

  /**
  * @DateOfCreation        26 July 2018
  * @ShortDescription      This function is responsible to get the list of student from API
  * @return                Nothing
  */
  getUserList(page, pageSize, sorted, filtered){
      const { dispatch }   = this.props;
      dispatch(userActions.getUserList(page, pageSize, sorted, filtered));
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      data:nextProps.userList
    })
  }

  render() {
      return (
      <div className="page-container">
        <SideMenu/>
        <HeaderContainer />
        <AddUser
        add_user_show = {this.state.add_user_show}
        add_user_hide_handle = {this.add_user_hide_handle}
        />
        <div className="main-content">
            <div className="wrap-inner-content">
                <div className="col-md-12">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-md-6">
                              <h1 className="page-title">Users</h1>
                            </div>
                            <div className="col-md-6 text-right">
                              <button className="green btn text-btn" onClick={this.add_user_show_handle}>Add</button>
                            </div>
                        </div>
                        <div className="table-wrap">
                              <div className="table-search">
                                  <input
                                      value={this.state.filterAll}
                                      onChange={this.vehicleSearch}
                                      className="table-search-input"
                                      placeholder="Search"
                                  />
                              </div>
                              <ReactTable
                                  noDataText="No found !!"
                                  data={this.state.data}
                                  filterable
                                  defaultFilterMethod={(filter, row) =>String(row[filter.id]) === filter.value}
                                  filtered={this.state.filtered}
                                  columns={[
                                      {
                                          Header    : '',
                                          accessor  : 'profile_avatar',
                                          className : 'grid-header',
                                          filterable  : false,
                                      },
                                      {
                                          Header    : 'Full Name',
                                          accessor  : 'full_name',
                                          className : 'grid-header',
                                          filterable  : false,
                                          filterMethod: (filter, row) => {
                                              return row[filter.id].includes(filter.value);
                                          }
                                      },
                                      {
                                          Header    : 'User Type',
                                          accessor  : 'user_type',
                                          className : 'grid-header',
                                          filterable  : false,
                                          filterMethod: (filter, row) => {
                                              return row[filter.id].includes(filter.value);
                                          }
                                      },
                                      {
                                          Header    : 'Email',
                                          accessor  : 'email',
                                          className : 'grid-header',
                                          filterable  : false,
                                          filterMethod: (filter, row) => {
                                              return row[filter.id].includes(filter.value);
                                          }
                                      },
                                      {
                                          Header    : 'Contact',
                                          accessor  : 'mobile',
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
                                          headerClassName: 'grid-header-action',
                                          className :'',
                                          Cell: row => <div>
                                                          <a href="javascript:void(0)" className="green btn table-btn">Edit</a><a href="javascript:void(0)" className="red btn table-btn">Delete</a>
                                                      </div>
                                      }
                                  ]}
                                  defaultSorted={[
                                      {
                                          id: 'full_name',
                                          desc: false
                                      }
                                  ]}
                                  defaultPageSize={10}
                                  minRows= {this.props.userList}
                                  className="table table-bordered responsive"
                                  loading={this.state.loading}
                                  filterable
                                  Sorted
                                  pages={this.props.pages}
                                  showPagination={true}
                                  showPaginationTop={true}
                                  showPaginationBottom={false}
                                  pageSizeOptions={[10, 20, 50]}
                                  manual // For server side pagination
                                  onFetchData={(state, instance) => {
                                      this.getUserList(state.page, state.pageSize, state.sorted, state.filtered);
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
}
/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to connect store to props
* @return                View
*/
function mapStateToProps(state) {
   const { userList, pages, loader, successMessage, sendingRequest, errorMsg, isUserNotValid } = state.userReducer;

    return {
        userList,
        isUserNotValid,
        loader,
        successMessage,
        sendingRequest,
        errorMsg,
        pages
    };
}
const connectedUsers = connect(mapStateToProps)(Users);
export { connectedUsers as Users };
