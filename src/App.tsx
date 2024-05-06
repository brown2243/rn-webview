import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WebViewComponent from 'src/components/Webview';
import {ScreenName} from 'src/constant';
import Home from 'src/screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName={ScreenName.Home}>
      <Stack.Screen name={ScreenName.Home} component={Home} />
      <Stack.Screen name={ScreenName.Braurus}>
        {props => <WebViewComponent {...props} url="https://braurus.dev/" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default App;
