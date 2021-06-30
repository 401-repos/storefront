import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchData } from '../reducers/productsreducer'
import Checkout from './Checkout/Checkout';
import Main from './Main/Main';
import ProductDetails from './ProductDetails/ProductDetails';
import Dashboard from "./Header/Header";
import Copyright from "./Footer/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line
  }, []);
  return (
    <>

      <header>
        <Dashboard />
      </header>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='product/:id'>
          <ProductDetails />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
      </Switch>
      <footer>
        <Copyright style={{ transform: "translateY(200px)" }} />
      </footer>
    </>
  );
}

export default App;
