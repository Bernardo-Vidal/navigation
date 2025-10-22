import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0077B6",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "2.5%",
        margin: "2.5%",
        borderRadius: 10,
    },
    sobreTitle: {
        color: "#CAF0F8",
        fontSize: 40,
        fontWeight: "bold",
        marginVertical: "5%",
    },
    sobreSubTitle: {
        color: "#CAF0F8",
        fontSize: 30,
        fontWeight: "400",
        marginVertical: "5%",
        marginHorizontal: ".5%",
    },
    sobreText: {
        color: "#CAF0F8",
        fontSize: 20,
        marginHorizontal: "2%",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    locais: {
        flex: 1,
        backgroundColor: "#0077B6",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "2.5%",
        margin: "2.5%",
        borderRadius: 10,
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "space-evenly",
        rowGap: "2.5%",
    },
    local: {
        backgroundColor: "#0f0",
        width: "45%",
        marginHorizontal: "2.5%",
        height: 100,
        borderRadius: 10,
    },
});
