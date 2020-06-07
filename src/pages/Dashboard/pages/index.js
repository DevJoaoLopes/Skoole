import { createStackNavigator } from 'react-navigation-stack';
import Dash from './Dash/Dashboard';
import Schedule from './Schedule';
import Cronograma from './Cronograma';

// eslint-disable-next-line import/prefer-default-export
export const DashboardStack = createStackNavigator({
  Dash: {
    screen: Dash,
    navigationOptions: {
      header: null,
    },
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      header: null,
    },
  },
  Cronograma: {
    screen: Cronograma,
    navigationOptions: {
      header: null,
    },
  },

});
