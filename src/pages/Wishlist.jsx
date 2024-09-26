import React from 'react';
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Wishlist = () => {

  const { t } = useTranslation();

  const { addItem } = useCart();
  const {
    isWishlistEmpty,
    totalWishlistItems,
    items,
    removeWishlistItem,
  } = useWishlist();

  if (isWishlistEmpty) {
    return (
      <div className="container text-center">
        <img
          className="mt-5 mb-3"
          src="https://assets-v2.lottiefiles.com/a/744a57f2-116e-11ee-bbbc-230b4b2d893a/L9QBD6YcKC.gif"
          alt="Empty Wishlist"
        />
        <h2>Your wishlist is empty!</h2>
      </div>
    );
  }

  return (
    <>
      <section className="page-img">
        <div className="container">
          <div className="page-heading center">
            <h1 className="mb-3">Wishlist ({totalWishlistItems})</h1>
            <p>
              <Link to="/" className="home-link">
                Home <i className="fa-solid fa-greater-than"></i>
              </Link>
              <span> Wishlist</span>
            </p>
          </div>
        </div>
      </section>
      <div className="pb-5 wishlist py-4">
        <div className="container mb-3">
          <div className="row">
            {items.map((item) => (
              <div className="col-12 col-lg-4 col-md-6 col-sm-12 g-4 my-3" key={item.id}>
                <div className="card text-decoration-none">
                  <div className="card-img-top mt-1">
                    <button className="favories" onClick={() => removeWishlistItem(item.id)}>
                      <i className="fa-solid fa-heart favori-icon wish-icon"></i>
                    </button>
                    <Link to={`/product/${item.id}`}>
                    <img
                      src={item.img}
                      height={245}
                      style={{ objectFit: 'contain' }}
                      alt={item.title}
                    />
                    </Link>
                  </div>
                  <div className="card-body">
                    <p className="text-center mt-3">${item.price}</p>
                    <p className="title text-center mt-3">{item.title}</p>
                    <div className="raiting text-center my-4">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                    <Link
                      to="/cart"
                      className="btn btn-success ms-4"
                      onClick={() => addItem(item)}
                    >
                      Add to cart
                    </Link>
                    <button
                      className="btn btn-danger ms-3"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        removeWishlistItem(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
