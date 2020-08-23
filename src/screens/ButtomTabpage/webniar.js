import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './style';
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
      title: 'CALENDAR',
    tabBarIcon: ({tintColor}) => (
      <Icon name="calendar" size={30} color="#1865A8" />
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
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
 <TouchableOpacity
          style={styles.icon}
          onPress={this.props.navigation.toggleDrawer}>
          <Image
            source={require('../../assets/Images/menu2.jpg')}
            resizeMode={'stretch'}
            style={styles.iconMenu}
          />
        </TouchableOpacity>
        <View style={styles.iconSearch}>
          <Image
            source={require('../../assets/Icons/search_icon.png')}
            style={styles.iconSearch1}
            resizeMode={'contain'}
          />

          <TextInput
            placeholder="Search for all Categories,topic etc"
            placeholderTextColor="grey"
            style={styles.input}
          />
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
