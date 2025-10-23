import { useState } from "react";
import { Text, Modal, View, TouchableOpacity } from "react-native";

export default function Cardapio() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                style={{ height: 300, width: 300, backgroundColor: "#f0f" }}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    style={{ backgroundColor: "#fff", height: 50, width: 200 }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text>Cardapio</Text>
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity
                style={{ backgroundColor: "#fff", height: 50, width: 200 }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Text>Cardapiofhgfghfghfhgfhg</Text>
            </TouchableOpacity>
        </View>
    );
}
