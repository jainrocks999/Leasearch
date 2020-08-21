import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: '100%',
    height: 100,
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  menu: {
    width: 40,
    height: 30,
    tintColor: 'white',
    alignContent: 'center',
  },
});
