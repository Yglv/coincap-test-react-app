import { ReactElement } from "react"
import CoinTableElement from "../CoinTableElement/CoinTableElement"
import './CoinTable.styles.scss'

function CoinTable(): ReactElement{
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
        <div className="cointable_element">
          <CoinTableElement num={1} name={"qwe"} price={1000} hour={2.3} day={3.4} volume={20000000} capitalization={200000}/>
        </div>
        <div className="cointable_element">
          <CoinTableElement num={2} name={"qwe"} price={1000} hour={1.1} day={5.7} volume={20000000} capitalization={2000000}/>
        </div>
        <div className="cointable_element">
          <CoinTableElement num={3} name={"qwe"} price={7088000} hour={-2.2} day={7.8} volume={20000000} capitalization={2000000}/>
        </div>
    </div>
    </>
  )
}

export default CoinTable