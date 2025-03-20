import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useObject,   } from '@realm/react'
import Task from '@/src/models/Task'
import { BSON } from 'realm'

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams()
  const task = useObject<Task>(Task, new BSON.ObjectId(id as string))

  if(!task) {
    return <Text>Loading...</Text>
  } 


  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Task Detail" }} />
      <Text style={styles.text}>{task.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
