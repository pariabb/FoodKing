import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabase/connectdb';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data: blogsData, error } = await supabase
        .from('blogs')
        .select('*');

      if (error) {
        console.error('Error fetching blogs:', error.message);
      } else {
        setBlogs(blogsData);
        setFilteredBlogs(blogsData); 
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(value) ||
      blog.text.toLowerCase().includes(value)
    );
    setFilteredBlogs(filtered);
  };

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

  return (
    <>
      <section className='page-img '>
        <div className='container'>
          <div className='page-heading center'>
            <h1 className='mb-3'>{t("header.menu4")}</h1>
            <p>
              <Link to='/' className='home-link'>
              {t("header.menu1")} <i className='fa-solid fa-greater-than'></i>
              </Link>{' '}
              <span>{t("header.menu4")}</span>
            </p>
          </div>
        </div>
      </section>

      <div className='blogs '>
        <div className='container'>
          <div className='row '>
            <div className='col-12 col-lg-8 col-md-8 col-sm-8'>
              {filteredBlogs.length === 0 ? (
                <p>No blogs available</p>
              ) : (
                filteredBlogs.map(blog => (
                  <div key={blog.id} className='blog-post my-5'>
                    <div className="blog-img">
                      <img src={blog.img} alt={blog.title} />
                    </div>
                    <div className='d-flex my-3 gap-5'>
                    <h5><i className="fa-solid fa-user text-success ms-3 me-1"></i>{blog.title}</h5>
                    <h5><i className="fa-solid fa-calendar-days text-success me-1"></i>{blog.date}</h5>
                    </div>
                    <h2 className='ms-2'>{blog.text}</h2>
                    <p className='ms-2'>{blog.desc}</p>
                  </div>
                ))
              )}
            </div>

            <div className='col-12 col-lg-4 col-md-12 col-sm-12 my-5  '>
            <h2 className='text-success mb-4 '>Search</h2>
              <div className="search-bar mb-4  d-flex">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div className="search-icon text-align-center align-items-center justify-content-center"
                 onChange={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
