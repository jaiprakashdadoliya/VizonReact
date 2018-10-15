import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import MetisMenu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';
import { configConstants } from '../../_constants';
import { utilityHelper } from '../../_helpers';


export class SideMenu extends React.Component {
  /**
   * @DateOfCreation        22 August 2018
   * @ShortDescription      Contructor is responsible to function declaration and define intial state
   * @param                 props
   * @return                Nothing
   */
    constructor(props, context) {
        super(props, context);
    }
    render() {
      var currentUser = utilityHelper.getUserInfo().user_type;
      let menu = []

      if(currentUser == configConstants.USER_TYPE_ADMIN){

          menu = [
                {
                  label: 'Dashboard',
                  to: 'dashboard',
                },
                {
                  label: 'Companies',
                  to: 'companies'
                }
              ]

       }else{
          menu = [
              {
                  label: 'Dashboard',
                  to: 'dashboard',
              },
              {
                  label: 'Drivers',
                  to: 'drivers',
              },            
              {
                  label: 'Vehicles',
                  content: [
                      {
                          label: 'Vehicle List',
                          to: 'vehicle-list',
                      },
                      {
                          label: 'Vehicle Assignment',
                          to: 'vehicle-assignment',
                      }
                      
                  ],
              },
              {
                  label: 'Trips',
                  to: 'trips',
              },
              {
                  label: 'Live Map',
                  to: 'live-map',
              },
              {
                  label: 'Videos',
                  to: 'videos',
              },
              {
                  label: 'Messages',
                  to: 'message',
              },
          ];
       }


       const compMenu = []
        const App = (props) => (
          <div>
            <MetisMenu
              content={menu}
              LinkComponent={RouterLink}
            />
          </div>
        );


      return (
        <div className="sidebar-menu fixed">
            <div className="sidebar-menu-inner">
                <header className="logo-env">
                    <div className="logo">
                        <a href="/dashboard"><img src={require('../../assets/images/inner-logo.png')} /></a>
                    </div>
                </header>
                    <Route path="/" component={App} />
            </div>
        </div>
      );
    }
}
