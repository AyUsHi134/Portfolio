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
          <Motion className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.map((project, index) => {
              const id = project._id || index;
              const isCollapsed = collapsedCards.has(id);

              return (
                <div
                  key={id}
                  data-card-id={id}
                  onClick={() => toggleCard(id)}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover-lift relative"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-gray-700">
                    <img
                      src={
                        new URL(
                          `../../assets/projects/${project.imageUrl}`,
                          import.meta.url
                        ).href
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = "flex";
                        }
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg"
                      style={{ display: "none" }}
                    >
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <AnimatePresence>
                    {!isCollapsed && (
                      <div className="card-enter overflow-hidden">
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                              {project.tech}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Collapsed */}
                  {isCollapsed && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-4">
                      <h3 className="text-lg font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2">
                        {project.tech}
                      </span>
                    </div>
                  )}
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