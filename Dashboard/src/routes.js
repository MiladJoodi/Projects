import Home from "./pages/Home/Home";
import UserList from "./pages/Users/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
