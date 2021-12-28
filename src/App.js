import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Order from './Pages/Order';
import Online from './Pages/Online';

import Footer from './components/Footer/Footer';
import Payterm from './Pages/PaymentTerm';

import './App.css';

function App() {
  return (
    <>
    <Router>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutus' element = {<Aboutus/>} />
              <Route path='/order' element = {<Order/>} />
              <Route path='/online' element = {<Online/>} />
              <Route path='/contact-us' element = {<Contactus />} />
              <Route path='/paymentterm' element = {<Payterm />} />
          </Routes>

    </Router>
    </>
  );
}

export default App;
