import { ReactElement } from "react";
import './Header.styles.scss'

export function Header():ReactElement {
  return (
  <div className="header">
    <p className="header_name">Портфель</p>
    <div className="header_coins">
      <div className="header_coins_coin">
        <div className="header_coin_start"></div>
        <p className="header_coin_price">29033 $</p>
        <p className="header_coin_name">Биткоин</p>
      </div>
      <div className="header_coins_coin">
        <p className="header_coin_price">1828 $</p>
        <p className="header_coin_name">Эфириум</p>
      </div>
      <div className="header_coins_coin">
        <p className="header_coin_price">0,99 $</p>
        <p className="header_coin_name">Tether</p>
      </div>
    </div>
    <p className="header_coin_portfolio">134.22 $ + 2.38 (1.80%)</p>
  </div>)
}

export default Header;