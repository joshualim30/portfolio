// App.tsx - Main App
// 10/22/2024 - Joshua Lim

import './App.css'
import EasterEgg from './components/EasterEgg';
import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className='font-TitilliumWebSemiBold bg-background'>
      <EasterEgg />
      <ProgressBar />
      <Welcome />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
