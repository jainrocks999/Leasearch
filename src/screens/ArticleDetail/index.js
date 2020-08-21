import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './styles';

var arr = [
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
];

export default class ArticleDetail extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground
          source={require('../../assets/Icons/imgIcon.png')}
          style={styles.ab}
          imageStyle={{opacity: 0.8}}
          resizeMode={'stretch'}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{height: 40, width: 30}}
              onPress={() => this.props.navigation.openDrawer}>
              <Image
                source={require('../../assets/Images/menu2.jpg')}
                style={styles.menu}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 130,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingRight: 20,
            }}>
            <TouchableOpacity
              style={styles.arrows}
              onPress={() => this.props.navigation.openDrawer}>
              <Image
                style={{height: 20, width: 30}}
                source={require('../../assets/Icons/left_arrow.png')}
                resizeMode={'stretch'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.arrows}
              onPress={() => this.props.navigation.openDrawer}>
              <Image
                style={{height: 20, width: 30}}
                source={require('../../assets/Icons/right_arrow.png')}
                resizeMode={'stretch'}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 2 / 3,
            backgroundColor: 'black',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <View style={{paddingHorizontal: 10, paddingRight: 20}}>
            <Text
              style={{
                marginTop: 30,
                fontSize: 22,
                fontWeight: 'bold',
                color: '#FBFBFB',
              }}>
              Article title here.Article title here
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                color: '#8C8C8C',
              }}>
              Category | July 15,2020
            </Text>
            <Text
              style={{
                marginTop: 30,
                fontSize: 18,
                color: '#FBFBFB',
              }}>
              This same template will be used for PAGES and POSTS. Header will
              be the Featured Image with slight opaque overlay. Arrows to
              navigate back/forth. Pages should support embedded VIMEO videos.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
