import React from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Cronograma from '../../../../assets/images/Cronograma.png';
import Agenda from '../../../../assets/images/agendaEstudo.jpg';
import Navbar from '../../../../assets/components/Navbar';

const Dashboard = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="DASHBOARD" noBack />
    <View style={styles.container}>
      <View style={{ flex: 6 }}>
        <ScrollView>
          <View style={styles.cardCronograma}>
            <View style={styles.cardSubtitle}>
              <Text style={styles.cardText}>Cronograma</Text>
            </View>
            <View style={{ alignSelf: 'stretch' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Cronograma')}>
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
  </>
);
export default Dashboard;
