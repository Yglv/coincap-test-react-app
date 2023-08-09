import { IPortfolio } from "../PortfolioTable/PortfolioTable.types";

function PortfolioTableElement(props: IPortfolio) {
  const handleDelete = () => {
    localStorage.removeItem(props.name)
    window.location.reload()
  }
  return (
  <div className="portfolio_item">
    <p className="portfolio_item_name">{props.name}</p>
    <p className="portfolio_item_price">${props.price}</p>
    <button className="portfolio_item_button" onClick={() => handleDelete()}><i className="fa-solid fa-trash"></i></button>
  </div>
  )
}

export default PortfolioTableElement