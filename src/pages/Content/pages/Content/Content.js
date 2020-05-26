import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';
import Math from '../../../../assets/images/Math.png'
import Chemistry from '../../../../assets/images/Chemistry.png'
import Physics from '../../../../assets/images/Physics.png'
import Biology from '../../../../assets/images/Biology.png'
import History from '../../../../assets/images/History.png'
import Tecnology from '../../../../assets/images/Tecnology.png'
import Exams from '../../../../assets/images/Exam.png'

const Content = ({ navigation }) => (
  <View style={styles.container}>
        <Header/>
        <View style={{ flex: 10 }}>
            <ScrollView>
              <View>
                <Text style={styles.title}>Disciplinas</Text>
              </View>

              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={Math} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>Matemática</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={Physics} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>Física</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={Chemistry} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>Química</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={Biology} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>Biologia</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={History} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>História</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={Tecnology} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>Tecnologia</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Simulados')}>
                <View style={styles.cards}>
                  <Image source={Exams} style={styles.cardIcons}></Image>
                  <Text style={styles.cardText}>Simulados</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
        </View>
  </View>
);
export default Content;
