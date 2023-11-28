import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Principal() {
  return (
    <View style={styles.container}>
      <Text>Conversa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default Principal;
