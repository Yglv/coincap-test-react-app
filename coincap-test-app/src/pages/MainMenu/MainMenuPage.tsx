import CoinTable from "@/components/tables/CoinTable/CoinTable"
import Header from "@/components/layout/Header/Header";
import { ReactElement, useEffect, useRef, useState } from "react";
import Modal from "@/components/forms/Modal";
import { Context } from '@/context/context'
import PortfolioService from "@/services/PortfolioService";
import ApiService from "@/services/ApiService";

function MainMenu(): ReactElement{
  const [isActive, setIsActive] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [id, setId] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const numInputRef = useRef(null)
  const APIURL = `https://api.coincap.io/v2/assets/${id}`
  useEffect(() => {
    ApiService.getCoinData(APIURL).then(res => setPrice(res.priceUsd))
  })

  return (
    <Context.Provider value={{setIsActive, setName, setId}}>
      <Header/>
      <Modal title='Добавить в портфель' isActive={isActive} onClose={() => setIsActive(false)}>
          <form className="modal_form">
            <input type="text" disabled value={name} name="title" className="modal_input" />
            <input type="number" ref={numInputRef} placeholder="Введите сумму..."  name="sum" className="modal_input" />
            <button  onClick={() => PortfolioService.addToPortfolio(name, +numInputRef.current.value, price)} className="modal_button">Добавить</button>
          </form>
      </Modal>
      <CoinTable/>
    </Context.Provider>
  )
}

export default MainMenu;