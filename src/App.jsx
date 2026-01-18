import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Background Gradient Blurs */}
      <div className="bg-gradient-blur bg-gradient-1"></div>
      <div className="bg-gradient-blur bg-gradient-2"></div>
      <div className="bg-gradient-blur bg-gradient-3"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
