import { ReactElement, useRef } from "react"
import { ICoinTableElement } from "./CoinTableElement.types"
import './CoinTableElement.styles.scss'
import { Context } from '@/context/context'
import { useContext } from "react"

function CoinTableElement(props: ICoinTableElement): ReactElement{
  const { setIsActive, setName, setPrice } = useContext(Context)
  return (
    <>
      <p className="cointable_element_item">{props.num}</p>
      <p className="cointable_element_item">
        <a href={`http://127.0.0.1:5173/info/${props.id}`} className="cointable_element_item_link">
          {props.name}  
        </a>
      </p>
      <p className="cointable_element_item">${props.price}</p>
      {(props.day[0] === '-' || props.day === '0') ? <p className="cointable_element_item cointable_element_item-red">{props.day}%</p>
                                    : <p className="cointable_element_item cointable_element_item-green">{props.day}%</p>}
      <p className="cointable_element_item">${props.volume}</p>
      <p className="cointable_element_item">${props.capitalization}</p>
      <button onClick={() => { setIsActive(true); setName(props.name); console.log(props.price) ;setPrice(props.price)}} className="cointable_element_button"><i className="fa-solid fa-plus"></i></button>
    </>
  )
}

export default CoinTableElement