import { View, Text, StyleSheet, FlatList } from "react-native";
import { TaskListItem } from "./TaskListItem";
import { useState, useEffect } from "react";
export const TaskList = () => {
  const [tasks, setTasks] = useState<{ description: string }[]>([]);

  useEffect(() => {
    setTasks([
      { description: "First task" },
      { description: "Second task" },
      { description: "Third task" },
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  list: {
    gap: 5,
  },
});
