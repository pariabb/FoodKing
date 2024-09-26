import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Shop from './pages/Shop';
import NotFoundPage from './pages/NotFoundPage';
import AddProduct from './pages/dashboard/AddProduct';
import EditProduct from './pages/dashboard/EditProduct';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import { ModeContext } from './context/ModeContext';
import SuccesfulCheckOut from './pages/SuccesfulCheckOut';
import Preloader from './components/Preloader';
import AdminLogin from './auth/AdminLogin';

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add" element={<AddProduct />} />
        <Route path="/dashboard/edit/:slug" element={<EditProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/succesfulcheckout" element={<SuccesfulCheckOut />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  const [mode] = useContext(ModeContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <BrowserRouter>
      <div className={mode}>
        {loading ? <Preloader /> : <Main />}
      </div>
    </BrowserRouter>
  );
};

export default App;
