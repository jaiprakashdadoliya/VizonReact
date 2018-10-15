import React from 'react';
import {Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import Favicon from 'react-favicon';

export const Header = (props) => {
    let login_user_name = '';
    if(props.logged_in_type == 'company'){
      login_user_name = props.logged_in_company_name
    } else {
      login_user_name = props.logged_in_user_name
    }
    return (
        <div className="col-md-12 col-sm-12 clearfix top-menu">
        <Favicon url="https://static1.squarespace.com/static/5a1454447131a597cf39d061/t/5b6489bc562fa710cb0249ba/favicon.ico" />
            <Nav className="user-info pull-right pull-none-xsm">
                <NavDropdown className="profile-info dropdown" eventKey={1}
                    title={
                        <div>
                          <img className="img-circle"
                              src={ props.logged_in_user_picture }
                              alt="Photo"
                              width="44"
                              height="44"
                        />
                        {login_user_name}
                      </div>
                    }

                    id="dropdown-menu">
                    
                    <MenuItem eventKey={1.3} onClick={props.handle_logout}>Logout</MenuItem>
                </NavDropdown>
            </Nav>
        </div>
    );
}

