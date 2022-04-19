import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>North Coders News!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
