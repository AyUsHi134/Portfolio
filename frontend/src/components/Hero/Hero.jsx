import  {motion} from 'framer-motion';
import "./Hero.css";
import heroImg from "../../assets/character.png";


const Hero = () => {
    const container = {
        hidden: {opacity:0, y:14},
        show:{
            opacity: 1,
            y:0,
            transition: {duration: 0.55, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.08}  
        }
    }; 

    const line = {
        hidden : {opacity: 0, y: 10},
        show: {
            opacity:1,
            y:0,
            transition:{duration:0.45, ease:'easeOut'}
        }
    };

    return (
        <section id="home"  className="scroll-mt-24 md:scroll-mt-28 hero-gradient">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center ">
                <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
                    <motion.div className="glass-card p-6 md:p-8 rounded-2xl shadow-xl" variants={line}>
                        <p className="text-sm md:text-base text-gray-500 mb-2">Hello, I am </p>

                        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3'>
                            <motion.span
                            aria-hidden
                            initial={{rotate:0, y:0}}
                            animate={{rotate:[0, 12, -6, 0], y:[0, -2, 0] }}
                            transition={{duration: 1.6, repeat:Infinity, ease:'easeInOut'}}>
                                👋
                            </motion.span>
                            Ayushi
                        </h1>
                    </motion.div>

                    <motion.div variants={line} className='flex flex-wrap gap-4'>
                        <a href='#contact' className='btn-primary' aria-label='Contact Ayushi'>Contact Me</a>
                        <a href='#project' className='btn-secondary' aria-label='View Projects'>View Projects</a>
                    </motion.div>
                </motion.div>
                <motion.div 
                initial={{opacity:0, scale:0.97, y:10}}
                animate={{opacity:1, scale:1, y:0}}
                transition={{duration:0.65, ease:'easeOut', delay: 0.05 }}
                className='flex justify-center md:justify-end'> 
                    <motion.img src={heroImg} alt='Ayushi Character Img' 
                    className='w-[75%] md:w-[88%] max-w-[540px] drop-shadow-xl'
                    whileHover={{ y: -4}}
                    transition={{type:'spring', stiffness:20, damping:18}} /></motion.div></div></section>
    );
};

export default Hero;