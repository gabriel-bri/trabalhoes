import { StyleSheet, View } from 'react-native';
import TaskNAppointments from './src/components/TasksNAppointments';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <TaskNAppointments/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#553FDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
