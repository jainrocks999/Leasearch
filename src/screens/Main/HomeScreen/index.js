import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  TextInput,
  StatusBar,
  ImageBackground,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import HomeScreenStyle from './style';
import {connect} from 'react-redux';

import {SliderBox} from 'react-native-image-slider-box';
import Loader from '../../../Util/loading';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  renderSeparator = () => {
    return <View style={HomeScreenStyle.flatlistItemSeperator} />;
  };
  constructor() {
    super();
  }

  openurl = (data) => {
    const {navigation, Menu, Footer, NewsFeed} = this.props;
    NewsFeed.map((item, index) => {
      if (index == data) {
        Linking.openURL(item.link);
      }
    });
  };

  render() {
    let arr = [];
    const {navigation, Menu, Footer, isFetching, NewsFeed} = this.props;
    NewsFeed.map((item, key) => arr.push(item.image));

    return (
      <View style={HomeScreenStyle.container}>
        <SafeAreaView>
          {isFetching ? <Loader /> : null}
          <StatusBar
            barStyle="light-content"
            hidden={true}
            backgroundColor="red"
            translucent={true}
          />
        </SafeAreaView>

        <View>
          <View style={HomeScreenStyle.header}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HomeScreenPage');
              }}>
              <View>
                <Image
                  source={require('../../../assets/Icons/homeIcon.png')}
                  style={HomeScreenStyle.homeIcon}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SearchModuleScreen');
              }}>
              <Image
                source={require('../../../assets/Icons/searchIcon.png')}
                style={HomeScreenStyle.searchIcon}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          </View>
          <View style={HomeScreenStyle.iconView}>
            <Image
              source={require('../../../assets/Icons/logo_small.png')}
              //resizeMode={'center'}
              style={HomeScreenStyle.smallLogo}
            />
          </View>
        </View>
        <ScrollView style={HomeScreenStyle.container}>
          <View style={HomeScreenStyle.imageContainer}>
            <View style={HomeScreenStyle.SliderboxContainer}>
              <SliderBox
                images={arr}
                resizeMode={'stretch'}
                onCurrentImagePressed={(arr) => this.openurl(arr)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={10}
                autoplay
                circleLoop
                ImageComponentStyle={HomeScreenStyle.ImageComponentStyle}
              />
            </View>
          </View>
          <View style={HomeScreenStyle.flatlistContainer}>
            <FlatList
              style={HomeScreenStyle.flatlist}
              data={Menu}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={HomeScreenStyle.flatlistItem}
                  onPress={() =>
                    this.props.navigation.navigate('SearchPage', {
                      MenuId: item.title,
                      Index: index,
                    })
                  }>
                  <ImageBackground
                    style={HomeScreenStyle.list}
                    source={{uri: item.image}}
                    resizeMode={'cover'}
                    imageStyle={{opacity: 0.5}}>
                    <View style={HomeScreenStyle.textContainer}>
                      <Text style={HomeScreenStyle.text}>{item.title}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.toString()}
            />
          </View>
        </ScrollView>

        <View style={HomeScreenStyle.bottomTabView}>
          <FlatList
            data={Footer}
            reverse
            horizontal={true}
            renderItem={({item}) => (
              <View style={HomeScreenStyle.bottomTabContainer}>
                <View style={HomeScreenStyle.bottomTabInnerContainer}>
                  <Image
                    style={HomeScreenStyle.list}
                    source={{uri: item.image}}
                  />
                  <Text
                    style={[
                      HomeScreenStyle.text,
                      {fontWeight: '100', fontSize: 12},
                    ]}>
                    {item.title}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
    Footer: state.Footer,
    NewsFeed: state.NewsFeed,
  };
};
export default connect(mapStateToProps)(HomeScreen);
