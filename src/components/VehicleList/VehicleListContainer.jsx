import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {VehicleList} from './VehicleList';
import {AddVehicle} from './AddVehicle';
import { vehicleActions, headerActions } from '../../_actions';
import addVehicleFormConfig from './AddVehicleConfig';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class VehicleListContainer extends React.Component {
  	constructor(props, context) {
	    super(props, context);

	    // Bind the state to the current class
	    this.add_vehicle_show_handle	=	this.add_vehicle_show_handle.bind(this);
	    this.add_vehicle_hide_handle	=	this.add_vehicle_hide_handle.bind(this);
	    this.vehicleSearch				    =	this.vehicleSearch.bind(this);
	    this.state 						        =	this.initialState;
	    this.getVehicleList				    =	this.getVehicleList.bind(this);
	    this.handleVehicleSubmit		  =	this.handleVehicleSubmit.bind(this); 
	    
      this.boundFormVehicleForm             = undefined;
      this.handleBoundFormVehicleFormUpdate = this.handleBoundFormVehicleFormUpdate.bind(this);
      this.deleteVehicle                    = this.deleteVehicle.bind(this);
  	}

  /**
   * @DateOfCreation        29 August 2018
   * @ShortDescription      This function is responsible to handle initial state
   * @return                Nothing
  */
  get initialState() {
      return {
          loading : false,
    	    pages  : 0,
    	    add_vehicle_show: false,
          data:[],
          filtered: [],
          filterAll: '',
          addVehicleFormConfig: addVehicleFormConfig,
          vehicleData: []
      }
  }

  /**
    * @DateOfCreation        6 Sept 2018
    * @ShortDescription      This function is responsible to fx form input state data
    * @return                Redirect
    */
  handleBoundFormVehicleFormUpdate(data){
      this.boundFormVehicleForm = data;
  }

  /**
   * @DateOfCreation        29 August 2018
   * @ShortDescription      This function is responsible to handle load filtered vehicle list
   * @return                Nothing
  */
  vehicleSearch(event){
      const { value } = event.target;
      const filterAll = value;
      const filtered = [{ id: 'all', value: filterAll }];
      this.setState({ filterAll, filtered });
  }

  /**
    * @DateOfCreation     22 August 2018
    * @ShortDescription   Add new vehicle form
    * @return Nothing
  */
  add_vehicle_show_handle(vehicleData) {
      
      //set edit detail
      var formConfig = this.state.addVehicleFormConfig;
      var fields     = formConfig['fields'];
      
      var fromTitle = '';
      if(vehicleData != ''){
          fromTitle = 'Edit vehicle';
          for(var fc in fields){
              var fieldName = fields[fc]['name'];
              fields[fc]['value'] = vehicleData[fieldName];
          }
      }else{
          fromTitle = 'Add vehicle';
          for(var fc in fields){
              var fieldName = fields[fc]['name'];
              fields[fc]['value'] = '';
          }
      }
      
      this.setState({
          addVehicleFormConfig  : formConfig,
          fromTitle             : fromTitle,
          add_vehicle_show      : true,
          vehicleData           : vehicleData 
      });
  }

  /**
    * @DateOfCreation     22 August 2018
    * @ShortDescription   Show and hide vehicle list form
    * @return Nothing
  */
  add_vehicle_hide_handle() {
      this.setState({ add_vehicle_show: false, vehicleData: [] });
  }

  /**
  * @DateOfCreation        26 July 2018
  * @ShortDescription      This function is responsible to get the list of student from API
  * @return                Nothing
  */
  getVehicleList(page, pageSize, sorted, filtered){
      const { dispatch }   = this.props;
      dispatch(vehicleActions.getVehicleList(page, pageSize, sorted, filtered));
  }

  /**
  * @DateOfCreation        30 August 2018
  * @ShortDescription      This function is responsible to handle changes in input state
  * @param                 Event Object
  * @return                Nothing
  */
  handleVehicleSubmit() {
    	if(this.boundFormVehicleForm){
          let data = this.boundFormVehicleForm.getData();
          if (data) {
              const { dispatch } = this.props;
              dispatch(vehicleActions.addVehicleSubmit(data, this.props.vehicleList ));
          } 
      }
  }

  /**
   * @DateOfCreation        7 Sept 2018
   * @ShortDescription      This function is responsible to delete vehicle record
   * @return                Redirect
   */
  deleteVehicle(vehicleId){
      const { dispatch }  = this.props;

      confirmAlert({
          title: 'Vehicle',
          message: 'Are you sure you want to delete this vehicle record?',
          buttons: [
          {
            label: <div className='btn red table-btn'>Yes</div>,
            onClick: () => {
              const { dispatch } = this.props;
              dispatch(vehicleActions.deleteVehicle(vehicleId));
            }
          },
          {
            label: <div className='btn default table-btn'>No</div>,
            onClick: () => {return false;}
          }
          ]
      })
  }

  /**
   * @DateOfCreation        7 Sept 2018
   * @ShortDescription      This function is responsible to redirect unauthorise users
   * @return                Redirect
  */
  componentDidUpdate(){
      const { dispatch }  = this.props;
      if(this.props.isUserNotValid){
        dispatch(headerActions.logout());
      }
  }

  componentWillReceiveProps(props){
      const { dispatch } = this.props;
      
      this.setState({
          data:props.vehicleList
      })
      
      if(props.closeForm){
          this.add_vehicle_hide_handle();
          
          dispatch(vehicleActions.getVehicleList(0, 10, '', ''));
          dispatch(vehicleActions.resetVehicleState());
      }

      if(props.dataGridRefresh === true && props.isUpdateDone===true){
          dispatch(vehicleActions.getVehicleList(0, 10, '', ''));
      
          setTimeout(function(){
              dispatch(vehicleActions.resetVehicleState());
          },2000);
      } 
  }

  render() {
    return (
    	<div className="page-container">
	      	<SideMenu/>
	      	<HeaderContainer />
	      	<AddVehicle
  		      	add_vehicle_show                 = {this.state.add_vehicle_show}
  				    add_vehicle_hide_handle          = {this.add_vehicle_hide_handle}
  		      	handleVehicleSubmit	             = {this.handleVehicleSubmit}
  		      	payload				                   = {this.state.addVehicle}
  		      	submitted			                   = {this.props.submitted}	
  		      	errorMsg			                   = {this.props.errorMsg}
              addVehicleFormConfig             = {this.state.addVehicleFormConfig}
              fromTitle                        = {this.state.fromTitle}
              handleBoundFormVehicleFormUpdate = {this.handleBoundFormVehicleFormUpdate}
	      	/>
    			<VehicleList			
              add_vehicle_show_handle = {this.add_vehicle_show_handle}
    	      	deleteVehicle           = {this.deleteVehicle}
      				vehicleSearch           = {this.vehicleSearch}
      				getVehicleList		      = {this.getVehicleList}
      				vehicleList 	          = {this.props.vehicleList}
      				pages 	     		        = {this.props.pages}
      				filtered 			          = {this.state.filtered}
    	        filterAll 			        = {this.state.filterAll} 
              errorMsg                = {this.props.errorMsg}
              isUpdateDone            = {this.props.isUpdateDone}
              successMsg              = {this.props.successMsg}
    			/>
		  </div>
    );
  }
}

/**
* @DateOfCreation        29 August 2018
* @ShortDescription      This function is responsible to connect store to props
* @return                View
*/
function mapStateToProps(state) {
   const { vehicleList, pages, closeForm, loader, successMessage, sendingRequest, errorMsg, submitted, dataGridRefresh, isUpdateDone, successMsg, isUserNotValid } = state.vehicleReducer;
    return {
        vehicleList,
        loader,
        successMessage,
        sendingRequest,
        errorMsg,
        pages,
        closeForm,
        submitted,
        dataGridRefresh, 
        isUpdateDone, 
        successMsg, isUserNotValid
    };
}
const connectedVehicleListContainer = connect(mapStateToProps)(VehicleListContainer);
export { connectedVehicleListContainer as VehicleListContainer };
