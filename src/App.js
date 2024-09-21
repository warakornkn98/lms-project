import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Login from './Components/Auth/Login';
import Navbar from './Components/Navbar'
import BookTable from './Components/Books/BookTable'
import AddBook from './Components/Books/AddBook'
import UpdateBook from './Components/Books/UpdateBook'
import AdminPage from './Pages/AdminPage';
import Books from './Components/Books/Books';
import BookDetail from './Components/Books/BookDetail';



function App() {
  const [role, setRole] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    console.log(token);
    if (token) {
      // fetchUserRole(token).then((data) => setRole(data));
    }
  }, []);

  const fetchUserRole = async (token) => {
    const response = await axios.get('http://localhost:5000/api/userinfo', {
      headers: { authtoken: `${token}` },
    });
    if(response.status === 200){
      return response.data.user.role;
    }
  };

  console.log(role)
  
  return (
    <> 
      <BrowserRouter>
        {role === 'admin' ? <Navbar setRole={setRole}/> :""}
        {role === 'user' ? <Navbar/> :""}
        <Routes>
          <Route path='/books' element={<Books/>}/>
          {/* <Route path='/login' element={<Login setRole={setRole}/>}/>
          <Route path="/" element={<Navigate to={ localStorage.getItem('role') ? `/${localStorage.getItem('role')}` : '/login'} />} />
          {role === 'admin' && <Route path="/admin" element={<AdminPage />} />}
          {role === 'admin' && <Route path="/admin/books" element={<Books/>} />}
          {role === 'admin' && <Route path="/admin/books/:id" element={<BookDetail/>} />}
          {role === 'admin' && <Route path="/admin/bookstable" element={<BookTable/>} />}
          {role === 'admin' && <Route path="/admin/addbook" element={<AddBook/>} />}
          {role === 'admin' && <Route path="/admin/updatebook/:id" element={<UpdateBook />} />} */}
          {/* <Route path="*" element={<Navigate to={ !localStorage.getItem('role') ? '/login' : `/${role}` } />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

