const Stock_Info_Modal = ({closeModal, data}) =>{
  
  return(
    <>
      <div className="container">
        <button onClick={ () => closeModal(false)}>X</button>
        <h2>Stock</h2>
        <h2>{data.meta.symbol}</h2>
        <h2>Price:${data.body.currentPrice.raw} </h2>
        <h2></h2>
      </div>
    </>
  )
}

export default Stock_Info_Modal