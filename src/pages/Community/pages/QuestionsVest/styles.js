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

  container1: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonContainer: {
    borderRadius: 40,
    backgroundColor: '#4B0082',
    width: 190,
    height: 150,
    alignItems: 'center',
    marginRight: 5,
    marginTop: 10,
  },
  buttonContainer1: {
    borderRadius: 40,
    backgroundColor: '#4B0082',
    width: 190,
    height: 150,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10,
  },
  textTopo: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#4B0082',
    fontWeight: 'bold',
    marginTop: 0,
    fontFamily: 'Roboto',
  },
});
