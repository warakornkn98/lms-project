import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import BookCard from './BookCard';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:5000/api/books', {
            // headers: { authtoken: `${localStorage.getItem('token')}` }
        });
        setBooks(response.data);
    };
    
    return (
        <div className="container mt-5">
            <div className="container mt-5">
                <div className="row">
                    {books.map((book) => (
                        <div className="col-md-4" key={book.id}>
                        <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Books;
