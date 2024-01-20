import {createContext, useContext} from 'react'
import CounterStore from './CounterStore'
import AboutStore from './AbountStore'
import { makeAutoObservable } from 'mobx'

const RootStoreContext = createContext(null)

class RootStore {
  list = []
  constructor() {
    this.counterStore = new CounterStore()
    this.aboutStore = new AboutStore()
    makeAutoObservable(this)
    this.getList()
  }
  setList(list) { // action
    this.list = list
  }
  async getList() { // not action
    const res = await fetch('https://fakestoreapi.com/products')
    const jsonData = await res.json()
    this.setList(jsonData)
    // this.list = jsonData
  }
}

const rootStore = new RootStore()

export const Provider = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  )
}

export const useStore = () => useContext(RootStoreContext)

