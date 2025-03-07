import { SafeAreaView, StyleSheet, View } from 'react-native';

import { TaskListItem } from '@/src/components/TaskListItem';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 10}}>
        <TaskListItem task={{description: "First task"}} />
        <TaskListItem task={{description: "Second task"}} />
        <TaskListItem task={{description: "Third task"}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
