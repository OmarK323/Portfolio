import profile from './profile.png';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Omar",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Omar",
  description: "A Software Engineer creating Web apps and Lua games.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from Swarthmore College in 2025 with a degree in Computer Science and Statistics. I enjoy developing web apps, games, and exploring new technologies. I am currently freelancing as a software developer. ",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Software Development",
      description: "I create web applications using Reactjs and backend services using Nodejs.",
      icons: null,
    },
    {
      title: "Python Scripting",
      description: "I write Python scripts to automate engineering tasks and data analysis.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "PokeStat Info",
      description: "A Pokemon stats and information website. The website provides detailed information about all the Pokemon, their typing and stats with a search functionality.",
      icons: [
        {
          link: "https://pokemon-stat-info.netlify.app/",
        },
        {
          link: "https://github.com/OmarK323/PokeInfo",
        },
      ]
    },
    {
      title: "Princess of Mars",
      description: "A Tic-80 retro Lua arcade game. Defeating swarms of enemies on Mars as a princess saving her people.",
      icons: [
        {
          link: "https://github.com/OmarK323/Princess-of-Mars",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Hit me up if you want to collaborate on a project or just want to say hi.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:omarkhan7@rocketmail.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Omar Khan | Software Developer | Game Developer",
  description: "I create web apps and Lua games. I graduated from Swarthmore College in 2025 with a degree in Computer Science.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@omarkhan",
  description: "Software Developer | Game Developer",
  cards: [
    {
      title: "My website",
      link: "coming soon",
    },
    {
      title: "PokeStat Info Website",
      link: "https://pokemon-stat-info.netlify.app/",
    },
    {
      title: "Princess of Mars",
      link: "Coming Soon",
    },
    {
      title: "My GitHub",
      link: "https://github.com/omarK323",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/omar-khan-a64204173/",
    },
  ]
}