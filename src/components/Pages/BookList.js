import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

// ข้อมูลตัวอย่างแบบ JSON
const sampleBooks = [
    {
        book_id: 1,
        book_name: "จิตวิทยาสายดาร์ก",
        book_desc: "A novel written by American author F. Scott Fitzgerald.",
        author: "Dr.Hiro",
        publisher: "Scribner",
        price: 10.99,
        imageUrl: "https://storage.naiin.com/system/application/bookstore/resource/product/202304/577274/1000260516_front_XXL.jpg?imgname=จิตวิทยาสายดาร์ก"
    },
    {
        book_id: 2,
        book_name: "จริง ๆ แล้วฉันเเข็งแกร่งได้ด้วยตัวฉันเอง",
        book_desc: "A novel by Harper Lee published in 1960.",
        author: "Harper Lee",
        publisher: "J.B. Lippincott & Co.",
        price: 12.99,
        imageUrl: "https://storage.naiin.com/system/application/bookstore/resource/product/202408/619575/1000274488_front_XXL.jpg?imgname=จริง-ๆ-แล้วฉันเเข็งแกร่งได้ด้วยตัวฉันเอง"
    },
    {
        book_id: 3,
        book_name: "อย่าลืมหยอดรอยยิ้มใส่กระปุก แล้วพกความสุขใส่กระเป๋า",
        book_desc: "A dystopian social science fiction novel and cautionary tale.",
        author: "George Orwell",
        publisher: "Secker & Warburg",
        price: 15.99,
        imageUrl: "https://storage.naiin.com/system/application/bookstore/resource/product/202407/617040/1000273390_front_XXL.jpg?imgname=อย่าลืมหยอดรอยยิ้มใส่กระปุก-แล้วพกความสุขใส่กระเป๋า-"
    }
];

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // ใช้ข้อมูลตัวอย่างแบบ JSON แทนการดึงข้อมูลจาก API
        setBooks(sampleBooks);
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {books.map(book => (
                    <BookCard key={book.book_id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
