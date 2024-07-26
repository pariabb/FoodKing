import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
import { useSelector } from 'react-redux';
import supabase from '../supabase/connectdb';

const Shop = () => {
  const data = useSelector(p => p);
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchCategories = async () => {
      const { data: categoriesData, error } = await supabase
        .from('product')
        .select('*');

      if (error) {
        console.error('Error fetching categories:', error.message);
      } else {
        const uniqueCategories = [...new Set(categoriesData.map(item => item.category))];
        setCategory(['All Products', ...uniqueCategories]);
        setFiltered(data);  
      }
      setLoading(false);  
    };

    fetchCategories();
  }, [data]);  

  const filterData = (cat) => {
    if (cat === 'All Products') {
      setFiltered(data);
    } else {
      const filteredDt = data.filter(p => p.category === cat);
      setFiltered(filteredDt);
    }
  };

  if (loading) {
    return <div className='d-flex justify-content-center my-5'><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" /></div>;  
  }

  return (
    <div>
      <section className='page-img'>
        <div className="container">
          <div className="page-heading center">
            <h1 className='mb-3'>SHOP</h1>
            <p><Link to='/' className='home-link'>Home <i className="fa-solid fa-greater-than"></i></Link> <span>Shop</span></p>
          </div>
        </div>
      </section>

      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9 col-lg-10 my-5 py-5">
              <div className="row g-5 mb-4">
                {filtered.length === 0 ? (
                  <p>No products available</p>  
                ) : (
                  filtered.map(item => (
                    <SingleProduct key={item.id} alldata={item} />
                  ))
                )}
              </div>
            </div>

            <div className="catagories col-12 col-sm-12 col-md-3 col-lg-2 my-5 py-5">
              <div className="d-flex flex-row">
                <span></span><h5>CATAGORIES</h5>
              </div>
              <ul className="list-group">
                {category.map((cat, c) => (
                  <li
                    key={c}
                    className="list-group-item"
                    onClick={() => filterData(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
