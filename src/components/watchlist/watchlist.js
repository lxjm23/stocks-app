import "./watchlist.css"

const Watchlist = ({data, name}) =>{

return(
  <>
    <h2>Watchlist</h2>
    {name.map((stock, idx) =>{
      return <h3 key={idx}>{stock} : ${data[idx].body[0].quote.regularMarketPrice} ({data[idx].body[0].quote.regularMarketChangePercent.toFixed(2)}%)</h3>
    })}
    
  </>

)
}

export default Watchlist