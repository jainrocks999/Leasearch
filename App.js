import React from 'react';
import { View,Text,StyleSheet,SafeAreaView ,StatusBar} from 'react-native';
import AppRoot from './src/navigation';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
export default class App extends React.Component{
 render(){
    return (
      <SafeAreaView style={{flex:1}}>
      <Provider store={Store}>
      <AppRoot/>
      </Provider>
    
      </SafeAreaView>
    );
  }

};