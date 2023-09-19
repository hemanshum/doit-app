import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';

export const AuthComponent = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error, isError } = useSelector(state => state.user)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.spacer} variant="labelLarge">
          Welcome
        </Text>
        <Text variant="headlineLarge">Doit</Text>
        <Text style={styles.spacer} variant="bodyLarge">
          {props.title}
        </Text>
        <View style={styles.subContainer}>
          <TextInput
            label="Username"
            error={isError}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            label="Password"
            error={isError}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            style={[styles.spacer, styles.btnStyle]}
            icon="login"
            mode="contained"
            loading={isLoading}
            onPress={() => {
              props.authHandler({ username, password });
            }}
          >
            {props.title}
          </Button>
          <Button
            style={[styles.spacer, styles.btnStyle]}
            mode="text"
            onPress={props.switchHandler}
          >
            {props.switchBtnTitle}
          </Button>
          <HelperText style={styles.helperText} type="error" visible={isError}>
            🚫 {error}
          </HelperText>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    width: '80%',
  },
  spacer: {
    margin: 11,
  },
  btnStyle: { borderRadius: 4, marginHorizontal: 0, paddingVertical: 6 },
  helperText: {
    textAlign: 'center',
  }
});
