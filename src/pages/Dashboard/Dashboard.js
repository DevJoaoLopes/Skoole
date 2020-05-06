import React from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../assets/components/Header';


const Dashboard = () => (
  <View style={styles.container}>
    <Header>
      <View style={{ marginTop: '5%' }}>
        <Text style={styles.title}>
            Olá Aluno!
        </Text>
      </View>
    </Header>
    <View style={{ flex: 6 }}>
      <ScrollView>
        <View style={styles.cardT1}>
          <View style={styles.cardSubtitleT1}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>
                      Trabalhos / Tarefas
            </Text>
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <View style={styles.cardTable}>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Entrega</Text>
                <Text style={styles.paddingText}>23 mar</Text>
                <Text style={styles.paddingText}>20 mar</Text>
              </View>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Conteúdo</Text>
                <Text style={styles.paddingText}>Lista PO</Text>
                <Text style={styles.paddingText}>Aula 3</Text>
              </View>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Matéria</Text>
                <Text style={styles.paddingText}>Matemática</Text>
                <Text style={styles.paddingText}>Quimica</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardT2}>
          <View style={styles.cardSubtitleT2}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>
                      Disciplinas
            </Text>
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <View style={styles.cardTable}>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Disciplina</Text>
                <Text style={styles.paddingText}>Matemática</Text>
                <Text style={styles.paddingText}>Portugues</Text>
                <Text style={styles.paddingText}>Quimica</Text>
                <Text style={styles.paddingText}>Fisica</Text>
              </View>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>C/H</Text>
                <Text style={styles.paddingText}>80</Text>
                <Text style={styles.paddingText}>20</Text>
                <Text style={styles.paddingText}>40</Text>
                <Text style={styles.paddingText}>60</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardT3}>
          <View style={styles.cardSubtitleT2}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>
                      Boletim
            </Text>
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <View style={styles.cardTable}>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Lançamento</Text>
                <Text style={styles.paddingText}>23 Mar</Text>
                <Text style={styles.paddingText}>20 Mar</Text>
              </View>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Disciplina</Text>
                <Text style={styles.paddingText}>Matemática</Text>
                <Text style={styles.paddingText}>Fisica</Text>
              </View>
              <View style={styles.alignContentItems}>
                <Text style={styles.cardTableTitle}>Nota</Text>
                <Text style={styles.paddingText}>8.5</Text>
                <Text style={styles.paddingText}>10</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);
export default Dashboard;
