import './App.css';
import Home from './pages/Home';
import EventsDetails from './pages/EventsDetails';
import {BrowserRouter as  Router, Routes ,Route ,Link } from 'react-router-dom';


function App() {
 
  return (
   <Router>
    <nav className='flex justify-between align-center px-4 py-2 bg-sky-500 h-10  text-white text-center'>
                <Link to='/' >Logo</Link>
                <ul className='flex '>
                <Link to='/' ><li className='px-3'>Home</li></Link>
                    <li>Events</li>
                </ul>
     </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/events/:id' element={<EventsDetails />} />

    </Routes>
    
  </Router>
    
  );
}

export default App;
