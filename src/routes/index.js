import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from '../pages/Login';
import { DashboardTabs } from '../pages/Dashboard';

const Routes = createSwitchNavigator({
  Auth: {
    screen: Login,
  },
  Dashboard: {
    screen: DashboardTabs,
  },
});

export default createAppContainer(Routes);
