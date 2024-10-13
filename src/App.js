import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar'; // Optional: For navigation links
import Sidebar from './components/Sidebar';
import './App.css'; // Optional: Main CSS styles for the app

function App() {
  return (
    <Router>
      <main>
        <Sidebar /> {/* Optional sidebar */}
        <div className='main-content'>
          <Navbar /> {/* Optional navigation bar */}
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