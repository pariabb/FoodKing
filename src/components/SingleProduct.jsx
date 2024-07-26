import React from 'react'
// import slugify from 'slugify'
import { Link } from 'react-router-dom'
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';


const SingleProduct = ({ alldata }) => {

    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();


    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card"  >
                <div className="card-img-top mt-1">
                    <Link to='/wishlist'>
                        <button className="favories" onClick={() => addWishlistItem(alldata)}>
                            <i className="fa-solid fa-heart favori-icon"></i>
                        </button></Link>
                    <img src={alldata.img} height={245} style={{ objectFit: "contain" }} alt="..." /></div>
                <div className="card-body">

                <Link to='/cart'>  <button className='add-btn' onClick={() => {
                        addItem(alldata);
                        swal({
                            title: "Good job!",
                            text: "Your product added to cart",
                            icon: "success",
                            button: "Ok",
                        });
                    }
                    }>Add To Cart</button></Link>  
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
        </div>
    )
}

export default SingleProduct