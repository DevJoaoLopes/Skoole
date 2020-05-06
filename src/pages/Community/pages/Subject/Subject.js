import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import {
  Input,
  Button,
  Icon,
  Item,
} from 'native-base';
import styles from './style';
import Header from '../../../../assets/components/Header';


const Subject = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>
        <View>
          <Text style={styles.textTopo}>
          História
          </Text>
        </View>
      </Header>
      <View style={{ flex: 6 }}>
        <ScrollView>
          <View searchBar rounded style={styles.searchBar}>
            <Item>
              <Input placeholder="Digite para buscar..." />
              <Button transparent>
                <Icon name="ios-search" />
              </Button>
            </Item>
          </View>
          <View style={styles.cardT1}>
            <View style={styles.cardSubtitleT1}>
              <Text style={{ color: 'white', alignSelf: 'center' }}>
                Conteúdos mais acessados
              </Text>
            </View>
            <View style={{ alignSelf: 'stretch' }}>
              <View style={styles.cardTable}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Midia')}>
                    <Text style={styles.paddingText}>
                    1. Segunda Guerra Mundial
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.paddingText}>
                  2. Guerra Fria
                  </Text>
                  <Text style={styles.paddingText}>
                  3. República Velha
                  </Text>
                  <Text style={styles.paddingText}>
                  4. Primeira Guerra Mundial
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', width: '100%' }}>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('QuestionsVest')}>
              <Text style={styles.text}>Questoes Vestibulares</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', width: '100%' }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Questions')}>
              <Text style={styles.text}>Perguntas/Dúvidas</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Subject;
