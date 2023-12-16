import { BrowserRouter } from 'react-router-dom';
import './App.css';

// COMPONENTS
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;