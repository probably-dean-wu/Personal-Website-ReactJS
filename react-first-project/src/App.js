import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Awards from './pages/Awards';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import '../src/styles/Navbar.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/awards" element={<Awards />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
