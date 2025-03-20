import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useObject, useRealm, } from '@realm/react'
import Task from '@/src/models/Task'
import { BSON } from 'realm'

export default function TaskDetailScreen() {
  const realm = useRealm()
  const { id } = useLocalSearchParams()
  const task = useObject<Task>(Task, new BSON.ObjectId(id as string))
  const [updateDescription, setUpdateDescription] = React.useState(task?.description)

  if (!task) {
    return <Text>Loading...</Text>
  }

  const habdleUpdate = () => {
    if (!task) {
      return
    }
    realm.write(() => {
      task.description = updateDescription ?? task.description;
    });
  }



  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Task Detail" }} />
      <TextInput
        style={styles.text}
        value={updateDescription}
        onChangeText={setUpdateDescription}
        onEndEditing={habdleUpdate}
      />
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
