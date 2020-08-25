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
import { connect } from 'react-redux';

 class SplashScreen extends React.Component {
  componentDidMount() {
this.props.dispatch({type:'Fetch_Menu_Request',url:'menu'})
    setTimeout(() => this.props.navigation.navigate('AppStack'), 2000);
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/Icons/splash.png')}
        style={styles.ab}
        resizeMode={'cover'}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />

        <View style={styles.view}>
          <Image
            source={require('../../assets/Icons/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            height: '35%',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.search}>SEARCH {'&'} SEIZURE</Text>
          <Text style={styles.lea}>LEA.ONE</Text>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    isFetching:state.Menu.isFetching,
    Menu:state.Menu.Menu,
  }
}
  export default connect(mapStateToProps)(SplashScreen)