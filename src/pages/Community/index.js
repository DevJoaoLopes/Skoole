import { createStackNavigator } from 'react-navigation-stack';
import Community from './pages/Community';
import Subject from './pages/Subject';
import Midia from './pages/Midia';
import Questions from './pages/Questions';
import QuestionsVest from './pages/QuestionsVest';
import QuestionMenu from './pages/QuestionMenu';

// eslint-disable-next-line import/prefer-default-export
export const CommunityStack = createStackNavigator({
  Community: {
    screen: Community,
    navigationOptions: {
      header: null,
    },
  },
  Subject: {
    screen: Subject,
    navigationOptions: {
      header: null,
    },
  },
  Questions: {
    screen: Questions,
    navigationOptions: {
      header: null,
    },
  },
  Midia: {
    screen: Midia,
    navigationOptions: {
      header: null,
    },
  },
  QuestionMenu: {
    screen: QuestionMenu,
    navigationOptions: {
      header: null,
    },
  },
  QuestionsVest: {
    screen: QuestionsVest,
    navigationOptions: {
      header: null,
    },
  },
});
