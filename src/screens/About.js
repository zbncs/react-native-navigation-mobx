import { View, Text, Button } from 'react-native'
import React, { memo } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

 function About() {
  const store = useStore()
  const aboutStore = store.aboutStore

  return (
    <View>
      <Text>{aboutStore.about ? 'true' : 'false'}</Text>
      <Button title='change status' onPress={() => aboutStore.changeStatus()} />
      {/* error */}
      {/* <Button title='change status' onPress={aboutStore.changeStatus} /> */}
    </View>
  )
}

export default observer(About)