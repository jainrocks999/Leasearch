import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    height: 150,
    padding: 10,
    marginTop: 20,
  },
  image: {
    backgroundColor: '#0C1C5B',
    width: '100%',
    height: 130,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: 'grey',
    borderRadius: 3,
    height: 120,
    // opacity: 0.2,
    justifyContent: 'center',
  },
  listView: {
    padding: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
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
