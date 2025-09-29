// import logo from './logo.svg';
// import './App.css';
// import Navbar from '../src/Components/Navbar';
// import News from '../src/Components/News';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// function App() {
//   this.state={
//     progress:0
//   }
//   setProgress=(_Progress)=>{
//     this.setState({progress:_Progress})
//   }
//   return (
//     <div>
      
//       <Router>
//       <Navbar/>
//        <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         height={3}
       
//       />
//       <Routes>
//          <Route exact path="/"  element={<News setProgress={setProgress}  pagesize={15} key="general" category="general" />}></Route>
//          <Route exact path="/business"  element={<News setProgress={setProgress}  pagesize={4} key="business" category="business" />}></Route>
//          <Route exact path="/sport"  element={<News setProgress={setProgress}  pagesize={4} key="sports" category="sports" />}></Route>
//          <Route exact path="/entertainment"  element={<News setProgress={setProgress}  pagesize={4} key="entertainment" category="entertainment" />}></Route>
//          <Route exact path="/health"  element={<News setProgress={setProgress}  pagesize={4} key="health" category="health" />}></Route>
//          <Route exact path="/science"  element={<News setProgress={setProgress}  pagesize={4} key="science" category="science" />}></Route>
//          <Route exact path="/technology"  element={<News setProgress={setProgress}  pagesize={4} key="technology" category="technology" />}></Route>
//          <Route exact path="/politics"  element={<News setProgress={setProgress}  pagesize={4} key="politics" category="politics" />}></Route>
//          <Route exact path="/weather"  element={<News setProgress={setProgress}  pagesize={4} key="weather" category="weather" />}></Route>
//    </Routes>
//    </Router>
//     </div>
   
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar';
import News from '../src/Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App () {
  
  const[progress, setProgress] = useState(0);

  

  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={4}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} pagesize={15} key="general" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} pagesize={4} key="business" category="business" />} />
            <Route exact path="/sport" element={<News setProgress={setProgress} pagesize={4} key="sports" category="sports" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} pagesize={4} key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} pagesize={4} key="health" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} pagesize={4} key="science" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} pagesize={4} key="technology" category="technology" />} />
            <Route exact path="/politics" element={<News setProgress={setProgress} pagesize={4} key="politics" category="politics" />} />
            <Route exact path="/weather" element={<News setProgress={setProgress} pagesize={4} key="weather" category="weather" />} />
          </Routes>
        </Router>
      </div>
    );
  }


