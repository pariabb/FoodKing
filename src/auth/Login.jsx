import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import supabase from '../supabase/connectdb'
import { useTranslation } from 'react-i18next';

const adminuser = {
    email: "pari004@gmail.com",
    password: "pari123"
}

const Login = () => {
    const { t } = useTranslation();


    const emailRef = useRef(null);
    const passRef = useRef(null);
    
    const navigate=useNavigate();
    const loginSubmited = (e) => {
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            swal('Please, fill inputs', '', 'warning');
        } else {
            if (emailRef.current.value === adminuser.email && passRef.current.value === adminuser.password) {
                localStorage.setItem('adminlogin', 'true');
                localStorage.setItem('login', 'false');
                // swal('Admin login had been successfully', '', 'success');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                navigate('/dashboard');
            } else {
                const createLogin = (user) => {
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('adminlogin', 'false');
                    localStorage.setItem('username', user);
                    swal('User login had been successfully', '', 'success');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                    navigate('/');
                }
                const checkuser = async () => {
                    const { data, error } = await supabase.from('users').select();

                    if (error) {
                        console.log(error);
                    } else {
                        const userfind = data?.find((p) => p.email === emailRef.current.value);
                        if (userfind === undefined) {
                            swal("Email or password is wrong!", "", "error");
                        } else {
                            if (userfind.password === passRef.current.value) {
                                createLogin(userfind.fullname);
                            } else {
                                swal("Email or password is wrong!", "", "error");
                            }
                        }
                    }
                }
                checkuser();
            }
        }
    }

    return (
        <>
            <section className='page-img '>
                <div className="container">
                    <div className="page-heading center">
                        <h1 className='mb-3' >{t("header.login")}</h1>
                        <p><Link to='/' className='home-link'>{t("header.menu1")}   <i className="fa-solid fa-greater-than"></i> </Link> <span>{t("header.login")}</span>  </p>
                    </div>
                </div>
            </section>
            <div className="hero">
                <div className='container d-flex justify-content-center align-items-center flex-column '>
                    <div className="col-4 my-5">
                          <form onSubmit={loginSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" />
                    </div>
                    <div className="d-flex flex-column">
                    <button type="submit" className="btn btn-success mt-4">Login</button> <br />
                    <div className="d-flex flex-row justify-content-center align-items-center">
                     <p className='mt-2'>Do you have account?</p>
                    <Link to='/register' type="submit" className="btn btn-danger ms-3 ">Register</Link>
                    </div>
                    </div>
                </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login