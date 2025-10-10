import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
    </>
  )
}

export default App
