import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
<>
               <section className='page-img '>
                    <div className="container">
                        <div className="page-heading center">
                            <h1 className='mb-3' >About Us</h1>
                            <p><Link to='/' className='home-link'>Home   <i className="fa-solid fa-greater-than"></i>  </Link> <span>About Us</span> </p>
                        </div>
                    </div>
                </section>
</> 
 )
}

export default About