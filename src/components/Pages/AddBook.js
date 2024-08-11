import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function AddBook() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  
  const saveData = data => {
    Swal.fire({
      icon: 'success',
      title: 'สำเร็จ!',
      text: 'เพิ่มหนังสือสำเร็จ!',
      confirmButtonText: 'ตกลง'
    });

    // รีเซ็ตฟอร์ม
    reset();

    // axios.post('http://localhost:5000/api/books',data)
    
    // navigate('/show')
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-8">
        <div className="jumbotron p-4">
          <h2 className="mb-4 text-center">เพิ่มหนังสือ</h2>

          {successMessage && (
            <div className="alert alert-success text-center" role="alert">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(saveData)}>
            <div className="row mb-2">
              <div className="col-md-12">
                <label htmlFor="bn"><b>ชื่อหนังสือ: </b></label>
                <input 
                  id="bn" 
                  type="text" 
                  className={`form-control ${errors.book_name ? 'is-invalid' : ''}`} 
                  placeholder="เช่น Atomic Habits" 
                  {...register('book_name', { required: 'กรุณากรอกชื่อหนังสือ' })} 
                />
                {errors.book_name && (
                  <div className="invalid-feedback">
                    {errors.book_name.message}
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-12">
                <label htmlFor="bd"><b>คำอธิบายหนังสือ: </b></label>
                <input 
                  id="bd" 
                  type="text" 
                  className={`form-control ${errors.book_desc ? 'is-invalid' : ''}`} 
                  placeholder="เช่น คู่มือสร้างนิสัยที่ดี" 
                  {...register('book_desc', { required: 'กรุณากรอกคำอธิบายหนังสือ' })} 
                />
                {errors.book_desc && (
                  <div className="invalid-feedback">
                    {errors.book_desc.message}
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="bt"><b>ประเภทหนังสือ: </b></label>
                <select 
                  id="bt" 
                  className={`form-control ${errors.booktype ? 'is-invalid' : ''}`} 
                  {...register('booktype', { required: 'กรุณาเลือกประเภทหนังสือ' })}
                >
                  <option value="">กรุณาเลือกประเภทหนังสือ</option>
                  <option value="พัฒนาตนเอง">พัฒนาตนเอง</option>
                  <option value="นวนิยาย">นวนิยาย</option>
                  <option value="ประวัติศาสตร์">ประวัติศาสตร์</option>
                  <option value="เทคโนโลยี">เทคโนโลยี</option>
                </select>
                {errors.booktype && (
                  <div className="invalid-feedback">
                    {errors.booktype.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="pn"><b>สำนักพิมพ์: </b></label>
                <select 
                  id="pn" 
                  className={`form-control ${errors.publisher ? 'is-invalid' : ''}`} 
                  {...register('publisher', { required: 'กรุณาเลือกสำนักพิมพ์' })}
                >
                  <option value="">กรุณาเลือกสำนักพิมพ์</option>
                  <option value="Penguin Books">Penguin Books</option>
                  <option value="HarperCollins">HarperCollins</option>
                  <option value="Macmillan">Macmillan</option>
                  <option value="Simon & Schuster">Simon & Schuster</option>
                </select>
                {errors.publisher && (
                  <div className="invalid-feedback">
                    {errors.publisher.message}
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="an"><b>ชื่อผู้แต่ง: </b></label>
                <select 
                  id="an" 
                  className={`form-control ${errors.author ? 'is-invalid' : ''}`} 
                  {...register('author', { required: 'กรุณาเลือกชื่อผู้แต่ง' })}
                >
                  <option value="">กรุณาเลือกผู้แต่ง</option>
                  <option value="James Clear">James Clear</option>
                  <option value="George Orwell">George Orwell</option>
                  <option value="Haruki Murakami">Haruki Murakami</option>
                  <option value="J.K. Rowling">J.K. Rowling</option>
                </select>
                {errors.author && (
                  <div className="invalid-feedback">
                    {errors.author.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="py"><b>ปีที่พิมพ์: </b></label>
                <input 
                  id="py" 
                  type="number" 
                  className={`form-control ${errors.publish_year ? 'is-invalid' : ''}`} 
                  placeholder="เช่น 2020" 
                  {...register('publish_year', { required: 'กรุณากรอกปีที่พิมพ์' })} 
                />
                {errors.publish_year && (
                  <div className="invalid-feedback">
                    {errors.publish_year.message}
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="pric"><b>ราคา: </b></label>
                <input 
                  id="pric" 
                  type="number" 
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`} 
                  placeholder="เช่น 10.00" 
                  {...register('price', { required: 'กรุณากรอกราคา' })} 
                />
                {errors.price && (
                  <div className="invalid-feedback">
                    {errors.price.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="quan"><b>จำนวน: </b></label>
                <input 
                  id="quan" 
                  type="number" 
                  className={`form-control ${errors.total_quantity ? 'is-invalid' : ''}`} 
                  placeholder="เช่น 10" 
                  {...register('aviable_quantity')} 
                  {...register('total_quantity', { required: 'กรุณากรอกจำนวน' })}
                />
                {errors.total_quantity && (
                  <div className="invalid-feedback">
                    {errors.total_quantity.message}
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <input type="submit" className="btn btn-success me-2" value="เพิ่ม"/> 
              <input 
                type="reset" 
                className="btn btn-warning" 
                value="ล้างข้อมูล"
                onClick={() => reset()} // รีเซ็ตฟอร์มเมื่อคลิกปุ่มล้างข้อมูล
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}