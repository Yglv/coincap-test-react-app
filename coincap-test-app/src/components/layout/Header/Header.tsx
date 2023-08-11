import Modal from "@/components/forms/Modal";
import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";
import axios from "axios";
import { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import './Header.styles.scss'
import PortfolioTable from "../../tables/PortfolioTable/PortfolioTable";
import { StoreContext } from "@/context/context";

export function Header():ReactElement {
  const {store} = useContext(StoreContext)
  const [isActive, setIsActive] = useState<boolean>(false)
  const modifiedData = useMemo(() => store.coinData.slice(0,3), [store.coinData])
  const lastAddingSum = localStorage.getItem('lastSum')
  const sumOfCoins = getSum()
  
  return (
    <div className="header">
      <p className="header_name">Портфель</p>
      <div className="header_coins">
        {modifiedData.map(coin => {
          return ( 
          <div className="header_coins_coin">
            <p className="header_coin_price">${Intl.NumberFormat("ru-Ru").format(+Number(coin.priceUsd).toFixed(2))}</p>
            <p className="header_coin_name">{coin.name}</p>
          </div>)
        })}
      </div>
      <div className="header_coin_info">
        <p className="header_coin_portfolio">${(Number.isNaN(sumOfCoins)) ? 0 : Intl.NumberFormat("ru-Ru").format(+Number(sumOfCoins).toFixed(2))} + {(lastAddingSum === null) ? 0 : Intl.NumberFormat("ru-Ru").format(+Number(lastAddingSum).toFixed(2))} 
              ({(Number.isNaN(sumOfCoins) || lastAddingSum === null) ? 0 : Math.ceil(+lastAddingSum/sumOfCoins * 100)})%</p>
        <button className="header_coin_button" onClick={() => setIsActive(true)}>Дополнительная информация</button>
      </div>
      <Modal title="Портфель" isActive={isActive} onClose={() => setIsActive(false)}>
        <PortfolioTable/>
      </Modal>
    </div> 
  )
}

const getSum = () => {
  let sum = 0
  for (const [key, value] of Object.entries(localStorage)) {
    if (key !== 'lastSum') 
      sum += +value
  }
  return sum
}

export default Header;