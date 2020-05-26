import React from 'react';
import {
  View, Image, Text,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './Header.styles';
import Logo from './assets/images/logo_transparent2.png';

const Header = ({ children, style = {} }) => (
  <View style={{ flex: 2, ...style }}>
    <View style={styles.bgImg}>
      <Appbar.Header style={styles.appBar}>
        <View style={styles.itemContainer}>
          <View style={{
            alignSelf: 'flex-start',
            marginHorizontal: '5%',
          }}
          >
            <Image
              source={Logo}
              resizeMode="contain"
              style={styles.sideIcon}
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.textHeader}>
            Skoole
          </Text>
        </View>
      </Appbar.Header>
      <View style={{ height: 200 }}>
        {children}
      </View>
    </View>
  </View>
);

export default Header;
