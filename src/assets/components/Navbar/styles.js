import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#4B0082',
  },
  container: {
    height: 45,
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
  },
  backButtonView: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 1000,
  },
  backButton: {
    width: '30%',
  },
  searchInputView: {
    flex: 7,
  },
  titleView: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: '#FFFFFF',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightIcons: {
    alignSelf: 'center',
    marginLeft: 18,
  },
  image: {
    width: '40%',
    resizeMode: 'contain',
    height: '75%',
  },
});
