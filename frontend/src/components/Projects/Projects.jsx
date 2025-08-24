import React, { useState, useEffect } from "react";
import "./Projects.css";

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
          <Motion className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-[1200px] mx-auto px-4">
            {filteredProjects.map((project, index) => {
              const id = project._id || index;
              const isCollapsed = collapsedCards.has(id);

              return (
                <div
                  key={id}
                  data-card-id={id}
                  className="project-card group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0f19] shadow-none mx-auto"
                >
                  {/* Image */}
                  <div className="relative h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden">
                    <img
                      src={
                        new URL(
                          `../../assets/${project.imageUrl}`,
                          import.meta.url
                        ).href
                      }
                      alt={project.title}
                      className="project-img absolute inset-0 w-full h-full object-cover transition-transform duration-[550ms] group-hover:scale-110"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/35 via-[#0b0f19]/30 to-transparent"></div>

                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-center"> 
                    <span className="text-sm font-semibold text-rose-400">
                        {project.category}
                    </span>

                    <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-2xl">
                        {project.title}
                    </h3>
                    
                    <p className="mt-2 text-base md:text-lg text-white/85 max-w-xl">
                    {(project.shortDescription || project.description || "")
                    .split(" ")
                    .slice(0, 3)
                        .join(" ")}
                    </p>

                    <div className="mt-6 flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {project.githubLink && (
                            <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="icon-btn"
                            title="GitHub"> </a>
                        )}
                        
                        {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Live demo"
      className="icon-btn"
      title="Live demo"
    >
      {/* External link icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/><path d="M5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z"/>
      </svg>
    </a>
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