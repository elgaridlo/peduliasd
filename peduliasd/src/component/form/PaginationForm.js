import React from 'react'

const PaginationForm = ({currentPage,totalPages, directPageFunction}) => {
  const changeDirectPage = (futurePage) => {
    directPageFunction(futurePage)
  }
  return (
    <nav className="d-flex" aria-label="pagination">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => changeDirectPage(currentPage-1)} aria-label="Previous">
            <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
          </button>
        </li>
        {[...Array(totalPages-1)].map((e, i) => {
          return <li key={`pages-${i+1}`} className="page-item"><button className="page-link" onClick={()=> changeDirectPage(i+1)}>{i+1}</button></li>
        })}
        <li className="page-item">
          <button className="page-link" onClick={() => changeDirectPage(currentPage+1)} aria-label="Next">
            <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default PaginationForm