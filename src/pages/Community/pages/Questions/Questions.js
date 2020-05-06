import React from 'react';
import {
  View, Text,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import Header from '../../../../assets/components/Header';

const Questions = ({ navigation }) => (
  <View style={styles.container}>
    <Header>
      <View>

        <View>
          <Text style={styles.questionsTitle}>Faça sua Pergunta..</Text>
          <Text style={styles.questionsSubtitle}>E a comunidade faz o resto!</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Insira Sua Dúvida Aqui..            20/100 pontos"
            multiline
            numberOfLines={6}
            mode="outlined"
          />

          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
              Enviar
          </Button>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleLabel}>Dúvidas Frequentes</Text>
          </View>

          <View>
            <Text style={styles.cardItems} onPress={() => navigation.navigate('QuestionMenu')}>
              1. Em que Ano ocorreu a Segunda Guerra ?
            </Text>
            <Text style={styles.cardItems}>2. Como foi a Guerra do Paraguai ?</Text>
            <Text style={styles.cardItems}>3. Quem descobriu o Brasil ?</Text>
            <Text style={styles.cardItems}>4. Relatos sobre as trincheiras da Primeira Guerra</Text>
            <Text style={styles.cardItems}>5. Literatura da Primeira Guerra ?</Text>
            <Text style={styles.cardItems}>6. Ditadura Militar:</Text>
          </View>
        </View>

      </View>
    </Header>
  </View>
);
export default Questions;
