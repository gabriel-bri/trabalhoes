import { StyleSheet } from 'react-native';
import { Stack } from '@react-native-material/core'
import Menu from './src/components/Menu';

export default function App() {
  return (
    <Stack style={styles.container}>
      <Menu/>
    </Stack>
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
