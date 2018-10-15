import React from 'react';
import { connect } from 'react-redux';
import { AddDriver } from './AddDriver';
import { driverActions } from '../../_actions';
import { utilityHelper } from '../../_helpers';
import { addDriverValidator } from '../../_validator';
import formConfig from './AddDriverConfig';
import jobInfoFormConfig from './AddDriverConfigJobInfo';
import licenseInfoFormConfig from './AddDriverConfigLicenseInfo';

class AddDriverContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handle_close = this.handle_close.bind(this);
    this.state = {
        formConfig            : formConfig,
        jobInfoFormConfig     : jobInfoFormConfig,
        licenseInfoFormConfig : licenseInfoFormConfig,
    }

    // Bind the events to the current class    
    this.handleDriverSubmit               = this.handleDriverSubmit.bind(this);
    this.boundForm                        = undefined;
    this.boundFormJobInfo                 = undefined;
    this.boundFormLicenseInfo             = undefined;
    this.handleBoundFormUpdate            = this.handleBoundFormUpdate.bind(this);
    this.handleBoundFormJobInfoUpdate     = this.handleBoundFormJobInfoUpdate.bind(this);
    this.handleBoundFormLicenseInfoUpdate = this.handleBoundFormLicenseInfoUpdate.bind(this);
  }

  /**
  * @DateOfCreation        23 August 2018
  * @ShortDescription      This function is responsible to handle changes in input state
  * @param                 Event Object
  * @return                Nothing
  */
  handleDriverSubmit() {
      if(this.boundForm || this.boundFormJobInfo || this.boundFormLicenseInfo){
          let data            = this.boundForm.getData();
          let dataJobInfo     = this.boundFormJobInfo.getData();
          let dataLicenseInfo = this.boundFormLicenseInfo.getData();
          var userType = {};
          userType['user_type'] = utilityHelper.getUserInfo().user_type;
          if (data && dataJobInfo && dataLicenseInfo) {
              const { dispatch } = this.props;
              dispatch(driverActions.addDriverSubmit(utilityHelper.mergeMultipleObject([data, dataJobInfo, dataLicenseInfo, userType]), this.props.userList ));
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

  /**
    * @DateOfCreation        6 Sept 2018
    * @ShortDescription      This function is responsible to fx form input state data
    * @return                Redirect
    */
  handleBoundFormJobInfoUpdate(data1){
      this.boundFormJobInfo = data1;
  }

  /**
    * @DateOfCreation        6 Sept 2018
    * @ShortDescription      This function is responsible to fx form input state data
    * @return                Redirect
    */
  handleBoundFormLicenseInfoUpdate(data2){
      this.boundFormLicenseInfo = data2;
  }


  componentWillReceiveProps(props) {
      //set edit detail
      var formConfig            = this.state.formConfig;
      var jobInfoFormConfig     = this.state.jobInfoFormConfig;
      var licenseInfoFormConfig = this.state.licenseInfoFormConfig;
      var fields                = formConfig['fields'];
      var fieldsJobInfo         = jobInfoFormConfig['fields'];
      var fieldsLicenseInfo     = licenseInfoFormConfig['fields'];
      var fromTitle = '';
      if(props.driverInfo != ''){
          fromTitle = 'Edit driver';
          for(var fc in fields){
              var fieldName = fields[fc]['name'];
              fields[fc]['value'] = props.driverInfo[fieldName];
          }

          for(var fc in fieldsJobInfo){
              var fieldNameJobInfo = fieldsJobInfo[fc]['name'];
              fieldsJobInfo[fc]['value'] = props.driverInfo[fieldNameJobInfo];
          }

          for(var fc in fieldsLicenseInfo){
              var fieldNameLicenseInfo = fieldsLicenseInfo[fc]['name'];
              fieldsLicenseInfo[fc]['value'] = props.driverInfo[fieldNameLicenseInfo];
          }
      }else{
          fromTitle = 'Add driver';

          for(var fc in fields){
              var fieldName = fields[fc]['name'];
              fields[fc]['value'] = '';
          }

          for(var fc in fieldsJobInfo){
              var fieldNameJobInfo = fieldsJobInfo[fc]['name'];
              fieldsJobInfo[fc]['value'] = '';
          }

          for(var fc in fieldsLicenseInfo){
              var fieldNameLicenseInfo = fieldsLicenseInfo[fc]['name'];
              fieldsLicenseInfo[fc]['value'] = '';
          }
      }
      
      this.setState({
          formConfig            : formConfig,
          jobInfoFormConfig     : jobInfoFormConfig,
          licenseInfoFormConfig : licenseInfoFormConfig,
          fromTitle             : fromTitle
      });
  }

  render() {
    return (
        <AddDriver
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
          jobInfoFormConfig                 = {this.state.jobInfoFormConfig}
          licenseInfoFormConfig             = {this.state.licenseInfoFormConfig}
          fromTitle                         = {this.state.fromTitle}
          handleBoundFormUpdate             = {this.handleBoundFormUpdate}
          handleBoundFormJobInfoUpdate      = {this.handleBoundFormJobInfoUpdate}
          handleBoundFormLicenseInfoUpdate  = {this.handleBoundFormLicenseInfoUpdate}
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
const connectedAddDriverContainer = connect(mapStateToProps)(AddDriverContainer);
export { connectedAddDriverContainer as AddDriverContainer };
