import { Project, Skill, SocialLink, NavItem } from "./types";

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "MoSomali",
  title: "Full Stack Developer",
  bio: "I'm a passionate full-stack developer with expertise in building modern web applications. I love creating beautiful, functional, and user-friendly experiences.",
  email: "your.email@example.com",
  location: "Your City, Country",
  avatar: "/avatar.jpg",
};

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Code Commits", value: "1000+" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, icon: "⚛️", category: "Frontend" },
  { name: "Next.js", level: 90, icon: "▲", category: "Frontend" },
  { name: "TypeScript", level: 88, icon: "📘", category: "Frontend" },
  { name: "Tailwind CSS", level: 92, icon: "🎨", category: "Frontend" },
  { name: "JavaScript", level: 95, icon: "📜", category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, icon: "🟢", category: "Backend" },
  { name: "Python", level: 80, icon: "🐍", category: "Backend" },
  { name: "PostgreSQL", level: 75, icon: "🐘", category: "Backend" },
  { name: "MongoDB", level: 78, icon: "🍃", category: "Backend" },
  { name: "REST APIs", level: 90, icon: "🔌", category: "Backend" },
  
  // Tools
  { name: "Git", level: 90, icon: "📦", category: "Tools" },
  { name: "Docker", level: 75, icon: "🐳", category: "Tools" },
  { name: "VS Code", level: 95, icon: "💻", category: "Tools" },
  { name: "Figma", level: 70, icon: "🎯", category: "Tools" },
  { name: "AWS", level: 65, icon: "☁️", category: "Tools" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management",
    longDescription: "Built a full-featured e-commerce platform with Next.js, featuring real-time inventory updates, secure payment processing, and an intuitive admin dashboard. Implemented advanced search and filtering capabilities, user authentication, and order tracking.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "Web App",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    longDescription: "Developed a collaborative task management application with drag-and-drop functionality, real-time synchronization, team collaboration features, and detailed analytics. Supports multiple projects, custom workflows, and integrations with popular tools.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "Web App",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with forecasts and maps",
    longDescription: "Created an elegant weather dashboard that displays current conditions, 7-day forecasts, interactive maps, and weather alerts. Features location-based detection, favorite locations, and detailed meteorological data visualization.",
    image: "/projects/weather.jpg",
    tags: ["React", "API Integration", "Charts.js", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "Web App",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and dark mode",
    longDescription: "Designed and developed a stunning portfolio website featuring smooth animations, dark/light mode toggle, responsive design, and optimized performance. Built with modern web technologies and best practices.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "Website",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    longDescription: "Built a comprehensive social media analytics dashboard that aggregates data from multiple platforms, provides insights through interactive charts, and offers automated reporting features. Includes custom KPI tracking and export capabilities.",
    image: "/projects/social.jpg",
    tags: ["React", "D3.js", "Node.js", "REST API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "Dashboard",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking application",
    longDescription: "Developed a mobile-first fitness tracking application with workout logging, progress tracking, nutrition monitoring, and goal setting. Features include custom workout plans, exercise library, and social sharing capabilities.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "Firebase", "TypeScript", "Charts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "Mobile App",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "mail" },
];
