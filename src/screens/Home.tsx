import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import mao from '../assets/mao.png';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={mao} />
      <Text style={styles.textStyle1}>Bem-vindo!!</Text>
      <Text style={styles.textStyle2}>
        Libras é a sigla da Língua Brasileira de Sinais, uma língua de
        modalidade gestual-visual onde é possível se comunicar através de
        gestos, expressões faciais e corporais.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Formulario')}
        style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  textStyle1: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textStyle2: {
    marginTop: 30,
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#f2af58',
    borderRadius: 12,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
