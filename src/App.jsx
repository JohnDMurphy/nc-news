import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <div className='App'>
      <h1>Fake News?</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;