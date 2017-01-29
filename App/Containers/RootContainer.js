import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';

class RootContainer extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar />
        <NavigationRouter />
      </View>
    );
  }
}

export default RootContainer;
