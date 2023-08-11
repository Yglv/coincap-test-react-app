import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types"
import { ICoinPriceHistory } from "@/pages/CoinInfo/CoinInfoPage.types"
import axios, { AxiosResponse } from "axios"
import { useContext } from "react"

type ApiResponse = ICoinData[] & ICoinData & ICoinPriceHistory[]

export default class ApiService{
  static async getCoinData(url: string): Promise<ApiResponse>{
    let data = [] as ApiResponse
    await axios.get(url).then(res => data = res.data.data)
    return data
  }
}