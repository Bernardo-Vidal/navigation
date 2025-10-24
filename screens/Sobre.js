import { Text, View } from "react-native";
import style from "../style.js";

export default function Sobre() {
    return (
        <View style={style.container}>
            <Text style={style.sobreTitle}>Sobre o App</Text>
            <Text style={style.sobreSubTitle}>Mapa:</Text>
            <Text style={style.sobreText}>
                Visualize os locais de diversas lancherias no mapa da cidade.
            </Text>
            <Text style={style.sobreSubTitle}>Locais:</Text>
            <Text style={style.sobreText}>
                Locais, com horário de atendimento, endereço e número para
                contato
            </Text>
            <Text style={style.sobreSubTitle}>Cardápio:</Text>
            <Text style={style.sobreText}>
                Lista de itens disponíveis em diversas lancherias
            </Text>
        </View>
    );
}
