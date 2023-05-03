import './App.css';
import Navbar from './component/navbar/Navbar';
import Intro from './component/intro/Intro';
import Services from './component/services/Service';
import Experience from './component/experience/Experience';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import { ThemeContext } from './Context'
import { useContext } from 'react';

function App() {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode
  return (
    <div className="App" style={{background:dark?  'var(--bg-color)': '' ,
                                color:dark? 'var(--white)' : ''}}>
     <Navbar/>    
     <Intro/>
     <Services/>
     <Experience/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
