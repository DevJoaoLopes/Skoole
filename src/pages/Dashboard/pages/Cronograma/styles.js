import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    width: '100%',
    alignItems: 'center',
  },
  dataText: {
    marginTop: 30,
    marginLeft: 20,
    color: '#008BD9',
    fontSize: 17,
  },
  vestData: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 15,
  },
  dataLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#D7D7D7',
    marginBottom: 5,
  },
  titleText: {
    color: '#008BD9',
    fontSize: 17,
    marginTop: 15,
  },
  image: {
    flex: 2,
    resizeMode: 'contain',
    color: '#4B0082',
    borderRadius: 1000,
  },
  imgPoints: {
    height: 90,
    width: 90,
  },
  textName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 0,
  },
  textNumber: {
    fontWeight: 'bold',
    fontSize: 57,
    color: 'green',
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
  textSchool: {
    fontSize: 10,
    color: 'gray',
  },
});
