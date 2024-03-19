import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import APPbar from './components/appbar';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Hello</Text>
        <StatusBar style="auto" />
      </View>

      <APPbar></APPbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
