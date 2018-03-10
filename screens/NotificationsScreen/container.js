import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import NavButton from '../../components/NavButton';
import NotificationsScreen from './presenter';

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

    static propTypes = {
        notifications: PropTypes.array,
        getNotifications: PropTypes.func.isRequired
    };

    static defaultProps = {
        notifications: []
    };

    state = {
        isFetching: false
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.notifications) {
            this.setState({
                isFetching: false
            });
        }
    };

    _refresh = () => {
        const { getNotifications } = this.props;
        this.setState({
            isFetching: true
        });
        getNotifications();
    };

    render() {
        return (
            <NotificationsScreen
                {...this.props}
                {...this.state}
                refresh={this._refresh}
            />
        );
    }
}

export default Container;
