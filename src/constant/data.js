import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
  },
  {
    id: 2,
    icon: RiFacebookBoxFill,
  },
  {
    id: 3,
    icon: RiGithubFill,
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "React & Django Developer",
  },
  {
    id: 2,
    label: "TypeScript & JavaScript (ES6+)",
  },
  {
    id: 3,
    label: "Responsive design & CSS frameworks",
  },
  {
    id: 4,
    label: "API integration & state management",
  },
  {
    id: 5,
    label: "Performance optimization",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
      {
        role: "FullStck Developer",
        label: "Fresher",
        time: "Not-yet working",
      },
      {
          role: "Graphic Designer",
        label: "Fresher",
        time: "Not-yet working",
      },
      {
         role: "Teacher",
        label: "Fresher",
        time: "Not-yet working",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Tribhuwan University",
        role: "Computer Science",
        time: "2028",
      },
      {
        label: "NEB",
        role: "+2 Science",
        time: "2024",
      },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "Blog Project",
    src: "/images/blog.jpg",
   text: "A full-stack blog application built with Django backend, featuring CRUD operations, user authentication, and dynamic content management.",  
   link: "https://folll.io/Sujan",},

  {
    id: 2,
    title: "Ecommerce",
    src: "/images/ecommerce.jpg",
    text: "An ecommerce platform developed with Django backend, supporting product management, cart system, order tracking, and secure payments.",
    link: "https://folll.io/Sujan",
  },
  {
    id: 3,
    title: "IMS",
    src: "/images/IMS.jpg",
    text: "An Inventory Management System powered by Django backend, allowing product tracking, stock updates, and analytics dashboard.",
    link: "https://folll.io/Sujan",},
  {
    id: 4,
    title: "Note",
    src: "/images/note.jpg",
    text: "A Django-based note-taking web app with user login, CRUD features, and clean, responsive UI for managing personal notes.",
    link: "https://folll.io/Sujan",},
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "sujanprogrammer@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: "9762980864",
  },
  {
    id: 3,
    label: "Location:",
    link: "Kathmandu,Nepal",
  },
];