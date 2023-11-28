import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Educacao from './src/screens/Educacao';
import Formulario from './src/screens/Formulario';
import Principal from './src/screens/Principal';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home2"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f2af58',
          paddingBottom: 10,
        },
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#f2af58',
        },
      }}>
      <Tab.Screen name="Chat" component={Principal} />
      <Tab.Screen name="Educação" component={Educacao} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Unilibras"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
