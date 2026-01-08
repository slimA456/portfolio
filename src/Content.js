
import portal_img from "./assets/portal_img.png"
import appointment from "./assets/appointment.png"
import main_banner_bg from "./assets/main_banner_bg.png"
import header_img from "./assets/header_img.png"
import { CgPerformance } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { GiMatterStates } from "react-icons/gi";
import { SiSpeedtest } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowCircleRight } from "react-icons/fa";
export const specialized =[
    {
        id: "1",
        name: "Performance Optimization",
        description: "Expert in core web vitals, code splitting, lazy loading and bundle optimization",
        performance: '40% faster load times, 98+ PageSpeed',
        icon: CgPerformance 
    },
    {
        id: "2",
        name: "Responsive Design",
        description: "Mobile-first development with pixel-perfect implementation across devices",
        performance: 'WCAG accessibility standards, cross-browser compatibility',
        icon: DiResponsive 
    },
    {
        id: "3",
        name: "State Management",
        description: "Redux, Zustand, React Query for complex application state",
        performance: 'Scalable architecture for 500+ daily active users',
        icon: GiMatterStates 
    },
    {
        id: "4",
        name: "Testing & CI/CD",
        description: "Cypress end-to-end testing, automated deployment pipelines",
        performance: 'Stable releases, maintained code quality',
        icon:SiSpeedtest 
    },
]

export const NavItems = [
    {
         id:'1',
        Link:'Home',
        Href:'#home',
        
    },
    {
        id:'2',
        Link:'About',
        Href:'#about',
        
    },
    {
        id:'3',
        Link:'Portfolio',
        Href:'#featured'
    },
    {
        id:'4',
        Link:'Contact',
        Href:'#contact'
    },
    {
        id:'5',
        Link:'Services',
        Href:'#services'
    }
 ]

export const PageLoad = [
    {
        id:'1',
        performance:"40%",
        name:"Faster performance"
    },
    {
        id:'2',
        performance:"30%",
        name:"more engagement"
    },
    {
        id:'3',
        performance:"98+",
        name:"pagespeed score"
    }
]

export const featuredProject = [
  {
        id: '1',
        name: "Appointment App",
        description: "This website helps users book doctor appointments.",
        image: appointment,
        techStack: ["React", "Tailwind", "Clerk", "TypeScript"],
        Icon: FaArrowCircleRight,
         url :"https://slimA456.github.io/-appointment/"
  },
  {
        id: '2',
        name: "Job Portal App",
        description: "A portal where job seekers find opportunities and employers recruit.",
        image: portal_img,
        techStack: ["React", "Tailwind", "Clerk", "TypeScript"],
        Icon: FaArrowCircleRight,
        url :"https://slimA456.github.io/job-portal/"
  },
  {
        id: '3',
        name: "Grocery Delivery App",
        description: "This website helps customers shop from the comfort of their home.",
        image: main_banner_bg,
        techStack: ["React", "Tailwind", "Clerk", "TypeScript"],
        icon: FaArrowCircleRight,
        url :"https://slimA456.github.io/grocery-delivery/"
  },
  {
        id: '4',
        name: "Restaurant Website",
        description: "This website helps customers order and explore menus online.",
        image: header_img,
        techStack: ["React", "Tailwind", "Clerk", "TypeScript"],
        Icon: FaArrowCircleRight,
         url :"https://slimA456.github.io/restaurant-website"
  },
]

export const Additional = [
    {
        id:'1',
        Name:"Node js",
        Description:"API integration & backend communication"
    },
    {
        id:'2',
        Name:"Node js",
        Description:"Database design for Lms platform"
    },
    {
        id:'3',
        Name:"Node js",
        Description:"Real-time features & authentication"
    }
]

export const QuickLinks = [
 
    {
        id:"1",
        name:"About",
        Link:"/About"
    },
    {
        id:"2",
        name:"projects",
         Link:"/Featured"
    },
    {
        id:"3",
        name:"skills",
        Link:"Specialized"
    },
    {
        id:"4",
        name:"Contact",
        Link:"/Contact"
    },
    

]

export const connect = [
    {
        id:"1",
        name:"Github",
        icon:  GrGithub
    },
    {
        id:"2",
        name:"Linkedin",
        icon: GrLinkedin
    },
    {
        id:"3",
        name:"Email",
        icon: AiOutlineMail
    }
]