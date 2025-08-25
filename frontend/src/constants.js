import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/html.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postmanLogo from './assets/tech_logo/postman.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import sassLogo from './assets/tech_logo/sass.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';
import cppLogo from './assets/tech_logo/cpp.png';

// experience section 
import lpuLogo from './assets/lpu.png';

//services section 
import frontendIcon from './assets/services_logo/frontend.png';
import backendIcon from './assets/services_logo/backend.png';
import fullstackIcon from './assets/services_logo/fullstack.png';

// projects section 
import blogLogo from './assets/img-blog.png';
import jobportalLogo from './assets/img-job.png';


export const SkillsInfo = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'SASS', logo: sassLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Springboot', logo: springbootLogo },
        { name: 'Node JS', logo: nodejsLogo },
        { name: 'Express JS', logo: expressjsLogo },
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'PostgreSQL', logo: postgreLogo },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'C++', logo: cppLogo },
        { name: 'Java', logo: javaLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'JavaScript', logo: javascriptLogo },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', logo: gitLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'VS Code', logo: vscodeLogo },
        { name: 'Postman', logo: postmanLogo },
        { name: 'Compass', logo: mcLogo },
        { name: 'Vercel', logo: vercelLogo },
        { name: 'Netlify', logo: netlifyLogo },
      ],
    },
  ];

  export const services = [
    {
      id: 0,
      img: frontendIcon,
      title: "Frontend Development",
      desc: "Building responsive and interactive user interfaces using modern technologies like React, JavaScript, and Tailwind CSS.",
    },
    {
      id: 1,
      img: backendIcon,
      title: "Backend Development",
      desc: "Developing secure, scalable server-side applications with REST APIs and database integrations.",
    },
    {
      id: 2,
      img: fullstackIcon, 
      title: "Full-Stack Development",
      desc: "Delivering end-to-end web solutions by combining both frontend and backend expertise into functional applications.",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: lpuLogo, 
      school: "Lovely Professional University, Punjab",
      date: "Aug 2020 - Present",
      grade: "5.41 CGPA",
      desc: "Currently pursuing my Bachelor's degree (B.Tech) in Computer Science and Engineering at Lovely Professional University. My journey at LPU has exposed me to diverse subjects including Operating Systems, Database Management Systems, Computer Networks, Web Development, and Data Structures. I have engaged in hands-on projects and technical events, gaining practical knowledge alongside theoretical learning.",
      degree: "Bachelor of Technology - B.Tech (CSE)",
    }
  ];

  export const projects = [
    {
      id: 0,
      title: "Job Portal",
      description:
        "A MERN stack-based Job Portal that allows users to search, apply, and post jobs. It includes role-based authentication (admin, recruiter, job seeker), profile management, and application tracking features. Styled with SCSS for a clean and responsive design.",
      image: jobportalLogo, 
      tags: ["React JS", "Node.js", "Express", "MongoDB", "SCSS"],
      github: "https://github.com/yourusername/job-portal",
      webapp: "https://jobportal-live-demo.netlify.app/", 
    },
    {
      id: 1,
      title: "Blog Website",
      description:
        "A full-stack Blog Website built with the MERN stack where users can create, edit, and manage blog posts. It features authentication, comments, and a responsive UI styled with Tailwind CSS for a modern look and feel.",
      image: blogLogo,
      tags: ["React JS", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/blog-website",
      webapp: "https://blogwebsite-live-demo.netlify.app/", 
    },
  ];
  


