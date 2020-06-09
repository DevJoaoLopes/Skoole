import React from 'react';
import {
  View, Text,
} from 'react-native';
import { LocaleConfig, Agenda } from 'react-native-calendars';
import Navbar from '../../../../assets/components/Navbar';
import styles from './styles';


const Schedule = ({ navigation }) => {
  LocaleConfig.locales.fr = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
    dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    today: 'Hoje',
  };
  LocaleConfig.defaultLocale = 'fr';

  return (
    <>
      <Navbar navigation={navigation} title="AGENDA DE ESTUDO" />
      <View style={styles.container}>
        <Agenda
          items={{
            '2020-06-08': [{ desc: 'Nenhum evento', hora: '' }],
            '2020-06-09': [{ desc: 'Prova Enem dia 2', hora: 'Horario: 10:20' }],
            '2020-06-10': [{ desc: 'Prova Fuvest', hora: 'Horario: 12:30' }],
            '2020-06-11': [{ desc: 'Prova Univem', hora: 'Horario: 13:20' }],
            '2020-06-12': [{ desc: 'Prova Unimar', hora: 'Horario: 10:00' }],
            '2020-06-13': [{ desc: 'Prova Fatec', hora: 'Horario: 10:00' }],
            '2020-06-14': [{ desc: 'Prova USP 2 dia', hora: 'Horario: 11:20' }],
            '2020-06-15': [{ desc: 'Nenhum evento', hora: '' }],
          }}
          theme={{
            dotColor: '#4B0082',
            selectedDayBackgroundColor: '#4B0082',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#4B0082',
            dayTextColor: 'gray',
            agendaDayNumColor: '#4B0082',
            agendaTodayColor: 'red',
            backgroundColor: '#DCDCDC',
            agendaDayTextColor: '#4B0082',
            agendaKnobColor: '#4B0082',
          }}
          renderItem={(item) => (
            <View style={{
              backgroundColor: '#ffffff',
              height: 100,
              width: '90%',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 20,
            }}
            >
              <Text style={{ color: '#4B0082', fontSize: 24, marginLeft: 10 }}>{item.desc}</Text>
              <Text style={{ color: '#363636', fontSize: 18, marginLeft: 10 }}>{item.hora}</Text>
            </View>
          )}
        />
      </View>
    </ >
  );
};
export default Schedule;
