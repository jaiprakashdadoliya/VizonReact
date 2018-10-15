import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Favicon from 'react-favicon';

/**
 * ForgotPassword
 *
 * @package                Vizon
 * @subpackage             ForgotPassword
 * @category               Presentational Component
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This component is reponsible to show the Forgot password form
 */
export const ForgotPassword = (props) => {
    return (
            <div className="main-container">
            <Favicon url="https://static1.squarespace.com/static/5a1454447131a597cf39d061/t/5b6489bc562fa710cb0249ba/favicon.ico" />
              <div className="main-content">
                <div className="col-md-4 col-md-offset-4 login">
                    <div className="before-login">
                        <div className="login-logo text-center">
                            <img src={require('../../assets/images/login-logo.png')} />
                        </div>

                        <h1 className="text-center">Forgot your password</h1>
                        <small className="text-center">Enter your details below.</small>

                        {/* Show server side Success message */}
                        {props.success_message &&
                        <Alert bsStyle="success">
                            {props.success_message}
                        </Alert>
                        }

                        {/* Show server side Error message */}
                        {props.error_message &&
                        <Alert bsStyle="danger">
                            {props.error_message}
                        </Alert>
                        }

                        <div className="feilds-box">
                            <div className={props.payload.userValidate.email.isValid ? 'form-group' : 'form-group has-error'}>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={props.handle_input_change}
                                    placeholder="Email"
                                    value={props.email}
                                    className="form-control"
                                />
                                <label className="control-label">Email</label>
                                <span className="help-block">{props.payload.userValidate.email.message}</span>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="signup">
                                        <Link to="/">Go to login?</Link>
                                    </div>
                                </div>
                                <div className="col-md-4 text-right">
                                    <a href="javascript:void(0);" className="btn blue text-btn" onClick={props.handle_forgot_submit}>Send</a>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
              </div>
            </div>
    );
}
