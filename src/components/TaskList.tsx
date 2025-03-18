import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { TaskListItem } from "./TaskListItem";
import { useState, useEffect } from "react";
import { Colors } from "../constants/Colors";
import { useQuery, useRealm } from "@realm/react";
import Task from "../models/Task";
export const TaskList = () => {
  const realm = useRealm();
  const tasks = useQuery(Task)
  const [newTask, setNewTask] = useState<string>("");

  const createTask = () => {
    realm.write(() => {
      realm.create("Task", {
        description: newTask,
        user_id: "1",
      });
    });  
    
    setNewTask("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
        keyExtractor={(item) => item._id.toString()}
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
