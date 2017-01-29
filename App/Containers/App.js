import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import createStore from '../Redux';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Test</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
