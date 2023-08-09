import CoinTable from "@/components/tables/CoinTable/CoinTable"
import Header from "@/components/layout/Header/Header";
import { ReactElement, useContext, useRef, useState } from "react";
import Modal from "@/components/forms/Modal";
import { CoinContext, Context } from '@/context/context'
import { ICoinData } from "@/components/tables/CoinTable/CoinTable.types";

function MainMenu(): ReactElement{
  const [isActive, setIsActive] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>(0)
  const numInputRef = useRef(null)

  const handleClick = () => {
    const title = name
    console.log(+numInputRef.current.value)
    console.log(parseFloat(price.replace(/\s/g,'')))
    let sum = +numInputRef.current.value * parseFloat(price.replace(/\s/g,''))
    console.log(sum)
    if (localStorage.getItem(title)){
      sum += +localStorage.getItem(title)
    }
    localStorage.setItem(title, String(sum))
  }

  return (
  <Context.Provider value={{setIsActive, setName, setPrice}}>
    <Header/>
    <Modal title='Добавить в портфель' isActive={isActive} onClose={() => setIsActive(false)}>
        <form className="modal_form">
          <input type="text" disabled value={name} name="title" className="modal_input" />
          <input type="number" ref={numInputRef} placeholder="Введите сумму..." name="sum" className="modal_input" />
          <button type="submit" onClick={() => handleClick()} className="modal_button">Добавить</button>
        </form>
    </Modal>
    <CoinTable/>
  </Context.Provider>
  )
}

export default MainMenu;