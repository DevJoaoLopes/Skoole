import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, ImageBackground,
} from 'react-native';
import styles from './styles';
import Navbar from '../../../../assets/components/Navbar';
import ENEM from '../../../../assets/images/ENEM.png';

const EnemTests = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="SIMULADOS DISPONÍVEIS" />
    <View style={styles.container}>

      <View style={{ flex: 10 }}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Simulados disponíveis</Text>
        </View>

        <View>
          <ImageBackground source={ENEM} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
              <View style={{ flexDirection: 'row', height: 60 }}>
                <TouchableOpacity style={styles.testCard} onPress={() => navigation.navigate('ENEM')}>
                  <Text style={styles.testCardText}>Prova Azul - ENEM 2019</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.testCard} onPress={() => navigation.navigate('EnemAnswers')}>
                  <Text style={styles.testCardText}>Gabarito - Prova Azul</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', height: 60 }}>
                <TouchableOpacity style={styles.testCard}>
                  <Text style={styles.testCardText}>Prova Amarela - ENEM 2019</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.testCard}>
                  <Text style={styles.testCardText}>Gabarito - Prova Amarela</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', height: 60 }}>
                <TouchableOpacity style={styles.testCard}>
                  <Text style={styles.testCardText}>Prova Branca - ENEM 2019</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.testCard}>
                  <Text style={styles.testCardText}>Gabarito - Prova Branca</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', height: 60 }}>
                <TouchableOpacity style={styles.testCard}>
                  <Text style={styles.testCardText}>Prova Rosa - ENEM 2019</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.testCard}>
                  <Text style={styles.testCardText}>Gabarito - Prova Rosa</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>

        </View>
      </View>
    </View>
  </>
);
export default EnemTests;
