import './App.css';
import Home from './pages/Home/Home'
import UserList from './pages/Users/UserList'
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar'

function App() {

  let router = useRoutes(routes)

  return (
    <>
    <></>
    
    {router}
    </>
  );
}

export default App;
