export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Duo-Studio',
      desc: 'Duo-Studio is a revolutionary front-end design platform that transforms the way creative interfaces are built. With advanced animation-powered features like smooth scroll and dynamic transitions, it allows designers to craft immersive experiences using only HTML, CSS, JavaScript, GSAP, and Locomotive.js.',
      subdesc:
        '',
      href: 'https://duostudiop.netlify.app/',
      texture: '/textures/project/project1.mp4',
      logo: 'assets/project-logo1.svg',
      logoStyle: {
        backgroundColor: '#000',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 20px 0px #fff',
      },
      spotlight: 'assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/locomotive.jpg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/gsap.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: 'assets/javascript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: 'assets/css.png',
        },
      ],
    },
    {
      title: 'Too Good -  Clone App',
      desc: 'Too Good - Clone App is a revolutionary front-end replica that reimagines the experience of sustainable food sharing platforms. With advanced animation-powered features and smooth scrolling interactions, it allows developers to simulate real-world app behavior using modern tools like HTML, CSS, JavaScript, GSAP, and Locomotive.js. Designed purely as a front-end project, it captures the essence of the original app with stunning transitions and responsive layouts.',
      subdesc:
        '',
      href: 'https://toogoodp.netlify.app/',
      texture: '/textures/project/project2.mp4',
      logo: 'assets/project-logo2.svg',
      logoStyle: {
        backgroundColor: '#FFF',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: 'assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/locomotive.jpg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/gsap.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: 'assets/javascript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: 'assets/css.png',
        },
      ],
    },
    {
      title: 'ZonKart-Online Market',
      desc: 'ZonKart is an online shopping platform built with React.js, Tailwind CSS, Framer Motion, React Router, Redux, and Google Firebase, offering a fast, secure, and dynamic user experience.',
      subdesc:
        'ZonKart allows users to explore products, manage their cart, and place orders easily. It uses Firebase for authentication and Framer Motion adds smooth animations for a modern feel.',
      href: 'https://zonkart.netlify.app/',
      texture: '/textures/project/project3.mp4',
      logo: 'assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: 'assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: 'assets/javascript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: 'assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-44, 20, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
