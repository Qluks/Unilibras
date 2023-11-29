import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Educacao from './src/screens/Educacao';
import Formulario from './src/screens/Formulario';
import Chat from './src/screens/Chat';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



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
          name="Formulario"
          component={Formulario}
          options={{headerShown: false}}
        />

        
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Educacao"
          component={Educacao}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
