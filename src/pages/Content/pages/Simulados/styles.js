import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  cards: {
    alignItems: 'center',
    marginLeft: 9,
    marginTop: 9,
    borderWidth: 2,
    borderColor: '#4B0082',
    width: 190,
    height: 190,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
  },
  cardIcons: {
    height: '103%',
    width: '103%',
  },
  cardText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  cardView: {
    top: '83%',
    height: '16%',
    backgroundColor: '#4B0082',
  },
  vestText: {
    alignSelf: 'center',
    fontSize: 25,
    color: '#4B0082',
    fontFamily: 'Roboto',
  },
});
