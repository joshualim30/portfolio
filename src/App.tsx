// App.tsx - Main App
// 10/22/2024 - Joshua Lim

import './App.css'
import EasterEgg from './components/EasterEgg';
import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-TitilliumWebSemiBold'>
      <EasterEgg />
      <Welcome />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
