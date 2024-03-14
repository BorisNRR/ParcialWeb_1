import './App.css'
import { Navbar } from 'react-bootstrap'
import { Home } from './components/Home/Home'
import { UserProfile } from './components/UserProfile/UserProfile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {



  return (
    <div className='App'>
      <Navbar></Navbar>
      <BrowserRouter>
      <Routes>
          <Route path="/"            element={<Home/>}>        </Route>
          <Route path='/UserProfile' element={<UserProfile />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
