import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
    flex: 1,
  },

  header: {height: 40, width: 30, marginTop: 15},

  iconMenu: {
    width: 30,
    height: 30,
    margin: 10,
    tintColor: 'white',
    alignContent: 'center',
  },

  searchBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  searchIconView: {width: 25, height: 25},

  searchIcon: {width: '100%', height: '100%', marginRight: 10},

  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 10,
    color: 'white',
    width: '85%',
  },

  scrollView: {flex: 1, marginTop: 10, paddingHorizontal: 10},
  mainView: {padding: 4, marginTop: 1},
  flatlist: {width: '99%'},
  flatlistTouch: {width: '100%'},
  flatlistView: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  flatlistIconView: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  flatlistIcon: {
    height: '90%',
    width: '90%',
  },

  text: {color: 'white', fontSize: 14, marginLeft: 10},
  renderSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
});
