import Button from "./Button"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <>
    {/* <Button bhitrakokura="Register"/>
    <Button bhitrakokura="Login"/>
    <Button bhitrakokura="SignUp"/>
     */}
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<h1>login</h1>}/>
    <Route path="/signup" element={<h1>signup</h1>}/>
  </Routes>
  </BrowserRouter>

    </>
 

  )
}

export default App
