const Stock_Info_Modal = ({closeModal, data, onAdd}) =>{

  const handleCloseModal = () =>{
    closeModal(false);
  
  }

  const stock_data = data.body[0]
  
  return(
    <>
       <div className="modal-container">
    <div className="modal-header">
      <div className="modal-header-left">
        <h1 className="modal-header-heading">Apple Inc. (AAPL)</h1>
        <p className="modal-header-sub-heading">NasdaqGS - NasdaqGS Real Time Price. Currency in USD</p>
      </div>

      <div className="modal-header-right">
        <button onClick={() => handleCloseModal()}>X</button>
        <button onClick={() => onAdd()}>Add to watch list</button>
        <i className="fa-regular fa-circle-xmark"></i>
      </div>
    </div>
    <div className="modal-price-container"> 
      <div className="modal-price-column">
        <div className="modal-prices">
          <h1>134.50</h1>
          <h3>+1.23 (+1.45)</h3>
        </div>
        <div className="price-date">
          <p>At Close: 4:00PM EST</p>
        </div>
      </div>
      <div className="modal-price-column">
        <div className="modal-prices">
          <h2 className="modal-price-afters">134.50</h2>
          <h3>+1.23 (+1.45)</h3>
        </div>
        <div className="price-date">
          <p>After Hours: 4:00PM EST</p>
        </div>
      
     
     </div>
    </div>
    <div className="stocks-data-container">
      <div className="stocks-data-column">
        <div className="stock-data-label-price">
          <p className="stock-data-label">Previous Close</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Open</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Bid</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Ask</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Day's Range</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">52 Week Range</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Volume</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Avg Volume</p> <p className="stock-data-info">179.69</p>
        </div>
        
      </div>
      <div className="stocks-data-column">
        <div className="stock-data-label-price">
          <p className="stock-data-label">Market Cap</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Beta (5Y Monthly)</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">PE Ratio (TTM)</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">EPS (TTM)</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Earnings Date</p> <p className="stock-data-info">May 02, 2024 - May 06,2024</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Forward Dividend & Yield</p> <p className="stock-data-info">179.69</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Ex-Dividend Date</p> <p className="stock-data-info">Feb 09,2024</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">1y Target Est</p> <p className="stock-data-info">179.69</p>
        </div>
        
      </div>
    </div>
  </div>
    </>
  )
}


{/* <button onClick={ () => handleCloseModal()}>X</button>
        <button onClick={ () => onAdd()}>Add to watchlist</button>
        
        <h2>Stock</h2>
        <h2>{stock_data.underlyingSymbol}</h2>
        <h2>Price:${data.body[0].quote.regularMarketPrice} </h2>
        <h2></h2> */}
export default Stock_Info_Modal