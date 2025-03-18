import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import Task from '../models/Task'
import { useRealm } from '@realm/react';

export const TaskListItem = ({ task }: {task: Task}) => {
  console.log("🚀 ~ TaskListItem ~ task:", task)
  const realm = useRealm();
  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    })
  }
  return (
    <Link href={`/${task._id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign onPress={deleteTask} name="close" size={16} color="gray" />
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.black,
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
