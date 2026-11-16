import './App.css'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Documentations from './Documentations.jsx'
import Ecole from './Ecole.jsx'
import Entreprise from './Entreprise.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/documentations">Documentations</Link> | {" "}
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/documentations' element={<Documentations />} />
          <Route path='/ecole' element={<Ecole />} />
          <Route path='/entreprise' element={<Entreprise />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
