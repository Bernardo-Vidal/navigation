import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from '../style.js';

export default function App() {
  return (
    <View>
      <MapView 
        style={styles.map} 
        region={{
          latitude: -31.328176,
          longitude: -54.106824,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
        mapType= 'standard'
      >
        <Marker 
          title='Mundo Animal'
          description='Lanchonete Temática'
          coordinate={{
            latitude: -31.31806,
            longitude: -54.10858
          }}
        />
        <Marker
          title='Mr Pança Lanches'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.33257441845208,
            longitude: -54.08253414431873
          }}
        />
        <Marker
          title='Lanches do Alemão'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.33960612454148,
            longitude: -54.07347561202044
          }}
        />
        <Marker
          title='Império do Xis'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.330531801387057,
            longitude: -54.07864183215673
          }}
        />
        <Marker
          title='Lancheria Twister'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.333940887904298,
            longitude: -54.07924264696702
          }}
        />
        <Marker
          title='Ki Lanches'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.33520754490829,
            longitude: -54.0851915008214
          }}
        />
        <Marker
          title='Lancheria da Rose!!'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.34340889758116,
            longitude: -54.12662626561726
          }}
        />
        <Marker
          title='Simone Lanche E Padaria confeitaria sonho de BEBÊ'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.34508573419487,
            longitude: -54.12346125906244
          }}
        />
        <Marker
          title='Tropical Lanches'
          description='adsfasdfsdf'
          coordinate={{
            latitude: -31.324686774506286,
            longitude: -54.12286044418443
          }}
        />
      </MapView>
    </View>
  );
}