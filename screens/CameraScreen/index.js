import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    CameraRoll
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, Permissions } from 'expo';

class CameraScreen extends Component {
    state = {
        hasCameraPermissions: null,
        type: Camera.Constants.Type.back, // Front or back camera
        flash: Camera.Constants.FlashMode.off,
        pictureTaken: false,
        picture: null
    };
    componentWillMount = async () => {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: camera.status === 'granted'
        });
    };
    render() {
        const { hasCameraPermissions, type, flash } = this.state;
        if (hasCameraPermissions === null) {
            return <View />;
        } else if (hasCameraPermissions === false) {
            return <Text>No Access to Camera, check your settings</Text>;
        } else {
            return (
                <View style={styles.container}>
                    <Camera
                        type={type}
                        flash={flash}
                        ref={camera => (this.camera = camera)}
                        style={styles.camera}
                    >
                        <TouchableOpacity>
                            <View style={styles.action}>
                                <MaterialIcons
                                    name={
                                        type === Camera.Constants.Type.back
                                            ? 'camera-front'
                                            : 'camera-rear'
                                    }
                                    color="white"
                                    size={40}
                                />
                            </View>
                        </TouchableOpacity>
                    </Camera>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity>
                            <View style={styles.button} />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    camera: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 15,
        borderRadius: 50
    },
    action: {
        backgroundColor: 'transparent',
        width: 40,
        height: 40,
        margin: 10
    }
});

export default CameraScreen;
