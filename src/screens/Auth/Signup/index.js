import { useDispatch } from 'react-redux';

import { AuthComponent } from '../../../components';
import { signup } from '../../../store/thunks/authThunk';
import { clearError } from '../../../store/slices/authSlice';

export const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignup = ({ username, password }) => {
    dispatch(signup({ username, password }));
  };

  return (
    <AuthComponent
      title="Signup"
      switchBtnTitle="Already Registred? Login..."
      switchHandler={() => {
        dispatch(clearError())
        navigation.navigate("Login")
      }}
      authHandler={handleSignup}
    />
  );
};
