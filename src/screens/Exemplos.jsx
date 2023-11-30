import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDados } from "../../api/alfabeto";
import YoutubeIframe from "react-native-youtube-iframe";

function Exemplos({ route }) {
  const { objectId, classe } = route.params;
  const { dados, isLoading, isError } = useDados(classe);

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  const video = dados.find((item) => item.objectId === objectId);

  if (!video) {
    return <Text>Vídeo não encontrado</Text>;
  }
  return (
    <View style={styles.container}>
      <YoutubeIframe
        height={900}
        forceAndroidAutoplay={true}
        videoId={video.videoId}
        webViewStyle={{
          flex: 1,
          height:500,
          alignItems: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },
});
export default Exemplos;
