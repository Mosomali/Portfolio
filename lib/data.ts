import { Project, Skill, SocialLink, NavItem, Experience, Education, Certification, LanguageSkill, NewsEvent } from "./types";

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Mohamed M.Ahmed",
  title: "network specialist & senior appl dev",
  id: "73987252494",
  nationality: "Somali",
  dateOfBirth: "15/06/2001",
  placeOfBirth: "Mogadishu, Somalia",
  bio: "is an IT enthusiast with experience in computer repair, networking, and software development. He has worked as a technician at Jamhuriya University and has built projects using MERN, Flutter, and MySQL. He loves learning new technologies and aims to become a strong network and software engineer.",
  aboutMe: "Mohamed M. Ahmed, known as MoSomali, is a young IT professional with experience in computer repair, networking, and full-stack development. He has worked as a technician at Jamhuriya University, where he strengthened his practical skills in troubleshooting and system maintenance. Mohamed enjoys building real-world projects, including web and mobile applications using MERN, Flutter, and MySQL. He is passionate about learning, technology, and creating solutions that make life easier. His goal is to grow into a skilled network and software engineer who contributes to Somalia's digital future.",
  email: "mohamedmohammudahmed@gmail.com",
  phone: "(+252) 615861320",
  location: "Hodan Sona-key, Mogadishu, Somalia",
  avatar: "/profile.jpg",
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Certifications", value: "3" },
  { label: "Languages", value: "2" },
];

export const skills: Skill[] = [
  // Networking Skills
  { name: "DHCP, NAT / PAT", level: 85, icon: "🌐", category: "Networking Skills" },
  { name: "Routing (Static, OSPF, RIP)", level: 85, icon: "⭕", category: "Networking Skills" },
  { name: "Subnetting (VLSM)", level: 90, icon: "🔢", category: "Networking Skills" },

  // Security & Tools
  { name: "Firewalls (Basic)", level: 50, icon: "👨‍💻", category: "Security & Tools" },
  { name: "Wireshark", level: 80, icon: "🦈", category: "Security & Tools" },

  // Operating Systems
  { name: "Ubuntu/Linux (Basics)", level: 70, icon: "🏅", category: "Operating Systems" },
  { name: "Windows Server (Basics)", level: 80, icon: "🪟", category: "Operating Systems" },

  // Programming & Design
  { name: "UI/UX Design", level: 100, icon: "✨", category: "Design" },
  { name: "Flutter Developer", level: 90, icon: "📱", category: "Programming" },
  { name: "Computer Technician", level: 99, icon: "🔧", category: "Programming" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "Full-featured e-commerce app using MERN stack",
    longDescription: "Developed a full-featured e-commerce web application using the MERN stack (MongoDB, Express.js, React, Node.js). The application includes user authentication, product catalog, shopping cart, order management, and secure checkout. Implemented a responsive design to ensure smooth performance on both desktop and mobile devices. The backend interacts with MongoDB, while the React frontend provides a fast and intuitive user experience.",
    image: "/projects/ecommerce.jpg",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "MERN"],
    liveUrl: "https://e-commerce-client-ss2h.onrender.com/",
    githubUrl: "https://github.com/Mosomali",
    category: "Web App",
  },
  {
    id: 2,
    title: "Car Rental System",
    description: "Web-based platform for booking and renting cars",
    longDescription: "Developed a Car Rental System that allows customers to book, rent, and return cars through a web-based platform. The project included: Frontend: Designed using PHP (later explored React Native for mobile). Backend: MySQL database for managing users, cars, bookings, and payments. Features: User registration/login, car availability management, booking process, and payment integration (Hormuud EVC Plus). Skills applied: Web development, database design, API integration, and problem-solving.",
    image: "/projects/carrental.jpg",
    tags: ["PHP", "MySQL", "Web Development", "Payment Integration"],
    liveUrl: "",
    githubUrl: "https://github.com/Mosomali/project",
    category: "Web App",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Jamhuriya University Of Science and Technology",
    role: "Technician",
    period: "14/04/2023 – 14/04/2024",
    location: "Mogadishu, Somalia",
    description: "I worked for one year at Jamhuriya University's computer repair center. I gained hands-on experience fixing and maintaining computers. This job enhanced my technical skills and provides official proof of my abilities in computer repair.",
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Jamhuriya University Of Science and Technology",
    degree: "Computer Science Technology",
    period: "18/09/2021 – 31/08/2025",
    location: "Mogadishu, Somalia",
    website: "https://www.just.edu.so/",
  },
  {
    id: 2,
    institution: "SYL Primary and Secondary School",
    degree: "High School",
    period: "13/04/2013 – 13/04/2021",
    location: "Mogadishu, Somalia",
    website: "sylschools.so",
  },
  {
    id: 3,
    institution: "Jamhuriya University Of Science and Technology",
    degree: "MERN Stack Training",
    period: "09/03/2025 – 09/06/2025",
    location: "Mogadishu, Somalia",
    field: "Generic programmes and qualifications",
  },
  {
    id: 4,
    institution: "Jamhuriya University Of Science and Technology",
    degree: "Flutter Training",
    period: "09/03/2025 – 09/06/2025",
    location: "Mogadishu, Somalia",
  },
  {
    id: 5,
    institution: "Jamhuriya University Of Science and Technology",
    degree: "CCNA Training",
    period: "04/03/2025 – 05/07/2025",
    location: "Mogadishu, Somalia",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Introduction to Cybersecurity",
    issuer: "netacad.com",
    date: "23/05/2025",
    mode: "Online",
    description: "Explore the exciting field of cybersecurity and why cybersecurity is a future-proof career",
  },
  {
    id: 2,
    name: "Computer Repairing and Troubleshooting",
    issuer: "just.edu.so",
    date: "24/07/2024",
    mode: "Work based",
    description: "In recognition of invaluable support and commitment to assisting students by repairing and troubleshooting their computers",
  },
  {
    id: 3,
    name: "Networking Essentials: From Basics to Mastery",
    issuer: "sonak.so",
    date: "31/08/2024",
    mode: "Online",
    description: "Introduction to computer networking, covering fundamental concepts and practical skills",
  },
];

export const languageSkills: LanguageSkill[] = [
  {
    language: "Somali",
    level: "Mother tongue",
  },
  {
    language: "English",
    level: "Intermediate",
    listening: "A2",
    reading: "A2",
    writing: "B1",
    spokenProduction: "A1",
    spokenInteraction: "A1",
  },
];

export const newsEvents: NewsEvent[] = [
  {
    id: 1,
    title: "Completed CCNA Training",
    description: "Successfully completed Cisco CCNA training program",
    date: "2025-07-05",
    link: "https://www.just.edu.so/",
    category: "Achievement",
  },
  {
    id: 2,
    title: "flutter training",
    description: "Successfully completed flutter training program",
    date: "2025-05-09",
    link: "https://flutter.dev/",
    category: "Achievement",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Mosomali", icon: "github" },
  { name: "Email", url: "mailto:mohamedmohammudahmed@gmail.com", icon: "mail" },
  // Add LinkedIn or Twitter if available in the future
];
