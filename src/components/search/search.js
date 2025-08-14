import { AsyncPaginate } from "react-select-async-paginate";
import { STOCKS_URL, stocksOptions } from "../../api";
import { useState } from "react";



const Search = ({onSearchChange}) =>{

  const [search, setSearch] = useState(null)

  const loadOptions = (inputValue) =>{
    return fetch(`${STOCKS_URL}markets/search?search=${inputValue}`,stocksOptions)
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.body.map((stock) =>{
          console.log(stock)
          return {
            value: `${stock.symbol}`,
            label: `${stock.symbol}, ${stock.shortname} (${stock.exchDisp})`
            
          }
        })
      }
    })
    
  }

  
  
  const handleChange = (searchData) =>{
    setSearch(searchData)
    onSearchChange(searchData)
    
  }

  
  
return(
  <AsyncPaginate className="searchBar"
    placeholder = "Search for stock"
    debounceTimeout={600}
    value={search}
    onChange={handleChange}
    loadOptions={loadOptions}
    
  />
)

}

export default Search