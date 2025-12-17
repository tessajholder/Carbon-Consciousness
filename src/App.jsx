import './App.css'
import Intro from './components/Intro.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator.jsx';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
  );
}

export default App;
