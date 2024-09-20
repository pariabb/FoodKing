import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import swal from 'sweetalert'; 
import supabase from '../supabase/connectdb';
import WishBtn from '../components/WishBtn';

const ProductDetails = ({alldata}) => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { items } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching product:', error.message);
      } else {
        setProduct(data);
      }
      setLoading(false);
    };

    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('product_id', id);

      if (error) {
        console.error('Error fetching comments:', error.message);
      } else {
        setComments(data);
      }
    };

    fetchProduct();
    fetchComments();
  }, [id, items]);

  // const handleAddComment = async (e) => {
  //   e.preventDefault();
  //   if (newComment.trim() === '') return;

  //   const { data, error } = await supabase
  //     .from('comments')
  //     .insert([{ product_id: id, comment: newComment }]);

  //   if (error) {
  //     console.error('Error adding comment:', error.message);
  //   } else {
  //     setComments([...comments, ...data]);
  //     setNewComment('');
  //     swal({
  //       title: 'Comment Added!',
  //       text: 'Your comment has been added successfully.',
  //       icon: 'success',
  //       button: 'Ok',
  //     });
  //   }
  // };

  if (loading) {
    return (
      <div className='d-flex justify-content-center my-5'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
          alt='Loading'
        />
      </div>
    );
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='product-details'>
      <section className='page-img'>
        <div className='container'>
          <div className='page-heading center'>
            <h1 className='mb-3'>{product.title}</h1>
            <p>
              <Link to='/shop' className='home-link'>
                Shop <i className='fa-solid fa-greater-than'></i>
              </Link>{' '}
              <span>Product Details</span>
            </p>
          </div>
        </div>
      </section>

      <section className='product-info'>
        <div className='container'>
          <div className='row my-5'>
            <div className='col-12 col-md-6'>
              <img
                src={product.img}
                alt={product.title}
                className='img-fluid detail-img'
              />
            </div>
            <div className='col-12 col-md-6 mt-4'>
              <h2 className='text-success'>{product.title}</h2>
              <h3>Price: <span className='text-success'>$</span>{product.price}</h3>
              <h3 className='text-dark'>Category: <span className='text-danger'>{product.category}</span></h3>
              <h4 className='my-2'>Description: <span className='text-dark'>{product.desc}</span></h4>
              <div className='d-flex mt-3'>
                <Link
                  to='/cart'
                  className='btn btn-success'
                  onClick={() => {
                    addItem(product);
                    swal({
                      title: 'Good job!',
                      text: 'Your product added to cart',
                      icon: 'success',
                      button: 'Ok',
                    });
                  }}
                >
                  Add to cart
                </Link>
                <button className='btn ms-3 '>
                  <WishBtn myProduct={product} />

                </button>
              </div>
              <Link to='/shop' className='btn btn-dark mt-4'>Back</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='product-comments py-3'>
        <div className='container'>
          <h2 className='mb-4'>Comments</h2>
          <form onSubmit={handleAddComment}>
            <div className='mb-3'>
              <textarea
                className='form-control'
                rows='4'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder='Add your comment here...'
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Submit Comment</button>
          </form>
          <div className='mt-4'>
            {comments.length > 0 ? (
              <ul className='list-unstyled'>
                {comments.map((comment) => (
                  <li key={comment.id} className='mb-3'>
                    <div className='comment'>
                      <p>{comment.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductDetails;
