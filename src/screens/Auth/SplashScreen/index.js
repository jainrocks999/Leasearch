import React from 'react';
import {Image, View, Text, ImageBackground, StatusBar} from 'react-native';
import SplashStyles from './style';

import {connect} from 'react-redux';

class SplashScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.fetchData();
  }

  fetchData = async () => {
    this.props.dispatch({type: 'Fetch_Menu_Request', url: 'menu'});
    this.props.dispatch({type: 'Fetch_Footer_Request', url: 'footer/icons'});
    this.props.dispatch({type: 'Fetch_News_Feed_Request', url: 'news'});
    setTimeout(() => this.props.navigation.navigate('HomeScreenPage'), 2000);
  };

  render() {
    return (
      <View style={SplashStyles.container}>
        <ImageBackground
          source={require('../../../assets/Icons/splash.png')}
          style={SplashStyles.backgroundImage}>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="transparent"
            translucent={true}
          />
          <View style={SplashStyles.container}>
            <View style={SplashStyles.logoContainer}>
              <Image
                source={require('../../../assets/Icons/logo.png')}
                style={SplashStyles.logo}
              />
            </View>
            <View style={SplashStyles.SearchSeizerContainer}>
              <Text style={SplashStyles.SearchSeizer}>
                SEARCH {'&'} SEIZURE{' '}
              </Text>
            </View>
          </View>
          <View style={SplashStyles.leaContainer}>
            <Text style={SplashStyles.lea}>LEA.ONE </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
  };
};
export default connect(mapStateToProps)(SplashScreen);
