import React from 'react';
import {
  View, Text, ScrollView, ImageBackground
} from 'react-native';
import styles from './styles';
import Header from '../../../../assets/components/Header';

const Midia = () => (
    <View style={styles.container}>
      <Header>
          <View>
              <Text style={styles.textTopo}>
                  Videos
              </Text>
          </View>
            <View style={{width: '400%', height: '350%', marginTop: 10}}>
            <ImageBackground source={require('../../../../assets/components/Community/assets/images/ytimg.png')} style={{width: '50%', height: '100%'}}>
            </ImageBackground>
            </View>
    </Header>
    </View>
);
export default Midia;
