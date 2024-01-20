import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'

function Loading() {
  const store = useStore()
  const aboutStore = store.aboutStore
  const [text, setText] = useState('加载中.')
  const setTimer = (bool) => {
    // console.log(1111);
    const timer1 = setTimeout(() => {
      setText('加载中.')
      clearTimeout(timer1)
    }, 0)
    const timer2 = setTimeout(() => {
      setText('加载中..')
      clearTimeout(timer2)
    }, 300)
    const timer3 = setTimeout(() => {
      setText('加载中...')
      clearTimeout(timer3)
    }, 600)

    bool && setTimer()
  }

  const refresh = () => {
    const tt = setTimeout(() => {
      refresh()
      console.log('callback', 2);
      clearTimeout(tt)
      aboutStore.changeStatus()
    }, 1000)
  }

  
  useEffect(() => {
    setTimer(aboutStore.about)
  }, [aboutStore.about])

  useEffect(() => {
    refresh()
  }, [])
  return (
    <View>
      <Text>{text}</Text>
      <Button title='change status' onPress={() => aboutStore.changeStatus()} />
    </View>
  )
}

export default observer(Loading)