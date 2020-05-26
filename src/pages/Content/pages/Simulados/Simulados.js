import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';
import ENEM from '../../../../assets/images/ENEM.png';
import FUVEST from '../../../../assets/images/FUVEST.png';
import UNIVEM from '../../../../assets/images/UNIVEM.png';
import UEL from '../../../../assets/images/UEL.png';
import UENP from '../../../../assets/images/UENP.png';
import UNICAMP from '../../../../assets/images/UNICAMP.png';

const Simulados = ({ navigation }) => (
  <View style={styles.container}>
    <Header/>
    <View style={{ flex: 10 }}>
        <Text style={styles.vestText}>Vestibulares</Text>
        <ScrollView>
          <View style={{flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => navigation.navigate('ENEM')}>
              <View style={styles.cards}>
                <Image source={ENEM} style={styles.cardIcons}></Image>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.cards}>
                <Image source={FUVEST} style={styles.cardIcons}></Image>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{flexDirection: 'row', }}>
            <TouchableOpacity>
              <View style={styles.cards}>
                <Image source={UNIVEM} style={styles.cardIcons}></Image>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.cards}>
                <Image source={UEL} style={styles.cardIcons}></Image>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', }}>
            <TouchableOpacity>
              <View style={styles.cards}>
                <Image source={UENP} style={styles.cardIcons}></Image>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.cards}>
                <Image source={UNICAMP} style={styles.cardIcons}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  </View>
);
export default Simulados;
