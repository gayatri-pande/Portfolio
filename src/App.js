import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';

import Blog from './components/Blog';
import About from './components/About';

function App() {
  return (
    <>
    <div className='page'>
    <Home/>
    <About/>
    <Project/>
    <Blog/>
    <Contact/>
    </div>
    </>
  );
}

export default App;
