export const servicesData = [
  {
    category: 'IT Consulting',
    services: [
      'IT Planning & Infrastructure Setup',
      'Database Management & Optimization',
      'Data Recovery & System Troubleshooting',
      'Web Administration & System Support',
    ]
  },
  {
    category: 'Developer Services',
    services: [
      'Custom Web Application Development',
      'Full Stack Development',
      'API Development & Integration',
      'Database Design & Management',
    ]
  }
];


  export const projects = [
    {
      title: "This site💟",
      description: "A sleek, modern portfolio built with Next.js and SCSS to showcase my web development journey, skills, and projects. Continuously evolving with new features and projects.",
      image:`https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/readme_media/showcase.png`,
      githubLink: `https://github.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site`,
      markdownFile: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/README.md`,
    },
    {
      title: "Aurum",
      description: "A personal expense tracker built with Next.js, ASP.NET, and MSSQL. Developed by a SCRUM-based team with 5 sprints, following SOLID principles, Clean Code methodology, and CI via GitHub Actions. The app runs in Docker containers for efficient deployment.",
      image:"https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/Documentation/Snapshots/Landing.png",
      githubLink: "https://github.com/Aurum-ElProyecteGrande/aurum",
      markdownFile: `https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/README.md`,
    },
    {
      title: "SolarWatch",
      description: "A simple app built to learn ASP.NET Core, API calls, frontend basics, user roles, and GitHub Actions. A hands-on project for mastering key development skills.",
      image:null,
      githubLink: `https://github.com/${process.env.NEXT_PUBLIC_USERNAME}/solarwatch-ci`,
      markdownFile: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/solarwatch-ci/refs/heads/main/README.md`,
    },
  ];

  export const missingImage = `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/imgs/missingImage.jpeg`;
  