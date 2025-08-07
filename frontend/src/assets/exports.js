import { FaUserTie, FaMoneyBillWave, FaTools, FaChartBar, FaClinicMedical, FaSeedling, FaTint, FaBook, FaHospital, FaChalkboardTeacher, FaWater, FaRoad, FaUserShield } from 'react-icons/fa';
import IgboezeEvent from './images/igboeze-event.jpg';
import IgboezeHealthcare from './images/igboeze-healthcare.jpg';
import IgboezeCulture from './images/igboeze-culture.jpg';
import IgboezeCulturalFestival from './images/igboeze-cultural-festival.jpg';
import IgboezeHealthcareOutReach from './images/igboeze-healthcare-outreach.jpg';
import IgboezeConstructionProject from './images/igboeze-construction-project.jpg';
import IgboezeSchoolVisits from './images/igboeze-school-visit.jpg'
import IgboezeWomenEmpowerment from './images/igboeze-women-empowerment.jpg'
import IgboezeNorthBuilding from './images/igboeze-north-building.JPG'
import SolarBoreHole from './images/igboeze-solar-borehole.png'
import IgboezeEducationalEmpowerment from './images/igboeze-educational-empowerment.jpg'
import IgboezeHealthCenterRenovation from './images/igboeze-hospital-renovation.png'


export const quickLinks = [
  { title: 'Health', path: '/departments/health' },
  { title: 'Education', path: '/departments/education' },
  { title: 'Achievements', path: '/achievements' },
  { title: 'Scholarships', path: '/news-events/scholarships' },
];

export const councilMembers = [
  {
    name: "Hon. John Doe",
    role: "Chairman",
    image: "/images/john-doe.jpg",
    bio: "Brief intro about the chairman."
  },
  {
    name: "Jane Doe",
    role: "Vice Chairman",
    image: "/images/jane-doe.jpg",
    bio: "Short profile here."
  }
];

export const coreValues = ["Transparency", "Development", "Community Engagement"];

export const departments = [
  "Health",
  "Education",
  "Infrastructure",
  "Youth & Sports",
  "Agriculture",
  "Security & Safety"
];

export const services = [
  {
    icon: <FaHospital />,
    title: 'Healthcare',
    description: 'Accessible and quality health services across all communities.'
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Education',
    description: 'Investing in schools, training, and learning opportunities.'
  },
  {
    icon: <FaWater />,
    title: 'Water Supply',
    description: 'Providing clean and safe water to every household.'
  },
  {
    icon: <FaRoad />,
    title: 'Infrastructure',
    description: 'Developing rural and urban roads, electricity, and more.'
  },
  {
    icon: <FaUserShield />,
    title: 'Security',
    description: 'Partnering with agencies to ensure community safety.'
  },
  {
    icon: <FaSeedling />,
    title: 'Agriculture',
    description: 'Supporting farmers with tools, training, and access to markets.'
  }
];

export const newsEvents = [
  {
    title: "Igbo-Eze North Development Plan Unveiled",
    description: "The Chairman has announced the new development plans for Igbo-Eze North, including infrastructure upgrades, new schools, and healthcare initiatives.",
    image: IgboezeEvent,
    link: "/news/igboeze-north-development-plan"
  },
  {
    title: "Annual Cultural Festival Scheduled",
    description: "The much-awaited annual cultural festival will take place in December, celebrating Igbo culture with music, dance, and food.",
    image: IgboezeCulture,
    link: "/events/annual-cultural-festival"
  },
  {
    title: "Healthcare Campaign for Rural Communities",
    description: "A new healthcare campaign targeting rural areas to provide free medical check-ups and medications is launching next week.",
    image: IgboezeHealthcare,
    link: "/news/healthcare-campaign-rural"
  }
];

export const galleryImages = [
  {
    image: IgboezeHealthcareOutReach,
    caption: "Community Health Outreach"
  },
  {
    image: IgboezeCulturalFestival,
    caption: "Cultural Festival 2024"
  },
  {
    image: IgboezeConstructionProject,
    caption: "Road Construction Project"
  },
  {
    image: IgboezeSchoolVisits,
    caption: "Chairman Visits Local Schools"
  },
  {
    image: IgboezeWomenEmpowerment,
    caption: "Igbo-Eze North Women Empowerment"
  },
  {
    image: IgboezeNorthBuilding,
    caption: "Igbo-Eze North Building Projects"
  }
];

export const achievements = [
  {
    image: IgboezeConstructionProject,
    title: "Rehabilitation of Rural Roads",
    description: "Over 20km of rural roads were graded and rehabilitated to ease transportation."
  },
  {
    image: IgboezeHealthCenterRenovation,
    title: "Health Center Renovation",
    description: "Upgraded 5 primary health centers with modern facilities and staff quarters."
  },
  {
    image: IgboezeEducationalEmpowerment,
    title: "Educational Empowerment",
    description: "Distributed school supplies to 500+ students across 15 primary schools."
  },
  {
    image: SolarBoreHole,
    title: "Water Projects",
    description: "Drilled 10 solar-powered boreholes in remote communities."
  }
];


