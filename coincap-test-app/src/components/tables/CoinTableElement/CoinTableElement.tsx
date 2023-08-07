import { ReactElement } from "react"
import { ICoinTableElement } from "./CoinTableElement.types"
import './CoinTableElement.styles.scss'
import { Context } from '@/context/context'
import { useContext } from "react"

function CoinTableElement(props: ICoinTableElement): ReactElement{
  const { setIsActive } = useContext(Context);
  return (
    <>
      <p className="cointable_element_item">{props.num}</p>
      <p className="cointable_element_item">{props.name}</p>
      <p className="cointable_element_item">{props.price} $</p>
      <p className="cointable_element_item">{props.hour}%</p>
      <p className="cointable_element_item">{props.day}%</p>
      <p className="cointable_element_item">{props.volume} $</p>
      <p className="cointable_element_item">{props.capitalization} $</p>
      <button onClick={() => setIsActive(true)} className="cointable_element_button"><i className="fa-solid fa-plus"></i></button>
    </>
  )
}

export default CoinTableElement