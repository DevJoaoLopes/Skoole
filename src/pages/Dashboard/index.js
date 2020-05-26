import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import Dashboard from './Dashboard';
import Profile from '../Profile';
import TabBarIcon from '../../assets/components/TabBarIcon';
import { CommunityStack } from '../Community';
import { ContentStack } from '../Content';

export const DashboardTabs = createBottomTabNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Content: {
      screen: ContentStack,
      navigationOptions: {
        tabBarLabel: 'Conteúdos',
      },
    },
  Community: {
    screen: CommunityStack,
    navigationOptions: {
      tabBarLabel: 'Comunidade',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Perfil',
    },
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => <TabBarIcon navigation={navigation} focused={focused} />,
  }),
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: 'rgba(255, 255, 255, 0.4)',
    style: {
      height: 65,
      backgroundColor: '#4B0082',
      alignContent: 'center',
    },
  },
});

export default Dashboard;
