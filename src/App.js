import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar';
import News from '../src/Components/News';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
         <Route exact path="/"  element={<News pagesize={15} key="general" category="general" />}></Route>
        <Route exact path="/business"  element={<News pagesize={4} key="business" category="business" />}></Route>
        <Route exact path="/sport"  element={<News pagesize={4} key="sports" category="sports" />}></Route>
        <Route exact path="/entertainment"  element={<News pagesize={4} key="entertainment" category="entertainment" />}></Route>
        <Route exact path="/health"  element={<News pagesize={4} key="health" category="health" />}></Route>
        <Route exact path="/science"  element={<News pagesize={4} key="science" category="science" />}></Route>
        <Route exact path="/technology"  element={<News pagesize={4} key="technology" category="technology" />}></Route>
        <Route exact path="/politics"  element={<News pagesize={4} key="politics" category="politics" />}></Route>
        <Route exact path="/weather"  element={<News pagesize={4} key="weather" category="weather" />}></Route>
    
       

   </Routes>
   </Router>
    </div>
   
  );
}

export default App;
