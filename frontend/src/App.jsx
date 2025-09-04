import Navbar from "./components/Navbar/Navbar";
import Hero  from './components/Hero/Hero';
import About from './components/About/About'
import Work from './components/Work/Work';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import BlurBlob from './Blurblob';


const App = () => {
 return (
    <>
    <div className="bg-[#050414]">
    <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.18)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>     
    <div className="relative pt-2">
        <Navbar/>
        <Hero/> 
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Services/>
        <Contact />
        <Footer/>
      </div>
    </div>
    </>
  );
  
}
export default App;
