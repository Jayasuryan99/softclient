import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components2/Sidebar2';
import Home from './Pages/Home';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='sidebar2'>
        <Sidebar2 />
         </div>
      <div className="flex justify-center  w-full ">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
