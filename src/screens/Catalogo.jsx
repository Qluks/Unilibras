import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import alfabeto from '../assets/alfabeto.png'
import document from '../assets/document.png'

function Catalogo({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => navigation.navigate('Lista', {classe: 'alfabeto'})}>
          <Image
            source={{ uri: alfabeto }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Alfabeto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => navigation.navigate('Lista', {classe: 'documento'})}>
          <Image
            source={{ uri: document }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Documentos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryImage: {
    marginTop: 30,
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default Catalogo;
