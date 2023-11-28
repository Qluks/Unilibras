import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Catalogo = () => {
  return (
    <View style={styles.container}>
      <Text>Catalogo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default Catalogo;
