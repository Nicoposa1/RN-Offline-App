import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { TaskList } from './TaskList'
import { LinearGradient } from 'expo-linear-gradient'

export const TaskBoard = () => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <LinearGradient
        colors={['#8711c1', '#2472fc']}
        
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        <TaskList />
      </SafeAreaView>
    </View>
  )
}
