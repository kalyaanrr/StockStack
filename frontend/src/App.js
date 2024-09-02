import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import LandingPage from './pages/LandingPage';
import NavigationBar from './pages/NavigationBar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="edit-product/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
