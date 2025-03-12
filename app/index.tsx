import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import { TaskBoard } from '@/src/components/TaskBoard';
import { Stack } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
        <Stack.Screen options={{title: "todo"}} />
        <TaskBoard />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
