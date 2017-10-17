import { connect, Dispatch } from 'react-redux';
// import { StoreState } from '../types/profile';
import ProfileForm from '../components/ProfileForm';
import * as actions from '../actions/';

const mapStateToProps = (state: {}) => ({});

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
    return {
      // fetchProfile: () => {
      //   dispatch(profile()).then((response) => {
      //           dispatch(setProfileData(response))
      //       });
      // },
      validateAndUpdateRecords: (values: any ) => {
        dispatch(actions.profileUpdate(values));
      }
    };
};

let ProfilePage = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(ProfileForm);

export default ProfilePage;
