import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import AdminBooksPage from './pages/AdminBooksPage';

const PrivateRoute = ({ element, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin/books" element={<PrivateRoute element={<AdminBooksPage />} />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
