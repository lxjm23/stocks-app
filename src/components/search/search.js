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
          return {
            value: `${stock.symbol}`,
            label: `${stock.name}, (${stock.exchDisp})`
          }
        })
      }
    })
    
  }
  


  const handleChange = (searchData) =>{
    setSearch(searchData)
    onSearchChange(searchData)
    console.log(searchData)
  }
  console.log(search)
  
return(
  <AsyncPaginate 
    placeholder = "Search for stock"
    debounceTimeout={600}
    value={search}
    onChange={handleChange}
    loadOptions={loadOptions}
  />
)

}

export default Search