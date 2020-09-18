import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import subHomeDetails from './styles';
import Loader from '../../../Util/loading';
import {connect} from 'react-redux';
let MenuId = '';
class ArticleDetail extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);

    this.fetchData();
  }

  fetchData = async () => {
    MenuId = this.props.navigation.getParam('DetailsKey');

    this.props.dispatch({
      type: 'Fetch_Menu_Details_Request',
      url: 'page/' + MenuId,
    });
  };

  loadApi = async (ID) => {
    this.props.dispatch({
      type: 'Fetch_Menu_Details_Request',
      url: 'page/' + ID,
    });
  };
  RenderData() {
    const {MenuDetail} = this.props;

    if (MenuDetail.prevPostID == '') {
      return (
        <View style={subHomeDetails.arrowContainer}>
          <View>
            <TouchableOpacity
              style={subHomeDetails.arrowTouch}
              onPress={() => this.loadApi(MenuDetail.nextPostID)}>
              <Image
                source={require('../../../assets/Icons/right_arrow.png')}
                style={subHomeDetails.arrow}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (MenuDetail.nextPostID == '') {
      return (
        <View style={subHomeDetails.arrowContainer}>
          <View>
            <TouchableOpacity
              style={subHomeDetails.arrowTouch}
              onPress={() => this.loadApi(MenuDetail.prevPostID)}>
              <Image
                source={require('../../../assets/Icons/left_arrow.png')}
                style={subHomeDetails.arrow}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 10,
          }}>
          <View>
            <TouchableOpacity
              style={subHomeDetails.arrowTouch}
              onPress={() => this.loadApi(MenuDetail.prevPostID)}>
              <Image
                source={require('../../../assets/Icons/left_arrow.png')}
                style={subHomeDetails.arrow}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={subHomeDetails.arrowTouch}
              onPress={() => this.loadApi(MenuDetail.nextPostID)}>
              <Image
                source={require('../../../assets/Icons/right_arrow.png')}
                style={subHomeDetails.arrow}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  render() {
    const {MenuDetail, isFetching} = this.props;
    return (
      <View style={subHomeDetails.container}>
        <ScrollView>
          {isFetching ? <Loader /> : null}
          <StatusBar
            barStyle="dark-content"
            hidden={true}
            backgroundColor="transparent"
            translucent={true}
          />

          <ImageBackground
            source={{uri: MenuDetail.image_url}}
            resizeMode={'stretch'}
            style={subHomeDetails.imageBackground}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomeScreenPage')}>
              <Image
                source={require('../../../assets/Icons/homeIcon.png')}
                style={subHomeDetails.homeIcon}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            {this.RenderData()}
          </ImageBackground>

          <View style={subHomeDetails.mainView}>
            <Text style={subHomeDetails.titleText}>{MenuDetail.title}</Text>
            <Text style={subHomeDetails.categoryText}>
              Category | July 15,2020
            </Text>
            <Text style={subHomeDetails.description}>
              {MenuDetail.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    MenuDetail: state.MenuDetail,
  };
};
export default connect(mapStateToProps)(ArticleDetail);
