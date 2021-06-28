import Dashboard from './Header/Header';
import Categories from './Categories/Categories'
import Copyright from './Footer/Footer';
import Products from './Products/Products';
import SimpleCart from './SimpleCart/SimpleCart';
function App() {
  return (
    <>
    <header>
      <Dashboard />
    </header>
    <div style={{position:"fixed", right:'10%', width:"20%"}}>
      <SimpleCart />
    </div>
    <main style={{width:"100vw" , display:"flex" , flexDirection:"column"}}>
      <Categories />
      <Products />
    </main>
    <footer>
        <Copyright style={{transform:"translatey(200px)"}}/>
    </footer>
    </>
  );
}

export default App;
