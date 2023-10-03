import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import products from "./products";
import { useState } from "react";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Cart/Cart";

function App() {
  const [allProducts, setAllProducts] = useState(products);

  return (
    <div className="App">
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          {allProducts.map((product) => (
            <ProductsSection {...product} />
          ))}
        </div>
      </main>
      <Toast />
      <Cart />

    </div>
  );
}

export default App;
