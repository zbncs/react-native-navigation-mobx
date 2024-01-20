import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'
import { NavigationContext } from 'react-navigation'

 const Home = observer(() => {

  const navigation = useContext(NavigationContext)

  const store = useStore()
  const counterStore = store.counterStore
  const list = store.list
  // 不能解构赋值
  // const {count, increment, decrement} = counterStore
  // console.log();
  return (
    <View>
      <Text>{counterStore.count}</Text>
      {
        list.map((it, index) => {
          return (
            <View key={it.id}>
              <Text>{it.price}</Text>
            </View>
          )
        })
      }
      <Button title='+1' onPress={() => counterStore.increment()} />
      <Button title='-1' onPress={() => counterStore.decrement()} />
      <Button title='go about' onPress={() => navigation.navigate('About')} />
      <Button title='go loading' onPress={() => navigation.navigate('Loading')} />
    </View>
  )
})

export default Home