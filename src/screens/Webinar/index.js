import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

var arr = [
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'FOURTH AMENDMENT',
  },
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'SEARCHES'},
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'SEIZURES'},
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'WARRANTS'},
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'WARRANTLESS SEARCHES',
  },
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'WARRANTLESS SEIZURES',
  },
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'Cotegory Name'},
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'Cotegory Name'},
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'Cotegory Name'},
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'Cotegory Name'},
  {image: require('../../assets/Images/tree.jpg'), ItemName1: 'Cotegory Name'},
];

export default class Webinar extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      // <Image
      //   style={{height: 20, width: 20, margin: 5}}
      //   source={require('../../assets/Images/web.png')}
      // />
      <Icon name="laptop" size={40} color="#1865A8" />
    ),
  };
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
  render() {
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />

        <View style={{width: '100%'}}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{height: 40, width: 30}}
              onPress={() => this.props.navigation.navigate('Details')}>
              <Image
                source={require('../../assets/Images/menu2.jpg')}
                style={styles.menu}
                resizeMode={'stretch'}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/Images/search.png')}
              style={{width: 30, height: 25}}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.iconView}>
            <Image
              source={require('../../assets/Images/logo2_small.png')}
              //style={{width: 65, height: 65}}
              resizeMode={'cover'}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>
              IMAGES THAT WILL BE CHANGED PERIODICALLY.{'\n'}
              SWIPING RIGHT/LEFT SHOWS{'\n'} NEXT IMAGE
            </Text>
          </View>
        </View>
        <View style={{padding: 10}}>
          <FlatList
            style={{width: '100%'}}
            data={arr}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={this.renderSeparator}
            numColumns={2}
            renderItem={({item}) => (
              <ImageBackground
                style={styles.list}
                source={require('../../assets/Icons/imgIcon.png')}
                resizeMode={'cover'}
                imageStyle={{opacity: 0.5}}>
                {/* <View style={styles.listView}>
                  <Image
                    style={{height: 60, width: 60}}
                    source={item.image}
                    resizeMode={'contain'}
                  />
                </View> */}
                <View style={{marginTop: 5}}>
                  <Text style={styles.text}>{item.ItemName1}</Text>
                </View>
              </ImageBackground>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
