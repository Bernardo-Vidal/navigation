import { useNavigation } from "@react-navigation/native";
import {
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from "react-native";
import style from "../style";

export default function Login() {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView style={style.login}>
            <Text style={style.loginTitle}>Login</Text>
            <TextInput
                style={style.loginInput}
                placeholder="Username"
                inputMode="text"
            ></TextInput>
            <TextInput
                style={style.loginInput}
                placeholder="Password"
                inputMode="numeric"
                secureTextEntry={true}
            ></TextInput>
            <TouchableHighlight
                style={style.loginTouchable}
                onPress={() => navigation.navigate("Mapa")}
            >
                <Text style={{ color: "#caf0f8" }}>Login</Text>
            </TouchableHighlight>
        </KeyboardAvoidingView>
    );
}
