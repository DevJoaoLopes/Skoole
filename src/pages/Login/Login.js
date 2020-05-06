import React, { useState } from 'react';
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
      <Card>
        <Logo>
          <Image
            style={{
              marginTop: '30%',
              width: 180,
              height: 180,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
            source={LogoImg}
          />
        </Logo>
        {/* <Label>Faça seu Login</Label> */}
        <TextInput
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
        />
        <TextInput
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
        />
        <Button
          loading={loadingButton}
          mode="contained"
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Continuar
        </Button>
        <Link href={{}}>Esqueceu sua senha ?</Link>
      </Card>
    </Container>
  );
};

export default Login;
