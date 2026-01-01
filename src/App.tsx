import Header from './components/Header';
import Hero from './components/Hero';
import Hospitality from './components/Hospitality';
import Properties from './components/Properties';
import Weddings from './components/Weddings';
import Corporate from './components/Corporate';
import Offers from './components/Offers';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import Social from './components/Social';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Activities from './components/Activities';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Hospitality />
      <Properties />
      <Weddings />
      <Corporate />
      <Dining />
      <Activities />
      <Offers />
      <Gallery />
      <Social />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
