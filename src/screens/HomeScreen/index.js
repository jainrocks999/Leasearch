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
import styles from './style';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {SliderBox} from 'react-native-image-slider-box';
import Loader from '../../Util/loading';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class HomeScreen extends React.Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
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
    const {navigation, Menu, Footer,isFetching, NewsFeed} = this.props;
    NewsFeed.map((item, key) => arr.push(item.image));

    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <SafeAreaView>
        {isFetching
        ?<Loader/> 
         :null}
          <StatusBar
            barStyle="light-content"
            hidden={true}
            backgroundColor="red"
            translucent={true}
          />
        </SafeAreaView>

        <View style={{width: '100%'}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HomeScreenPage');
              }}>
              <View>
                <Image
                  source={require('../../assets/Images/pp.png')}
                  style={styles.menu}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SearchModuleScreen');
              }}>
              <Image
                source={require('../../assets/Images/search.png')}
                style={{width: 25, height: 25, marginRight: 10}}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <Image
              source={require('../../assets/Images/logo2_small.png')}
              style={{width: 60, height: 66, marginTop: 10}}
            />
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={styles.imageContainer}>
            <View style={styles.image}>
              <SliderBox
                images={arr}
                //sliderBoxHeight={300}
                // onPress={this.openurl(arr)}
                // disableOnPress={true}
                resizeMode={'stretch'}
                onCurrentImagePressed={
                  (arr) =>
                    // Alert.alert(arr)
                    this.openurl(arr)
                
                }
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={10}
                autoplay
                circleLoop
                ImageComponentStyle={{
                  width: '92%',
                  marginTop: 2,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          <View style={{padding: 4}}>
            <FlatList
              style={{width: '99%', padding: 10}}
              data={Menu}
              showsVerticalScrollIndicator={false}
             // ItemSeparatorComponent={this.renderSeparator}
              numColumns={2}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{width: '50%', height: 100, padding: 4}}
                  onPress={() =>
                    this.props.navigation.navigate('SearchPage', {
                      MenuId: item.title,
                      Index: index,
                    })
                  }>
                  <ImageBackground
                    style={styles.list}
                    source={{uri: item.image}}
                    resizeMode={'cover'}
                    imageStyle={{opacity: 0.5}}>
                    <View style={{marginTop: 5, paddingHorizontal: 10}}>
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            keyExtractor={(item) => item.toString()}
            />
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: '#0C1C5B',
          }}>
          <FlatList
            data={Footer}
            reverse
            horizontal={true}
            renderItem={({item}) => (
              <View
                style={{
                  height: 55,
                  width: screenWidth / 3,
                  justifyContent: 'center',
                }}>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image style={styles.list} source={{uri: item.image}} />
                    <Text
                      style={[styles.text, {fontWeight: '100', fontSize: 12}]}>
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