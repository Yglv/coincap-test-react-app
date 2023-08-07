import CoinTable from "@/components/tables/CoinTable/CoinTable"
import Header from "@/components/layout/Header/Header";
import { MouseEvent, ReactElement, useState } from "react";
import Modal from "@/components/layout/Modal/Modal";
import { Context } from '@/context/context'

function MainMenu(): ReactElement{
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
  <Context.Provider value={{setIsActive}}>
    <Header/>
    <Modal title='Добавить в портфель' isActive={isActive} onClose={() => setIsActive(false)}>
        <form className="modal_form">
          <input type="number" placeholder="Введите сумму..." name="sum" className="modal_input" />
          <button type="submit" className="modal_button">Добавить</button>
        </form>
    </Modal>
    <CoinTable/>
  </Context.Provider>
  )
}

export default MainMenu;