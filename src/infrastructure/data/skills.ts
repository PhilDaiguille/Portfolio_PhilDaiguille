import type { SkillGroup } from "../../domain/portfolio";

const dev = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

// Groupés par domaine, d'après les projets réels (perso, école, Les Echos).
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      { name: "TypeScript", icon: dev("typescript/typescript-original") },
      { name: "JavaScript", icon: dev("javascript/javascript-original") },
      { name: "React / Next.js", icon: dev("react/react-original") },
      { name: "Vue / Nuxt", icon: dev("vuejs/vuejs-original") },
      { name: "Astro", icon: dev("astro/astro-original") },
      { name: "Tailwind CSS", icon: dev("tailwindcss/tailwindcss-original") },
      { name: "HTML / CSS / SCSS", icon: dev("sass/sass-original") },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "PHP", icon: dev("php/php-original") },
      { name: "Symfony / API Platform", icon: dev("symfony/symfony-original") },
      { name: "NestJS", icon: dev("nestjs/nestjs-original") },
      { name: "Node.js", icon: dev("nodejs/nodejs-original") },
      { name: "Laravel", icon: dev("laravel/laravel-original") },
      { name: "Twig" },
    ],
  },
  {
    title: "Données",
    skills: [
      { name: "PostgreSQL", icon: dev("postgresql/postgresql-original") },
      { name: "MySQL", icon: dev("mysql/mysql-original") },
      { name: "Prisma", icon: dev("prisma/prisma-original") },
      { name: "SQL" },
    ],
  },
  {
    title: "DevOps & qualité",
    skills: [
      { name: "Docker", icon: dev("docker/docker-original") },
      { name: "GitHub Actions", icon: dev("githubactions/githubactions-original") },
      { name: "Git", icon: dev("git/git-original") },
      { name: "Linux / Bash", icon: dev("linux/linux-original") },
      { name: "Terraform", icon: dev("terraform/terraform-original") },
      { name: "PHPUnit / Vitest" },
      { name: "PHPStan / Rector" },
    ],
  },
  {
    title: "Accessibilité & SEO",
    skills: [{ name: "WCAG / RGAA" }, { name: "SEO technique" }, { name: "Performance web" }],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: dev("figma/figma-original") },
      { name: "Photoshop", icon: dev("photoshop/photoshop-original") },
      { name: "Illustrator", icon: dev("illustrator/illustrator-plain") },
      { name: "Lightroom", icon: "/assets/assetskills/Lightroom.svg" },
      { name: "Blender", icon: dev("blender/blender-original") },
    ],
  },
];

export const otherSkills = [
  "Go",
  "Rust",
  "Python",
  "Java / JavaFX",
  "C#",
  "Expo (React Native)",
  "Socket.io",
  "Express",
  "Three.js",
  "Electron",
];
