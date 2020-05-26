import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: '12%',
    marginBottom: '12%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  card: {
    backgroundColor: 'white',
    height: '70%',
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 6,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

  },
  buttonView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: '2.5%',
    width: 'auto',
    minWidth: '40%',
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    maxWidth: '100%',
  },
});
