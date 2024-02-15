

const News = ({data}) =>{
  return(
    <>
      {data.body.slice(0,10).map((article, index)=>{
        return(
          <div key={index}>
            <h3>{index+1}: {article.title}</h3>
            <h4>{article.pubDate}</h4>
            <h4>{article.link}</h4>
            <h4>{article.source}</h4>
            <h4>{article.guid}</h4>
          </div>
        )
      })}

    </>
  )
}

export default News;