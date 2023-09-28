import Home from './pages/Home/Home'
import UserList from './pages/Users/UserList'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Exercise from './pages/exercise/Exercise'

let routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:productID", element: <Product /> },
    { path: "/exercise", element: <Exercise /> },
  ];
  
  export default routes;
  