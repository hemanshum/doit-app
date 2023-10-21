import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper';
import { addNewTask, fetchTasks } from '../../store/thunks/taskThunk';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../../store/slices/taskSlice';

export const AddTaskScreen = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { isError, error, isLoading, taskStatus } = useSelector(state => state.task)

  useEffect(() => {
    if (taskStatus?.status === 'created' || isError) {
      setTimeout(() => {
        dispatch(clearMessage());
        dispatch(fetchTasks());
      }, 5000);
    }
  }, [taskStatus, isError]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          label="Add Task"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          label="Add Description"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline
          numberOfLines={6}
        />
        <Button
          style={[styles.spacer, styles.btnStyle]}
          icon="text-box-plus-outline"
          mode="contained"
          loading={isLoading}
          onPress={() => {
            dispatch(addNewTask({ title, description }));
            setTitle('');
            setDescription('');
          }}
        >
          Create Task
        </Button>
      </View>
      <View>
        <HelperText type="error" visible={isError}>
          {error}
        </HelperText>
        <HelperText style={styles.helperText} type="info" visible={taskStatus?.status === 'created'}>
          Status: {taskStatus?.message}
        </HelperText>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 50
  },
  spacer: {
    margin: 11,
  },
  btnStyle: { borderRadius: 4, marginHorizontal: 0, paddingVertical: 6 },
  helperText: {
    textAlign: 'center',
  },
  helperText: {
    textAlign: 'center',
  }
})