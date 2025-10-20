import { Text, View } from "react-native";
import style from '../style.js'

export default function Sobre(){
    return(
        <View style={{backgroundColor: '#00B4D8'}}>
            <View style={style.container}> 
                <View>
                    <Text style={style.sobreTitle}>
                    Sobre o App
                    </Text>
                </View>
                <View>
                    <Text style={style.sobreSubTitle}>
                    Mapa:
                    </Text>
                    <Text style={style.sobreText}>Visualize os locais de diversas lancherias no mapa da cidade.</Text>
                </View>
                <View>
                    <Text style={style.sobreSubTitle}>
                    Locais:
                    </Text>
                    <Text style={style.sobreText}>Lista de locais, com horário de atendimento, endereço e número para contato</Text>
                </View>
                <View>
                    <Text style={style.sobreSubTitle}>
                    Cardápio:
                    </Text>
                    <Text style={style.sobreText}>Compare os preços de itens disponíveis em diversas lancherias</Text>
                </View>
                <View>
                    <Text style={style.sobreSubTitle}>
                    Favoritos:
                    </Text>
                    <Text style={style.sobreText}>Gerencie seus locais e itens favoritos</Text>
                </View>
            </View>
        </View>
    )
}