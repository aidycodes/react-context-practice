import MovieList from './components/MovieList' 
import './App.css';
import Nav from './components/Nav';
import { MovieProvider } from './components/MovieContext';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <MovieProvider>
      <Nav/>
      <MovieList/>
      <AddMovie/>
     </MovieProvider> 
    </div>
  );
}

export default App;
