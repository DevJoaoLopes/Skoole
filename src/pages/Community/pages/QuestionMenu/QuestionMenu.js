import React from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import Header from '../../../../assets/components/Header';

const QuestionMenu = () => (
  <View style={styles.container}>
    <Header />
    <View style={{ flex: 9 }}>
      <ScrollView>
        <View>
          <Text style={styles.questionsTitle}>Em que Ano ocorreu a Segunda Guerra?</Text>
          <Text style={styles.questionsSubtitle}>
            Estou com essa dúvida e não acho em livro algum,
            podem me ajudar?
          </Text>
        </View>
        <View style={styles.cardBestA}>
          <View style={styles.cardTitleBestA}>
            <Text style={styles.cardTitleLabel}>Melhor Resposta</Text>
          </View>

          <View>
            <Text style={styles.cardItems}>A data que você quer é: de 1939 até 1945.</Text>
          </View>
        </View>

        <View style={styles.cardOtheraA}>
          <View style={styles.cardTitleOtheraA}>
            <Text style={styles.cardTitleLabel}>Outras Respostas</Text>
          </View>

          <View>
            <Text style={styles.cardItems}>- Acho que foi de 1930 até 1945!</Text>
            <Text style={styles.cardItems}>
              - Nem ideia da data de duração, só a de início,
              1939
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.questionsTitle}>Sabe a resposta? Fale para a comunidade!</Text>
          <Text style={styles.questionsSubtitle}>Insira sua resposta:</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Resposta..                                   10/100 pontos"
            multiline
            numberOfLines={6}
            mode="outlined"
          />
        </View>

        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
                  Responder
        </Button>
      </ScrollView>
    </View>
  </View>
);
export default QuestionMenu;
