import React from 'react'
import { StyleSheet,SafeAreaView} from 'react-native'
import Welcome from './src/Welcome';
import Async from './src/Async';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     <Welcome/>
     <Async/>
    </SafeAreaView>  )
}

export default App

const styles = StyleSheet.create({})