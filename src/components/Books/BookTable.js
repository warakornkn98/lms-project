import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const BookTable = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:5000/api/books', {
            headers: { authtoken: `${localStorage.getItem('token')}` }
        });
        setBooks(response.data);
    };

    const handleDelete = async (bookId) => {
        await axios.delete(`http://localhost:5000/api/book/${bookId}`, {
            headers: { authtoken: `${localStorage.getItem('token')}` }
        });
        fetchBooks();
    };
    
    return (
        <div className="container">
        <br></br>
        <h2>ตารางหนังสือข้อมูล</h2>
        <br></br>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ชื่อหนังสือ</th>
                    <th>คำอธิบาย</th>
                    <th>ประเภทหนังสือ</th>
                    <th>ผู้แต่ง</th>
                    <th>สำนักพิมพ์</th>
                    <th>ปีที่พิมพ์</th>
                    <th>ราคา</th>
                    <th>จำนวน(ใช้งานได้/ทั้งหมด)</th>
                    <th>แก้ไข</th>
                    <th>ลบ</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.desc}</td>
                        <td>{book.booktype}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.publish_year}</td>
                        <td>{book.price}</td>
                        <td>{book.total_quantity}/{book.available_quantity}</td>
                        <td>
                            <button className="btn btn-danger">
                                <Link
                                    to={`/admin/updatebook/${book.id}`}
                                    style={{ color: "inherit", textDecoration: "none" }}
                                >
                                    Update
                                </Link>
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="btn btn-danger ">
            <Link to="/admin/addbook" style={{ color: "inherit", textDecoration: "none" }}>
            Add new book
            </Link>
        </button>
        </div>
    );
};

export default BookTable;
