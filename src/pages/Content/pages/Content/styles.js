import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: '10%',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    alignContent: 'flex-start',
    marginLeft: 10,
    color: '#4B0082',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  cards: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#4B0082',
    width: '80%',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  cardIcons: {
    marginLeft: 7,
    height: 50,
    width: 50,
  },
  cardText: {
    alignSelf: 'center',
    fontSize: 25,
    marginLeft: 10,
    color: '#4B0082',
    fontFamily: 'Roboto',
  },
});
