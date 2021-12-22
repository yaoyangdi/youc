import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import ContactUs from './components/Contactus';

import './App.css';

function App() {
  return (
    <>
    <Router>
          <NavBar />
          <Routes>
              <Route path='/' component={Home} />
              <Route path='/aboutus' component = {Aboutus} />
              <Route path='/contact-us' component = {ContactUs} />
          </Routes>
    </Router>
    </>
  );
}

export default App;
