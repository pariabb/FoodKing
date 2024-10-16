import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductToDatabase } from '../../tools/actions/shopAction';
import slugify from 'slugify';
import { useTranslation } from 'react-i18next';
function Dashboard() {

  const { t } = useTranslation();

  const data = useSelector(p => p);
  const dispatch = useDispatch();
  return (
    <>
      <section className='page-img '>
        <div className="container">
          <div className="page-heading center">
            <h1 className='mb-3' >{t("header.dashboard")}</h1>
            <p><Link to='/' className='home-link'>{t("header.menu1")}   <i className="fa-solid fa-greater-than"></i>
            </Link> <span>{t("header.dashboard")}</span> </p>
          </div>
        </div>
      </section>
      <div className="dashboard">
        <div className='container '>
          <Link to="/dashboard/add" className='btn btn-danger mt-4 mb-4'>Add</Link>
          <div className="table-responsive">
            <table className='table table-striped  '>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, c) => (
                  <tr key={item.id}>
                    <td>{c + 1}</td>
                    <td><img width={100} src={item.img} alt={item.title} /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.desc.slice(0, 30)}...</td>
                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-success'>Edit</Link></td>
                    <td><button onClick={() => { dispatch(deleteProductToDatabase(item.id)) }} className='btn btn-danger'>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Dashboard;
