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
import Exam from '../../../../assets/images/Exam.png'

const Content = ({ navigation }) => (
  <View style={styles.container}>
        <Header/>
        <View style={{ flex: 10 }}>
            <ScrollView>
              <View>
                <Text style={styles.title}>Diciplinas</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.cards}>
                  <Image source={Math} style={styles.cardIcons}></Image>
                  <Text>Matemática</Text>
                </View>
              </TouchableOpacity>
              
            </ScrollView>
        </View>
  </View>
);
export default Content;
