import Dashboard from './Header/Header';
import Categories from './Categories/Categories'
import Copyright from './Footer/Footer';
import Products from './Products/Products';
function App() {
  return (
    <>
    <header>
      <Dashboard />
    </header>
    <main>
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
