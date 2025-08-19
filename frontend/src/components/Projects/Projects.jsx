import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence, hover} from 'framer-motion';

const Projects = () => {
    const [collapseCards, setCollapsedCards] = useState(new Set());
    const [stickyCards, setStickyCards] = useState(new Set());
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const res = await fetch("http://localhost:5000/api/projects");
                const data = await res.json();
                setProjectsData(data);
            } catch(error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects(); 
}, []);

useEffect(() => {
    const observerOptions = {
        root:null,
        rootMargin: '-10% 0px -80% 0px',
        threshold: [0.1, 0.9]
    };

    const observer = new IntersectionObserver((enteries) => {
        setCollapsedCards(prevCollapsed => {
            const newCollapsed = new Set(prevCollapsed);

            enteries.forEach(entry => {
                const cardId = parseInt(entry.target.getAttribute('data-card-id'));

                if(entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    newCollapsed.delete(cardId);
                } else if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
                    newCollapsed.add(cardId);
                }
            });

            return newCollapsed;
        });

        setStickyCards(() => {
            const newSticky = new Set();
            enteries.forEach(entry => {
                const cardId = parseInt(entry.target.getAttribute('data-card-id'));
                if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
                    newSticky.add(cardId);
                }
            });

            return newSticky;
        });
    }, observerOptions);

    return () => {
        document.querySelectorAll('[data-card-id]').forEach(card => observer.unobserve(card));
      };
}, [projectsData]);

const toggleCard = (projectId) => {
    setCollapsedCards(prevCollpased => {
        const newCollapsed =  new Set(prevCollpased);
        if(newCollapsed.has(projectId)) {
            newCollapsed.delete(projectId);
        } else {
            newCollapsed.add(projectId);
        }

        return newCollapsed;
    });
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {staggerChildren: 0.2, delayChildren: 0.1}
        }
    };

    const cardVariants = {
        hidden: {opacity:0, y:50, scale:0.95},
        visible: {opacity: 1, y:0, scale:1, transition: {duration:0.6, ease: "easeOut"}},
        hover: {y: -10, scale:1.02, transition: {duration:0.3, ease:"easeOut"}},
    };

    return (
        <section id="Projects" className="min-h-screen bg-gray-900 pt-28 pb-28 px-4 sm:px-6 lg:px-8">
            <div className='max-w-7xl mx-auto'>
                <motion.div 
                initial= {{opacity: 0, y: -30}}
                whileInview= {{opacity: 1, y:0}}
                viewport= {{once: true}}
                transition= {{duration: 0.8}}
                className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                        <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            My Works 
                        </span>
                    </h2>

                    <motion.div 
                    initial= {{width: 0}}
                    whileInView= {{width: "100px"}}
                    viewport= {{once: true}}
                    transition= {{duration: 0.8, delay: 0.3}}
                    className='h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full'
                    ></motion.div>
                </motion.div>
                
                <div className='fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50'>
                { Array.from(stickyCards)
                .sort((a,b) => a-b)
                .map(cardId => {
                    const project = projectsData.find(p => p.id === cardId || p.id === cardId);
                    if(!project) return null ;
                    
                    return (
                        <motion.div 
                        key={'sticky ${cardId}'}
                        initial= {{opacity: 0, y: -20}}
                        animate= {{opacity: 1, y: 0}}
                        exit= {{opacity: 0, y: -20}}
                        className='flex items-center px-6 py-3 border-b border-gray-700/30 hover:bg-gray-800/50 cursor-pointer'
                        onClick={() => {
                            const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
                            if (cardElement) {
                                cardElement.scrollIntoView({ behaviout: 'smooth', block: 'center'});
                            }
                        }}>
                            <div className='flex space-x-2 mr-4'>
                                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            </div>
                            <h4 className='text-green-400 font-semibold text-sm'>{project.title}</h4>
                            <span className='ml-auto px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded'>
                            {project.tech} </span>
                        </motion.div>
                        );
                })} 
            </div>

            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                
                {projectsData.map((project, index) => {
                    const isCollapsed = collapseCards.has(project.id || project.id);

                    return(
                        <motion.div 
                        key={project._id || project.id || index}
                        data-card-id={project._id || project.id || index}
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => toggleCard(project._id || project.id || index)}
                        className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50
                        hover:border-purple-500/50 transition-all duration-300 cursor-pointer relative'>
                            <div className='relative overflow-hidden h-48 bg-gray-700'>
                                <img
                                src={new URL(`../../assets/${project.imageUrl}`, import.meta.url).href}
                                alt={project.title}
                                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                                loading="lazy" />
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent'></div>
                            </div>

                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.div
                                    initial={{ height: 0, opacity: 0}}
                                    animate={{ height: "auto", opacity: 1}}
                                    exit={{ height:0, opacity:0}}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className='overflow-hidden'>
                                        <div className='p-6'>
                                            <div className='mb-3'>
                                                <span className='inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'>
                                                    {project.tech}
                                                </span>
                                            </div>
                                            <h3 className='text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors duration-300'>
                                                {project.title} 
                                            </h3>
                                            <p className='text-gray-300 text-sm leading-relaxed'>{project.description}</p>

                                            <div className='flex space-x-3 mt-4'>
                                                {project.githubLink && ( 
                                                    <a href={project.githubLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition'
                                                    > GitHub</a> 
                                                )}
                                                {project.liveLink && (
                                                    <a href={project.liveLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded hover:opacity-90 transition'>
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {isCollapsed && (
                                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-4'>
                                    <h3 className='text-lg font-bold text-white'>{project.title}</h3>
                                    <span className='inline-block px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2'>
                                        {project.tech}</span>  
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>

                </div>  
        </section>
    );
};

export default Projects;