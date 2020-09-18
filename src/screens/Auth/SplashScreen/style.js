import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  logoContainer: {
    height: 240,
    width: 240,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  SearchSeizerContainer: {justifyContent: 'center', alignItems: 'center'},

  SearchSeizer: {
    marginTop: 20,
    color: 'white',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  leaContainer: {justifyContent: 'center', margin: 20},
  lea: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
