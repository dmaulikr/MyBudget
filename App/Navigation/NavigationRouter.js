import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

// screens
import Dashboard from '../Containers/Dashboard';

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene initial key='dashboard' component={Dashboard} title='Dashboard' />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
