import React from 'react';
import { Button, Modal, Tabs, Tab, DropdownButton, title, Alert, Link } from 'react-bootstrap';
import Select from 'react-select';

import {FxForm} from '../../_packages/fx-form';

export const AddCompany = (props) => {
  return (
    <div>
      <Modal show={props.add_user_show} onHide={props.handle_close}>
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
