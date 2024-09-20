import React from "react";
import { useWishlist } from "react-use-wishlist";

const WishBtn = ({ myProduct }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleFunc = (product) => {
    if (inWishlist(product.id)) {
      removeWishlistItem(product.id);
    } else {
      addWishlistItem(product);
    }
  };
  return (
    <div>
      <button className="favories" onClick={() => toggleFunc(myProduct)}>
        {inWishlist(myProduct.id) ?   <i className="fa-solid fa-heart favori-icon wish-icon"></i> : <i className="fa-regular fa-heart"></i>}
      </button>
    </div>
  );
};

export default WishBtn;