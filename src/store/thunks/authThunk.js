import { createAsyncThunk } from "@reduxjs/toolkit";
import Parse from 'parse/react-native';

export const signup = createAsyncThunk('user/signup', async (user) => {
  const userCreate = new Parse.User();

  const userObj = {
    username: user.username,
    password: user.password
  }

  const userDetails = await userCreate.signUp(userObj);

  return {
    username: userDetails.get('username'),
    token: userDetails.get('sessionToken'),
  }
})

export const login = createAsyncThunk('user/login', async (user) => {
  const userDetails = await Parse.User.logIn(user.username, user.password);

  return {
    username: userDetails.get('username'),
    token: userDetails.get('sessionToken'),
  }
})


export const logout = createAsyncThunk('user/logout',
  async () => {
    await Parse.User.logOut();
    return {}
  })

export const resetPassword = createAsyncThunk('user/resetPassword',
  async ({ password, newPassword }) => {
    const status = await Parse.Cloud.run("resetPassword", { password, newPassword });

    return JSON.parse(status);
  })