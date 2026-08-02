import React from "react";
import { SkillsInfo } from "../../data/skills";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";

const Skills = () => (
  <SectionWrapper
    id="skills"
    paddingX="skills"
    paddingY="loose"
    background="tint"
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 85% 100%, 0 100%)' }}
  >
    <SectionHeading
      size="lg"
      accent="brand"
      title="SKILLS"
      subtitle="A collection of my technical skills and expertise honed through various projects and experiences"
    />

    {/* Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
          shadow-glow-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;