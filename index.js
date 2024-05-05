/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from 'src/App';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Main = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Main);
