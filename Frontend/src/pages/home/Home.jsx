import React, {useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/card'
import axios from 'axios'

const Home = () => {
  const [books, setBooks] = useState([]);
  const fetchbooks=async()=>{
    const response= await axios.get('http://localhost:3000/book')
    if(response.status===200){
      setBooks(response.data.data)
    }
  }
  useEffect(()=>{
    fetchbooks()
  },[])
  return (
    <>
    <div><Navbar/></div>
    <div className='flex flex-wrap justify-evenly mt-20 '>
      {
        books.length>0 && books.map((book)=>{
          return(
            <Card book={book}/>

          )
        })
      }
 
    </div>
   </>

  )
}

export default Home 