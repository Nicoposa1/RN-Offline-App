import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { TaskBoard } from '@/src/components/TaskBoard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <TaskBoard />
        <StatusBar barStyle={'light-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
