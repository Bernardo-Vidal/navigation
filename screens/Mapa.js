/*import { Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import style from "../style.js";

export default function Mapa(){
    <View style={style.container}>
        <MapView 
            style={{ width: '100%', height: '100%'}} 
            region={{
                latitude: -31.3320872,
                longitude: -54.0718895,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
            }}
            mapType='hybrid'
        >
        
        <Marker 
            title='Nosso marcador'
            description='Laboratório 2'
            coordinate={{
            latitude: -31.3325472,
            longitude: -54.0724095
            }}
        />
        </MapView>
    </View>
}*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nosso Mapa</Text>

      <MapView 
        style={{ width: '80%', height: '60%'}} 
        region={{
          latitude: -31.3320872,
          longitude: -54.0718895,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}
        mapType='hybrid'
      >
        
        <Marker 
          title='Nosso marcador'
          description='Laboratório 2'
          coordinate={{
            latitude: -31.3325472,
            longitude: -54.0724095
          }}
        />


      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});