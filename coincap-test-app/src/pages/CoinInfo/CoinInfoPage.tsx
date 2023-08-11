import { useEffect, useRef, useState } from "react";
import Modal from "../../components/forms/Modal";
import axios from "axios"
import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";
import './CoinInfoPage.styles.scss'
import Chart from "@/components/ui/Chart/Chart";
import { ICoinPriceHistory } from "./CoinInfoPage.types";
import backButton from '@/assets/icon_back.png'
import CoinInfoItems from "@/components/ui/CoinInfoItems/CoinInfoItems";
import PortfolioService from "@/services/PortfolioService";
import { useParams } from "react-router-dom";

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
  const params = useParams()
  const [coinPriceHistory, setCoinPriceHistory] = useState<ICoinPriceHistory[]>([])
  const APIURL = `https://api.coincap.io/v2/assets/${params.id}`
  const HistoryAPIURL = `https://api.coincap.io/v2/assets/${params.id}/history?interval=h1`
  const [isActive, setIsActive] = useState<boolean>(false)
  const numInputRef = useRef(null)
  useEffect(() => {
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
          <button className="coininfo_header_button" onClick={() => setIsActive(true)}>Добавить в портфель</button>
        </div>
        <div className="coininfo_header_items">
          <CoinInfoItems coinData={coinData}/>
        </div>
        <div className="coininfo_main">
          <p className="coininfo_main_title">График цены {coinData.name} (24ч)</p>
          <Chart data={coinPriceHistory}/>
        </div>
        <Modal title='Добавить в портфель' isActive={isActive} onClose={() => setIsActive(false)}>
          <form className="modal_form">
            <input type="text" disabled value={coinData.name} name="title" className="modal_input" />
            <input type="number" ref={numInputRef} placeholder="Введите сумму..." name="sum" className="modal_input" />
            <button type="submit" onClick={() => PortfolioService.addToPortfolio(coinData.name,  +numInputRef.current.value, coinData.priceUsd)} className="modal_button">Добавить</button>
          </form>
        </Modal>
      </div>
    </div>
  )
}

export default CoinInfo;