import { FlatList, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/thunks/authThunk";
import { TaskCardComponent } from "../../components";
import { fetchTasks, deleteTask } from "../../store/thunks/taskThunk";
import { useEffect } from "react";
import { clearMessage } from "../../store/slices/taskSlice";


export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { tasks, isLoading, taskStatus } = useSelector(state => state.task)

  useEffect(() => {
    if (taskStatus?.status === 'removed') {
      dispatch(fetchTasks());
      setTimeout(() => {
        dispatch(clearMessage())
      }, 500);
    }
  }, [taskStatus])

  const handleRemoveTask = (taskId) => {
    dispatch(deleteTask(taskId))
  }

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCardComponent data={item} handleRemoveTask={handleRemoveTask} isLoading={isLoading} />}
        keyExtractor={item => item.id}
      />
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