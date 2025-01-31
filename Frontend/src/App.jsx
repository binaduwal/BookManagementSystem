import {BrowserRouter, Routes, Route, RouterProvider} from "react-router-dom"

import Home from "./Home"
import router from "./Routes"
import { useState } from "react"

function App() {
const [count,setcount]= useState(0)
const [name,setName]=useState("Bina")


  return (
    <>
    <h1>{count}</h1>
    <h2>{name}</h2>
    <button onClick={()=>setcount(count +1)}>+</button>
    <button onClick={()=>setName("Beena")}>Change Name</button>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
