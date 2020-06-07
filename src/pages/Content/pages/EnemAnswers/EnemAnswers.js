import React from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import styles from './styles';
import Navbar from '../../../../assets/components/Navbar';

const EnemAnswers = ({ navigation }) => (
  <>
    <Navbar navigation={navigation} title="GABARITO" />
    <View style={styles.container}>

      <View style={{ flex: 10 }}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Gabarito - Prova Azul</Text>
        </View>

        <View style={{ height: '93%' }}>
          <ScrollView>
            <View style={styles.tableAnswersTitle}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTitles}>Questões</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTitles}>Respostas</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTitles}>Suas respostas</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 1</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>B</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 2</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>D</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 3</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>A</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 4</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>C</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 5</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>C</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 6</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>B</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 7</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>D</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 8</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>B</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 9</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>E</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 10</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>A</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>

            <View style={styles.tableAnswers}>
              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>Questão 11</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>D</Text>
              </View>

              <View style={styles.tableCells}>
                <Text style={styles.tableTexts}>-</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.statusTest}>
            <Text style={styles.statusTestText}>Status do Simulado: Incompleto</Text>
          </View>
        </View>
      </View>
    </View>
  </>
);
export default EnemAnswers;
