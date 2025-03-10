import { SafeAreaView, StyleSheet, View } from 'react-native';

import { TaskListItem } from '@/src/components/TaskListItem';
import { TaskList } from '@/src/components/TaskList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 10}}>
        <TaskList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
