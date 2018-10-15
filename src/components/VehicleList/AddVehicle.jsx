import React from 'react';
import {Button, Modal, Tabs, Tab, DropdownButton, title, Alert, Link} from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import {FxForm} from '../../_packages/fx-form';

// export AddVehicle 
export const AddVehicle = (props) => {
  return (
    <div>
      <Modal show={props.add_vehicle_show} onHide={props.add_vehicle_hide_handle} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.fromTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { props.errorMsg &&
          <Alert bsStyle="danger">
                  { props.errorMsg }
          </Alert>
        }
        <div className="row">           
            <FxForm
                config={props.addVehicleFormConfig}
                ref={(form) => {
                    props.handleBoundFormVehicleFormUpdate(form);
                }}
            />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn text-btn red" onClick={props.add_vehicle_hide_handle}>Close</Button>
          <a href="javascript:void(0);" className="btn text-btn green" disabled={props.submitted ? 'disabled' : ''} onClick={props.handleVehicleSubmit}>{props.submitted ? 'Please wait..' : 'Save'}</a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
