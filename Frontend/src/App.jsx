import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Signup from '../Pages/Signup'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Signup/>
    </BrowserRouter>
    </>
  )
}

export default App