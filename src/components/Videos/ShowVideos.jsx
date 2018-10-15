import React from 'react';
import { connect } from 'react-redux';
import {Button, Modal, Tabs, Tab, DropdownButton, title, Link, Alert} from 'react-bootstrap';
import "react-table/react-table.css";
import { utilityHelper } from '../../_helpers';
import {Loading} from '../Common/Loading';


class ShowVideos extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if(this.props.videoLoader){
            return (
                <div>
                    <Modal show={this.props.showVideo} onHide={this.props.hideVideoModalOpen} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <Loading/>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn text-btn red" onClick={this.props.hideVideoModalOpen}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        } else {
            return (
                <div>
                    <Modal show={this.props.showVideo} onHide={this.props.hideVideoModalOpen} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Video</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-md-12">
                                    <video width="580" height="580" controls>
                                        <source src={this.props.videoUrl} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn text-btn red" onClick={this.props.hideVideoModalOpen}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }

    }

}

/**
 * @DateOfCreation        23 August 2018
 * @ShortDescription      This function is responsible to connect store to props
 * @return                View
 */
function mapStateToProps(state) {
    const { locationList, locationLoader } = state.tripsReducer;
    return {
        locationList,
        locationLoader
    };
}

// Connection with State
const connectedShowVideos = connect(mapStateToProps)(ShowVideos);
export { connectedShowVideos as ShowVideos };