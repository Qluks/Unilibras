import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDados } from "../../api/alfabeto";

function Lista({ navigation, route }) {
  const { classe } = route.params;
  const { dados, isLoading, isError } = useDados(classe);

  if (isLoading) {
    return <Text style={styles.container}>Carregando...</Text>;
  }

  if (isError) {
    return <Text style={styles.container}>Ocorreu um erro ao carregar os dados</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Exemplos", { objectId: item.objectId, classe: classe })}>
              <View style={styles.rectangle}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  rectangle: {
    borderRadius: 15,
    width: 350,
    padding: 18,
    backgroundColor: "#f2af58",
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
});
export default Lista;
