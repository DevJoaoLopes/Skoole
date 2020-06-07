import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import styles from './styles';
import Navbar from '../../../../assets/components/Navbar';
import Exams from '../../../../assets/images/Exam.png';

const Content = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="CONTEUDO" noBack />
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Disciplinas</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Simulados')}>
            <View style={styles.cards}>
              <Image source={Exams} style={styles.cardIcons} />
              <Text style={styles.cardText}>Simulados</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  </>
);
export default Content;
