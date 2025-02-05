import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({book}) => {
  return (
<>


<div className="max-w-sm rounded overflow-hidden shadow-lg my-10 "key={book._id}>
  <img className="w-full" src={book.bookimage ? `http://localhost:3000/storage/${book.bookimage}`:"https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-gray-700 text-base">
      {book.bookPrice}
    </p>
<Link to={`/book/${book._id}`}>See More</Link>

  </div>
</div></>    
)
}

export default Card