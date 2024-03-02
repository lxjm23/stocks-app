const Stock_Info_Modal = ({closeModal, data, onAdd}) =>{

  const handleCloseModal = () =>{
    closeModal(false);
  
  }
  
  return(
    <>
      <div className="container">
        <button onClick={ () => handleCloseModal()}>X</button>
        <button onClick={ () => onAdd()}>Add to watchlist</button>
        <h2>Stock</h2>
        <h2>{data.body[0].underlyingSymbol}</h2>
        <h2>Price:${data.body[0].quote.regularMarketPrice} </h2>
        <h2></h2>
      </div>
    </>
  )
}

export default Stock_Info_Modal