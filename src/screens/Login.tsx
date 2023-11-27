import * as React from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import mao from '../assets/mao.png';
import Home from './home';


function Login({navigation}) {


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={mao} />
            <Text style={styles.textStyle1}>Bem-vindo!!</Text>
            <Text style={styles.textStyle2}>Libras é a sigla da Língua Brasileira de Sinais, uma língua de modalidade gestual-visual onde é possível se comunicar através de gestos, expressões faciais e corporais.</Text>
            <Button
                onPress={() => navigation.navigate('Entrar')}
                title="Começar"
                buttonStyle={{
                    backgroundColor: '#f2af58',
                    borderRadius: 12,
                }}      
                containerStyle={{
                    width: 300,
                    height: 55,
                    marginTop: 50,
                    fontSize: 18,   
                }}
                titleStyle={{ color: 'white', fontSize:18, paddingVertical: 5}}
            />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: "100%",
      flexDirection: 'column',
      textAlign: "center",
      alignItems: "center"
    },
    textStyle1: {
        color: "#000000",
        marginTop: 30,
        fontWeight: "bold",
    },
    textStyle2: {
        color: "#000000",
        marginLeft: 5,
        marginTop: 20,
        textAlign: "center"
    },
    image: {
        marginTop: 150,
        width: 200,
        height: 200,
    }
});

export default Login;