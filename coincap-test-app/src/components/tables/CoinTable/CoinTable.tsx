import { ReactElement, useContext, useEffect, useMemo, useState } from "react"
import CoinTableElement from "../CoinTableElement/CoinTableElement"
import './CoinTable.styles.scss'
import Pagination from "@/components/layout/Pagination/Pagination"
import { StoreContext } from "@/context/context"
import ApiService from "@/services/ApiService"
import { observer } from "mobx-react-lite"

function CoinTable(): ReactElement{
  const {store} = useContext(StoreContext)
  const APIURL = 'https://api.coincap.io/v2/assets'
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage] = useState(10)
  const lastCoinIndex = useMemo(() => currentPage * coinsPerPage, [currentPage, coinsPerPage])
  const firstCoinIndex = useMemo(() => lastCoinIndex - coinsPerPage, [coinsPerPage, lastCoinIndex])
  const currentCoins = useMemo(() => store.coinData.slice(firstCoinIndex, lastCoinIndex), [store.coinData, firstCoinIndex, lastCoinIndex])

  useEffect(() => {
    ApiService.getCoinData(APIURL).then(res => store.setCoinData(res))
  }, [store])
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <p className="cointable_title">Курсы криптовалют</p>
      <div className="cointable">
        <div className="cointable_element">
          <p className="cointable_header_item">#</p>
          <p className="cointable_header_item">Наименование</p>
          <p className="cointable_header_item">Цена</p>
          <p className="cointable_header_item">24 ч</p>
          <p className="cointable_header_item">Объём торгов за 24 часа</p>
          <p className="cointable_header_item">Рыночная капитализация</p>
        </div>
        {currentCoins.map(coin => {
          return (<div className="cointable_element">
            <CoinTableElement id={coin.id} num={coin.rank} name={coin.name} symbol={coin.symbol} price={Intl.NumberFormat("ru-Ru").format(+Number(coin.priceUsd).toFixed(2))} day={Intl.NumberFormat("ru-Ru").format(+Number(coin.changePercent24Hr).toFixed(2))} volume={Intl.NumberFormat("ru-Ru").format(+Number(coin.volumeUsd24Hr).toFixed(0))} capitalization={Intl.NumberFormat("ru-Ru").format(+Number(coin.marketCapUsd).toFixed(0))}/>
          </div>)
        })}
        <Pagination coinsPerPage={coinsPerPage} totalCoins={store.coinData.length} paginate={paginate}/>
      </div>
    </>
  )
}

export default observer(CoinTable)