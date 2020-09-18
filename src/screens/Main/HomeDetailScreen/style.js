import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 10,
    flex: 1,
  },
  homeIconContainer: {height: 40, width: 30, marginTop: 15},
  homeIcon: {
    width: 30,
    height: 30,
    margin: 10,
    tintColor: 'white',
    alignContent: 'center',
  },

  text: {
    marginVertical: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  all: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },

  flatlist: {marginTop: 10},

  flatlistContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#141414',
  },

  view1: {
    paddingHorizontal: 15,
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flatlistView: {
    width: '99%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  view2: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  flatlistImage: {
    width: '99%',
    height: '94%',
    borderRadius: 20,
  },

  view3: {width: '66%', marginLeft: 18},

  titleText: {
    color: 'white',
    fontSize: 14,
  },

  articleText: {
    color: 'white',
    fontSize: 12,
  },

  view4: {marginLeft: 10, width: '8%'},

  playIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  articleListView: {
    width: '100%',
    flex: 1,
  },

  articleFlatList: {
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 20,
    marginTop: 4,
  },

  articleFlatListViewContainer: {
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 10,
    width: '100%',
  },

  articleFlatListTouch: {width: '100%'},

  articleFlatListView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  articleFlatListView2: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },

  articleIcon: {
    height: '90%',
    width: '90%',
  },
  articleText: {marginLeft: 10, color: 'white', fontSize: 12},
});
