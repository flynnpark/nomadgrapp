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
                <TextInput placeholder="Username" />
                <TextInput placeholder="Password" />
                <TouchableOpacity>
                    <View>
                        <Text>Login</Text>
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
        paddingTop: 20,
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
    }
})

export default LogInScreen;
