import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import CustomerStories from './components/CustomerStories';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = ['home', 'about', 'metrics', 'stories', 'projects', 'tech', 'timeline', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Metrics />
        <CustomerStories />
        <Projects />
        <TechStack />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
