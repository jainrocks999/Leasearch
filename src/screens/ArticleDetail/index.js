import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
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
let MenuId='';
class ArticleDetail extends React.Component {
  constructor(props) {
            super(props);

            this.fetchData();
        }
       fetchData=async()=>{
          MenuId=this.props.navigation.getParam('DetailsKey')
         console.log('hhohoh'+MenuId)
     this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ MenuId})
    //   if(this.props.MenuDetail.image_url == null){

    // }else{
    //   this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ MenuId})

    // }
       }


       loadApi=async(ID)=>{
         console.log('jaianiajijai'+ID)
          this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ ID})
       }
  render() {
    const {MenuDetail} = this.props;
    if(MenuDetail.image_url == null){

    }else{
      this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ MenuId})

    }
   // console.log('any data ',JSON.stringify(MenuDetail))
    return (
      <View style={{flex: 1}}>
       <ScrollView>
        <StatusBar
          barStyle="dark-content"
          hidden={true}
          backgroundColor="transparent"
          translucent={true}
        />
         
           <ImageBackground source={{uri :MenuDetail.image_url}} style={{
               width: '100%',
               marginTop: 2,
               height:200
           }}>
            <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Dashboard')}
          >
          <Image
                  source={require('../../assets/Images/pp.png')}
                  style={styles.menu}
                  resizeMode={'contain'}
                />
          </TouchableOpacity>
           <View style={{flexdirection:'row',width:'100%', justifyContent: 'flex-end',
                  }}>
           <View style={{width:'49%',justifyContent:'flex-end'}}>
              <TouchableOpacity style={{height:50,padding:20,marginTop:10}}
          onPress={()=> this.loadApi(MenuDetail.prevPostID)}
          >
          <Image
                source={require('../../assets/Icons/arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          </View>
          <View style={{width:'49%'}}>
           <TouchableOpacity style={{height:50,padding:20,marginTop:10}}
          onPress={()=> this.loadApi(MenuDetail.nextPostID)}
          >
          <Image
                source={require('../../assets/Icons/arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          </View>
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