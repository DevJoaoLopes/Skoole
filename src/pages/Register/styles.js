import styled from 'styled-components';
import { StyleSheet } from 'react-native';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  backgroundColor: #4B0082;
  justifyContent: center;
`;

const Card = styled.View`
  width: 90%;
  height: 90%;
  backgroundColor: white;
  borderRadius: 5;
  justifyContent: center;
  marginTop: 50;
`;

const Logo = styled.View`
  width: 95%;
  height: 15%;
  position: absolute;
  top: 4%;
  backgroundColor: white;
  justifyContent: center;
  alignSelf: center;
`;

const Label = styled.Text`
  position: absolute;
  top: 20%;
  fontSize: 25;
  color: #4B0082;
  width: 90%;
  height: 10%;
  backgroundColor: white;
  alignSelf: center;
  textAlign: center;
`;

const Link = styled.Text`
  fontSize: 14px;
  color: #4B0082;
  width: 90%;
  height: 10%;
  alignSelf: center;
  textAlign: center;
  position: absolute;
  bottom: 2%;
`;
const styles = StyleSheet.create({
  campusInputContainer: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginTop: -30,
  },
  textInput: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  button: {
    position: 'absolute',
    bottom: '16%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#4B0082',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export {
  Container,
  Card,
  Label,
  Link,
  styles,
  Logo,
};
