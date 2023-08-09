import { IPortfolio } from "./PortfolioTable.types"
import './PortfolioTable.styles.scss'
import PortfolioTableElement from "../PortfolioTableElement/PortfolioTableElement";

function PortfolioTable(){
  const portfolioData: IPortfolio[] = []
  for (const [key, value] of Object.entries(localStorage)) {
    console.log(`${key}: ${value}`);
    portfolioData.push({name: key, price: value})
  }
  
  return (
    <div className="portfolio_items">
      <div className="portfolio_item">
        <p className="portfolio_title">Наименование</p>
        <p className="portfolio_title">Активы</p>
      </div>
  
      {portfolioData.map(item => {
        return (
          <PortfolioTableElement name={item.name} price={item.price}/>
        )
      })}
    </div>
  )
}

export default PortfolioTable