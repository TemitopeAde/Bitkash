import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Buy from './pages/Buy';
import History from './pages/History';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/payment" element={<Dasboard />} />
        <Route path="/password-and-security" element={<Dasboard />} />
        <Route path="/activities" element={<Dasboard />} />
        <Route path="/logout" element={<Dasboard />} /> */} */}
      </Routes>

    </div>
  );
}

export default App;
