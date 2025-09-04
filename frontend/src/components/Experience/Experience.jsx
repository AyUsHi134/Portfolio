import React from "react";
import { experience } from "../../constants";
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 md:py-24 pb-12 md:pb-24 px-4 sm:px-8 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-20 md:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base md:text-lg font-semibold px-4">
          My academic journey
        </p>
      </div>
      {/* Timeline List */}
      <div className="relative max-w-4xl mx-auto pl-4 md:pl-8">
        {experience.map((exp, index) => (
          <div key={exp.id} className="flex mb-8 md:mb-10 last:mb-0">
            {/* Timeline Marker */}
            <div className="relative flex flex-col items-center mr-4 md:mr-8">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full relative z-10 flex-shrink-0"></div>
              <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-purple-500 to-purple-300 mt-2"></div>
            </div>
            {/* Timeline Content */}
            <div className="flex-1 bg-gray-800 bg-opacity-80 rounded-xl p-4 md:p-6 border border-gray-700 transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(130,69,236,0.2)]">
              {/* Content Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  {/* School Logo */}
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                      {exp.degree}
                    </h3>
                  </div>
                </div>
                <span className="text-white text-xs sm:text-sm bg-purple-500 bg-opacity-20 px-2 sm:px-3 py-1 rounded-lg border border-purple-500 border-opacity-30 self-start">
                  {exp.date}
                </span>
              </div>
              {/* Institution Name */}
              <p className="text-purple-400 text-sm sm:text-base mb-3 font-medium ml-0 sm:ml-16">
                {exp.school}
              </p>
              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 ml-0 sm:ml-16">
                {exp.desc}
              </p>
              {/* Grade Section */}
              <div className="ml-0 sm:ml-16">
                <h5 className="font-medium text-white text-xs sm:text-sm mb-2">Grade:</h5>
                <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-3 sm:px-4 py-1 text-xs rounded-lg inline-block">
                  {exp.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;