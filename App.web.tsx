import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/home';
import Catalogo from './src/screens/Catalogo';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (

    <Tab.Navigator 
    initialRouteName="Home2"
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#15141F',
            paddingBottom: 10,
          },
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#15141F',
          },
        }}
    >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="aprendizagem" component={Catalogo} />
        

        
    </Tab.Navigator>
  );
}


const App = () => {
  return (

    <NavigationContainer>
   

    <Stack.Navigator>

      <Stack.Screen 
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />


        <Stack.Screen 
          name="Entrar"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />


    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;