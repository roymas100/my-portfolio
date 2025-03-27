export const highlight = {
  name: "mei",
  description:
    "API para marcação de consulta de acordo com agenda previamente configurada.",
  url: "https://github.com/roymas100/projeto-mei",
  title: "Projeto MEI",
  tecnologies: [
    "Node.js",
    "Prisma",
    "Vistes",
    "Postgresql",
    "Docker",
    "TDD",
    "Typescript",
    "Whatsapp API",
    "Slite API",
  ],
};

export const projects = [
  {
    name: "chest",
    description: "Aplicativo móvel de área de saúde como trabalho voluntário.",
    url: "https://apps.apple.com/br/app/chest-pain-score-resca/id1537121484",
    title: "Escore de Dor toráxica",
    tecnologies: [
      "React Native",
      "Styled components",
      "Expo",
      "Redux",
      "Typescript",
    ],
  },
  {
    name: "swot",
    description: "Site profissional da área de engenharia.",
    url: "http://www.swotengenharia.com/",
    title: "Swot Service engenharia",
    tecnologies: ["Figma", "Nuxt", "Vue", "Typescript"],
  },
  // {
  //     name: 'synsquad',
  //     description: 'Site landpage para portfólio.',
  //     url: 'https://apps.apple.com/br/app/chest-pain-score-resca/id1537121484',
  //     title: 'Synsquad',
  //     tecnologies: ['Figma', 'Nuxt', 'Vue', 'Typescript']
  // }
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/amir-andrade/",
  github: "https://github.com/roymas100",
  email: "mailto:amir.dantas@hotmail.com",
};

export const languages = {
  portuguese: "Português",
  english: "Inglês",
};

export const titles = {
  socials: "Redes sociais",
  recent_projects: "Projetos Recentes",
  about_me: "Sobre mim",
  curriculum: "Curriculum Vitae",
  highlight: "Destaque",
  download: "Baixar",
  technologies: "Tecnologias",
  more: "Mais",
};

export const about_me = `
<p>Olá Mundo! Eu sou um <strong>desenvolvedor Fullstack</strong> com foco em desenvolvimento Front-end. </p>
<p>Também sou graduado em <strong>Ciência da Computação</strong> e realizei um MBA em <strong>Gerenciamento ágil de projetos</strong></p>
<p>Meu sonho é gerenciar meu próprio aplicativo!</p>`;

export default {
  languages,
  projects,
  socials,
  titles,
  about_me,
  highlight,
};
