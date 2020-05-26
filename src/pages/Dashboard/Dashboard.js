import React from 'react';
import {
  View, Text, ScrollView, Image, ImageBackground,
} from 'react-native';
import styles from './styles';
import Header from '../../assets/components/Header';


const Dashboard = () => (
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
            <Image style={styles.imgCronograma} source={require('../../assets/images/Cronograma.png')} />
          </View>
        </View>

        <View style={styles.cardAgenda}>
          <View style={styles.cardSubtitle}>
            <Text style={styles.cardText}>Sua agenda de Estudo</Text>
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Image style={styles.imgCronograma} source={require('../../assets/images/agendaEstudo.jpg')} />
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);
export default Dashboard;
