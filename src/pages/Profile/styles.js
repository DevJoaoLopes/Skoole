import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  viewImage: {
    width: '100%',
    height: 200,
    alignItems: 'center',
  },
  image: {
    flex: 2,
    resizeMode: 'contain',
    color: '#4B0082',
    borderRadius: 1000,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  textNumber: {
    fontWeight: 'bold',
    fontSize: 70,
    color: 'green',
    marginBottom: 10,
  },
  viewPoints: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  textPoint: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  textDesc: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  textQtd: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
});
