import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {Button} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {VehicleAssignment} from './VehicleAssignment';
import {AddVehicleAssignment} from './AddVehicleAssignment';
import { vehicleAssignmentActions, headerActions } from '../../_actions';
import { utilityHelper } from '../../_helpers';
import addVehicleAssignmentFormConfig from './AddVehicleAssignmentConfig';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class VehicleAssignmentContainer extends React.Component {
  	constructor(props, context) {
    	super(props, context);

    	this.addVehicleShowHandle 		= this.addVehicleShowHandle.bind(this);
    	this.addVehicleHideHandle 		= this.addVehicleHideHandle.bind(this);
		this.state 				  		=	this.initialState;
		this.vehicleAssignmentSearch	=	this.vehicleAssignmentSearch.bind(this);
		this.getVehicleAssignmentList	=	this.getVehicleAssignmentList.bind(this);
		this.handleVehicleAssignSubmit	=	this.handleVehicleAssignSubmit.bind(this);

		this.boundFormVehicleAssignmentForm = undefined;
      	this.deleteVehicleAssignment		= this.deleteVehicleAssignment.bind(this);
      	this.handleBoundFormVehicleAssignmentFormUpdate = this.handleBoundFormVehicleAssignmentFormUpdate.bind(this);
      	this.isVehicleListSet = false;
      	this.isDriverListSet  = false;
  	}

  	/**
	   * @DateOfCreation        30 August 2018
	   * @ShortDescription      This function is responsible to handle initial state
	   * @return                Nothing
	*/
  	get initialState() {
  		return {
  			loading : false,
	  	    pages  : 0,
	    	addVehicleShow: false,
	        data:[],
	        filtered: [],
	        filterAll: '',
	        addVehicleAssignmentFormConfig: addVehicleAssignmentFormConfig,
	        vehicleAssignmentData: []
  		}
  	}

  	/**
    * @DateOfCreation        7 Sept 2018
    * @ShortDescription      This function is responsible to fx form input state data
    * @return                Redirect
    */
	handleBoundFormVehicleAssignmentFormUpdate(data){
	    this.boundFormVehicleAssignmentForm = data;
	}

	/**
   	 * @DateOfCreation        7 Sept 2018
   	 * @ShortDescription      This function is responsible to delete vehicle record
   	 * @return                Redirect
   	*/
  	deleteVehicleAssignment(vehicleAssignmentId){
      const { dispatch }  = this.props;

      	confirmAlert({
	          title: 'Vehicle assignment',
	          message: 'Are you sure you want to delete this vehicle assignment?',
	          buttons: [
	          {
	            label: <div className='btn red table-btn'>Yes</div>,
	            onClick: () => {
	              const { dispatch } = this.props;
	              dispatch(vehicleAssignmentActions.deleteVehicleAssignment(vehicleAssignmentId));
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
	  * @DateOfCreation        30 August 2018
	  * @ShortDescription      This function is responsible to handle changes in input state
	  * @param                 Event Object
	  * @return                Nothing
  	*/
  	handleVehicleAssignSubmit() {
  		if(this.boundFormVehicleAssignmentForm){
          	let data = this.boundFormVehicleAssignmentForm.getData();
          	if (data) {
              	const { dispatch } = this.props;
              	dispatch(vehicleAssignmentActions.addVehicleAssignSubmit(data, this.props.vehicleAssignList ));
          	} 
      	}
  	}

  	/**
	   * @DateOfCreation        30 August 2018
	   * @ShortDescription      This function is responsible to handle load filtered vehicle list
	   * @return                Nothing
  	*/
  	vehicleAssignmentSearch(event){
      	const { value } = event.target;
      	const filterAll = value;
      	const filtered = [{ id: 'all', value: filterAll }];
      	this.setState({ filterAll, filtered });
  	}

  	/**
    * @DateOfCreation     30 August 2018
    * @ShortDescription   Add new vehicle assignmnet form
    * @return Nothing
  	*/
  	addVehicleShowHandle(vehicleAssignmentData) {
  		//set edit detail
		var formConfig = this.state.addVehicleAssignmentFormConfig;
		var fields     = formConfig['fields'];

		var fromTitle = '';
		if(vehicleAssignmentData != ''){
		  	fromTitle = 'Edit vehicle assignment';
		  	for(var fc in fields){
		      	var fieldName = fields[fc]['name'];

		      	if(fieldName != 'start_time' && fieldName != 'end_time'){
		      		fields[fc]['value'] = vehicleAssignmentData[fieldName];		      		
		      	} else {
		      		fields[fc]['value'] = moment(vehicleAssignmentData[fieldName]);		      		
		      	}
		  	}
		}else{
		  	fromTitle = 'Add vehicle assignment';
		  	for(var fc in fields){
		      	fields[fc]['value'] = '';
		  	}
		}      
		// console.log();
	    this.setState({ 
	    	addVehicleAssignmentFormConfig  : formConfig,
	    	addVehicleShow 		  			: true,
	        fromTitle             			: fromTitle,
	        vehicleAssignmentData           : vehicleAssignmentData, 
	   	}, function(){
	   		// console.log('this.state', this.state);
	   	});
  	}

  	/**
    * @DateOfCreation     30 August 2018
    * @ShortDescription   Show and hide vehicle assignmnet list form
    * @return Nothing
  	*/
  	addVehicleHideHandle() {
	    this.setState({ addVehicleShow: false, vehicleAssignmentData: [] });
  	}

  	/**
	  * @DateOfCreation        30 August 2018
	  * @ShortDescription      This function is responsible to get the list of vehicles from API
	  * @return                Nothing
  	*/
  	getVehicleAssignmentList(page, pageSize, sorted, filtered){
      	const { dispatch }   = this.props;
      	dispatch(vehicleAssignmentActions.getVehicleAssignmentList(page, pageSize, sorted, filtered));
  	}

  	/**
	   * @DateOfCreation        30 Aug 2018
	   * @ShortDescription      This function is responsible to redirect unauthorise users
	   * @return                Redirect
   	*/
  	componentDidUpdate(){
      	const { dispatch }  = this.props;
      	if(this.props.isUserNotValid){
         	dispatch(headerActions.logout());
      	}
  	}

  	componentWillReceiveProps(nextProps){
	    const { dispatch } = this.props;
	    if(nextProps.closeForm){
	    	this.addVehicleHideHandle();
	    	dispatch(vehicleAssignmentActions.resetVehicleAssignState());
	    }

	    if(nextProps.is_loaded)
	    {
	        let vehicleListData = utilityHelper.getDataConvertToOptionType(nextProps.vehicleList, 'label', 'value');
            let driverListData 	= utilityHelper.getDataConvertToOptionType(nextProps.driverList, 'label', 'value');
            const { data } 		= this.state.addVehicleAssignmentFormConfig;
            const { addVehicleAssignmentFormConfig } 	= this.state;
            this.setState({
                    addVehicleAssignmentFormConfig:{
                        ...addVehicleAssignmentFormConfig,
                        data:{
                            ...data,
                            vehicle_id_data:vehicleListData,
                            user_id_data:driverListData
                        }
                    }
                }
            );
	    }

	    if(nextProps.dataGridRefresh === true && nextProps.isUpdateDone===true){
          dispatch(vehicleAssignmentActions.getVehicleAssignmentList(0, 10, '', ''));
      
          setTimeout(function(){
              dispatch(vehicleAssignmentActions.resetVehicleAssignState());
          },2000);
      } 
  	}

  	render() {
	    return (
	      	<div className="page-container">
			    <SideMenu/>
			    <HeaderContainer />
			    <AddVehicleAssignment
			    	addVehicleShow 								= {this.state.addVehicleShow}
			    	addVehicleHideHandle 						= {this.addVehicleHideHandle}
			    	submitted									= {this.props.submitted}	            		
		      		errorMsg			 						= {this.props.errorMsg}
		      		successMessage			 					= {this.props.successMessage}
		      		vehicleList 								= {this.props.vehicleList}
					driverList 									= {this.props.driverList}
					handleVehicleAssignSubmit 					= {this.handleVehicleAssignSubmit}
					addVehicleAssignmentFormConfig				= {this.state.addVehicleAssignmentFormConfig}
					handleBoundFormVehicleAssignmentFormUpdate 	= {this.handleBoundFormVehicleAssignmentFormUpdate}
					fromTitle 									= {this.state.fromTitle}
				/>

				<VehicleAssignment 
					getVehicleAssignmentList= {this.getVehicleAssignmentList}
					addVehicleShowHandle 	= {this.addVehicleShowHandle}
					vehicleAssignmentSearch	= {this.vehicleAssignmentSearch}
					pages 	     		 	= {this.props.pages}
					filtered 			 	= {this.state.filtered}
	            	filterAll 			 	= {this.state.filterAll}
	            	vehicleAssignList 	 	= {this.props.vehicleAssignList}
					deleteVehicleAssignment = {this.deleteVehicleAssignment}
					errorMsg                = {this.props.errorMsg}
		            isUpdateDone            = {this.props.isUpdateDone}
		            successMessage          = {this.props.successMessage}
				/>
	    	</div>

	    );
	}
}

/**
* @DateOfCreation        30 August 2018
* @ShortDescription      This function is responsible to connect store to props
* @return                View
*/
function mapStateToProps(state) {
   const { vehicleAssignList, vehicleList, driverList, pages, closeForm, loader, successMessage, sendingRequest, errorMsg, submitted, is_loaded, dataGridRefresh, isUpdateDone, isUserNotValid } = state.vehicleAssignmentReducer;
    return {
        vehicleAssignList,
        loader,
        successMessage,
        sendingRequest,
        errorMsg,
        pages,
        closeForm,
        submitted,
        vehicleList,
		driverList,
		is_loaded, 
		dataGridRefresh, 
		isUpdateDone,
		isUserNotValid
    };
}
const connectedVehicleContainer = connect(mapStateToProps)(VehicleAssignmentContainer);
export { connectedVehicleContainer as VehicleAssignmentContainer };