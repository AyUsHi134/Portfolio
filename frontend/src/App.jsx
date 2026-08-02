import Navbar from "./components/Navbar/Navbar";
import Hero  from './sections/Hero/Hero';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import BlurBlob from './components/Blurblob';
import Projects from "./sections/Projects/Projects";


const App = () => {
 return (
    <>
    <div className="bg-page">
    <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.18)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>     
    <div className="relative pt-2">
        <Navbar/>
        <Hero/> 
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact />
        <Footer/>
      </div>
    </div>
    </>
  );
  
}
export default App;
