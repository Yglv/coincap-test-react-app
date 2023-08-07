import { ReactElement, useEffect, useState } from "react"
import CoinTableElement from "../CoinTableElement/CoinTableElement"
import './CoinTable.styles.scss'
import axios from "axios"
import { ICoinData } from "./CoinTable.types"
import Pagination from "@/components/layout/Pagination/Pagination"

function CoinTable(): ReactElement{
  const APIURL = 'https://api.coincap.io/v2/assets'
  const [coinData, setCoinData] = useState<ICoinData[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10)
  const lastCoinIndex = currentPage * coinsPerPage
  const firstCoinIndex = lastCoinIndex - coinsPerPage
  const currentCoins = coinData.slice(firstCoinIndex, lastCoinIndex)

  useEffect(() => {
    axios
    .get(APIURL)
    .then(res => {
      console.log(res.data.data)
      setCoinData(res.data.data)
    })
  }, [])

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <p className="cointable_title">Курсы криптовалют</p>
      <div className="cointable">
        <div className="cointable_element">
          <p className="cointable_header_item">#</p>
          <p className="cointable_header_item">Наименование</p>
          <p className="cointable_header_item">Цена</p>
          <p className="cointable_header_item">1 ч</p>
          <p className="cointable_header_item">24 ч</p>
          <p className="cointable_header_item">Объём торгов за 24 часа</p>
          <p className="cointable_header_item">Рыночная капитализация</p>
        </div>
        {currentCoins.map(coin => {
          return (<div className="cointable_element">
            <CoinTableElement num={coin.rank} name={coin.name} price={Number(coin.priceUsd).toFixed(2)} hour={Number(coin.vwap24Hr).toFixed(2)} day={Number(coin.volumeUsd24Hr).toFixed(2)} volume={Number(coin.volumeUsd24Hr).toFixed(2)} capitalization={Number(coin.marketCapUsd).toFixed(2)}/>
          </div>)
        })}
        <Pagination coinsPerPage={coinsPerPage} totalCoins={coinData.length} paginate={paginate}/>
    </div>
    </>
  )
}

export default CoinTable