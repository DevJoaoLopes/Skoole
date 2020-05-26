import { createStackNavigator } from 'react-navigation-stack';
import Content from './pages/Content';
import Simulados from './pages/Simulados';
import ENEM from './pages/ENEM';

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
    ENEM: {
        screen: ENEM,
        navigationOptions: {
            header: null,
        },
    }
});
