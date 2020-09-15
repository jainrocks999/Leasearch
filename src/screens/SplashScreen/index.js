import React from 'react';
import {
  Image,
  View,
  
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './style';
import Axios from 'axios';
import axios from 'axios';

import { connect } from 'react-redux';

 class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }
  
   fetchData=async()=>{
   this.props.dispatch({type:'Fetch_Menu_Request',url:'menu'})
   this.props.dispatch({type:'Fetch_Footer_Request',url:'footer/icons'})
   this.props.dispatch({type:'Fetch_News_Feed_Request',url:'news'})
  setTimeout(() => this.props.navigation.navigate('HomeScreenPage'), 2000);
   }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center'}}>
      <ImageBackground
        source={require('../../assets/Icons/splash.png')}
        style={styles.ab}
        >
        
         
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
 <View style={{flex:1,justifyContent:'center'}}>
        <View style={styles.view}>
          <Image
            source={require('../../assets/Icons/logo.png')}
            style={{
              width: '90%',
              height: '90%',
              justifyContent:'center',
              backgroundColor: 'transparent',
            }}
           // resizeMode={'contain'}
          />
        </View>
        <View style={{justifyContent:'center', alignItems:'center',}}>
          <Text style={styles.search}>SEARCH {'&'} SEIZURE </Text>
       </View>
          </View>
          <View style={{justifyContent:'center',margin:20}}>
          <Text style={styles.lea}>LEA.ONE </Text>
          </View>
          
      </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log('data '+JSON.stringify(state.isFetching))
  console.log('data '+JSON.stringify(state.Menu))
  return{
    isFetching:state.isFetching,
    Menu:state.Menu,
  }
}
  export default connect(mapStateToProps)(SplashScreen)