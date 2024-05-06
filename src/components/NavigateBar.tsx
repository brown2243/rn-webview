import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from 'src/constant';
import Home from 'src/screens/Home';
import WebViewComponent from 'src/components/Webview';

const Tab = createBottomTabNavigator();

function NavigateBar() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.Home}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name={ScreenName.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={ScreenName.Braurus}
        options={{
          tabBarLabel: ScreenName.Braurus,
        }}>
        {props => <WebViewComponent {...props} url="https://braurus.dev/" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default NavigateBar;
