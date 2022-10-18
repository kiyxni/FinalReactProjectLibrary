import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favourites from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
