import { StyleSheet, View } from 'react-native';
import { IconButton, MD3Colors, Text } from 'react-native-paper';
import { formatedDate } from '../../utils/formatDate';

export const TaskCardComponent = ({ data, handleRemoveTask, isLoading }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineMedium">{data.title}</Text>
      <Text style={styles.description} variant="bodyMedium">{data.description}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.date} variant="labelSmall">{formatedDate(data.date)}</Text>
        <IconButton
          icon="trash-can-outline"
          iconColor={MD3Colors.error50}
          size={20}
          onPress={() => handleRemoveTask(data.id)}
          loading={isLoading}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 6,
    padding: 8,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  date: {
    color: '#B4B4B3'
  }
})