import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import ProductContext from "./Components/Context/ProductContext";
import { useState } from "react";
import Toast from "./Components/Toast/Toast";
import products from "./products";


function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([])
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
          allProducts,
          userCart,
          setUserCart
        }}
      >
        <Navbar />



        <div className="productsContainer container">
          {allProducts.map(product=> (
            <Product {...product} />
          ))}
        </div>
        <Cart />
        <Toast />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
