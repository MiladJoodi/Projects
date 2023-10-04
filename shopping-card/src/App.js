import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import products from "./products";
import { useState } from "react";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Cart/Cart";
import productContext from "./Context/ProductsContext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)

  return (
    <div className="App">
      <productContext.Provider value={{
        allProducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart
      }}>
        <Navbar />

        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>
            {allProducts.map((product) => (
              <ProductsSection />
            ))}
          </div>
        </main>
        <Toast />
        <Cart />
      </productContext.Provider>
    </div>
  );
}

export default App;
