import Navbar from "./components/Navbar";
import './App.css'
import Intro from "./components/Intro";
import Experience from "./components/experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {themeContext} from './Context';
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="all-scren"
        style={{
          background: darkMode? 'black' : '',
          color: darkMode? 'white' : ''
        }}>
      <div className="App">
        <Navbar />
        <Intro />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;

