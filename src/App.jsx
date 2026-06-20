import './App.css'
import ColorSchemesExample from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';

function App() {

  return (
    <>
      <ColorSchemesExample/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
