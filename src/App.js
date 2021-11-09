import './App.css'
// ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// PAGES
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
// COMPONENTS
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/recipes/:id' exact element={<Recipe />} />
          <Route path='/create' exact element={<Create />} />
          <Route path='/search' exact element={<Search />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App
