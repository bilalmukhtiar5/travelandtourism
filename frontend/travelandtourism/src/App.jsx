import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/footer';
import AboutUs from './pages/aboutUs';


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
