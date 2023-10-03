import Home from './pages/Home/Home'
import UserList from './pages/Users/UserList'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Currency from './pages/Currency/Currency'
import Updates from './pages/Updates/Updates'
import Quests from './pages/Questions/Quests'
import Cats from './pages/Cats/Cats'
import Exercise from './pages/Exercise/Exercise'

let routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:productID", element: <Product /> },
    { path: "/currency", element: <Currency /> },
    { path: "/updates", element: <Updates /> },
    { path: "/quests", element: <Quests /> },
    { path: "/cats", element: <Cats /> },
    { path: "/exercise", element: <Exercise /> },
  ];
  
  export default routes;
  