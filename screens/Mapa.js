import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "../style.js";

export default function App() {
    return (
        <View>
            <MapView
                style={styles.map}
                region={{
                    latitude: -31.328176,
                    longitude: -54.101824,
                    latitudeDelta: 0.07,
                    longitudeDelta: 0.07,
                }}
                mapType="hybrid"
            >
                <Marker
                    title="Mundo Animal"
                    description="Av. Gen. Osório, 1985 - Centro, 96400-006"
                    coordinate={{
                        latitude: -31.31806,
                        longitude: -54.10858,
                    }}
                />
                <Marker
                    title="Mr Pança Lanches"
                    description="R. João Batista Fico, 210 - São Judas, 96415-430"
                    coordinate={{
                        latitude: -31.33257441845208,
                        longitude: -54.08253414431873,
                    }}
                />
                <Marker
                    title="Lanches do Alemão"
                    description="Tv. Vinte e Cinco, 511 - Pedras Brancas, 96418-280"
                    coordinate={{
                        latitude: -31.33960612454148,
                        longitude: -54.07347561202044,
                    }}
                />
                <Marker
                    title="Império do Xis"
                    description="Av. José do Patrocínio, 775 - São Judas, 96415-500"
                    coordinate={{
                        latitude: -31.330531801387057,
                        longitude: -54.07864183215673,
                    }}
                />
                <Marker
                    title="Lancheria Twister"
                    description="Av. São Judas - São Judas, 96418-000"
                    coordinate={{
                        latitude: -31.333940887904298,
                        longitude: -54.07924264696702,
                    }}
                />
                <Marker
                    title="Ki Lanches"
                    description="R. Sen. Alberto Pasqualine, 352-581 - São Judas, 96415-400"
                    coordinate={{
                        latitude: -31.33520754490829,
                        longitude: -54.0851915008214,
                    }}
                />
                <Marker
                    title="Avenida Lanches"
                    description="Av. Pa Abílio Sponchiado, 1413 - Estrela D''alva, 96415-200"
                    coordinate={{
                        latitude: -31.33141236794324,
                        longitude: -54.085683713491086,
                    }}
                />
                <Marker
                    title="Simone Lanche E Padaria confeitaria sonho de BEBÊ"
                    description="R. Roque Nova Pinto, 80 - Passo do Príncipe, 96425-150"
                    coordinate={{
                        latitude: -31.34508573419487,
                        longitude: -54.12346125906244,
                    }}
                />
                <Marker
                    title="Tropical Lanches"
                    description="R. Líbio Vinhas, 552 - Menino Deus, 96402-050"
                    coordinate={{
                        latitude: -31.324686774506286,
                        longitude: -54.12286044418443,
                    }}
                />
                <Marker
                    title="LANCHERIA Encanto"
                    description="R. Dr. Júlio Miranda, 700 - Passo do Príncipe, 96425-200"
                    coordinate={{
                        latitude: -31.346320873336285,
                        longitude: -54.12270013912312,
                    }}
                />
            </MapView>
        </View>
    );
}
