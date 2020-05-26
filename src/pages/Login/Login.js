import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native';
import {
  Container, Card, Link, styles, Logo,
} from './styles';
import WarningModal from '../../assets/components/Modal/WarningModal';
import api from '../../services/api';
import LogoImg from '../../assets/components/Header/assets/images/logo_transparent.png';

const Login = ({ navigation }) => {
  const [statusError, setStatusError] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textEmail, setTextEmail] = useState('');
  const [textPass, setTextPass] = useState('');

  const auth = async () => {
    if (textEmail.length === 0 || textPass.length === 0) {
      setLoadingButton(false);
      setStatusError(true);
    } else {
      try {
        setLoadingButton(true);
        const response = await api.post('/autenticar', {
          email: textEmail,
          senha: textPass,
        });
        setLoadingButton(false);
        if (response.data.data !== 'Dados inválidos') {
          navigation.navigate('Dashboard');
        } else {
          setModalVisible(true);
        }
      } catch (err) {
        setModalVisible(true);
      }
    }
  };

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
          onPress={() => auth()}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Continuar
        </Button>
        <Link onPress={() => navigation.navigate('Register')} href={{}}>Não tem cadastro? Cadastre-se</Link>
      </Card>
      <WarningModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        message="Usuário ou senha incorretos"
        btnText="tentar novamente"
      />
    </Container>
  );
};

export default Login;
