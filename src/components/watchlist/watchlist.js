import "./watchlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Watchlist = ({ data, name, onDelete }) => {
	const isPositive = (num) =>{
    return num >= 0
  }
  

	return (
		<div className="watchlist-container">
			<h2 className="title">Watchlist</h2>
			<ol>
				{name.map((stock, idx) => {
					const stockData = data[idx]?.body[0];
					if (stockData) {
						const regularMarketPrice = stockData.quote.regularMarketPrice;
						const regularMarketChangePercent =
							stockData.quote.regularMarketChangePercent.toFixed(2);
              const regularMarketChange =
							stockData.quote.regularMarketChange.toFixed(2);
						return (
							<li  key={idx}>
                  <div className = "stock-data">
									<p className="stock-name">{stock.stock} :</p>{" "}
									<p>
										{" "}
										${regularMarketPrice} 
										<span
											style={{
												color:
													isPositive(regularMarketChangePercent) ? "green" : "red",
											}}
										>
                    
											{`  ${isPositive(regularMarketChange) ? "+" : ""}${regularMarketChange} (${isPositive(regularMarketChange) ? "+" : ""}	${regularMarketChangePercent}%) `}
											
										</span>
										
									</p>
                  
                  <button
										className="delete-button"
										onClick={() => onDelete(stock.stock)}
									>
										<FontAwesomeIcon
											icon={faTrashCan}
											style={{ color: "#a80000" }}
										/>
									</button>
                  
									
								</div>
                
                
							</li>
						);
					} else {
						return (
							<h3 key={idx}>{stock.stock} : Data unavailable at the moment.</h3>
						);
					}
				})}
			</ol>
		</div>
	);
};

export default Watchlist;
