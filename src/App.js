
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search/search';
import Trending from './components/trending/trending';
import News from './components/news/news';
import { STOCKS_URL } from './api';
import { stocksOptions } from './api';

function App() {

  const [trending, setTrending] = useState(null)
  const [news, setNews] = useState(null)

  useEffect(() =>{
    trendingFetch();
    newsFetch()
  },[])

  useEffect(() => {
    console.log(trending);
    console.log(news);
  },[trending, news]);
  
  const trendingFetch = async() =>{
    const response = await fetch(`${STOCKS_URL}markets/screener?list=trending`, stocksOptions);
	  const result = await response.json();
    setTrending(result)
    console.log(result)
  }
  console.log(trending)

  const newsFetch = async() =>{
    const response = await fetch(`${STOCKS_URL}markets/news`, stocksOptions)
    const result = await response.json();
    setNews(result)
  }
  


  const handleSearchChange = (searchData) =>{
    console.log(searchData)
  }
  
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
      {trending && <Trending data={trending}/>}
      {news && <News data={news} />}
    </div>
  );
}

export default App;
