import React from 'react';
import RNModal from 'react-native-modal';
import styles from './Modal.styles';

const Modal = ({
  visible,
  children,
  pageMode = false,
  slide = false,
  onCloseRequest = () => {},
  onModalHide = () => {},
}) => {
  const defineAnimation = () => {
    if (slide) {
      return { in: 'slideInUp', out: 'slideOutDown' };
    }
    if (pageMode) {
      return { in: 'slideInRight', out: 'slideOutRight' };
    }
    return { in: 'fadeIn', out: 'fadeOut' };
  };

  return (
    <RNModal
      isVisible={visible}
      onBackButtonPress={() => onCloseRequest()}
      onBackdropPress={() => onCloseRequest()}
      style={slide || pageMode ? styles.halfBottom : styles.modalBase}
      animationIn={defineAnimation().in}
      animationOut={defineAnimation().out}
      animationInTiming={500}
      animationOutTiming={500}
      onModalHide={onModalHide}

    >
      {children}
    </RNModal>
  );
};

export default Modal;
