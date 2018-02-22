import React, { Component } from 'react';
import FeedScreen from './presenter';
import { Image } from 'react-native';
import NavButton from '../../components/NavButton';

class Container extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Image
                source={require('../../assets/images/logo.png')}
                style={{ height: 35 }}
                resizeMode={'contain'}
            />
        ),
        headerLeft: (
            <NavButton
                iconName={'ios-camera-outline'}
                onPress={() => navigation.navigate('TakePhoto')}
            />
        )
    });
    render() {
        return <FeedScreen {...this.props} />;
    }
}

export default Container;
