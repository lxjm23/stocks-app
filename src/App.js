
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search/search';
import Trending from './components/trending/trending';
import News from './components/news/news';
import { STOCKS_URL } from './api';
import { stocksOptions } from './api';
import {BACKEND_URL} from "./api"
import Stock_Info_Modal from './components/stock-info/stock-info-modal';
import Watchlist from './components/watchlist/watchlist';

function App() {
  //idk
  const [clear, setClear] =useState(null)

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
  //const stockList = ["AAPL","OXY", "ANF"]
  const listFetch = async() =>{
    const response = await fetch(`${BACKEND_URL}api/getList`)
    const result = await response.json()
    
    setListData(result)
  }

 
  
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
    const promises = listData.map(stock => fetchStock(stock.stock));

    try {
      const results = await Promise.all(promises);
      setWatchListInfo(results); 
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

    
 console.log(watchListInfo)
 console.log(listData)

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
  
  //Add to watchlist button
  const addToWatchList = () =>{
    //logs the symbol
    //console.log(stock_data.body[0].underlyingSymbol)
    const symbol = stock_data.body[0].underlyingSymbol
    fetch(`${BACKEND_URL}api/addWatchList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({symbol})
    })
    .then(res => {
      if(!res.ok){
        throw new Error("Network response was not ok");
      }return res.json();
    })
    .then(data =>{ // this data is received from whatever is sent from the backend
      console.log(data) 
      
      //updates the state of listData after successful addition to the watchlist Database
      //this triggers the useEffect that fetches the watchlist data and causing it to reload the watchlist component
      setListData(prevListData => [...prevListData, {stock: symbol}])
    })
    .catch(error =>{
      console.log("There was a problem with fetch request.")
    })
  }

  const onDelete = (stock) =>{
    const symbol = stock
    fetch(`${BACKEND_URL}api/delete`,{
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({symbol})
    }).then(res =>{
      if(!res.ok){
        throw new Error("Network response was not okay");
      }return res.json()
    }).then(data => {
      console.log(data)

      // Remove the deleted stock from the list
      setListData((prevListData) => 
        prevListData.filter((item) =>{
          return item.stock !== symbol
        }) )
    })
  }


 
  
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      {watchListInfo  && <Watchlist data={watchListInfo} name={listData} onDelete={ onDelete}/> }
      {open_modal && stock_data && <Stock_Info_Modal closeModal={setOpenModal} data={stock_data} onAdd={addToWatchList} /> } 
      {trending && <Trending data={trending}/>}
      {news && <News data={news} />}
      
    </div>
  );
}

export default App;
