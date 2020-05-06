import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
  },
  questionsTitle: {
    color: '#4B0082',
    fontSize: 25,
    left: 12,
  },
  questionsSubtitle: {
    color: '#212f3d',
    fontSize: 13,
    left: 12,
  },
  textInput: {
    width: '95%',
    alignSelf: 'center',
    bottom: 5,
  },
  button: {
    width: '30%',
    top: 2,
    right: 11,
    alignSelf: 'flex-end',
    backgroundColor: '#4B0082',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#4B0082',
    width: '95%',
    height: '86%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
  },
  cardTitle: {
    top: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4B0082',
    height: '12%'
  },
  cardTitleLabel: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center'
  },
  cardItems: {
    left: 4,
    lineHeight: 30,
    fontSize: 18,
  },
});
