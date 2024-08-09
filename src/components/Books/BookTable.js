import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookTable = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('API_URL/books', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setBooks(response.data);
    };

    const handleDelete = async (bookId) => {
        await axios.delete(`API_URL/books/${bookId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        fetchBooks();
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookTable;
