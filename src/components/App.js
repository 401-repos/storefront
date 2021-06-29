import Dashboard from './Header/Header';
import Categories from './Categories/Categories'
import Copyright from './Footer/Footer';
import Products from './Products/Products';
import SimpleCart from './SimpleCart/SimpleCart';
import { useEffect } from 'react';
import { fetchDataAction } from '../reducers/productsreducer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('use eeff')
    //   fetchData();
    axios.get('https://api-server-0.herokuapp.com/products')
      .then(resp => {
        
        dispatch(fetchDataAction(resp.data))
      }).catch(err => {
        console.log(err.message)
      });// eslint-disable-next-line
  }, []);
  const cart = useSelector(state=>state.cart.items)
  return (
    <>
      <header>
        <Dashboard />
      </header>
      {cart.length>0?<div style={{ position: "fixed", right: '10%', width: "20%", zIndex:"1000" }}> <SimpleCart /></div> : null}

      <main style={{ width: "100vw", display: "flex", flexDirection: "column" }}>
        <Categories />
        <Products />
      </main>
      <footer>
        <Copyright style={{ transform: "translatey(200px)" }} />
      </footer>
    </>
  );
}

export default App;
