import CoinTable from "@/components/tables/CoinTable/CoinTable"
import Header from "@/components/layout/Header/Header";
import { ReactElement } from "react";

function MainMenu(): ReactElement{
  return (
  <>
    <Header/>
    <CoinTable/>
  </>
  )
}

export default MainMenu;