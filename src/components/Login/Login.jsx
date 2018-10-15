import React from 'react';
import { Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Favicon from 'react-favicon';
/**
 * Login
 *
 * @package                Vizon
 * @subpackage             Login
 * @category               Presentational Component
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This component is reponsible to show the login form
 */
export const Login = (props) => {
    return (
        <div className="main-container">
        <Favicon url="https://static1.squarespace.com/static/5a1454447131a597cf39d061/t/5b6489bc562fa710cb0249ba/favicon.ico" />
            <div className="col-md-4 col-md-offset-4 login">
                <div className="before-login">
                    <div className="login-logo text-center">
                    <img src={require('../../assets/images/login-logo.png')} />
                    </div>
                    <h1 className="text-center">Sign in to <span>Vizon</span> system</h1>
                    <small className="text-center">Enter your details below.</small>

                    {/* Show server side Error message */}
                    { props.error_message &&
                        <Alert bsStyle="danger">
                                { props.error_message }
                        </Alert>
                    }
                    <div className="feilds-box">
                        <div className={props.payload.userValidate.email.isValid ? 'form-group' : 'form-group has-error'}>
                            <input  type="text"
                                    name="email"
                                    onChange={props.handle_input_change}
                                    placeholder="Email"
                                    value={props.payload.email}
                                    className="form-control" />
                            <label className="control-label">Email</label>
                            <span className="help-block">{props.payload.userValidate.email.message}</span>

                        </div>
                        <div className={props.payload.userValidate.password.isValid ? 'form-group password-field' : 'form-group password-field has-error'}>
                            <input  type="password"
                                    name="password"
                                    onChange={props.handle_input_change}
                                    placeholder="Password"
                                    onKeyDown={props.handle_enter_press_submit}
                                    className="form-control"  />
                            <label className="control-label">Password</label>

                            <span className="help-block">{props.payload.userValidate.password.message}</span>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><Link to={'/forgotpassword'}>Forgot Password?</Link></div>
                            <div className="col-md-6 text-right">
                                        <a href="javascript:void(0);"
                                            disabled={props.submitted ? 'disabled' : ''}
                                            className="btn blue text-btn"
                                            onClick={props.handle_login_submit}>{props.submitted ? 'Please wait..' : 'Login'}
                                        </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
