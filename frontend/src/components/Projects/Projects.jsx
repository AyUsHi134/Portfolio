import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [collapsedCards, setCollapsedCards] = useState(new Set());
  const [filter, setFilter] = useState("All");
  const [categories, setCategories] = useState([]);

  // 🔹 Filtering - connects to backend data
  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  // 🔹 Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjectsData(data);

        // 🔥 Set categories for filtering - 5 buttons with exact labels
        setCategories(["All", "Web Apps", "Frontend", "Backend", "FullStack"]);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // Scroll-based collapse
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newCollapsedCards = new Set();

      projectsData.forEach((project, index) => {
        const cardElement = document.querySelector(
          `[data-card-id="${project._id || index}"]`
        );
        if (cardElement) {
          const cardRect = cardElement.getBoundingClientRect();
          const cardTop = scrollY + cardRect.top;
          if (scrollY > cardTop + 200) {
            newCollapsedCards.add(project._id || index);
          }
        }
      });

      setCollapsedCards(newCollapsedCards);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectsData]);

  // Toggle cards manually
  const toggleCard = (projectId) => {
    setCollapsedCards((prev) => {
      const newCollapsed = new Set(prev);
      if (newCollapsed.has(projectId)) {
        newCollapsed.delete(projectId);
      } else {
        newCollapsed.add(projectId);
      }
      return newCollapsed;
    });
  };

  // Mock framer-motion components with CSS animations
  const Motion = ({ children, className, ...props }) => (
    <div className={`${className} animate-fadeInUp`} {...props}>
      {children}
    </div>
  );

  const AnimatePresence = ({ children }) => <>{children}</>;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
          transition: transform 0.3s ease-in-out;
        }
        
        .hover-scale:hover {
          transform: scale(1.1);
          transition: transform 0.5s ease-in-out;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-enter {
          animation: cardEnter 0.4s ease-in-out;
        }
        
        .card-exit {
          animation: cardExit 0.4s ease-in-out;
        }
        
        @keyframes cardEnter {
          from { height: 0; opacity: 0; }
          to { height: auto; opacity: 1; }
        }
        
        @keyframes cardExit {
          from { height: auto; opacity: 1; }
          to { height: 0; opacity: 0; }
        }

        /* Custom filter button styles matching SS1 */
        .filter-btn {
          background: rgba(55, 65, 81, 0.8) !important;
          backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(75, 85, 99, 0.3) !important;
          color: #9ca3af !important;
          transition: all 0.3s ease !important;
          border-radius: 30px !important;
          padding: 8px 24px !important;
          font-weight: 500 !important;
          font-size: 13px !important;
          min-width: fit-content !important;
          white-space: nowrap !important;
        }
        
        .filter-btn:hover {
          background: rgba(75, 85, 99, 0.9) !important;
          color: #e5e7eb !important;
          transform: translateY(-1px) !important;
          border-color: rgba(107, 114, 128, 0.5) !important;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          color: white !important;
          border: 1px solid rgba(139, 92, 246, 0.4) !important;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3) !important;
        }

        /* Perfect centering for heading */
        .projects-heading {
          font-size: 3rem !important;
          font-weight: 700 !important;
          color: white !important;
          margin-bottom: 1.5rem !important;
          text-align: center !important;
          width: 100% !important;
          display: block !important;
        }

        @media (min-width: 768px) {
          .projects-heading {
            font-size: 3.75rem !important;
          }
        }

        /* Perfect centering for underline */
        .projects-underline {
          height: 4px !important;
          background: linear-gradient(to right, #60a5fa, #a855f7, #ec4899) !important;
          margin: 0 auto !important;
          border-radius: 9999px !important;
          width: 6rem !important;
          margin-bottom: 3rem !important;
          display: block !important;
        }

        /* Perfect centering for button container */
        .button-container {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 12px !important;
          flex-wrap: wrap !important;
          margin-bottom: 3rem !important;
          width: 100% !important;
        }

        .projects-section {
          padding-top: 0 !important;
          padding-bottom: 5rem !important;
        }

        .section-spacing {
          height: 8rem !important;
          background-color: #111827 !important;
        }

        /* Container centering */
        .projects-container {
          max-width: 80rem !important;
          margin: 0 auto !important;
          text-align: center !important;
        }

        /* Spacing between buttons and cards */
        .cards-spacing {
          height: 2rem !important;
        }
      `}</style>
      
      {/* Spacing section between about and projects */}
      <div className="section-spacing"></div>
      
      <section
        id="projects"
        className="projects-section min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="projects-container">
          {/* Section Header - perfectly centered */}
          <Motion className="text-center">
            <h2 className="projects-heading">
              My Works
            </h2>
            <div className="projects-underline"></div>
          </Motion>

          {/* Filter Buttons - perfectly centered */}
          <div className="button-container">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${
                  filter === cat ? 'active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Spacing between buttons and project cards */}
          <div className="cards-spacing"></div>

          {/* Projects Grid */}
          <Motion className="grid grid-cols-1 gap-10 mt-8">
            {filteredProjects.map((project, index) => {
              const id = project._id || index;
              const isCollapsed = collapsedCards.has(id);

              return (
                <div
                  key={id}
                  data-card-id={id}
                  className="project-card group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0f19] shadow-[0_10px_40px_rgba(0,0,0,0.35)]   "
                >
                  {/* Image */}
                  <div className="relative h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden">
                    <img
                      src={
                        new URL(
                          `../../assets/${project.imageUrl}`,
                          import.meta.url
                        ).href
                      }
                      alt={project.title}
                      className="project-img absolute inset-0 w-full h-full object-cover transition-transform duration-[550ms]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.classList.remove("hidden");
                        }
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="absolute inset-0 hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white/90 text-3xl font-extrabold tracking-wide">
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/95 via-[#0b0f19]/80 to-transparent"></div>

                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-center"> 
                    <span className="text-sm font-semibold text-rose-400">
                        {project.category}
                    </span>

                    <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-2xl">
                        {project.title}
                    </h3>
                    
                    <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-2xl">
                        {project.title}
                    </h3>

                    <div className="mt-6 flex gap-3">
                        {project.githubLink && (
                            <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta">
                                GitHub </a>
                        )}
                        
                        {project.liveLink && (
                            <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta btn-outline">
                                Live Demo </a>
                        )}
                    </div>
                    </div>
                  </div>
        
                </div>
              );
            })}
          </Motion>
        </div>
      </section>
    </>
  );
};

export default Projects;