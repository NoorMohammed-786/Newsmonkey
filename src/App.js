import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar';
import News from '../src/Components/News';

function App() {
  return (
    <div>
      <Navbar/>
   < News pagesize={4}/>
    </div>
   
  );
}

export default App;
