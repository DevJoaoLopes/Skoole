import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleText: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#4B0082',
  },
  titleView: {
    marginTop: '5%',
    backgroundColor: '#ffffff',
  },
  tableAnswers: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    borderWidth: 2,
    borderColor: '#4B0082',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 45,
  },
  tableAnswersTitle: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    borderWidth: 2,
    borderColor: '#4B0082',
    backgroundColor: '#4B0082',
    borderRadius: 5,
    height: 45,
  },
  tableCells: {
    justifyContent: 'center',
    width: '33%',
  },
  tableTitles: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  tableTexts: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#4B0082',
  },
  statusTest: {
    marginLeft: 5,
    marginRight: 5,
    height: '9%',
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: '#4B0082',
    borderRadius: 5,
    justifyContent: 'center',
  },
  statusTestText: {
    fontSize: 18,
    alignSelf: 'center',
  },
});
