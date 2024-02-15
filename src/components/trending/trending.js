import "./trending.css";

const Trending = ({data}) =>{


  return(
    <>
    <h2>Top 5 Trending Stocks:</h2>
      {data.body.slice(0,5).map((i, index) =>{
        return (
          <div key={index}>
          <h3>{index + 1}: {i}</h3>
          </div>
        )
      })}

    </>
  )
}

export default Trending;