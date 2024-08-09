import React, { useState } from 'react';
import BookTable from '../components/Books/BookTable';
import BookForm from '../components/Books/BookForm';

const AdminBooksPage = () => {
    const [editingBook, setEditingBook] = useState(null);

    const handleEdit = (book) => {
        setEditingBook(book);
    };

    const handleSave = () => {
        setEditingBook(null);
    };

    return (
        <div className="container">
            <h2>Manage Books</h2>
            <BookTable onEdit={handleEdit} />
            <h3>{editingBook ? 'Edit Book' : 'Add Book'}</h3>
            <BookForm book={editingBook} onSave={handleSave} />
        </div>
    );
};

export default AdminBooksPage;
