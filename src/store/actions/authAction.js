import Parse from 'parse/react-native';

import { autoLogin, hideSplashScreen } from '../slices/authSlice';


export const autoLoginUsr = () => async (dispatch) => {
  const user = await Parse.User.currentAsync();
  if (user) {
    dispatch(autoLogin({
      username: user.get('username'),
      token: user.get('sessionToken'),
    }))
  } else {
    dispatch(hideSplashScreen());
  }
}
