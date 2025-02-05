import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id}=useParams()
  const [book,setBook]=useState({})
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/book/${id}`);
      console.log("Fetched Books:", response.data); // Debugging
      if (response.status === 200) {
        setBook(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
      useEffect(()=>
    {
      fetchBooks()
    },[])

  return (
   <>
    <Navbar/>
    <img className="w-full" src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
  <p className="text-gray-700 text-base">{book.bookPrice}</p>
    </div>
    </>
  )
}

export default SingleBook