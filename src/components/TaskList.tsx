import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { TaskListItem } from "./TaskListItem";
import { useState, useEffect } from "react";
import { Colors } from "../constants/Colors";
export const TaskList = () => {
  const [tasks, setTasks] = useState<{ id: string, description: string }[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    setTasks([
      { id: '1', description: "First task" },
      { id: "2", description: "Second task" },
    ]);
  }, []);

  const createTask = () => {
    setTasks([...tasks, {
      id: tasks.length + 1,
      description: newTask
    }]);
    setNewTask("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TextInput
        placeholder="Add a task"
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholderTextColor={'gray'}
      />
      <Button title="Add" onPress={createTask} />
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
  input: {
    backgroundColor: Colors.dark.black,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    color: '#fff',
  },
});
