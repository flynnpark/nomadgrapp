import { TabNavigator } from 'react-navigation';
import CameraScreen from '../screens/CameraScreen';
import LibraryScreen from '../screens/LibraryScreen';

const AddPhotoNavigation = TabNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: 'Photo'
      }
    },
    Library: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: 'Library'
      }
    }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      upperCaseLabel: true,
      activeTintColor: '#000',
      inactiveTintColor: '#bbb',
      style: {
        backgroundColor: '#fff',
        alignItems: 'center'
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '600'
      },
      showIcon: false
    }
  }
);

export default AddPhotoNavigation;
