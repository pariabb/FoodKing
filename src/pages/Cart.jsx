import React from 'react';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();

  const isLoggedIn = localStorage.getItem('login') === 'true';
  const isAdmin = localStorage.getItem('adminlogin') === 'true';

  if (!isLoggedIn && !isAdmin) {
    return (
      <>
        <section className='page-img'>
          <div className="container">
            <div className="page-heading center">
              <h1 className='mb-3'>Cart</h1>
              <p>
                <Link to='/' className='home-link'>Home <i className="fa-solid fa-greater-than"></i></Link> 
                <span>Cart</span>
              </p>
            </div>
          </div>
        </section>
        <div className='cart'>
          <div className="my-5 d-flex  flex-column align-items-center justify-content-center">
            <h2>Your Cart is empty!</h2> 
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
          </div>
        </div>
      </>
    );
  }

  const sortedItems = [...items].sort((a, b) => a.id - b.id);

  return (
    <>
      <section className='page-img'>
        <div className="container">
          <div className="page-heading center">
            <h1 className='mb-3'>Cart</h1>
            <p>
              <Link to='/' className='home-link'>Home <i className="fa-solid fa-greater-than"></i></Link> 
              <span>Cart</span>
            </p>
          </div>
        </div>
      </section>
      <div className='cart'>
        {isEmpty ? (
          <div className="my-5 d-flex align-items-center justify-content-center">
            <h1>Your Cart is empty!</h1>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
          </div>
        ) : (
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <div className="col-9 my-5 ">
              <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedItems.map(item => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td><img width={100} src={item.img} alt={item.title} /></td>
                      <td >{item.title}</td>
                      <td className='text-success'>${item.price * item.quantity}</td>
                      <td>
                        <button className='btn btn-success' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <span className='mx-3'>{item.quantity}</span>
                        <button className='btn btn-success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      </td>
                      <td><button className='btn btn-danger' onClick={() => removeItem(item.id)}>X</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <h3 className='my-5'>Total Price: <span className='text-success'>$</span>{cartTotal}</h3>
              <button className='btn btn-danger my-4' onClick={() => {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this product!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    emptyCart();
                    swal("Poof! Your cart has been emptied!", {
                      icon: "success",
                    });
                  } else {
                    swal("Your products are safe!");
                  }
                });
              }}>Clear All</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
