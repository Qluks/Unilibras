import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Formulario from './src/screens/Formulario';
import Chat from './src/screens/Chat';
import Catalogo from './src/screens/Catalogo';
import Lista from './src/screens/Lista';
import Exemplos from './src/screens/Exemplos';

const Stack = createStackNavigator();

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
          component={Catalogo}
          options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#f2af58',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#f2af58',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name="Exemplos"
          component={Exemplos}
          options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#f2af58',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
