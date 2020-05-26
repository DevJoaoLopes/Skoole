import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Modal from '../Modal';
import styles from './styles';

const InvalidAuthModal = ({
  visible,
  message,
  btnText,
  onDismiss = () => {},
  textBold = false,
  textMedium = false,
  buttonColor = '#4B0082',
  confirmBtnMode = 'outlined',
}) => (
  <Modal visible={visible} pageMode onCloseRequest={() => onDismiss(false)}>
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flex: 0.5 }} />
        <View
          style={{ justifyContent: 'center', alignItems: 'center' }}
        />
        <View style={styles.text}>
          <Text
            bold={textBold}
            medium={textMedium}
            style={{
              color: '#4B0082',
              fontSize: 20,
              width: '70%',
            }}
          >
            {message}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            style={styles.button}
            color={buttonColor}
            mode={confirmBtnMode}
            onPress={() => onDismiss(false, true)}
          >
            {btnText.toUpperCase()}
          </Button>
        </View>
      </View>
    </View>
  </Modal>
);

export default InvalidAuthModal;
