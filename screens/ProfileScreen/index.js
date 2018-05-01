import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';
import Container from './container';

const mapStateTpProps = (state, ownProps) => {
  const { user: { profile } } = state;
  return {
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOwnProfile: () => {
      dispatch(userActions.getOwnProfile());
    }
  };
};

export default connect(mapStateTpProps, mapDispatchToProps)(Container);
