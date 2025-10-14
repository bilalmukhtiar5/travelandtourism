import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/footer';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/ContactUs';


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
