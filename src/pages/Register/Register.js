import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native';
import api from '../../services/api';
import WarningModal from '../../assets/components/Modal/WarningModal';
import {
  Container, Card, Link, styles, Logo,
} from './styles';
import LogoImg from '../../assets/components/Header/assets/images/logo_transparent.png';

const Register = ({ navigation }) => {
  const [statusError, setStatusError] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textEmail, setTextEmail] = useState('');
  const [textPass, setTextPass] = useState('');
  const [textName, setTextName] = useState('');
  const [textNasc, setTextNasc] = useState('');

  const register = async () => {
    if (textEmail.length === 0 || textPass.length === 0
      || textName.length === 0 || textNasc.length === 0) {
      setLoadingButton(false);
      setStatusError(true);
    } else {
      try {
        setLoadingButton(true);
        const response = await api.post('/usuario', {
          email: textEmail,
          senha: textPass,
          nome: textName,
          data_nascimento: textNasc,
          tipo_usuario_id: 1,
        });
        setLoadingButton(false);
        if (response.data.data !== 'Email já está em uso') {
          navigation.navigate('Auth');
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
          value={textName}
          error={statusError}
          onChangeText={(txt) => setTextName(txt)}
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
          value={textNasc}
          error={statusError}
          onChangeText={(txt) => setTextNasc(txt)}
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
          onPress={() => register()}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          CADASTRAR
        </Button>
        <Link onPress={() => navigation.navigate('Auth')} href={{}}>LOGIN</Link>
      </Card>
      <WarningModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        message="Erro, verifique se o email ja foi cadastrado"
        btnText="tentar novamente"
      />
    </Container>
  );
};

export default Register;
