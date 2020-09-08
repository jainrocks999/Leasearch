import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import {withNavigation, DrawerActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

let listarry=[];
 class SearchScreen extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      listdata:[],
      Visible:false,
      itemValue:'',
      images: [
        // require('../../assets/Icons/imgIcon.png'), // Local image
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
      ],
    };
    this.fetchData();

  }

 fetchData=async()=>{
   const {Menu} = this.props;
   let keydata=this.props.navigation.getParam('Key')
   if(keydata == undefined){
     keydata='Search'
   }
   console.log('kapil bb'+Menu)
   console.log('kapil bb'+keydata)
   Menu.map((item, key) => (
listarry.push(item.sub_pages)
    //  this.setState({
    //    listdata:item.sub_pages
    //  })
    
 ))
 }
 logdata(item){
  // console.log('hjhdfhjdbf'+item.title)
   console.log('hjhdfhjdbf'+this.state.Visible)
   if(this.state.Visible == false){
this.setState({
  Visible:true,
  itemValue:item.title,
})
   }else{
     this.setState({
  Visible:false,
  itemValue:item.title,

})
   }

}

renderdata=(item)=>{
console.log('kkoooko'+item.title)
  if (this.state.Visible == true) {
           if(this.state.itemValue == item.title){
    return(
 
   <FlatList
            data={item.sub_pages}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{width:'99%',justifyContent:'flex-start'}}>
               <TouchableOpacity style={{width:'99%',padding:4}} 
                 onPress={()=>this.logdata(item)}>
                <View style={{flexDirection: 'row',width:'99%',justifyContent:'flex-start',}}>
                  <View style={styles.view21}>
                    <Image
                     source={require('../../assets/Icons/list_icon.png')}
                      style={{height: '90%', width: '90%',alignItems:'center'}}
                    />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'white', fontSize: 12}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            )
            }
            keyExtractor={(item, index) => index}
          />
         
    )
    
  }else{
  }
  }else{

  }

}


    render() {
      console.log('kapil bhai'+listarry[0])
    const {Menu} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <TouchableOpacity
           style={{height: 40, width: 30,marginTop:12}}
           onPress={() => {
            this.props.navigation.navigate('HomeScreenPage')}}>
          <Image
            source={require('../../assets/Images/pp.png')}
            resizeMode={'stretch'}
            style={styles.iconMenu}
          />
        </TouchableOpacity>

        <ScrollView>
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
          <View style={styles.text}>
            <Text style={styles.all}>SEARCHES</Text>
            <View style={styles.slider}></View>
          </View>
          <FlatList
            data={listarry[0]}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              
              <View style={{flex:1 ,width:'100%', justifyContent:'center',alignItems:'center',width:'99%'}}>
               <View style={styles.view1}>
               <TouchableOpacity style={{height:50}} 
                 onPress={()=>this.logdata(item)}>
                <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
               
                  <View style={styles.view2}>
                    <Image
                       source={{uri:'http://app.lea.one/wp-content/uploads/2020/08/microphone.png'}}
                      style={{boaderRadius:10,width:'99%',height:'99%'}}
                    />
                  </View>
            
                    <Text style={{color: 'white',marginLeft:20, fontSize: 12}}>
                      {item.title}
                    </Text>
                 
                  </View>
               
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Video will be played');
                  }}
                 >
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                     // alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../assets/Icons/list_icon.png')}
                  />
                 

                  {/* <Text style={{color: 'white', alignSelf: 'center'}}>Play</Text> */}
                </TouchableOpacity>
               
              </View>
              {this.renderdata(item)}
              </View>
            )
            }
            keyExtractor={(item, index) => index}



          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
   // Footer:state.Footer,
   // NewsFeed:state.NewsFeed,
  };
};
export default connect(mapStateToProps)(SearchScreen);
