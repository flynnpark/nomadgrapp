import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(photoActions.getFeed());
      dispatch(photoActions.getSearch());
      dispatch(userActions.getNotifications());
      dispatch(userActions.getOwnProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
