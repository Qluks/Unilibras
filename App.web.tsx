import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Catalogo from './src/screens/Catalogo';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (

    <Tab.Navigator 
    initialRouteName="Home2"
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#f2af58',
            paddingBottom: 10,
          },
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#f2af58',
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
        name="Unilibras"
        component={Login}
        options={{ headerShown: false }}
      />


        <Stack.Screen 
          name="Home"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />


    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;