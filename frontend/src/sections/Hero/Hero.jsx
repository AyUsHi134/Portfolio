import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Character.png';
import resumePDF from '../../assets/resume.pdf';
import SectionWrapper from '../../components/ui/SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper
      id="home"
      paddingX="hero"
      paddingY="tight"
      className="mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">

        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">

          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight">
            Ayushi Singh
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-brand leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              options={{
                strings: [
                  'Software Engineer',
                  'Full Stack Developer',
                  'Backend Enthusiast',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                cursor: '<span style="color: var(--color-brand);">|</span>',
              }}
            />
          </h3>

          {/*Button */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, var(--color-brand), #a855f7)',
              boxShadow: '0 0 2px var(--color-brand), 0 0 40px var(--color-brand)',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 sm:w-64 md:w-[30rem] aspect-square border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ayushi Singh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;