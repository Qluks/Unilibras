import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {auth} from '../firebase';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/Logo.png';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('Usuário logado:', userCredential.user);

      navigation.navigate('Formulario');
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          height: 40,
          width: 160,
          borderRadius: 10,
          backgroundColor: '#808080',
          marginLeft: 50,
          marginRight: 50,
          marginTop: 5,
          alignItems: 'center',
        }}
        onPress={handleLogin}>
          <Text style={{ marginTop: 10, color: '#FFFFFF' }}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2af58',
  },
  input: {
    width: '300px',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: '4px',
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '200px',
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '35px',
  },
});

export default LoginScreen;
