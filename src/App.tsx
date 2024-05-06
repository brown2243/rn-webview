import styled from '@emotion/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WebViewComponent from 'src/components/Webview';
import {ScreenName} from 'src/constant';
import Home from 'src/screens/Home';

const Tab = createBottomTabNavigator();

const AppLayout = styled(SafeAreaView)<{backgroundColor: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <AppLayout backgroundColor={backgroundColor}>
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
    </AppLayout>
  );
}

export default App;
