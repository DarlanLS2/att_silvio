import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Casa(props) {
  return (
    <View style={styles.body}>
        <View style={styles.header}>
            <Text style={styles.header__titulo}>titulo</Text>
            <Text style={styles.header__subtitulo}>subtitulo</Text>
        </View>

        <View style={styles.main}>
            <TouchableOpacity style={styles.main__btn} onPress={() => {props.navigation.navigate("Placa_mae")}}>
                <Text style={styles.main__text}>Placa Mãe</Text>
                <Image source={require('../assets/placa_mae.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.main__btn} onPress={() => {props.navigation.navigate("Placa_video")}}>
                <Text style={styles.main__text}>Placa de Video</Text>
                <Image source={require('../assets/placa_video.jpg')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header__titulo: {
    fontSize: 30,
  },
  header__subtitulo: {
    fontSize: 15,
  },
  main__text: {
    fontSize: 20,
  },
  main__btn: {
    margin: 10,
    padding: 5,
    backgroundColor: "#add8e6",
    borderRadius: 5,
    alignItems: "center"
  },
  main: {
    alignItems: "center",
    marginBottom: 50,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#4f5a",
  }
});
