import "./App.css";
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import {Route,Routes} from "react-router-dom";
// import {Bootstrap} from 'bootstrap'
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Header/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    {/* <Home/>
    <About/>
    <Resume/>
    <Projects/>
    <Contact/>
    <Skills/> */}
    </>
  );
};

export default App;
