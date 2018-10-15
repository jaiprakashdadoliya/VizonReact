import React from 'react';
import { connect } from 'react-redux';
import {Button, Alert, bsStyle} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {AddCompanyContainer} from './AddCompanyContainer';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { configConstants } from '../../_constants';
import { driverActions, headerActions } from '../../_actions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { utilityHelper } from '../../_helpers';

class Companies extends React.Component {
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
    this.deleteUser           = this.deleteUser.bind(this);
    this.getUserList          = this.getUserList.bind(this);
    this.driverSearch         = this.driverSearch.bind(this);
    this.state                = this.initialState;
  }

  /**
   * @DateOfCreation        23 August 2018
   * @ShortDescription      This function is responsible to handle initial state
   * @return                Nothing
  */
  get initialState() {
      return {
          loading : false,
          pages  : 0,
          add_user_show: false,
          data:[],
          driverInfo:[],
          filterAll :''
      }
  }

  /**
   * @DateOfCreation        23 August 2018
   * @ShortDescription      This function is responsible to handle load filtered driver list
   * @return                Nothing
  */
  driverSearch(event){
      const { value } = event.target;
      const filterAll = value;
      const filtered = [{ id: 'all', value: filterAll }];
      this.setState({ filterAll, filtered });
  }

  /**
    * @DateOfCreation     22 August 2018
    * @ShortDescription   Add new user form
    * @return Nothing
  */
  add_user_show_handle(driverData) {
    this.setState({ 
        add_user_show: true,
        driverInfo: driverData 
    });
  }

  /**
    * @DateOfCreation     22 August 2018
    * @ShortDescription   Show and hide user form
    * @return Nothing
  */
  add_user_hide_handle() {
    this.setState({ 
        add_user_show: false,
        driverInfo:[]
    });
  }

  /**
  * @DateOfCreation        26 July 2018
  * @ShortDescription      This function is responsible to get the list of student from API
  * @return                Nothing
  */
  getUserList(page, pageSize, sorted, filtered){
      var userType = utilityHelper.getUserInfo().user_type;
      const { dispatch }   = this.props;
      dispatch(driverActions.getUserList(page, pageSize, sorted, filtered, userType));
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

  /**
   * @DateOfCreation        7 Sept 2018
   * @ShortDescription      This function is responsible to delete users
   * @return                Redirect
   */
  deleteUser(userId){
      const { dispatch }  = this.props;

      confirmAlert({
          title: 'Company',
          message: 'Are you sure you want to delete the company detail?',
          buttons: [
          {
            label: <div className='green btn table-btn'>Yes</div>,
            onClick: () => {
              const { dispatch } = this.props;
              dispatch(driverActions.driverDelete(userId));
            }
          },
          {
            label: <div className='red btn table-btn'>No</div>,
            onClick: () => {return false;}
          }
          ]
      })
  }

  componentWillReceiveProps(props){
      this.setState({
          data:props.userList
      })
      
      const { dispatch }   = this.props;
      if(props.closeForm){
          dispatch(driverActions.resetUserState());
          this.add_user_hide_handle();
      }

      if(props.dataGridRefresh && props.isUpdateDone){
          var userType = utilityHelper.getUserInfo().user_type;
          dispatch(driverActions.getUserList(0, 10, '', '', userType));
      
          setTimeout(function(){
              dispatch(driverActions.resetUserState());
          },2000);
      } 
  }

  render() {
      return (
      <div className="page-container">
        <SideMenu/>
        <HeaderContainer />
        <AddCompanyContainer
            add_user_show = {this.state.add_user_show}
            driverInfo    = {this.state.driverInfo}
            userList      = {this.props.userList}
            add_user_hide_handle = {this.add_user_hide_handle}
        />
        <div className="main-content">
            <div className="wrap-inner-content">
                <div className="col-md-12">
                    <div className="inner-content">
                        <div className="col-md-12">
                            { this.props.error_message &&
                                  <Alert bsStyle="danger">
                                          { this.props.error_message }
                                  </Alert>
                            }

                            {this.props.isUpdateDone &&
                                this.props.successMsg &&
                                    <Alert bsStyle="success">
                                        {this.props.successMsg}
                                    </Alert>
                            }
                        </div>
                        <div className="row page-header">
                            <div className="col-md-6">
                              <h1 className="page-title">Companies</h1>
                            </div>
                            <div className="col-md-6 text-right">
                              <button className="blue btn text-btn" onClick={this.add_user_show_handle.bind(null, '')}>Add</button>
                            </div>
                        </div>
                        <div className="table-wrap">
                              <div className="table-search">
                                  <input
                                      value={this.state.filterAll}
                                      onChange={this.driverSearch}
                                      className="table-search-input"
                                      placeholder="Search"
                                      name="search"
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
                                          accessor  : 'profile_picture',
                                          className : 'grid-header',
                                          filterable  : false,
                                          Cell: row => <div className="table-profile-img">
                                                          <img src={row.value} />
                                                      </div>,
                                          width: 90
                                      },
                                      {
                                          Header    : 'Company Name',
                                          accessor  : 'company_name',
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
                                          },
                                          width: 200
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
                                          Header    : 'Mobile',
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
                                                          <a href="javascript:void(0)" className="green btn table-btn" onClick={this.add_user_show_handle.bind(null, row.original)}>Edit</a>
                                                          <a href="javascript:void(0)" className="red btn table-btn" onClick={this.deleteUser.bind(null,row.original.user_id)} >Delete</a>
                                                      </div>
                                      }
                                  ]}
                                  defaultSorted={[
                                      {
                                          id: 'first_name',
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
   const { userList, pages, closeForm, loader, successMsg, sendingRequest, error_message, isUserNotValid, isUpdateDone, dataGridRefresh } = state.driverReducer;
    return {
        userList,
        isUserNotValid,
        loader,
        successMsg,
        sendingRequest,
        error_message,
        pages,
        closeForm,
        isUpdateDone,
        dataGridRefresh
    };
}
const connectedCompanies = connect(mapStateToProps)(Companies);
export { connectedCompanies as Companies };
