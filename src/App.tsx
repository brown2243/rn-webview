/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WebViewComponent from 'src/components/Webview';
import Home from 'src/screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
      <Stack.Screen name="Braurus">
        {props => <WebViewComponent {...props} url="https://braurus.dev/" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default App;
