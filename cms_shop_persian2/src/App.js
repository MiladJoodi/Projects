import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import { useRoutes } from 'react-router-dom';
import routes from './routes'


function App() {
  const router = useRoutes(routes)
  return (
    <>
    <Sidebar />

    <div className='main'>
    <Header />
      {router}
    </div>
    </>
  );
}

export default App;
