import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import styles from './styles';
import Question1 from '../../../../assets/images/Question1.png';
import Navbar from '../../../../assets/components/Navbar';

const ENEM = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="QUESTÕES SIMULADO" />
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <View style={styles.cardQuestionTitle}>
          <Text style={styles.questionTitle}>2019 - Questão 1</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={Question1} style={styles.questionIcons} />
          <Text>
            O infográfico aborda a importância do inglês para os negócios.
            Nesse texto, as expressões but e yet only evidenciam:
          </Text>
          <Text>A) um impedimento às transações comerciais em contexto internacional.</Text>
          <Text>B) o desinteresse dos funcionários nos cursos oferecidos pelas empresas.</Text>
          <Text>
            C) uma comparação entre as visões dos executivos sobre o aprendizado do
            inglês.
          </Text>
          <Text>
            D) a necessidade de inserção de funcionários nativos no mercado de trabalho
            globalizado.
          </Text>
          <Text>
            E) um contraste entre o ideal e o real sobre a comunicação em inglês
            no mundo empresarial.
          </Text>
          <View style={styles.answerCard}>
            <TouchableOpacity style={styles.answerButton}>
              <View>
                <Text style={styles.answerText}>A</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answerButton}>
              <View>
                <Text style={styles.answerText}>B</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answerButton}>
              <View>
                <Text style={styles.answerText}>C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answerButton}>
              <View>
                <Text style={styles.answerText}>D</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answerButton}>
              <View>
                <Text style={styles.answerText}>E</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.navButtons}>
              <View>
                <Text style={styles.navButtonsText}>Próxima questão</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  </>
);
export default ENEM;
