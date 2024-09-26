import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
import { useSelector } from 'react-redux';
import supabase from '../supabase/connectdb';
import { useTranslation } from 'react-i18next';


const Shop = () => {
  const { t } = useTranslation();

  const data = useSelector(p => p);
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');

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


  const sortProducts = (order) => {
    let sortedData = [...filtered];
    if (order === 'priceLowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === 'priceHighToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (order === 'nameAToZ') {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'nameZToA') {
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
    }
    setFiltered(sortedData);
  };

  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    sortProducts(selectedOrder);
  };

  if (loading) {
    return <div className='d-flex justify-content-center my-5'><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" /></div>;
  }

  return (
    <div>
      <section className='page-img'>
        <div className="container">
          <div className="page-heading center">
            <h1 className='mb-3'>{t("header.menu3")}</h1>
            <p><Link to='/' className='home-link'>{t("header.menu1")} <i className="fa-solid fa-greater-than"></i></Link> <span>{t("header.menu3")}</span></p>
          </div>
        </div>
      </section>

      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9 col-lg-10 my-3 py-5">


              <div className="row g-5 mb-4 justify-content-center">
                {filtered.length === 0 ? (
                  <p>No products available</p>
                ) : (
                  filtered.map(item => (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">

                    <SingleProduct key={item.id} alldata={item} />
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="catagories col-12 col-sm-12 col-md-3 col-lg-2 my-5 py-5">
              <div className="d-flex flex-row">
                <span></span><h5>CATEGORIES</h5>
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
              <div className=" w-100 mt-3">
                <select className="form-select" value={sortOrder} onChange={handleSortChange}>
                  <option value="">Sort by </option>
                  <option value="priceLowToHigh">Sort by Price: Low to High</option>
                  <option value="priceHighToLow">Sort by Price: High to Low</option>
                  <option value="nameAToZ">Sort by Name: A to Z</option>
                  <option value="nameZToA">Sort by Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
