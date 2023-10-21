import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native"
import { Button, Divider, HelperText, Text, TextInput } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux";

import { logout, resetPassword } from "../../store/thunks/authThunk";
import { clearError } from "../../store/slices/authSlice";


export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [password, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { username, error, isError } = useSelector(state => state.user)

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        dispatch(clearError())
      }, 5000)
    }
  }, [isError])

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.spacer]}>Welcome {username}</Text>
      <Divider />
      <Text variant="labelSmall" style={[styles.spacer, { marginLeft: 0 }]}>Change the password</Text>
      <TextInput
        label="Current Password"
        value={password}
        onChangeText={text => setCurrentPassword(text)}
      />
      <TextInput
        label="New Password"
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <Button style={[styles.spacer, styles.btnStyle]} icon="logout" mode="contained" onPress={() => dispatch(resetPassword({ password, newPassword }))}>
        Update Password
      </Button>
      <HelperText type="error" visible={isError}>
        {error}
      </HelperText>
      <Button
        style={[styles.spacer, styles.btnStyle, { borderColor: 'red' }]}
        icon="logout"
        mode="outlined"
        textColor="red"
        onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    textAlign: 'center',
  },
  spacer: {
    margin: 16
  },
  btnStyle:
    { borderRadius: 4, marginHorizontal: 0, paddingVertical: 6 }
})