import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

export const TaskListItem = ({ task }: { task: { description: string } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name="close" size={16} color="gray" />
    </View>
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
