import React from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';
import styles from './styles';
import Navbar from '../../assets/components/Navbar';
import profile from '../../assets/images/profile.png';
import points from '../../assets/images/points.png';

const Profile = () => (
  <>
    <Navbar title="PERFIL" noBack />
    <View style={styles.container}>

      <View style={{ flex: 13 }}>
        <ScrollView>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={profile}
            />
            <Text style={styles.textName}>
              João Victor Piga
            </Text>
            <Text style={styles.textSchool}>Centro Universitário Eurípides de Marília</Text>
          </View>

          <View style={styles.viewPoints}>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Image source={points} style={styles.imgPoints} />
              <Text style={styles.textNumber}>78</Text>
            </View>
            <Text style={styles.textPoint}>Pontos</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  </>
);
export default Profile;
