import React from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import styles from './styles';
import Navbar from '../../../../assets/components/Navbar';

const Cronograma = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="CRONOGRAMA" />
    <View style={styles.container}>

      <View style={{ flex: 13 }}>

        <View style={styles.title}>
          <Text style={styles.titleText}>
            CRONOGRAMA DE VESTIBULARES
          </Text>
        </View>

        <ScrollView>

          <View>
            <View style={styles.dataLine}>
              <Text style={styles.dataText}>
                29/11/2020, Sábado
              </Text>
            </View>
            <View>
              <Text style={styles.vestData}>
                FUVEST 1 Fase
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.dataLine}>
              <Text style={styles.dataText}>
                22/11/2020, Segunda-Feira
              </Text>
            </View>
            <View>
              <Text style={styles.vestData}>
                UNICAMP 1 Fase
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.dataLine}>
              <Text style={styles.dataText}>
                20/11/2020, Sexta-Feira
              </Text>
            </View>
            <View>
              <Text style={styles.vestData}>
                ITA 1 Fase
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.dataLine}>
              <Text style={styles.dataText}>
                15/11/2020, Sábado
              </Text>
            </View>
            <View>
              <Text style={styles.vestData}>
                UNESP 1 Fase
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.dataLine}>
              <Text style={styles.dataText}>
                27/08/2020, Quinta-Feira
              </Text>
            </View>
            <View>
              <Text style={styles.vestData}>
                ENEM 2019
              </Text>
              <Text style={styles.vestData}>
                USP - 1º Fase
              </Text>
            </View>
          </View>

        </ScrollView>

      </View>
    </View>
  </>
);
export default Cronograma;
