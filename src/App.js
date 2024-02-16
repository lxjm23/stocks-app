
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search/search';
import Trending from './components/trending/trending';
import News from './components/news/news';
import { STOCKS_URL } from './api';
import { stocksOptions } from './api';
import Stock_Info_Modal from './components/stock-info/stock-info-modal';

function App() {

  
  //search part
  const [stockName, setStockName] = useState(null)
  const [stock_data, setStock_Data] = useState(null)
  const [open_modal, setOpenModal] = useState(false)
  //end

  const [trending, setTrending] = useState(null)
  const [news, setNews] = useState(null)

  useEffect(() =>{
    trendingFetch();
    newsFetch()
  },[])

  // useEffect(() => {
  //   console.log(trending);
  //   console.log(news);
  // },[trending, news]);
  
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
  



  //Search Part
  
  const handleSearchChange = async(searchData) =>{
    setOpenModal(true)
    setStockName(searchData.value)
    
    const response = await fetch(`${STOCKS_URL}markets/stock/modules?ticker=${searchData.value}&module=financial-data`, stocksOptions)
    const result = await response.json()
    console.log(result)
    console.log("from handleChange")
    setStock_Data(result)
    
  }

  //End


  //MODAL PART
  
  

  const handleModal = () =>{
    setOpenModal(true)
  }


  //MODAL PART END
  
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
      <button onClick={handleModal}>Open</button>
      {trending && <Trending data={trending}/>}
      {news && <News data={news} />}
      {open_modal && stock_data && <Stock_Info_Modal closeModal={setOpenModal} data={stock_data} /> } 
    </div>
  );
}

export default App;
