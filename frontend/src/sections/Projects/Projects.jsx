import React, { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        const data = await getProjects(controller.signal);
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err && err.name === "AbortError") return;
        console.error("[Projects] GET /projects failed:", err);
        setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadProjects();
    return () => controller.abort();
  }, []);

  return (
    <SectionWrapper
      id="projects"
      background="tint"
      className="clip-path-custom-2"
    >
      <SectionHeading title="PROJECTS" subtitle="Some of my recent work" />

      {loading && (
        <p className="text-center text-gray-400">Loading projects...</p>
      )}

      {!loading && error && (
        <p className="text-center text-gray-400">Failed to load projects.</p>
      )}

      {/* Projects Grid */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          !error &&
          projects.map((project) => (
            <Card key={project._id} padding="none" hoverScale>
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean)
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-500 bg-opacity-20 text-purple-300 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-3 py-1 rounded-md"
                  >
                    Live
                  </a>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;