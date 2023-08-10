import Modal from "@/components/forms/Modal";
import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import './Header.styles.scss'
import PortfolioTable from "../../tables/PortfolioTable/PortfolioTable";

export function Header():ReactElement {
  const [coinHeaderData, setCoinHeaderData] = useState<ICoinData[]>([])
  const [isActive, setIsActive] = useState<boolean>(false)
  const APIURL = 'https://api.coincap.io/v2/assets'
  useEffect(() => {
    axios
    .get(APIURL)
    .then(res => {
      console.log(res.data.data)
      setCoinHeaderData(res.data.data)
    })
  },[])
  const modifiedData = coinHeaderData.slice(0,3)
  const lastAddingSum = localStorage.getItem('lastSum')
  let sum = 0
  for (const [key, value] of Object.entries(localStorage)) {
    sum += +value
  }
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
        <p className="header_coin_portfolio">${(Number.isNaN(sum)) ? 0 : Intl.NumberFormat("ru-Ru").format(+Number(sum).toFixed(2))} + {(lastAddingSum === null) ? 0 : Intl.NumberFormat("ru-Ru").format(+Number(lastAddingSum).toFixed(2))} 
              ({(Number.isNaN(sum) || lastAddingSum === null) ? 0 : Math.ceil(+lastAddingSum/sum * 100)})%</p>
        <button className="header_coin_button" onClick={() => setIsActive(true)}>Дополнительная информация</button>
      </div>
      <Modal title="Портфель" isActive={isActive} onClose={() => setIsActive(false)}>
        <PortfolioTable/>
      </Modal>
    </div> 
  )
}

export default Header;