import React, {useState,useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect( () => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        
        {
            rootMargin:'-50% 0px -50% 0px',
            threshold:0.1,
        }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
        sections.forEach((section) => observer.unobserve(section));
    };
    }, []);

    return (
        <>
    < motion.nav
            className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/80 shadow-md backdrop-blur-md'
                    : 'bg-transparent'
            }`} >
            <div className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
                <div className='text-xl font-bold text-primary'>Ayushi</div>

                <div className='hidden md:flex space-x-8 text-sm font-medium'>
                    <a href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-primary font-semibold underline': 'hover:text-primary'}`}>Home</a>
                    <a href="#About" className={`transition-colors ${activeSection === 'about' ? 'text-primary font-semibold underline': 'hover:text-primary'}`}>About</a>
                    <a href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-primary font-semibold underline': 'hover:text-primary'}`}>Projects</a>
                    <a href="#skills" className={`transition-colors ${activeSection === 'skills' ? 'text-primary font-semibold underline': 'hover:text-primary'}`}>Skills</a>
                    <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-primary font-semibold underline': 'hover:text-primary'}`}>Contact</a>
                </div>
                
                <div className='md:hidden'>
                    <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className = "text-primary text-2xl focus:outline-none">
                    {isMenuOpen ? <X size={28} /> :<Menu size={28} />}
                    </button>
                </div>
            </div>
                
    </motion.nav>

    <AnimatePresence>
            { isMenuOpen && (
                <motion.div
                initial={{opacity:0 , x: 100}}
                animate={{opactiy:1,x:0}}
                exit ={{opacity:0,x: 100}}
                transition={{duration:0.3}}
                className='md:hidden bg-white shadow-md px-6 py-4 space-y-4'>
                
                <a href="#home" className = "block hover:text-primary">Home</a>
                <a href="#about" className = "block hover:text-primary">About</a>
                <a href="#projects" className = "block hover:text-primary">Projects</a>
                <a href="#skills" className = "block hover:text-primary">Skills</a>
                <a href="#contact" className = "block hover:text-primary">Contact</a>
                </motion.div>
            )} </AnimatePresence>
            </>
    );
};
    export default Navbar;
