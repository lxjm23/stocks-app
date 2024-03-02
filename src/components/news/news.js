

const News = ({data}) =>{
  return(
    <div className='news-container'>
    <h1 className="title">Financial News</h1>
      {data.body.slice(0,5).map((article, index)=>{
        return(
          <div key={index}>
            <h3>{index+1}: <a href={article.link} target="_blank" >{article.title}</a></h3>
            <h4><a href={article.link} target="_blank" >Link to article</a></h4>
            <h4>{article.pubDate}</h4>
            <h4></h4>
            <h4>Source: {article.source}</h4>
          </div>
        )
      })}

  </div>
  )
}

export default News;