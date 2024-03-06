import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from '@fortawesome/free-solid-svg-icons'

const News = ({data}) =>{

  const convertDate = (date) =>{
    let dateObj = new Date(date)

    let day = dateObj.getUTCDate()
    let month = dateObj.getUTCMonth() + 1
    let year = dateObj.getUTCFullYear()

    return(`${day}/${month}/${year}`)
  }
  return(
    <div className='news-container'>
    <h1 className="title">Financial News</h1>
    <ol>
      {data.body.slice(0,5).map((article, index)=>{
        return(
          <div className="article-container" key={index}>
            <li> <h3 className="article-title"> {article.title} <a className="article-link" href={article.link} target="_blank" ><FontAwesomeIcon icon={faLink} /></a></h3></li>
            
            <div className="article-info">
            <p>Published on: {convertDate(article.pubDate)}</p>
            <p>Source: {article.source}</p>
            </div>
            
          </div>
        )
      })}
      </ol>

  </div>
  )
}

export default News;