import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#4B0082',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  cardSubtitle: {
    top: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4B0082',
    height: 35,
  },
  cardCronograma: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#4B0082',
    width: '90%',
    height: 170,
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  cardAgenda: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#4B0082',
    width: '90%',
    height: 170,
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  cardText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  imgCronograma: {
    width: '100%',
    height: 140,
  },
});
