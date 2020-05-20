import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native';
import {
  Container, Card, Link, styles, Logo,
} from './styles';
import LogoImg from '../../assets/components/Header/assets/images/logo_transparent.png';

const Register = ({ navigation }) => {
  const [statusError, setStatusError] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [textEmail, setTextEmail] = useState('');
  const [textPass, setTextPass] = useState('');

  return (
    <Container>
      <Card>
        <Logo>
          <Image
            style={{
              marginTop: '10%',
              width: 180,
              height: 180,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
            source={LogoImg}
          />
        </Logo>
        <TextInput
          label="Nome"
          mode="outlined"
          value={textEmail}
          error={statusError}
          onChangeText={(txt) => setTextEmail(txt)}
          style={styles.textInput}
          theme={{
            colors: {
              primary: '#4B0082',
            },
          }}
        />
        <TextInput
          label="Email"
          mode="outlined"
          value={textEmail}
          error={statusError}
          onChangeText={(txt) => setTextEmail(txt)}
          style={styles.textInput}
          keyboardType="email-address"
          theme={{
            colors: {
              primary: '#4B0082',
            },
          }}
        />
        <TextInput
          label="Data de nascimento"
          mode="outlined"
          value={textEmail}
          error={statusError}
          onChangeText={(txt) => setTextEmail(txt)}
          style={styles.textInput}
          theme={{
            colors: {
              primary: '#4B0082',
            },
          }}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          value={textPass}
          error={statusError}
          onChangeText={(txt) => setTextPass(txt)}
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
          onPress={() => {}}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          CADASTRAR
        </Button>
        <Link onPress={() => navigation.navigate('Auth')} href={{}}>LOGIN</Link>
      </Card>
    </Container>
  );
};

export default Register;
