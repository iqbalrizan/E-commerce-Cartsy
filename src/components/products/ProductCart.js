import React from "react"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"


export const ProductCart = ({ key, id, cover, name, price }) => {

    const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }
  
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <Link>
            <img src={cover} alt='cover' />
          </Link>
        </div>
        <div className='details'>
          <h3>{name}</h3>
          <h4>${price}</h4>
          <button className="product-button" onClick={addToCart}>
            <p>Add</p>
            &nbsp;
            &nbsp;
            <BsFillCartCheckFill />
          </button>
        </div>
      </div>
    </>
  )
}