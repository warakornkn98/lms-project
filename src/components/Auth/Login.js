import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS ที่กำหนดเอง

const Login = ({setRole}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token);
        if (token) {
          navigate('/');
        }
    }, []);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username: username,
                password: password
            });
            setRole('admin')
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.payload.user.role);
            navigate(`/admin`);
        } catch (error) {
            alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
