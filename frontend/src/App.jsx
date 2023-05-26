import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserInfo from './pages/UserInfo';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Mision from './pages/Mision';


function App() {
  
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserInfo />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/mision' element={<Mision/>}/>
        <Route path='/dashboard' element={<Mision/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}
  

export default App
