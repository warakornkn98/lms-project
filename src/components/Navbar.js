import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Library</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/books">Manage Books</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
