import { StackNavigator } from 'react-navigation';
import TakePhotoScreen from '../screens/TakePhotoScreen';

const RootNavigation = StackNavigator(
    {
        TakePhotoScreen: {
            screen: TakePhotoScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        mode: 'modal'
    }
);

export default RootNavigation;
