import React from 'react';
import {
  View, TouchableOpacity, SafeAreaView, StatusBar, Text, Image,
} from 'react-native';
import BackIcon from '../../images/backArrow.png';
import styles from './styles';

const Navbar = ({
  navigation,
  title = ' ',
  noBack = false,
}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="light-content" backgroundColor="#4B0082" />
    <View style={styles.container}>
      <View style={styles.backButtonView}>
        {noBack ? null : (
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
            <Image style={styles.image} source={BackIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </SafeAreaView>
);

export default Navbar;
