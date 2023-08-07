import React from "react";
import './Pagination.styles.scss'

function Pagination({ coinsPerPage, totalCoins, paginate }){
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++){
    pageNumbers.push(i)
  }
  console.log(pageNumbers)

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(page => {
            return (<li className="pagination_element">
              <a href="#" className="pagination_element_link" onClick={() => paginate(page)}>
                {page} 
              </a>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default Pagination