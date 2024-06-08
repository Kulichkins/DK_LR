
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Offer from './pages/Offer'
import Teachers from './pages/Teachers'
import TimeMang from './pages/TimeMang'
import FootBar from './components/Footbar';
function App() {
  return (
   <>
    <BrowserRouter>
      <NaviBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Offer" element={<Offer />}/>
        <Route path="/Teachers" element={<Teachers />}/>
        <Route path="/TimeMang" element={<TimeMang />}/>
      </Routes>
      <FootBar/>
    </BrowserRouter>
   </>
  );
}

export default App;
