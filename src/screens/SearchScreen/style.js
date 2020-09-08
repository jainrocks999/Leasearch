import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 10,
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
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
    paddingHorizontal: 15,

    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // borderWidth: 1,
    // borderColor: '#fff',
  },
  view2: {
    width: 60,
    height: 60,
    // backgroundColor: 'white',
    //borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  view21: {
    width: 15,
    height: 15,
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
    padding: 4,
  },
  slider: {
    borderWidth: 0.5,
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
    width: 30,
    height: 30,
    tintColor: 'white',
    alignContent: 'center',
  },
  iconSearch: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    paddingRight: 30,
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fafafa',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    height: 100,
    // opacity: 0.2,
    justifyContent: 'center',
  },

  //////////////////

  viewContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0C1C5B',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    padding: 10,
    marginTop: 10,
  },
  image: {
    backgroundColor: '#0C1C5B',
    width: '100%',
    height: 150,
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  listView: {
    padding: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  menu: {
    width: 40,
    height: 30,
    tintColor: 'white',
    alignContent: 'center',
  },
});
