
import './App.css';
import {NavLink, Route,Routes} from 'react-router-dom';
import Support from './components/Support';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';


function App() {
  return (
 
    <div className="App">
 <nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
     <li>
      <NavLink to="/about">Abour</NavLink>
    </li>
<li>
      <NavLink to="/support">Support</NavLink>
    </li>
    <li>
      <NavLink to="/labs">Labs</NavLink>
    </li>
    



    
  </ul>
 </nav>



      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/support" element={<Support/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
    
      </Routes>
    </div>
  );
}

export default App;
