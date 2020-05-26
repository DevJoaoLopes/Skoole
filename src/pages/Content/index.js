import { createStackNavigator } from 'react-navigation-stack';
import Content from './pages/Content';
import Simulados from './pages/Simulados';

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
});
