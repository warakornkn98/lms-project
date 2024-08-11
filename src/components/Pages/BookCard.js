import React from 'react';
import './BookCard.css'; // Import CSS ที่กำหนดเอง

const BookCard = ({ book }) => {
    return (
        <div className="col-md-4">
            <div className="card book-card">
                <img src={book.imageUrl} className="card-img-top" alt={book.book_name} />
                <div className="card-body">
                    <h5 className="card-title">{book.book_name}</h5>
                    {/* <p className="card-text">{book.book_desc}</p> */}
                    <p className="card-text"><small className="text-muted">By {book.author}</small></p>
                    <a href="#" className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
