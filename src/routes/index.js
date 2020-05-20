import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from '../pages/Login';
import Register from '../pages/Register';
import { DashboardTabs } from '../pages/Dashboard';

const Routes = createSwitchNavigator({
  Auth: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Dashboard: {
    screen: DashboardTabs,
  },
});

export default createAppContainer(Routes);
