import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ProductsSection from './Components/ProductsSection/ProductsSection'

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className='pb-5'>
        <div className="container">
          <h1 className='text-center main-title'>All Products</h1>
          <ProductsSection title="Phones" />
          <ProductsSection title="Laptops" />
          <ProductsSection title="Monitors" />
          <ProductsSection title="Coolpads" />
        </div>
      </main>
    </div>
  );
}

export default App;
