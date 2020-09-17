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
import styles from './styles';
import Loader from '../../Util/loading';
import { connect } from 'react-redux';
import {SliderBox} from 'react-native-image-slider-box';
let MenuId='';
class ArticleDetail extends React.Component {

  constructor(props) {
            super(props);

            this.fetchData();
        }


       fetchData=async()=>{
          MenuId=this.props.navigation.getParam('DetailsKey');
         console.log('hhohoh'+MenuId)
        
     this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ MenuId})
       }


       loadApi=async(ID)=>{
         console.log('jaianiajijai'+ID)
          this.props.dispatch({type:'Fetch_Menu_Details_Request',url:'page/'+ ID})
       }
RenderData(){
  const {MenuDetail} = this.props;

  console.log('hhhhhhhhhhhhhhhhhh pre'+MenuDetail.prevPostID)
  console.log('hhhhhhhhhhhhhhhhhh next'+MenuDetail.nextPostID)
if(MenuDetail.prevPostID == ''){
  return(
    <View
           style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
                position: 'absolute',
                bottom: 10,
           }}>

          <View>
           <TouchableOpacity style={{height:50,padding:20,marginTop:10}}
          onPress={()=> this.loadApi(MenuDetail.nextPostID)}
          >
          <Image
                source={require('../../assets/Icons/right_arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          </View>
          </View>
  )

}else if(MenuDetail.nextPostID == ''){
  return(
    <View
           style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-start',
                position: 'absolute',
                bottom: 10,
           }}>
           <View>
              <TouchableOpacity style={{height:50,padding:20,marginTop:10}}
          onPress={()=> this.loadApi(MenuDetail.prevPostID)}
          >
          <Image
                 source={require('../../assets/Icons/left_arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          </View>
          </View>
  )

}else{
  return(
    <View
           style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 10,
           }}>
           <View>
              <TouchableOpacity style={{height:50,padding:20,marginTop:10}}
          onPress={()=> this.loadApi(MenuDetail.prevPostID)}
          >
          <Image
                 source={require('../../assets/Icons/left_arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          </View>
          <View>
           <TouchableOpacity style={{height:50,padding:20,marginTop:10}}
          onPress={()=> this.loadApi(MenuDetail.nextPostID)}
          >
          <Image
                source={require('../../assets/Icons/right_arrow.png')}
                 style={{height:20,width:30,tintColor:'white'}}
                resizeMode={'cover'}
              />
          </TouchableOpacity>
          </View>
          </View>
  )
}
}
  render() {
    const {MenuDetail,isFetching} = this.props;
    console.log('Details data Check '+MenuDetail.image_url)
    console.log('Details data Check '+MenuDetail.title)
    console.log('Details data Check '+MenuDetail.description)
    return (
      <View style={{flex: 1,backgroundColor:'black'}}>
       <ScrollView>
        {isFetching
        ?<Loader/> 
         :null}
        <StatusBar
          barStyle="dark-content"
          hidden={true}
          backgroundColor="transparent"
          translucent={true}
        />
         
           <ImageBackground  source={{uri:MenuDetail.image_url}} style={{
               width: '100%',
               marginTop: 2,
               height:200
           }}>
            <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('HomeScreenPage')}
          >
          <Image
                  source={require('../../assets/Images/pp.png')}
                  style={styles.menu}
                  resizeMode={'contain'}
                />
          </TouchableOpacity>
           {this.RenderData()}
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
                marginTop: 20,
                fontSize: 17,
                padding:10,
                marginBottom:4,
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
  console.log('this jngkjfngkjfgkfbgjkfkfng'+state.MenuDetail)
  return {
    isFetching: state.isFetching,
    MenuDetail: state.MenuDetail,
  };
};
export default connect(mapStateToProps)(ArticleDetail);