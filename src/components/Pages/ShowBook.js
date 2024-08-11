import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ShowBook() {
  // const [books, setBooks] = useState([]);

  // async function fetchAllBooks() {
  //   const result = await axios.get('http://localhost:5000/api/books')
  //   console.log(result.data)
  //   setBooks(result.data)
  // }

  // useEffect(()=>{
  //   fetchAllBooks();
  // },[]);

  return (
    <div className='container'>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atom</td>
            <td>Adam smith</td>
            <td>200 Bath</td>
            <td>10</td>
            <td>
              <NavLink to={`/update`}><button className='btn btn-warning'>Update</button></NavLink> &nbsp;
              <NavLink to={`/delete`}><button className='btn btn-danger'>Delete</button></NavLink>
            </td>
          </tr>
          {/* {
            
            books.map(obj=>{
              return (
                <tr>
                  <td>{obj.book_name}</td>
                  <td>{obj.book_desc}</td>
                  <td>{obj.total_quantity}</td>
                  <td>
                    <NavLink to={`/update/${obj.book_id}`}><button className='btn btn-warning'>Update</button></NavLink> &nbsp;
                    <NavLink to={`/delete/${obj.book_id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                  </td>
                </tr>
                
              )
            }
            )
          } */}
        </tbody>
      </table>
    </div>
  )
}
