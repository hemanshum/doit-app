
import { useDispatch, useSelector } from 'react-redux';

import { AuthComponent } from '../../../components';
import { login } from '../../../store/thunks/authThunk';
import { clearError } from '../../../store/slices/authSlice';
import { Snackbar } from 'react-native-paper';
import { useEffect, useState } from 'react';

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userStatus } = useSelector(state => state.user);

  const [show, setShow] = useState(false)


  const loginHandler = ({ username, password }) => {
    dispatch(login({ username, password }))
  }

  const onDismissSnackBar = () => {
    setShow(false);
  }

  useEffect(() => {
    if (userStatus?.status === 'password updated') {
      setShow(true);
      setTimeout(() => {
        onDismissSnackBar();
      }, 5000);
    }
  }, [userStatus])


  return (
    <>
      <AuthComponent
        title="Login"
        switchBtnTitle="New User? Signup"
        switchHandler={() => {
          dispatch(clearError())
          navigation.navigate("Signup")
        }}
        authHandler={loginHandler}
      />
      <Snackbar
        visible={show}
        onDismiss={onDismissSnackBar}
      >
        {userStatus?.message}
      </Snackbar>
    </>
  )
}