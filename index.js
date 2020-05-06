import React from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/routes';
import { name as appName } from './app.json';

const App = () => <Routes />;

AppRegistry.registerComponent(appName, () => App);

console.disableYellowBox = true;
