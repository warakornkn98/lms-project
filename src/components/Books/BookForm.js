import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ book, onSave }) => {
    const [name, setName] = useState(book ? book.name : '');
    const [author, setAuthor] = useState(book ? book.author : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (book) {
            await axios.put(`API_URL/books/${book.id}`, { name, author }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
        } else {
            await axios.post('API_URL/books', { name, author }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label>Author</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default BookForm;
