import { useState } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function ProductForm({ sendForm, editdata }) {
  const [title, setTitle] = useState(editdata ? editdata.title : "");
  const [img, setImg] = useState(editdata ? editdata.img : "");
  const [price, setPrice] = useState(editdata ? editdata.price : "");
  const [desc, setDesc] = useState(editdata ? editdata.desc : "");
  const [category, setCategory] = useState(editdata ? editdata.category : "");

  const formSubmited = (e) => {
    e.preventDefault();
    if (!img || !title || !desc || !price || !category) {
      swal("Please fill in all inputs", "", "warning");
    } else {
      sendForm({
        title, img, price, desc, category
      });
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="col-md-6">
        <form onSubmit={formSubmited}>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Photo<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="img"
              value={img}
              onChange={e => setImg(e.target.value)}
              placeholder="Type photo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Type title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Type price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="Type category"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Desc<span className='text-danger'>*</span></label>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="desc"
                style={{ height: '100px' }}
                value={desc}
                onChange={e => setDesc(e.target.value)}
              ></textarea>
              <label htmlFor="desc">Type description</label>
            </div>
          </div>
          <button type="submit" className="btn btn-success my-4">
            Add
          </button>

          <Link to='/dashboard' type="submit" className="btn btn-danger my-4 ms-4">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
