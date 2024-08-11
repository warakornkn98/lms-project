import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import AddBook from './Components/Pages/AddBook';
import ShowBook from './Components/Pages/ShowBook';
import UpdateBook from './Components/Pages/UpdateBook';
import DeleteBook from './Components/Pages/DeleteBook';
import Login from './Components/Pages/Login';
import BookList from './Components/Pages/BookList';

function App() {
  return (
    <>  
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/show' element={<ShowBook/>}/>
        <Route path='/book' element={<BookList/>}/>
        <Route path='/update/:id' element={<UpdateBook/>}/>
        <Route path='/delete/:id' element={<DeleteBook/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
