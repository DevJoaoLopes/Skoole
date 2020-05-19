import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native';
import {
  Container, Card, Link, styles, Logo,
} from './styles';
// import login from '../../services/auth';
import LogoImg from '../../assets/components/Header/assets/images/logo_transparent.png';

const Login = ({ navigation }) => {
  const email = '';
  const [password, setPassword] = useState('');
  const [statusError, setStatusError] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [textEmail, setTextEmail] = useState('Email');
  const [textPass, setTextPass] = useState('Senha');

  return (
    <Container>
      <Image
        style={{
          marginTop: '0%',
          width: 180,
          height: 180,
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
        source={require('../../assets/images/logo_transparent.png')}
      />
      <Card>
        <Logo>
          
        </Logo>
        {/* <Label>Faça seu Login</Label> */}
        {/* <TextInput
          label={textEmail}
          mode="outlined"
          value={email}
          error={statusError}
          //   onChangeText={}
          style={styles.textInput}
          keyboardType="email-address"
          theme={{
            colors: {
              primary: '#4B0082',
            },
          }}
        /> */}
        <Input
          containerStyle = {styles.campusInputContainer}
          placeholder='Usuário'
          leftIcon={
            <Icon
              name='user'
              size={20}
              color='black'
            />
          }
        />
        <Input 
          containerStyle = {styles.campusInputContainer}
          placeholder='Senha' 
          secureTextEntry={true} 
          leftIcon={
            <Icon
              name='lock'
              size={20}
              color='black'
            />
          }
        />
          
       {/* <TextInput
          label={textPass}
          mode="outlined"
          value={password}
          error={statusError}
          // onChangeText={}
          secureTextEntry
          style={styles.textInput}
          theme={{
            colors: {
              primary: '#4B0082',
            },
          }}
        /> */}
        <Button
          loading={loadingButton}
          mode="contained"
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Continuar
        </Button>
        <Link href={{}}>Cadastre-se</Link>
      </Card>
    </Container>
  );
};

export default Login;
