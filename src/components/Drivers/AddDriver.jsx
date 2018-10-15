import React from 'react';
import { Button, Modal, Tabs, Tab, DropdownButton, title, Alert, Link } from 'react-bootstrap';
import Select from 'react-select';

import {FxForm} from '../../_packages/fx-form';

export const AddDriver = (props) => {
  console.log('Props in props', props);
  return (
    <div>
      <Modal show={props.add_user_show} onHide={props.handle_close} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.fromTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Show server side Error message */}
          { props.error_message &&
              <Alert bsStyle="danger">
                      { props.error_message }
              </Alert>
          }
          
          <h4>Basic Information</h4>                      
          <div className="row">
            <FxForm
                config={props.formConfig}
                ref={(form) => {
                    props.handleBoundFormUpdate(form);
                }}
            />

            <div className="col-md-12">
                <h4>Job Information</h4>
            </div>
            <FxForm
                config={props.jobInfoFormConfig}
                ref={(form) => {
                    props.handleBoundFormJobInfoUpdate(form);
                }}
            />

            <div className="col-md-12">
                <h4>License Information</h4>
            </div>
            <FxForm
                config={props.licenseInfoFormConfig}
                ref={(form) => {
                    props.handleBoundFormLicenseInfoUpdate(form);
                }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn text-btn red" onClick={props.handle_close}>Close</div>
              <a href="javascript:void(0);" className="btn text-btn green" disabled={props.submitted ? 'disabled' : ''}  onClick={props.handleDriverSubmit}>{props.submitted ? 'Please wait..' : 'Save'}</a>
        </Modal.Footer>
      </Modal>
    </div>
    );
}
