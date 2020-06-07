import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, ImageBackground,
} from 'react-native';
import styles from './styles';
import Navbar from '../../../../assets/components/Navbar';
import ENEM from '../../../../assets/images/ENEM.png';
import FUVEST from '../../../../assets/images/FUVEST.png';
import UNIVEM from '../../../../assets/images/UNIVEM.png';
import UEL from '../../../../assets/images/UEL.png';
import UENP from '../../../../assets/images/UENP.png';
import UNICAMP from '../../../../assets/images/UNICAMP.png';

const Simulados = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="SIMULADOS" />
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <Text style={styles.vestText}>Vestibulares</Text>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('EnemTests')}>
              <View style={styles.cards}>
                <ImageBackground source={ENEM} style={styles.cardIcons}>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>ENEM</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cards}>
                <ImageBackground source={FUVEST} style={styles.cardIcons}>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>FUVEST</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.cards}>
                <ImageBackground source={UNIVEM} style={styles.cardIcons}>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>UNIVEM</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cards}>
                <ImageBackground source={UEL} style={styles.cardIcons}>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>UEL</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.cards}>
                <ImageBackground source={UENP} style={styles.cardIcons}>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>UENP</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cards}>
                <ImageBackground source={UNICAMP} style={styles.cardIcons}>
                  <View style={styles.cardView}>
                    <Text style={styles.cardText}>UNICAMP</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  </>
);
export default Simulados;
