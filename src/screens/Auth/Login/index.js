
import { useDispatch } from 'react-redux';

import { AuthComponent } from '../../../components';
import { login } from '../../../store/thunks/authThunk';
import { clearError } from '../../../store/slices/authSlice';

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();


  const loginHandler = ({ username, password }) => {
    dispatch(login({ username, password }))
  }

  return <AuthComponent
    title="Login"
    switchBtnTitle="New User? Signup"
    switchHandler={() => {
      dispatch(clearError())
      navigation.navigate("Signup")
    }}
    authHandler={loginHandler}
  />
}