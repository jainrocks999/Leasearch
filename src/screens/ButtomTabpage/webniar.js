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
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {SliderBox} from 'react-native-image-slider-box';

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
var originText = 'LEGAL UPDATE PODCAST';
 class Webinar extends React.Component {
  static navigationOptions = {
    title: `LEGAL UPDATE ${'\n'}PODCAST`,
    tabBarIcon: ({tintColor}) => (
      <Icon name="laptop" size={25} color="#1865A8" />
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
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // require('../../assets/Icons/imgIcon.png'), // Local image
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
      ],
    };
  }

  render() {
    const {navigation,Menu} = this.props;
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
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Image
                source={require('../../assets/Images/menu2.jpg')}
                style={styles.menu}
                resizeMode={'stretch'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Search');
              }}>
              <Image
                source={require('../../assets/Images/search.png')}
                style={{width: 25, height: 25,marginRight:10}}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <Image
              source={require('../../assets/Images/logo2_small.png')}
              style={{width: 60, height: 66,marginTop:10}}
              
            />
          </View>
        </View>
<ScrollView style={{flex:1}}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <SliderBox
              images={this.state.images}
              //sliderBoxHeight={300}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
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
        <View style={{padding:4}}>
          <FlatList
            style={{width: '99%'}}
            data={Menu}
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
                <View style={{marginTop: 5, paddingHorizontal: 10}}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </ImageBackground>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    isFetching:state.isFetching,
    Menu:state.Menu,
  }
}
  export default connect(mapStateToProps)(Webinar)