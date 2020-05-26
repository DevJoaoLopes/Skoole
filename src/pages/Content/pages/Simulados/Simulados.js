import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';

const Simulados = ({ navigation }) => (
  <View style={styles.container}>
        <Header/>
        <View style={{ flex: 10 }}>
            <ScrollView>

            </ScrollView>
        </View>
  </View>
);
export default Simulados;
