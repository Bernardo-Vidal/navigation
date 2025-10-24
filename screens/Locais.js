import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Modal,
} from "react-native";
import style from "../style.js";

export default function Locais() {
    const locais = [
        {
            id: "1",
            descricao:
                "Endereço:Av. Gen. Osório, 1985 - Centro, 96400-006\nNúmero: (53) 99991-7307\nHorário: 19:30 até 23:00",
            nome: "Mundo Animal",
        },
        {
            id: "2",
            descricao:
                "Endereço:R. João Batista Fico, 210 - São Judas, 96415-430\nNúmero: (53) 99901-1381\nHorário: 19:30 até 23:00",
            nome: "Mr. Pança Lanches",
        },
        {
            id: "3",
            descricao:
                "Endereço:Tv. Vinte e Cinco, 511 - Pedras Brancas, 96418-280\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Lanches do Alemão",
        },
        {
            id: "4",
            descricao:
                "Endereço:Av. José do Patrocínio, 775 - São Judas, 96415-500\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Império do Xis",
        },
        {
            id: "5",
            descricao:
                "Endereço:Av. São Judas - São Judas, 96418-000\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Lancheria Twister",
        },
        {
            id: "6",
            descricao:
                "Endereço:R. Sen. Alberto Pasqualine, 352-581 - São Judas, 96415-400\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Ki Lanches",
        },
        {
            id: "7",
            descricao:
                "Endereço:Av. Pa Abílio Sponchiado, 1413 - Estrela D''alva, 96415-200\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Avenida Lanches",
        },
        {
            id: "8",
            descricao:
                "Endereço:R. Roque Nova Pinto, 80 - Passo do Príncipe, 96425-150\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Simone Lanche",
        },
        {
            id: "9",
            descricao:
                "Endereço:R. Líbio Vinhas, 552 - Menino Deus, 96402-050\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "Tropical Lanches",
        },
        {
            id: "10",
            descricao:
                "Endereço:R. Dr. Júlio Miranda, 700 - Passo do Príncipe, 96425-200\nNúmero: (53) 99125-2940\nHorário: 19:30 até 23:00",
            nome: "LANCHERIA Encanto",
        },
    ];

    return (
        <View style={style.locais}>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[0].nome, locais[0].descricao)}
            >
                <Image
                    source={{
                        uri: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL0licWNpTjBTUXNXMzFiZXhackxwcnciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Mundo Animal</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[1].nome, locais[1].descricao)}
            >
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixUHPQfPuEnf-cCjevOxvZiRn6xQhSXIILA&s",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Mr. Pança Lanches</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[2].nome, locais[2].descricao)}
            >
                <Image
                    source={{
                        uri: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxLRHUtfZkPFPZcPizeuDRgYPQz-kOyXR1iCEV3TcVEdAVTpBcd0HUtfciVrLz0BMGx63nX2_FjbjVLf3DBrotmHrT2ssIV2KwTV72bkdBqObJVcFoLaIAz5A-ZCLAimjqN8X5ZaA=s680-w680-h510",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Lanches do Alemão</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[3].nome, locais[3].descricao)}
            >
                <Image
                    source={{
                        uri: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npoRTKYYzEY9SJ22OrVmWPWtrcni_0tulLeAlpi4MjkkLfBFkwGXc39BoSeg_oHhwGwc3S9WP1AqpgqWtPsQcwvk15bbSGva71MtLxCSCtOMHCjRbFP0X0r2VAFd3iVhX1XwqR5=s680-w680-h510",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Império do Xis</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[4].nome, locais[4].descricao)}
            >
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePS6aL1dxQ59JwYCWNGYY_SwFgLvhMNYecw&s",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Lancheria Twister</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[5].nome, locais[5].descricao)}
            >
                <Image
                    source={{
                        uri: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qLZoCxrPbAvh8XjHxw0-gQ&cb_client=search.gws-prod.gps&yaw=266.3792&pitch=0&thumbfov=100&w=520&h=175",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Ki Lanches</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[6].nome, locais[6].descricao)}
            >
                <Image
                    source={{
                        uri: "https://lh3.googleusercontent.com/p/AF1QipMJtzRfuWhHHZuYTJabP-imttoLWWbouuFpmUNH=s680-w680-h510",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Avenida Lanches</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[7].nome, locais[7].descricao)}
            >
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Q-LhpwhDEAJvaVfFexFVvPx_7hmoSZGXfQ&s",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Simone Lanche</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[8].nome, locais[8].descricao)}
            >
                <Image
                    source={{
                        uri: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz0lmmv0LizGp-tVBSUl7S6sFdcXMtZNbuViPpV9j949MIDU9KxC3b-x53ZttMbeRJ5tW0wKsfQlIcpJJTDJBPWU1sqRkhdo610HvhTbUTTVI6V5cfTeqceNVLYjz9PkSE0RB8=s680-w680-h510",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>Tropical Lances</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.local}
                onPress={() => Alert.alert(locais[9].nome, locais[9].descricao)}
            >
                <Image
                    source={{
                        uri: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=g-n5CRP87N-Roekm_0x80w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=122.277885&pitch=0&thumbfov=100",
                    }}
                    style={style.localImage}
                ></Image>
                <Text style={style.localText}>LANCHERIA Encanto</Text>
            </TouchableOpacity>
        </View>
    );
}
