import React from 'react';
import {
  View, Text, Button, ScrollView, TouchableOpacity, Image
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';
import Univem from '../../../../assets/components/Community/assets/images/univem.jpeg';
import Unesp from '../../../../assets/components/Community/assets/images/unesp.jpg';
import Uel from '../../../../assets/components/Community/assets/images/uel.jpg';
import Enem from '../../../../assets/components/Community/assets/images/enem.jpg';
import Uenp from '../../../../assets/components/Community/assets/images/uenp.jpg';
import Usp from '../../../../assets/components/Community/assets/images/usp.jpg';


const QuestionVest = () => (
  <View style={styles.container}>
    <Header />
    <View style={{ flex: 10 }}>
      <ScrollView>
        <View>
          <Text style={styles.textTopo}>
          Vestibulares
          </Text>
        </View>
        <View style={styles.container1}>
          <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image style={{width: 180, height: 143, marginTop: 3, borderRadius: 35, marginLeft: 2}} source={Univem} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image style={{width: 180, height: 143, marginTop: 3, borderRadius: 35, marginLeft: 2}} source={Unesp} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image style={{width: 180, height: 143, marginTop: 3, borderRadius: 35, marginLeft: 2}} source={Uel} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image style={{width: 180, height: 143, marginTop: 3, borderRadius: 35, marginRight: 2}} source={Enem} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image style={{width: 180, height: 143, marginTop: 3, borderRadius: 35, marginRight: 2}} source={Uenp} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image style={{width: 180, height: 143, marginTop: 3, borderRadius: 35, marginRight: 2}} source={Usp} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);
export default QuestionVest;
