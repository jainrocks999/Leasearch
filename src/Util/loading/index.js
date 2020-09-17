import React from 'react';
import {View,Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loader extends React.Component{
     constructor(props) {
   
    super(props);
this.state={
    spinner:true
}
     }
    render(){
        return(
            <View style={{flex:1}}>
              <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{color:'#fff'}}
        /> 
            </View>
        )
    }
}