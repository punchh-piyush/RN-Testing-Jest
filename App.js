import React from 'react';
import {StyleSheet, View} from 'react-native';
import Welcome from './src/Welcome';
import Async from './src/Async';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Welcome />
      <Async />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
