import { Routes, Route } from 'react-router-dom';
import CsvAnalyzer from './components/CsvAnalyzer/CsvAnalyzer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CsvAnalyzer />} />
        <Route path="/generator" element={<h2>generator</h2>} />
        <Route path="/history" element={<h2>history</h2>} />
      </Routes>
    </>
  );
}

export default App;
