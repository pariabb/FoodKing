import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Shop from './pages/Shop'
import NotFoundPage from './pages/NotFoundPage'
import AddProduct from './pages/dashboard/AddProduct'
import EditProduct from './pages/dashboard/EditProduct'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
const Main = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddProduct />}></Route>
        <Route path='/dashboard/edit/:slug' element={<EditProduct />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>




      </Routes>
      <Footer />


    </>
  )
}
const App = () => {

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>

  )
}

export default App