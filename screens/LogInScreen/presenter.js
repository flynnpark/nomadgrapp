import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.header}>
                <Image
                    source={require("../../assets/images/logo-white.png")}
                    resizeMode="stretch"
                    style={styles.logo}
                />
            </View>
            <View style={styles.content}>
                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.touchable}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fbContainer}>
                    <View style={styles.fbView}>
                        <Ionicons name="logo-facebook" size={22} color="#3e99ee" />
                        <Text style={styles.fbText}>Log in with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header : {
        flex: 1,
        backgroundColor: "#4e65b4",
        alignItems: "center",
        justifyContent: "center",
        width
    },
    logo: {
        width: 180,
        height: 65,
        marginTop: 20
    },
    content: {
        flex: 4,
        backgroundColor: "#fff",
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    fbContainer: {
        marginTop: 50
    },
    fbView: {
        flexDirection: "row",
        alignItems: "center"
    },
    fbText: {
        color: "#3e99ee",
        marginLeft: 10,
        fontWeight: "600",
        fontSize: 14
    },
    textInput: {
        height: 50,
        borderColor: "#bbb",
        borderWidth: 1,
        width: width - 80,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        fontSize: 15
    },
    touchable: {
        borderRadius: 5,
        backgroundColor: "#3e99ee",
        width: width - 80
    },
    button: {
        paddingHorizontal: 7,
        height: 50,
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 15
    },
})

export default LogInScreen;