import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {SliderBox} from 'react-native-image-slider-box';

var arr = [
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
];
let MenuId = '';
let imgURl = '';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
    };
    this.fetchData();
  }
  fetchData = async () => {
    MenuId = this.props.navigation.getParam('DetailsKey');
    console.log('hhohoh' + MenuId);
    this.props.dispatch({
      type: 'Fetch_Menu_Details_Request',
      url: 'page/' + MenuId,
    });
    //   if(this.props.MenuDetail.image_url == null){

    // }else{
    //   this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ MenuId})

    // }
  };

  loadApi = async (ID) => {
    console.log('jaianiajijai' + ID);

    this.props.dispatch({
      type: 'Fetch_Menu_Details_Request',
      url: 'page/' + ID,
    });
  };
  render() {
    const {MenuDetail} = this.props;
    console.log('mENU dETAILLLLLLLLLLL' + MenuDetail);

    // this.setState({
    //   title: MenuDetail.title,
    //   url: MenuDetail.image_url,
    // });

    console.log('tittleeeeeeeeeee' + this.state.title);
    if (MenuDetail == null) {
      Alert.alert('Data not found');
    } else {
    }

    // console.log(
    //   'kdsfjsgjk sdgkjsdgskdj hsdkjghsdfkjhsdfkh' + MenuDetail.image_url,
    // );
    // Alert.alert(MenuDetail.image_url);

    // if (MenuDetail.image_url == null) {
    //   imgURl = 'http://app.lea.one/wp-content/uploads/2020/08/microphone.png';
    //   console.log('iffffffffffffffffffffff');
    // } else {
    //   // this.props.dispatch({
    //   //   type: 'Fetch_Menu_Details_Request',
    //   //   url: 'page/' + MenuId,
    //   // });

    //   imgURl = MenuDetail.image_url;
    //   console.log('elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    // }

    console.log('any data ', JSON.stringify(MenuDetail));
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView>
          <StatusBar
            barStyle="dark-content"
            hidden={true}
            backgroundColor="transparent"
            translucent={true}
          />

          <ImageBackground
            resizeMode={'stretch'}
            source={{
              uri: MenuDetail.image_url,
            }}
            style={{
              width: '100%',
              height: 250,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomeScreenPage')}>
              <Image
                source={require('../../assets/Images/pp.png')}
                style={styles.menu}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 10,
              }}>
              <View style={{}}>
                <TouchableOpacity
                  style={{height: 50, padding: 20, marginTop: 10}}
                  onPress={() => this.loadApi(MenuDetail.prevPostID)}>
                  <Image
                    source={require('../../assets/Icons/left_arrow.png')}
                    style={{height: 20, width: 30, tintColor: 'white'}}
                    resizeMode={'cover'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  style={{height: 50, padding: 20, marginTop: 10}}
                  onPress={() => this.loadApi(MenuDetail.nextPostID)}>
                  <Image
                    source={require('../../assets/Icons/right_arrow.png')}
                    style={{height: 20, width: 30, tintColor: 'white'}}
                    resizeMode={'cover'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <View
            style={{
              flex: 2 / 3,
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
                {MenuDetail.title}
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
                {MenuDetail.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    MenuDetail: state.MenuDetails,
  };
};
export default connect(mapStateToProps)(ArticleDetail);
