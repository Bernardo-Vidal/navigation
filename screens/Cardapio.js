import { useState } from "react";
import { Text, View, TouchableHighlight, Alert, FlatList } from "react-native";
import style from "../style.js";

export default function Cardapio() {
    const cardapio = [
        { id: 1, nome: "Pancho Simples", preco: "R$7,00" },
        { id: 2, nome: "Cachorro Simples", preco: "R$9,00" },
        { id: 3, nome: "Cachorro Completo", preco: "R$12,00" },
        { id: 4, nome: "Xis-Bacon", preco: "R$29,00" },
        { id: 5, nome: "Xis-Família", preco: "R$49,00" },
        { id: 6, nome: "Xis-Calabresa", preco: "R30,00" },
        { id: 7, nome: "Xis-Bauru", preco: "R$35,00" },
        { id: 8, nome: "Coca-Cola 2L", preco: "R$15,00" },
        { id: 9, nome: "Pepsi 2L", preco: "R$10,00" },
        { id: 10, nome: "Cerveja Litrão", preco: "R$14,00" },
        { id: 11, nome: "Água", preco: "R$15,00" },
    ];
    const CardapioItem = ({ nome, preco }) => (
        <TouchableHighlight
            style={style.cardapio}
            onPress={() => Alert.alert(nome, preco)}
        >
            <View>
                <Text style={style.cardapioText}>{nome}</Text>
            </View>
        </TouchableHighlight>
    );
    return (
        <View style={style.cardapioContainer}>
            <FlatList
                data={cardapio}
                renderItem={({ item }) => <CardapioItem {...item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    gap: 15,
                }}
            ></FlatList>
        </View>
    );
}
