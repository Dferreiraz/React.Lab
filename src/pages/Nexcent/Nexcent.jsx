import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Clients } from './components/Clients/Clients.jsx';
import { Community } from './components/Community/Community.jsx';
import { SplitSection } from './components/SplitSection/SplitSection.jsx';
import { Stats } from './components/Stats/Stats.jsx';
import { Testimonial } from './components/Testimonial/Testimonial.jsx';
import { Blog } from './components/Blog/Blog.jsx';
import { CTA } from './components/CTA/CTA.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import rafiki from './assets/images/rafiki.svg';
import pana from './assets/images/pana.svg';
import './nexcent-global.css';

function Nexcent() {
  return (
    <div className="nexcent-app">
      <Header />
      <Hero />
      <Clients />
      <Community />
      <SplitSection 
        imageSrc={rafiki} 
        imageAlt="Illustration" 
        title="The unseen of spending three years at Pixelgrade" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta." 
      />
      <Stats />
      <SplitSection 
        imageSrc={pana} 
        imageAlt="Mobile Illustration" 
        title="How to design your site footer like we did" 
        text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt aliquam, lectus lacus consequat erat, nec elementum libero ex at ex. Donec vestibulum pulvinar ex ac cursus." 
        reversed={true}
      />
      <Testimonial />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default Nexcent;