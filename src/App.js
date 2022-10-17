
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
