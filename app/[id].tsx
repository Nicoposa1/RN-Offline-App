import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Task Detail" }} />
      <Text style={styles.text}>Id: {id}</Text>
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
