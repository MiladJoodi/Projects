import Home from './pages/Home/Home'
import UserList from './pages/Users/UserList'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'

let routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:productID", element: <Product /> },
  ];
  
  export default routes;
  