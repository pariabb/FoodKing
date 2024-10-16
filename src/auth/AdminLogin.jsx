import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import supabase from '../supabase/connectdb';
import { useTranslation } from 'react-i18next';

const adminuser = {
  email: 'pari004@gmail.com',
  password: 'pari123'
};

const AdminLogin = () => {
  const { t } = useTranslation();

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  const loginSubmited = (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passRef.current.value) {
      swal('Please, fill in both email and password', '', 'warning');
      return;
    }

    if (emailRef.current.value === adminuser.email && passRef.current.value === adminuser.password) {
      localStorage.setItem('adminlogin', 'true');
      localStorage.setItem('login', 'false');
      swal('Admin login successful!', '', 'success');
      setTimeout(() => {
        navigate('/dashboard'); 
        window.location.reload();
      }, 1000);
    } else {
      const checkuser = async () => {
        const { data, error } = await supabase.from('users').select();

        if (error) {
          console.log(error);
          swal('An error occurred during login', '', 'error');
          return;
        }

        const userfind = data?.find((p) => p.email === emailRef.current.value);

        if (!userfind) {
          swal('Email or password is incorrect!', '', 'error');
        } else if (userfind.password === passRef.current.value) {
          localStorage.setItem('login', 'true');
          localStorage.setItem('adminlogin', 'false');
          localStorage.setItem('username', userfind.fullname);
          swal('This is not admin gmail!', '', 'error');

        } else {
          swal('Email or password is incorrect!', '', 'error');
        }
      };

      checkuser();
    }
  };

  return (
    <>
      <section className='page-img'>
        <div className="container">
          <div className="page-heading center">
            <h1 className='mb-3'>Login</h1>
            <p>
              <Link to='/' className='home-link'>
                Home <i className="fa-solid fa-greater-than"></i>
              </Link>
              <span>Login</span>
            </p>
          </div>
        </div>
      </section>

      <div className="hero">
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <div className="col-4 my-5">
            <form onSubmit={loginSubmited}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passRef} type="password" className="form-control" />
              </div>

              <div className="d-flex flex-column">
                <button type="submit" className="btn btn-success mt-4">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