export const ourDepartments = [
  {
    icon: <FaUserTie />,
    title: "Administration",
    description: "Oversees internal coordination, communication, personnel, and Council activities.",
    link: "administration"
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Finance & Accounts",
    description: "Manages budgeting, financial reporting, revenue generation, and FAAC allocations.",
    link: "finance-accounts"
  },
  {
    icon: <FaTools />,
    title: "Works & Housing",
    description: "Handles roads, public buildings, housing projects, and infrastructure maintenance.",
    link: "works-housing"
  },
  {
    icon: <FaChartBar />,
    title: "Planning, Research & Statistics (PRS)",
    description: "Leads development planning, data management, M&E, and donor coordination.",
    link: "planning-prs"
  },
  {
    icon: <FaClinicMedical />,
    title: "Health Care",
    description: "Provides healthcare services, immunizations, WASH, and health education.",
    link: "health"
  },
  {
    icon: <FaSeedling />,
    title: "Agriculture & Veterinary",
    description: "Supports farmers, agro-processing, animal health, and food security programs.",
    link: "agriculture"
  },
  {
    icon: <FaTint />,
    title: "WASH Department",
    description: "Ensures water access, sanitation infrastructure, and hygiene promotion.",
    link: "wash"
  },
  {
    icon: <FaBook />,
    title: "Education & Community Development",
    description: "Oversees schools, learning materials, scholarships, and social empowerment.",
    link: "education"
  }
];

export const feedbacks = [
  {
    message: "Igbo-Eze North has made great strides in healthcare delivery and community development.",
    name: "Chinwe U.",
    role: "Community Health Worker"
  },
  {
    message: "The leadership is transparent and inclusive. We're proud to call this place home.",
    name: "Eze N.",
    role: "Traditional Ruler"
  },
  {
    message: "The support for education and scholarships is commendable. I benefitted personally.",
    name: "Obinna M.",
    role: "Student"
  }
];

// Inside assets/exports.js
export const stats = [
  { label: 'Wards', value: 14 },
  { label: 'Communities', value: 27 },
  { label: 'Projects Executed', value: 120 },
  { label: 'Schools', value: 45 },
];

export const educationStats = [
  { label: "Primary Schools", value: 112 },
  { label: "Teachers", value: 543 },
  { label: "Students", value: 12530 },
  { label: "Scholarship Beneficiaries", value: 308 },
];

export const educationPrograms = [
  {
    title: "Scholarship Schemes",
    desc: "Supporting brilliant but underprivileged students to access quality education.",
  },
  {
    title: "Teacher Training",
    desc: "Continuous development programs to improve teaching standards.",
  },
  {
    title: "School Renovation",
    desc: "Ongoing infrastructure improvements across primary and secondary schools.",
  },
];

export const newsEventsData = [
  {
    id: 1,
    title: 'Free Medical Outreach in Igbo-Eze North',
    date: 'March 15, 2025',
    description: 'The local government hosted a medical outreach program to provide free health checkups and medicine to residents.',
    image: IgboezeHealthcareOutReach
  },
  {
    id: 2,
    title: 'Annual Cultural Festival 2025',
    date: 'February 5, 2025',
    description: 'Traditional leaders and cultural troupes gathered to celebrate heritage and promote unity in Igbo-Eze North.',
    image: IgboezeCulturalFestival
  },
  {
    id: 3,
    title: 'Youth Empowerment Seminar Held in Unadu',
    date: 'January 20, 2025',
    description: 'The local government organized an empowerment seminar for youth, focusing on skill acquisition and entrepreneurship.',
    image: IgboezeEvent
  }
];

export const villages = [
  // Villages in Ibagwa-Aka
  'Amaebo',
  'Amankpu-Ibagwa',

  // Villages in Ovoko
  'Ama-Agu-Ovoko',
  'Amachalla-Ovoko',
  'Umu-Ezeavlu-Ovoko',

  // Villages in Ezzodo
  'Uda I',
  'Uda II',
  'Uda III',
  'Uroshi',
  'Uloche'
];

export const towns = [
  'Enugu-Ezike',
  'Etteh',
  'Umuozzi',
  'Umuitodo',
  'Ezzodo',
  'Essodo',
  'Ibagwa-Aka',
  'Ovoko'
];

export const educationLevels = ['nursery', 'primary', 'junior secondary', 'senior secondary', 'n c e', 'national diploma', 'higher national diploma', "bachelor's degree", 'p g d', "master's degree", "doctorate degree"];
export const occupations = ['student', 'trader', 'engineer', 'nurse', 'doctor', 'pharmacist', 'teacher', 'apprentice', 'sale boy', 'sale girl', 'others'];
export const rolesList = ['user', 'admin', 'editor', 'education', 'health', 'security', 'agriculture', 'wash', 'works', 'finance', 'events & media'];
export const stateOfResidence = ['abia', 'anambra', 'enugu', 'Ebonyi', 'imo'];
export const roles = ['user', 'admin', 'editor', 'education', 'health', 'security', 'agriculture', 'wash', 'works', 'finance', 'events & media'];
