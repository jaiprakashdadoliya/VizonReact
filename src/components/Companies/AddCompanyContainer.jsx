import React from 'react';
import { connect } from 'react-redux';
import { AddCompany } from './AddCompany';
import { driverActions } from '../../_actions';
import { utilityHelper } from '../../_helpers';
import { addDriverValidator } from '../../_validator';
import formConfig from './AddDriverConfig';
import jobInfoFormConfig from './AddDriverConfigJobInfo';
import licenseInfoFormConfig from './AddDriverConfigLicenseInfo';

class AddCompanyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handle_close = this.handle_close.bind(this);
    this.state = {
        formConfig            : formConfig,
    }

    // Bind the events to the current class    
    this.handleDriverSubmit               = this.handleDriverSubmit.bind(this);
    this.boundForm                        = undefined;
    this.handleBoundFormUpdate            = this.handleBoundFormUpdate.bind(this);
  }

  /**
  * @DateOfCreation        23 August 2018
  * @ShortDescription      This function is responsible to handle changes in input state
  * @param                 Event Object
  * @return                Nothing
  */
  handleDriverSubmit() {
      if(this.boundForm){
          let data            = this.boundForm.getData();
          var userType = {};
          userType['user_type'] = utilityHelper.getUserInfo().user_type;
          if (data) {
              const { dispatch } = this.props;
              dispatch(driverActions.addDriverSubmit(utilityHelper.mergeMultipleObject([data, userType]), this.props.userList));
          } 
      }
  }

  /**
  * @DateOfCreation        23 August 2018
  * @ShortDescription      This function is responsible to handle close the modal and resset input state
  * @param                 Event Object
  * @return                Nothing
  */
  handle_close() {
    const { dispatch }   = this.props;
    dispatch(driverActions.resetUserState());
    this.props.add_user_hide_handle();
  }

  /**
    * @DateOfCreation        6 Sept 2018
    * @ShortDescription      This function is responsible to fx form input state data
    * @return                Redirect
    */
  handleBoundFormUpdate(data){
      this.boundForm = data;
  }

  componentWillReceiveProps(props) {
      //set edit detail
      var formConfig            = this.state.formConfig;
      var fields                = formConfig['fields'];
      var fromTitle = '';
      if(props.driverInfo != ''){
          fromTitle = 'Edit company';
          for(var fc in fields){
              var fieldName = fields[fc]['name'];
              fields[fc]['value'] = props.driverInfo[fieldName];
          }
      }else{
          fromTitle = 'Add company';

          for(var fc in fields){
              var fieldName = fields[fc]['name'];
              fields[fc]['value'] = '';
          }
      }
      
      this.setState({
          formConfig            : formConfig,
          fromTitle             : fromTitle
      });
  }

  render() {
    return (
        <AddCompany
          submitted                         = {this.props.submitted}
          error_message                     = {this.props.error_message}
          handle_close                      = {this.handle_close}
          add_user_show                     = {this.props.add_user_show}
          handleInputChange                 = {this.handleInputChange}
          handleDriverSubmit                = {this.handleDriverSubmit}
          handleSelectChange                = {this.handleSelectChange}
          handleDateChange                  = {this.handleDateChange}
          payload                           = {this.state.addDriver}
          formConfig                        = {this.state.formConfig}
          fromTitle                         = {this.state.fromTitle}
          handleBoundFormUpdate             = {this.handleBoundFormUpdate}
        />
      );
    }
}

/**
* @DateOfCreation        23 August 2018
* @ShortDescription      This function is responsible to connect store to props
* @return                View
*/
function mapStateToProps(state) {
    const { userList, submitted, error_message } = state.driverReducer;
    return {        
        submitted,
        error_message,
        userList
    };
}

// Connection with State
const connectedAddCompanyContainer = connect(mapStateToProps)(AddCompanyContainer);
export { connectedAddCompanyContainer as AddCompanyContainer };
