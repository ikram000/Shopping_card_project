import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {clearCart,selectCartItems} from '../redux/cartSlice'

const Card = () => {
   const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItems)
  console.log("Cart Items = ", cartItem)
  return (
    <>
      <div classNameName="container " style={{ width: "700px" }}>

      {
        cartItem.map((item)=>(
          <div key={item.id} classNameName="container my-5">
            <div className="card mb-3 bg-dark text-light text-center" style={{ width: "650px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.title}</p>
      </div>
    </div>
  </div>
</div>
          </div>
        ))
      }

      </div>
    </>
  )
}

export default Card