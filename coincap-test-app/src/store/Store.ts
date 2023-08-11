import { makeAutoObservable } from "mobx";
import axios from "axios";
import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";

export default class Store {
  coinData:ICoinData[] = []
  
  constructor() {
    makeAutoObservable(this)
  }

  setCoinData(coinData: ICoinData[]){
    this.coinData = coinData
  }
}