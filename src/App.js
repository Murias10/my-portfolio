import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';



function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <div className='main-content'>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;