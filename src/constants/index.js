import * as assets from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: assets.web,
  },
  {
    title: "React Native Developer",
    icon: assets.mobile,
  },
  {
    title: "Backend Developer",
    icon: assets.backend,
  },
  {
    title: "Application Developer",
    icon: assets.creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: assets.reactjs,
  },
  {
    name: "Node JS",
    icon: assets.nodejs,
  },
  {
    name: "MongoDB",
    icon: assets.mongodb,
  },
  {
    name: "Three JS",
    icon: assets.threejs,
  },
  {
    name: "Java",
    icon: assets.java,
  },
  {
    name: "Kubernetes",
    icon: assets.kubernetes,
  },
  {
    name: "docker",
    icon: assets.docker,
  },
  {
    name: "HTML 5",
    icon: assets.html,
  },
  {
    name: "CSS 3",
    icon: assets.css,
  },
  {
    name: "Javascript",
    icon: assets.javascript,
  },
  {
    name: "C",
    icon: assets.c,
  },
  {
    name: "CPP",
    icon: assets.cpp,
  },
  {
    name: "Tailwind",
    icon: assets.tailwind
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Cognifyze Technologies",
    icon: assets.shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - March 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "AICTE virtual internship",
    icon: assets.tesla,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Hands-on development using Kotlin and Jetpack Compose, enabling the creation of modern, responsive Android applications.",
      "Practical exposure to immersive technologies, enhancing your understanding of interactive and user-centered mobile experiences.",
      "Collaboration with peers and industry experts, fostering teamwork and real-world problem-solving skills.",
      "Application of theoretical concepts to build real-world Android projects, strengthening your portfolio and technical confidence.",
    ],
  },
   {
    title: "Web Developer",
    company_name: "Happy Visitors Dot Com",
    icon: assets.starbucks,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug 2023",
    points: [
      " Gained hands-on experience in full-stack web development, working with HTML, CSS, JavaScript, React for frontend and Node.js for backend integration",
      "Successfully built and deployed websites, learning the complete process from development to domain purchase, hosting, and online deployment.",
      "Integrated map-based APIs to dynamically showcase business locations, enhancing user interactivity and real-world application of APIs.",
      "Understood real-world project workflows, including version control, client requirements, and adding custom features to make websites more functional and user-friendly.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Animodiso",
    description:
      "Web-based platform that allows users to Identify Animal disease based on there symptoms, book Dr appointments, and shop pet food from various providers, providing a convenient and efficient solution for pet owners.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: assets.carrent,
    source_code_link: "https://github.com/omkargaikwaddev/Animodiso.git",
  },
  {
    name: "Arogya+",
    description:
      "An Android application that simplifies A user-friendly app that sends medicine reminders and offers personalized diet plans, helping users stay healthy and reduce long-term medication dependency.Useful for people with chronic diseases.",
    tags: [
      {
        name: "XML",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase & SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: assets.jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Airbnb",
    description:
      "A comprehensive user-friendly platform for booking and hosting stays, connecting travelers with unique accommodations while ensuring a seamless and secure experience.Built with a focus on responsive design, real-time booking.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: assets.tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };