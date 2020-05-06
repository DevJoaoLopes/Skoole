import React from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';
import styles from './styles';
import Header from '../../assets/components/Header';
import user from '../../assets/images/user.png';

const Profile = () => (
  <View style={styles.container}>
    <Header />

    <View style={{ flex: 8 }}>
      <ScrollView>
        <View style={styles.viewImage}>
          <Image
            style={styles.image}
            source={user}
          />
          <Text style={styles.textName}>
            Jose Henrique da Silva
          </Text>
        </View>
        <View style={styles.viewPoints}>
          <Text style={styles.textNumber}>78</Text>
          <Text style={styles.textPoint}>Pontos</Text>
        </View>
        <View style={styles.viewPoints}>
          <Text style={styles.textDesc}>Questoes mais respondidas: Matemática</Text>
          <Text style={styles.textQtd}>Quantidade de questoes respondidas: 237</Text>
        </View>
      </ScrollView>
    </View>
  </View>
);
export default Profile;
