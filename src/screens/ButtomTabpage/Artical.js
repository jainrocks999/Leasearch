import React from 'react';
import {Text, View, FlatList, Image, StatusBar, Alert} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { connect } from 'react-redux';


class Article extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    const {navigation, Menu} = this.props;
    // Alert.alert('msdakjjaflkasjfklasjfskljsjf',JSON.stringify(Menu.title))
    return (
      <View style={{backgroundColor: 'black', paddingTop: 50}}>
        <FlatList
          style={{width: '100%'}}
          data={Menu}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={this.renderSeparator}
              numColumns={1}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('category')}
              style={{paddingHorizontal: 15, paddingVertical: 20}}>
             <Image source={{"uri" : item.url}} style={{
               width: '100%',
               marginTop: 2,
               height:150
           }}/>
              <View style={{marginTop: 50, paddingHorizontal: 10}}>
                <Text style={{color:'white'}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
       
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('jai jai'+JSON.stringify(state))
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
  };
};
export default connect(mapStateToProps)(Article);