import "./watchlist.css"

const Watchlist = ({data, name}) =>{

return(
  <>
    <h2>Watchlist</h2>
    {name.map((stock, idx) =>{
      const stockData = data[idx]?.body[0]
      if(stockData){
        const regularMarketPrice = stockData.quote.regularMarketPrice;
        const regularMarketChangePercent = stockData.quote.regularMarketChangePercent.toFixed(2);
        return (<h3 key={idx}>{stock.stock} : ${regularMarketPrice} ({regularMarketChangePercent}%)</h3>
      )}
      else {
        return (
          <h3 key = {idx}>
            {stock.stock} : Data unavailable at the moment.
          </h3>
        )
      }
     
    })}
    
  </>

)
}

export default Watchlist