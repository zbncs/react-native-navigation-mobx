import { makeAutoObservable } from "mobx";


export default class AboutStore {
  about = false
  constructor() {
    makeAutoObservable(this)
  }
  changeStatus() {
    this.about = !this.about
  }
}