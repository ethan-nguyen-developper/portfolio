import './App.css'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Documentations from './Documentations.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/Documentations">Documentations</Link> | {" "}
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Documentations' element={<Documentations />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
