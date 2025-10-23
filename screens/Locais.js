import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "../style.js";

export default function Locais() {
    return (
        <View style={style.locais}>
            <TouchableOpacity style={style.local}>
                <Image
                    source={
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.C47J_xrj-fidfdwklUqoAAHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=5b90b58b4d3ac82c6778164b901e8da1a47c0efb048aa05837a6f1a7372d3de2&ipo=images"
                    }
                    style={{ height: 100, width: 100 }}
                ></Image>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.local}>
                <Text>coiso</Text>
            </TouchableOpacity>
        </View>
    );
}
