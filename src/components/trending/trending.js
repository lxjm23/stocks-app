import "./trending.css";

const Trending = ({data}) =>{


  return(
    <div className="trending-container">
    <h2 className="title">Top 5 Trending Stocks:</h2>
    <ol >
      {data.body.slice(0,5).map((stock, index) =>{
        return (
         <div key={index} className="stock-data">
            <li><p className="stock-name">{stock}</p></li>
      </div>
        )
      })}
  </ol>
  </div>
  )
}

export default Trending;