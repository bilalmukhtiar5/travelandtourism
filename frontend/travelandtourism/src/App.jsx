import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/footer';

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
