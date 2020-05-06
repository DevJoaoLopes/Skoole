import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#4B0082',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#4B0082',
    marginTop: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button2: {
    width: '90%',
    height: 60,
    backgroundColor: '#4B0082',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
