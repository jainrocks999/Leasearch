import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  imageBackground: {
    width: '100%',
    marginTop: 2,
    height: 200,
  },
  homeIcon: {
    width: 40,
    height: 30,
    alignContent: 'center',
    margin: 8,
  },

  arrowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 10,
  },
  mainView: {
    flex: 2 / 3,
    backgroundColor: 'black',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    paddingRight: 20,
  },

  titleText: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FBFBFB',
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    color: '#8C8C8C',
  },

  description: {
    marginTop: 20,
    fontSize: 17,
    padding: 10,
    marginBottom: 4,
    color: '#FBFBFB',
  },

  arrowTouch: {height: 50, padding: 20, marginTop: 10},
  arrow: {height: 20, width: 30, tintColor: 'white'},
});
