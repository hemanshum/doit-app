import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/thunks/authThunk";


export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.user)

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.spacer]}>Welcome {username}</Text>
      <Button style={[styles.spacer, styles.btnStyle]} icon="logout" mode="contained" onPress={() => dispatch(logout())}>
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