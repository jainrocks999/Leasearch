import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
  icon: {
    width: 40,
    height: 40,
  },
  header: {
    backgroundColor: '#0C1C5B',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },

  homeIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  searchIcon: {width: 25, height: 25, marginRight: 10},

  iconView: {
    width: 60,
    height: 66,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -35,
  },
  smallLogo: {width: 60, height: '99%'},
  imageContainer: {
    width: '99%',
    height: 160,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  SliderboxContainer: {
    backgroundColor: '#0C1C5B',
    width: '100%',
    height: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageComponentStyle: {
    width: '95%',
    marginTop: 2,
    borderRadius: 10,
  },
  flatlistContainer: {padding: 4},
  flatlist: {width: '99%', padding: 10},
  flatlistItem: {width: '50%', height: 100, padding: 4},

  flatlistItemSeperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },

  list: {
    flex: 1,
    flexDirection: 'column',
    tintColor: 'white',
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textContainer: {marginTop: 5, paddingHorizontal: 10},
  text: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomTabView: {
    backgroundColor: '#0C1C5B',
  },
  bottomTabContainer: {
    height: 55,
    width: screenWidth / 3,
    justifyContent: 'center',
  },
  bottomTabInnerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
