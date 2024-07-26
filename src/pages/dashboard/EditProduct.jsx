import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import {  editProductToDatabase } from '../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';

const EditProduct = () => {
  const dispatch  = useDispatch();
  const {slug} = useParams();
  const data = useSelector(p=>p);
  const filteredData = data.find(p=>slugify(p.title) === slug);
  const navigate  = useNavigate();
  console.log(filteredData);
    return (
    <div>
      <h1 className='text-center my-5'>Edit Product</h1>
      <ProductForm editdata={filteredData} sendForm={fd=>{
          dispatch(editProductToDatabase(filteredData.id,fd))
        navigate('/dashboard');
        swal("Product edited","","success");
      }} />
    </div>
  )
}

export default EditProduct