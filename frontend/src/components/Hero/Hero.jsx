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
        <section id="home"  className="scroll-mt-24 md:scroll-mt-28 hero-gradient min-h-[100vh]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center justify-items-center ">
                <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
                    <motion.div className="glass-card p-7 md:p-10 rounded-2xl shadow-xl" variants={line}>
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
                        <a href='#projects' className='btn-secondary' aria-label='View Projects'>View Projects</a>
                    </motion.div>
                </motion.div>
                <div className='relative h-[min(80vh,800px)] w-full max-w-[800px] flex justify-center items-end'> {/*container with circle and character*/}
                <motion.div 
                initial={{opacity:0, scale:0.97, y:10}}
                animate={{opacity:1, scale:1, y:0}}
                transition={{duration:0.65, ease:'easeOut', delay: 0.05 }}
                className='relative overflow-visible flex justify-center items-center'>
                    <motion.div 
                    className='absolute z-0 bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none' //circle
                    animate={{scale:[1, 1.02, 1], y:[0, -4, 0]}}
                    transition={{duration: 10, ease:'easeInOut', repeat:Infinity}}
                    style={{willChange:'transform '}}>
                        <div 
                        className='w-[60vw] md:w-[45vw] lg:w-[38vw] aspect-square rounded-full 
                        bg-white/25 border border-white/30
                        blur-[1px]'/> {/*circle size */}
                    </motion.div> 
                    <motion.img src={heroImg} alt='Ayushi Character Img' 
                    className='relative z-10 w-[95%] md:w-[105%] lg:w-[115%] max-w-[720px] drop-shadow-xl' // character size 
                    whileHover={{ y: -4}}
                    transition={{type:'spring', stiffness:20, damping:18}} /></motion.div></div></div></section>
    );
};

export default Hero;
