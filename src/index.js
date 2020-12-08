
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene'

class App extends Component {
  render() {
    return (
      
        <Router>
          <Scene key='root'>
            <Scene key='loading' component={LoadingScene} initial={true} hideNavBar={true}></Scene>
            <Scene key='auth' component={AuthScene} hideNavBar={true} />
          </Scene>
        </Router>
    );
  }
}

export default App;


