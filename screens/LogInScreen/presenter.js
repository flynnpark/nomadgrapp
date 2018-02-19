import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const LogInScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/logo-white.png')}
                    resizeMode="stretch"
                    style={styles.logo}
                />
            </View>
            <View style={styles.content}>
                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    autoCapitalize={'none'}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    value={props.username}
                    onChangeText={props.changeUsername}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    autoCapitalize={'none'}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={props.password}
                    onChangeText={props.changePassword}
                    returnKeyType={'send'}
                    onSubmitEditing={props.submit}
                />
                <TouchableOpacity
                    style={styles.touchable}
                    onPressOut={props.submit}
                >
                    <View style={styles.button}>
                        {props.isSubmitting ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <Text style={styles.buttonText}>Log in</Text>
                        )}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.fbContainer}
                    onPressOut={props.fbLogin}
                >
                    <View style={styles.fbView}>
                        <Ionicons
                            name="logo-facebook"
                            size={22}
                            color="#3e99ee"
                        />
                        <Text style={styles.fbText}>Log in with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

LogInScreen.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeUsername: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    fbLogin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: '#4e65b4',
        alignItems: 'center',
        justifyContent: 'center',
        width
    },
    logo: {
        width: 180,
        height: 65,
        marginTop: 20
    },
    content: {
        flex: 4,
        backgroundColor: '#fff',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    fbContainer: {
        marginTop: 50
    },
    fbView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fbText: {
        color: '#3e99ee',
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 14
    },
    textInput: {
        height: 50,
        borderColor: '#bbb',
        borderWidth: 1,
        width: width - 80,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fafafa',
        fontSize: 15
    },
    touchable: {
        borderRadius: 5,
        backgroundColor: '#3e99ee',
        width: width - 80,
        marginTop: 25
    },
    button: {
        paddingHorizontal: 7,
        height: 50,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 15
    }
});

export default LogInScreen;
