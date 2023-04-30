import {
  frontend,
  backend,
  camera,
  gym,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  nodejs,
  tailwind,
  mongodb,
  git,
  figma,
  visa,
  nomanit,
  wms,
  oh2k,
  calculator,
  pig_game,
  csharp,
  python,
} from '../../assets';

export const name = 'DUC TRAN';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const technologies = [
  {
    name: 'HTML5',
    icon: html,
  },
  {
    name: 'CSS3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: mongodb,
  },
  {
    name: 'CSharp',
    icon: csharp,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

export const interests = [
  {
    interest: 'Front-end Development',
    imgSrc: frontend,
  },
  {
    interest: 'Back-end Development',
    imgSrc: backend,
  },
  {
    interest: 'Novice Photographer',
    imgSrc: camera,
  },
  {
    interest: 'Bodybuilder',
    imgSrc: gym,
  },
];

export const experiences = [
  {
    position: 'Software Test Engineer Intern',
    companyName: 'Visa Inc.',
    icon: visa,
    date: 'May 2022 - August 2022',
    points: [
      'Worked on the Linux servers to modify testing scripts and moderate the gateway application for the testing process.',
      'Expanded the testing framework by implementing new unit tests for individual protocol validation using Python with its unittest library.',
      "Enhanced the existing test scripts to support the application's new protocol and ensure the framework's compatibility with the servers.",
      'Acquire comprehensive knowledge and experience in fin-tech software, testing, and related technologies.',
    ],
  },
  {
    position: 'Software Engineer',
    companyName: 'NomanIT',
    icon: nomanit,
    date: 'November 2021 - December 2022',
    points: [
      'Developed user interfaces with modern HTML5, CSS3, and JavaScript frameworks, Angular.',
      'Created reusable components using Angular to revamp and expand the UI of the project.',
      'Collaborated with other engineers using Node.js with Express.js to develop the back-end and test application procedures for system efficiency.',
      'Handled and parsed JSON responses from the servers to render them onto the designed page based on customer requests.',
      'Reviewed and resolved application functionality issues.',
    ],
  },
  {
    position: 'Software Test Engineer',
    companyName: 'Visa Inc.',
    icon: visa,
    date: 'February 2023 - Present',
    points: [
      'Planned and devised cohesive test plans for projects using advanced testing technologies.',
      'Wrote and optimized test cases to maximize the success of manual software testing with consistent, thorough approaches.',
      'Practice testing methodologies, software development life cycle (SDLC), and Agile development methodologies',
      'Collaborate with software developers and quality assurance team members to ensure effective communication and problem resolution.',
    ],
  },
];

export const projects = [
  {
    name: 'Walden Medical Staffing',
    description:
      'A real-world web application that supports the business operation of Walden Medical Staffing.',
    tags: [
      {
        name: 'ASP.NET Core',
        color: 'blue-text-gradient',
      },
      {
        name: 'MySql',
        color: 'pink-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
    ],
    image: wms,
    liveLink: 'https://www.waldenmedstaffing.com/',
  },
  {
    name: 'OH2K Bank',
    description:
      'A landing website helps provide essential information about an imaginary bank.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Vite',
        color: 'pink-text-gradient',
      },
    ],
    image: oh2k,
    liveLink: 'https://oh2kbank.netlify.app/',
  },
  {
    name: 'CalcuNow',
    description: 'Why Calculator when you can CalcuNow?',
    tags: [
      {
        name: 'HTML',
        color: 'pink-text-gradient',
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
    ],
    image: calculator,
    liveLink: 'https://calcunow.netlify.app/',
  },
  {
    name: 'Pig Game',
    description:
      "Pig Game has two players, so to make it fair, let's give them two dice instead.",
    tags: [
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
    ],
    image: pig_game,
    liveLink: 'https://pig2.netlify.app/',
  },
];
