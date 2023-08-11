import React from "react";
import './Pagination.styles.scss'
import { IPagination } from "./Pagination.types.ts";

function Pagination(props: IPagination){
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(props.totalCoins / props.coinsPerPage); i++){
    pageNumbers.push(i)
  }
  console.log(pageNumbers)

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(page => {
            return (<li className="pagination_element">
              <a href="#" className="pagination_element_link" onClick={() => props.paginate(page)}>
                {page} 
              </a>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default Pagination