import React from 'react';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';
import { Header } from './Header'
import { headerActions } from '../../_actions';

/**
 * HeaderContainer
 *
 * @package                Vizon
 * @subpackage             HeaderContainer
 * @category               Container Component
 * @DateOfCreation         22 August 2018
 * @ShortDescription       This component is reponsible for logic in header
 */
class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Bind the events to the current class
        this.handle_logout = this.handle_logout.bind(this);
    }

    /**
    * @DateOfCreation        22 August 2018
    * @ShortDescription      This function is responsible to handle the logout event
    * @return                Nothing
    */
    handle_logout() {
        const { dispatch }  = this.props;
        dispatch(headerActions.logout());
    }

    /**
    * @DateOfCreation        22 August 2018
    * @ShortDescription      This function is responsible to show header
    * @return                View
    */
    render() {
        return (
            <div >
                <Header
                    handle_logout = {this.handle_logout}
                    logged_in_user_name = { this.props.user.first_name+' '+this.props.user.last_name }
                    logged_in_user_picture = { this.props.user.profile_picture}
                    logged_in_company_name = { this.props.user.company_name}
                    logged_in_type = { this.props.user.user_type}
                />
            </div>
        );
    }
}

/**
* @DateOfCreation        22 August 2018
* @ShortDescription      This function is responsible to connect store to props
* @return                View
*/
function mapStateToProps(state) {
    const { is_logout_done, success_message, error_message } = state.headerReducer;
    const { user_details } = state.userLogin;
    // console.log('dsadsa', state.session.user);
    return {
        is_logout_done,
        success_message,
        error_message,
        user: state.session.user,
        authenticated: state.session.authenticated,
    };
}

// Connection with State
const connectedHeaderContainer = connect(mapStateToProps)(HeaderContainer);
export { connectedHeaderContainer as HeaderContainer };
