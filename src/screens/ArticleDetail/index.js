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
import { connect } from 'react-redux';
import {SliderBox} from 'react-native-image-slider-box';

var arr = [
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
];

class ArticleDetail extends React.Component {
  constructor(props) {
            super(props);
            this.fetchData();
        }
       fetchData=async()=>{
         const MenuId=this.props.navigation.getParam('MenuId')
         console.log('hhohoh'+MenuId)
     this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ MenuId})
     
       }
  render() {
    const {navigation, MenuDetail} = this.props;
    console.log('any data ',JSON.stringify(MenuDetail))
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
          <TouchableOpacity style={{width:'100%',height:50,padding:20,marginTop:10}}
          onPress={()=> this.props.navigation.navigate('Dashboard')}
          >
          <Image
                source={require('../../assets/Icons/arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          <View style={styles.image}>
           <Image source={{"uri" : MenuDetail.image_url}} style={{
               width: '100%',
               marginTop: 2,
               height:'100%'
           }}>
             
           </Image>
            </View>
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