import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export const TaskListItem = ({ task }: { task: { description: string } }) => {
  return (
    <Link href="/details" asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign name="close" size={16} color="gray" />
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
