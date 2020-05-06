import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';

const Community = ({ navigation }) => (
  <View style={styles.container}>
    <Header />
    <View style={{ flex: 10 }}>
      <ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject')}>
          <Text style={styles.text}>História</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Português</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Filosofia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Geografia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Biologia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sociologia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text}>Filosofia</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
);
export default Community;
