import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import ProductContext from "./Components/Context/ProductContext";
import { useState } from "react";
import Toast from "./Components/Toast/Toast";


function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);

  return (
    <div className="App">
      <ProductContext.Provider
        value={{
          isShowCart,
          setIsShowCart,
          isShowToast,
          setIsShowToast,
        }}
      >
        <Navbar />

        <div className="productsContainer container mt-5">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <Cart />
        <Toast />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
