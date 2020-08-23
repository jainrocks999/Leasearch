import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
    flex:1,
  },
  icon: {
    width: 40,
    height: 70,
  },
  text: {
    width: '100%',
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 19,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  view2: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  article: {
    color: 'white',
    marginTop: 5,
    fontSize: 12,
  },
  playIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  slider: {
    borderWidth: 1,
    borderColor: 'orange',
    marginHorizontal: 120,
    marginTop: 5,
  },
  all: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  iconMenu: {
    width: 40,
    height: 30,
    tintColor: 'white',
  },
  iconSearch: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -30,
  },
  iconSearch1: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 7,
  },
  input: {
    color: 'grey',
    alignSelf: 'center',
    marginRight: 30,
  }
});
