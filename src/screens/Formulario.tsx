import * as React from 'react';
import {
  View,
  Text,
  Picker,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Home({navigation}) {
  const [nome, setNome] = React.useState('');
  const [curso, setCurso] = React.useState('Administração');
  const [periodo, setPeriodo] = React.useState('');
  const [turno, setTurno] = React.useState('Manhã');

  const handleSubmit = () => {
    console.log('Nome:', nome);
    console.log('Curso:', curso);
    console.log('Período:', periodo);
    console.log('Turno:', turno);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle1}>Formulário de Atendimento</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={text => setNome(text)}
      />

      <Text style={styles.label}>Curso:</Text>
      <Picker
        selectedValue={curso}
        style={styles.input}
        onValueChange={itemValue => setCurso(itemValue)}>
        <Picker.Item label="Administração" value="Administração" />
        <Picker.Item
          label="Arquitetura e Urbanismo"
          value="Arquitetura e Urbanismo"
        />
        <Picker.Item
          label="Sistemas para Internet"
          value="Sistemas para Internet"
        />
      </Picker>

      <Text style={styles.label}>Período:</Text>
      <TextInput
        style={styles.input}
        value={periodo}
        onChangeText={text => setPeriodo(text)}
      />

      <Text style={styles.label}>Turno:</Text>
      <Picker
        selectedValue={turno}
        style={styles.input}
        onValueChange={itemValue => setTurno(itemValue)}>
        <Picker.Item label="Manhã" value="Manhã" />
        <Picker.Item label="Tarde" value="Tarde" />
        <Picker.Item label="Noite" value="Noite" />
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f2af58',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle1: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
