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
import lpsLogo from './assets/lps.png';
import carmelLogo from './assets/carmel.png';

//services section 
import frontendIcon from './assets/services_logo/frontend.png';
import backendIcon from './assets/services_logo/backend.png';
import fullstackIcon from './assets/services_logo/fullstack.png';

// projects section 
import blogLogo from './assets/img-blog.jpg';
import jobportalLogo from './assets/img-job.jpg';


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
  
  export const experience  = [
    {
      id: 0,
      img: lpuLogo, 
      school: "Lovely Professional University, Punjab",
      date: "Aug 2020 - Present",
      grade: "5.41 CGPA",
      desc: "Currently pursuing my Bachelor's degree (B.Tech) in Computer Science and Engineering at Lovely Professional University. My journey at LPU has exposed me to diverse subjects including Operating Systems, Database Management Systems, Computer Networks, Web Development, and Data Structures. I have engaged in hands-on projects and technical events, gaining practical knowledge alongside theoretical learning.",
      degree: "Bachelor of Technology - B.Tech (CSE)",
    },
    {
      id: 1,
      img: lpsLogo, 
      school: "Lucknow Public School",
      date: "Apr 2018 - Mar 2020",
      grade: "", 
      desc: "Completed my Intermediate education with focus on Science stream including Physics, Chemistry, Mathematics, and Computer Science. This foundation prepared me well for pursuing engineering and helped develop my analytical and problem-solving skills.",
      degree: "Intermediate (12th Grade) - Science Stream",
    },
    {
      id: 2,
      img: carmelLogo, 
      school: "Mount Carmel College",
      date: "Apr 2017 - Mar 2018",
      grade: "", 
      desc: "Completed my High School education with excellent performance across all subjects. Developed strong foundation in core subjects including Mathematics, Science, English, and Social Studies. Participated in various academic and extracurricular activities.",
      degree: "High School (10th Grade)",
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
      title: "Real-Time Dashboard",
      description:
        "A Next.js + NestJS powered real-time analytics dashboard for visualizing live data (stock prices, IoT sensors, or user activity). Uses WebSockets for instant updates, PostgreSQL for storage, and Redis for caching. Charts and graphs built with Recharts and Tailwind CSS.",
      image: dashboardLogo,
      tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Tailwind CSS"],
      github: "https://github.com/yourusername/realtime-dashboard",
      webapp: "https://realtime-dashboard-demo.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description:
        "A modern full-stack e-commerce platform where users can browse products, add to cart, and checkout securely. Includes Stripe payment integration, product search with filters, and an admin panel for product management. Backend built with Django + DRF, frontend with React.",
      image: ecommerceLogo,
      tags: ["React JS", "Django", "Django REST Framework", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-store",
      webapp: "https://ecommerce-store-demo.netlify.app/",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "An AI-powered web app that generates blog posts, social media captions, or product descriptions. Built with React on the frontend, FastAPI on the backend, and integrates with OpenAI API. Includes user authentication and history tracking of generated content.",
      image: aiLogo,
      tags: ["React JS", "FastAPI", "OpenAI API", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/ai-content-generator",
      webapp: "https://ai-generator-demo.vercel.app/",
    },
    {
      id: 4,
      title: "DevOps CI/CD Pipeline",
      description:
        "A project demonstrating DevOps skills by containerizing a Node.js app with Docker, deploying it on Kubernetes, and setting up CI/CD pipelines using GitHub Actions. Includes monitoring with Prometheus + Grafana and logs management with ELK stack.",
      image: devopsLogo,
      tags: ["Node.js", "Docker", "Kubernetes", "GitHub Actions", "Prometheus"],
      github: "https://github.com/yourusername/devops-cicd",
      webapp: "https://devops-cicd-demo.netlify.app/",
    },
    {
      id: 5,
      title: "Event Management System",
      description:
        "A full-stack web app for creating, managing, and registering for events. Includes role-based dashboards for organizers and attendees, real-time notifications, and ticket booking. Built with Vue.js frontend and Laravel backend for a different stack experience.",
      image: eventLogo,
      tags: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/yourusername/event-management",
      webapp: "https://event-management-demo.netlify.app/",
    },
  ];
  
  


