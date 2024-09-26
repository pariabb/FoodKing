import React from 'react'
import { useSelector } from 'react-redux';
import SingleProduct from '../components/SingleProduct'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SuccesfulCheckOut = () => {
  const { t } = useTranslation();

  const data = useSelector(p => p)
  const slicedData = data.slice(0, 6)

  return (
    <div>
      <div className="container text-center py-5">
        <h1 className='text-success'>The payment has been successful!</h1>
      </div>
      <section className='fastfoods'>
        <h1 className='text-center'>Recommended Foods</h1>
        <div className="container mt-5 my-4">
          <div className="row d-flex justify-content-center">
            {slicedData.map(item => (
              <div key={item.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <SingleProduct alldata={item} />
              </div>
            ))}
            <Link to='/shop' className='home-btn'>View More</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuccesfulCheckOut