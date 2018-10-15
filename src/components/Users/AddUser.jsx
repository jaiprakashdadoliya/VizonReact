import React from 'react';
import {Button, Modal, Tabs, Tab, DropdownButton, title} from 'react-bootstrap';
import Select from 'react-select';


export class AddUser extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handle_close = this.handle_close.bind(this);
  }

handle_close() {
  this.props.add_user_hide_handle();
}
render() {
  return (
    <div>
      <Modal show={this.props.add_user_show} onHide={this.handle_close}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="classNameroom-img">
                  <div className="upload-img">
                    <i className="fa fa-cloud-upload-alt fa-3x"></i><br/>
                    Click here to upload photo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Rahul sharma"/>
                  <label className="control-label">Full Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Select
                      className="custom-select"
                      options={[
                          { value: '1', label: 'Teacher' },
                          { value: '1', label: 'Accountant' },
                          { value: '1', label: 'Bus manager' },
                          { value: '1', label: 'School admin' }
                      ]}
                  />
                  <label className="control-label">User Type</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="+911234567890"/>
                  <label className="control-label">Contact No</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="firstname@email.com"/>
                  <label className="control-label">Email</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn text-btn red" onClick={this.handle_close}>Close</Button>
          <Button className="btn text-btn green">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}
