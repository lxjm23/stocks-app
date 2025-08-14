const Stock_Info_Modal = ({closeModal, data, onAdd}) =>{

  const handleCloseModal = () =>{
    closeModal(false);
  }

  const stock_data = data.body[0]
  const quote = stock_data.quote
  const isPositive = (num) => num >= 0
  
  return(
    <>
       <div className="modal-container">
    <div className="modal-header">
      <div className="modal-header-left">
        <h1 className="modal-header-heading">{quote.longName} ({stock_data.underlyingSymbol})</h1>
        <p className="modal-header-sub-heading">{quote.fullExchangeName} - Real Time Price. Currency in {quote.currency}</p>
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
          <h1>${quote.regularMarketPrice}</h1>
          <h3 style={{color: isPositive(quote.regularMarketChange) ? 'green' : 'red'}}>
            {isPositive(quote.regularMarketChange) ? '+' : ''}{quote.regularMarketChange?.toFixed(2)} ({isPositive(quote.regularMarketChangePercent) ? '+' : ''}{quote.regularMarketChangePercent?.toFixed(2)}%)
          </h3>
        </div>
        <div className="price-date">
          <p>At Close: {new Date(quote.regularMarketTime * 1000).toLocaleTimeString()}</p>
        </div>
      </div>
      <div className="modal-price-column">
        <div className="modal-prices">
          <h2 className="modal-price-afters">${quote.postMarketPrice || quote.regularMarketPrice}</h2>
          <h3 style={{color: isPositive(quote.postMarketChange || 0) ? 'green' : 'red'}}>
            {isPositive(quote.postMarketChange || 0) ? '+' : ''}{quote.postMarketChange?.toFixed(2) || '0.00'} ({isPositive(quote.postMarketChangePercent || 0) ? '+' : ''}{quote.postMarketChangePercent?.toFixed(2) || '0.00'}%)
          </h3>
        </div>
        <div className="price-date">
          <p>After Hours: {quote.postMarketTime ? new Date(quote.postMarketTime * 1000).toLocaleTimeString() : 'N/A'}</p>
        </div>
     </div>
    </div>
    <div className="stocks-data-container">
      <div className="stocks-data-column">
        <div className="stock-data-label-price">
          <p className="stock-data-label">Previous Close</p> <p className="stock-data-info">{quote.regularMarketPreviousClose || 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Open</p> <p className="stock-data-info">{quote.regularMarketOpen || 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Bid</p> <p className="stock-data-info">{quote.bid ? `${quote.bid} x ${quote.bidSize}` : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Ask</p> <p className="stock-data-info">{quote.ask ? `${quote.ask} x ${quote.askSize}` : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Day's Range</p> <p className="stock-data-info">{quote.regularMarketDayLow && quote.regularMarketDayHigh ? `${quote.regularMarketDayLow} - ${quote.regularMarketDayHigh}` : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">52 Week Range</p> <p className="stock-data-info">{quote.fiftyTwoWeekLow && quote.fiftyTwoWeekHigh ? `${quote.fiftyTwoWeekLow} - ${quote.fiftyTwoWeekHigh}` : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Volume</p> <p className="stock-data-info">{quote.regularMarketVolume ? quote.regularMarketVolume.toLocaleString() : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Avg Volume</p> <p className="stock-data-info">{quote.averageDailyVolume3Month ? quote.averageDailyVolume3Month.toLocaleString() : 'N/A'}</p>
        </div>
        
      </div>
      <div className="stocks-data-column">
        <div className="stock-data-label-price">
          <p className="stock-data-label">Market Cap</p> <p className="stock-data-info">{quote.marketCap ? (quote.marketCap / 1e9).toFixed(2) + 'B' : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Beta (5Y Monthly)</p> <p className="stock-data-info">{quote.beta || 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">PE Ratio (TTM)</p> <p className="stock-data-info">{quote.trailingPE?.toFixed(2) || 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">EPS (TTM)</p> <p className="stock-data-info">{quote.trailingEps?.toFixed(2) || 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Earnings Date</p> <p className="stock-data-info">{quote.earningsTimestamp ? new Date(quote.earningsTimestamp * 1000).toLocaleDateString() : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Forward Dividend & Yield</p> <p className="stock-data-info">{quote.dividendYield ? `${quote.forwardAnnualDividendRate?.toFixed(2) || 'N/A'} (${(quote.dividendYield * 100).toFixed(2)}%)` : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">Ex-Dividend Date</p> <p className="stock-data-info">{quote.exDividendDate ? new Date(quote.exDividendDate * 1000).toLocaleDateString() : 'N/A'}</p>
        </div>
        <div className="stock-data-label-price">
          <p className="stock-data-label">1y Target Est</p> <p className="stock-data-info">{quote.targetMeanPrice?.toFixed(2) || 'N/A'}</p>
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