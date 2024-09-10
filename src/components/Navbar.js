import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setRole}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setRole(null)
        navigate('/login');
    };

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2" aria-current="page" href="/admin/books">Books</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" aria-current="page" href="/admin/bookstable">Books Table</a>
                    </li>
                    <li>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </li>


                    {/* <li class="nav-item dropdown">
                    <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Company
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Blog</a></li>
                            <li><a class="dropdown-item" href="#">About Us</a></li>
                            <li><a class="dropdown-item" href="#">Contact us</a></li>
                            
                        </ul>
                    </li> */}
                </ul>
            </div>
            </div>
        </nav>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        </nav> */}
        </>
        
    );
};

export default Navbar;
