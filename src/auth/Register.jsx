import React from 'react'
import { Link } from 'react-router-dom'
import { useRef} from 'react'
import swal from "sweetalert";
import supabase from "../supabase/connectdb";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const navigate=useNavigate();

  const { t } = useTranslation();


  const fullnameRef = useRef(null);
  const birthdayRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  const registerSubmited = async (e) => {
    e.preventDefault();
    if (!fullnameRef.current.value ||
        !birthdayRef.current.value ||
        !telRef.current.value ||
        !emailRef.current.value ||
        !passRef.current.value ||
        !confirmPassRef.current.value
    ) {
        swal('Please, fill in all inputs', '', 'warning');
        return;
    }

    if (passRef.current.value !== confirmPassRef.current.value) {
        swal('Passwords are not the same!', '', 'error');
        return;
    }

    const { data, error: selectError } = await supabase.from('users').select().eq('email', emailRef.current.value);

    if (selectError) {
        console.log(selectError);
        swal("Something is wrong!", "", "error");
        return;
    }

    if (data && data.length > 0) {
        swal('This email is already in use!', '', 'error');
        return;
    }

    const { error } = await supabase.from('users').insert({
        fullname: fullnameRef.current.value,
        birthday: birthdayRef.current.value,
        tel: telRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value
    });

    if (error) {
        console.log(error);
        swal("Something is wrong!", "", "error");

    } else {
        swal("New user account has been created!", "", "success");
        navigate('/login')
    }
  }

  return (
    <>
      <section className='page-img'>
        <div className="container">
          <div className="page-heading center">
            <h1 className='mb-3'>Register</h1>
            <p>
              <Link to='/login' className='home-link'>Login <i className="fa-solid fa-greater-than"></i></Link>
              <span>Register</span>
            </p>
          </div>
        </div>
      </section>
      <div className="hero">
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <div className="col-5 my-5">
            <form onSubmit={registerSubmited}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input ref={fullnameRef} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of birth</label>
                <input ref={birthdayRef} type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone number</label>
                <input ref={telRef} type="tel" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passRef} type="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input ref={confirmPassRef} type="password" className="form-control" />
              </div>
              <div className="d-flex flex-column">
              <button type="submit" className="btn btn-success mt-4">Register</button>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                     <p className='mt-2'>Already have an account.</p>
                    <Link to='/login' type="submit" className="btn btn-danger ms-3 ">Login</Link>
                    </div>
                    </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
