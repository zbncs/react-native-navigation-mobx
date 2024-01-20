import {action, makeAutoObservable, makeObservable, observable} from 'mobx'

export default class CounterStore {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count += 1
    console.log(1111, this.count);
  }

  decrement() {
    this.count -= 1
  }

}