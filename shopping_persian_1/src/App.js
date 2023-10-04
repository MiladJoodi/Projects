import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="productsContainer container mt-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Cart />
    </div>
  );
}

export default App;
