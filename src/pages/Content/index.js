import { createStackNavigator } from 'react-navigation-stack';
import Content from './pages/Content';
import Simulados from './pages/Simulados';
import ENEM from './pages/ENEM';
import EnemTests from './pages/EnemTests';
import EnemAnswers from './pages/EnemAnswers';

// eslint-disable-next-line import/prefer-default-export
export const ContentStack = createStackNavigator({
  Content: {
    screen: Content,
    navigationOptions: {
      header: null,
    },
  },
  Simulados: {
    screen: Simulados,
    navigationOptions: {
      header: null,
    },
  },
  EnemTests: {
    screen: EnemTests,
    navigationOptions: {
      header: null,
    },
  },
  ENEM: {
    screen: ENEM,
    navigationOptions: {
      header: null,
    },
  },
  EnemAnswers: {
    screen: EnemAnswers,
    navigationOptions: {
      header: null,
    },
  },
});
