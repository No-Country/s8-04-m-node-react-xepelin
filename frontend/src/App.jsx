import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserInfo from './pages/UserInfo';
import NavBar from './components/Navbar/NavBar';


function App() {
  
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserInfo />} />
      </Routes>
    </Router>
    </div>
  );
}

  

export default App
