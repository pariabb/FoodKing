import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import WishBtn from './WishBtn';

const SingleProduct = ({ alldata }) => {

  const { addItem } = useCart();


  return (
    <div className="card">
      
      <div className="card-img-top mt-1">
        <div>
     
          <WishBtn myProduct={alldata} />
        </div>
        <Link to={`/product/${alldata.id}`}>
        <img src={alldata.img} height={245} style={{ objectFit: "contain" }} alt="..." /></Link>
      </div>
      <div className="card-body">
        <Link to='/cart'>
          <button className='add-btn' onClick={() => {
            addItem(alldata);
            swal({
              title: "Good job!",
              text: "Your product added to cart",
              icon: "success",
              button: "Ok",
            });
          }}>
            Add To Cart
          </button>
        </Link>
        <p className='text-center mt-3'> {alldata.price} $</p>
        <p className='title text-center mt-3'> {alldata.title}</p>
        <div className="raiting text-center mt-3">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>
    </div>
    //   </div>

  )
}

export default SingleProduct