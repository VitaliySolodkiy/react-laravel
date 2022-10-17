import './App.css';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './components/categories/category-list';
import CategoryAdd from './components/categories/category-add';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CategoryList />}></Route>
        <Route path="category-add" element={<CategoryAdd />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
