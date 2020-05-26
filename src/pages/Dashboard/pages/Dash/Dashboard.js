import React from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';
import Cronograma from '../../../../assets/images/Cronograma.png';
import Agenda from '../../../../assets/images/agendaEstudo.jpg';

const Dashboard = ({ navigation }) => (
  <View style={styles.container}>
    <Header>
      <View style={{ marginTop: '5%' }}>
        <Text style={styles.title}>
          Bem Vindo Aluno!
        </Text>
      </View>
    </Header>
    <View style={{ flex: 6 }}>
      <ScrollView>
        <View style={styles.cardCronograma}>
          <View style={styles.cardSubtitle}>
            <Text style={styles.cardText}>Cronograma</Text>
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.imgCronograma} source={Cronograma} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardAgenda}>
          <View style={styles.cardSubtitle}>
            <Text style={styles.cardText}>Sua agenda de Estudo</Text>
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
              <Image style={styles.imgCronograma} source={Agenda} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);
export default Dashboard;
