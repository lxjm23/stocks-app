
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search/search';
import Trending from './components/trending/trending';
import News from './components/news/news';
import { STOCKS_URL } from './api';
import { stocksOptions } from './api';
import Stock_Info_Modal from './components/stock-info/stock-info-modal';
import Watchlist from './components/watchlist/watchlist';

function App() {

  
  //search part
  const [stockName, setStockName] = useState(null)
  const [stock_data, setStock_Data] = useState(null)
  const [open_modal, setOpenModal] = useState(false)
  //end

  //watchlist part
  const [listData, setListData] = useState([]) // this is datafrom database //ex: stockList = ["AAPL","OXY", "ANF"]
  
  const [watchListInfo, setWatchListInfo] = useState(null) 



  const [trending, setTrending] = useState(null)
  const [news, setNews] = useState(null)

  useEffect(() =>{
    trendingFetch();
    newsFetch()
  },[])

  useEffect(()=>{
    listFetch();
    
 }, [])

  useEffect(() =>{
    if (listData.length > 0){
      fetchAllWatchList();
    }
  },[listData])
 

  // useEffect(() => {
  //   console.log(trending);
  //   console.log(news);
  // },[trending, news]);
  
  
  const trendingFetch = async() =>{
    const response = await fetch(`${STOCKS_URL}markets/screener?list=trending`, stocksOptions);
	  const result = await response.json();
    setTrending(result)
    
  }


  const newsFetch = async() =>{
    const response = await fetch(`${STOCKS_URL}markets/news`, stocksOptions)
    const result = await response.json();
    setNews(result)
  }

  //watchlist part


  //dummy data, real data will be fetched from database
  const listFetch = () =>{
    const stockList = ["AAPL","OXY", "ANF"]
    setListData(stockList)
  }

  console.log(listData)
  
  //
  const fetchStock = async (stock) => {
    try {
      const response = await fetch(`${STOCKS_URL}markets/options?ticker=${stock}`, stocksOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`Error fetching stock ${stock}:`, error);
      throw error;
    }
  };

    

  const fetchAllWatchList = async () =>{
    const promises = listData.map(stock => fetchStock(stock));

    try {
      const results = await Promise.all(promises);
      setWatchListInfo(results); 
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

    
 console.log(watchListInfo)

 //Search Part
  
  const handleSearchChange = async(searchData) =>{
    setOpenModal(true)
    setStockName(searchData.value)
    
    
    const response = await fetch(`${STOCKS_URL}markets/options?ticker=${searchData.value}`, stocksOptions)
    const result = await response.json()
    setStock_Data(result)
    
  }

  //End 

  
  //MODAL PART

  
 

  //MODAL PART END
  
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
      {watchListInfo  && <Watchlist data={watchListInfo} name={listData}/> }
      {open_modal && stock_data && <Stock_Info_Modal closeModal={setOpenModal} data={stock_data} /> } 
      {trending && <Trending data={trending}/>}
      {news && <News data={news} />}
      
    </div>
  );
}

export default App;
