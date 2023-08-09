import CoinTable from "@/components/tables/CoinTable/CoinTable"
import Header from "@/components/layout/Header/Header";
import { MouseEvent, ReactElement, useEffect, useState } from "react";
import Modal from "../../components/forms/Modal";
import { Context } from '@/context/context'
import axios from "axios"
import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";
import './CoinInfoPage.styles.scss'
import Chart from "@/components/ui/Chart/Chart";
import { ICoinPriceHistory } from "./CoinInfoPage.types";
import backButton from '@/assets/icon_back.png'


function CoinInfo(){
  const [coinData, setCoinData] = useState<ICoinData>({
    id: '',
    rank: 0,
    symbol: '',
    name: '',
    supply: 0,
    maxSupply: 0,
    marketCapUsd: 0,
    volumeUsd24Hr: 0,
    priceUsd: 0,
    changePercent24Hr: 0,
    vwap24Hr: 0,
    explorer: ''
  })
  const [coinPriceHistory, setCoinPriceHistory] = useState<ICoinPriceHistory[]>([])
  const url = window.location.href
  const coin = url.split('/').filter(x => x.length > 0).pop()
  const APIURL = `https://api.coincap.io/v2/assets/${coin}`
  const HistoryAPIURL = `https://api.coincap.io/v2/assets/${coin}/history?interval=h1`
  useEffect(() => {
    console.log('fff')
    axios
    .get(APIURL)
    .then(res => {
      console.log(res.data.data)
      setCoinData(res.data.data)
    })
    
  }, [APIURL])
  useEffect(() => {
    axios
    .get(HistoryAPIURL)
    .then(res => {
      console.log(res.data.data)
      setCoinPriceHistory(res.data.data)
    })
  }, [HistoryAPIURL])

  return (
    <div className="coininfo">
      <a href="http://127.0.0.1:5173/"><img src={backButton} alt="#" className="coininfo_img"/></a>
      <div className="coininfo_header">
        <div className="coininfo_header_inner">
          <p className="coininfo_header_name">{coinData.name} {coinData.symbol}</p>
          <p className="coininfo_header_price">${Intl.NumberFormat("ru-Ru").format(+Number(coinData.priceUsd).toFixed(2))}</p>
        </div>
        <div className="coininfo_header_items">
          <div className="coininfo_header_item">
            <p className="coininfo_header_item_name">Рыночная капитализация</p>
            <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(coinData.priceUsd).toFixed(2))}</p>
          </div>
          <div className="coininfo_header_item">
            <p className="coininfo_header_item_name">Объём торгов за 24 часа</p>
            <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(coinData.volumeUsd24Hr).toFixed(0))}</p>
          </div>
          <div className="coininfo_header_item">
            <p className="coininfo_header_item_name">В обращении</p>
            <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(coinData.supply).toFixed(0))}</p>
          </div>
          <div className="coininfo_header_item">
            <p className="coininfo_header_item_name">Максимальный объём</p>
            <p className="coininfo_header_item_num">${Intl.NumberFormat("ru-Ru").format(+Number(coinData.maxSupply).toFixed(0))}</p>
          </div>
          <div className="coininfo_header_item">
            <p className="coininfo_header_item_name">Ликвидность(24ч)</p>
            <p className="coininfo_header_item_num">{Intl.NumberFormat("ru-Ru").format(+Number(coinData.changePercent24Hr).toFixed(2))}%</p>
          </div>
        </div>
        <div className="coininfo_main">
          <p className="coininfo_main_title">График цены {coinData.name} (24ч)</p>
          <Chart data={coinPriceHistory}/>
        </div>
      </div>
    </div>)
}

export default CoinInfo;