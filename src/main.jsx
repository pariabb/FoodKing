import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import App from './App'
import './assets/css/style.scss'
import { Provider } from 'react-redux'
import shopStore from './tools/store/shopStore'
import { addProduct } from './tools/actions/shopAction';
import supabase from './supabase/connectdb'
import { WishlistProvider } from 'react-use-wishlist'
import { CartProvider } from 'react-use-cart'
import { ModeProvider } from './context/ModeContext'
import './i18n/i18next'
import i18next from 'i18next';



const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());
})

const fetchData = async () => {
  const { data, error } = await supabase.from('product').select()
  if (error) {
    console.log(error);
  } else {
    data.map(item => (
      store.dispatch(addProduct({
        id: item.id, img: item.img, title: item.title, desc: item.desc
        , price: item.price, category: item.category
      }))

    ))

  }
}
fetchData();
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <ModeProvider>
      <CartProvider>

        <WishlistProvider>

          <App />

        </WishlistProvider>

      </CartProvider>
    </ModeProvider>


  </Provider>
)
