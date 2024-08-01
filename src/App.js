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
import Resume from './pages/Resume';
import SpringField from './projects/springfieldvillage';
import HTML from './projects/htmlwebsite';
import Website from './projects/reactwebsite';
import Elevator from './projects/ArudinoElevator';
import PMAS from './projects/pmas';
import Mura from './projects/projectmura';
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
          <Route path='/resume' element={<Resume />}/>
          <Route path='/springfieldvillage' element={<SpringField />}/>
          <Route path='/htmlwebsite' element={<HTML />}/>
          <Route path='/reactwebsite' element={<Website />}/>
          <Route path='/elevator' element={<Elevator />}/>
          <Route path='/pmas' element={<PMAS />}/>
          <Route path='/projectmura' element={<Mura />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
