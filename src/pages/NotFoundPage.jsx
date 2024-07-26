import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="notfound container-fluid">
        <Link to='/' className='d-flex justify-content-center align-items-center'>

            <img className='mt-3 mb-3' src="https://i.gifer.com/G2TW.gif" alt="" />
        </Link>
        </div>
    )
}

export default NotFoundPage