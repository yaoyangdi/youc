import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
    <Router>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutus' element = {<Aboutus/>} />
              <Route path='/contact-us' element = {<Contactus />} />
          </Routes>
          <Footer />
    </Router>
    </>
  );
}

export default App;
