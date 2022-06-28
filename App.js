import { StyleSheet, View } from 'react-native';
import TitleScreen from './src/components/TitleScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleScreen/>
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
