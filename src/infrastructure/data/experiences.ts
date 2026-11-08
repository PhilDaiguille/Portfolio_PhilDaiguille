import type { Experience } from "../../domain/portfolio";
import lesEchos from "../../assets/images/assetexp/lesEchosLeParisienServices.jpg";
import nutri from "../../assets/images/assetexp/nutri.webp";
import g7 from "../../assets/images/assetexp/G7.webp";
import mairie from "../../assets/images/assetexp/Mairie.webp";

export const experiences: Experience[] = [
  {
    year: "2023 - en cours",
    role: "Développeur Web",
    organization: "Les Echos Le Parisien Services",
    logo: lesEchos,
    link: "https://solutions.lesechos.fr/",
    steps: [
      { year: "2026 - en cours", role: "CDD" },
      { year: "2023 - 2026", role: "Alternance" },
    ],
    details: [
      "Sites en PHP / Symfony, WordPress, JavaScript (Vue.js, React), SCSS",
      "Nouvelles fonctionnalités et correction de bugs",
      "Maintenance évolutive des applications",
      "Déploiement continu via GitHub Actions",
      "Ateliers de conception avec les équipes projet, marketing et UI/UX",
    ],
  },
  {
    year: "2025 - 2026",
    role: "Contributeur open source",
    organization: "Documentation officielle de PHP en espagnol (php.net)",
    logo: "https://www.php.net/images/logos/new-php-logo.svg",
    link: "https://github.com/php/doc-es",
    details: [
      "130 contributions à la traduction de la documentation de php.net",
      "Synchronisation des pages avec les évolutions de la documentation anglaise",
      "Outil d'aide à la traduction développé en Python (PHP Doc Translator)",
    ],
  },
  {
    year: "2021",
    role: "Développeur • Stage",
    organization: "Paris Marne Est & Bois",
    logo: "https://upload.wikimedia.org/wikipedia/fr/1/19/Logo_Paris_Est_Marne_Bois.svg",
    link: "https://www.parisestmarnebois.fr/",
    details: [
      "PostgreSQL",
      "Modélisation conceptuelle de données",
      "Documentation de règle de nommage",
      "API Leaflet JS en créant une carte interactive",
      "Participation projet informatique territorial",
      "Concevoir un site avec les cartes de la collectivité territoriale",
    ],
  },
  {
    year: "2021",
    role: "Développeur • Stage",
    organization: "www.nutri-animale.com • Conseil en alimentation (Autoentrepreneur)",
    logo: nutri,
    logoInvert: true,
    link: "https://phildaiguille.github.io/Nutrition_Animale_Conseil_en_alimentation/site.html",
  },
  {
    year: "2018",
    role: "Assistant Informatique • Stage",
    organization: "Taxi G7 • Groupe Rousselet, 92 Clichy (Effectifs : 280)",
    logo: g7,
    link: "https://www.g7.fr/",
  },
  {
    year: "2017",
    role: "Assistant Technicien Informatique • Stage",
    organization: "Mairie de Charenton, 94 Charenton-le-Pont (Effectifs service : 5)",
    logo: mairie,
    logoInvert: true,
    link: "https://www.charenton.fr/",
  },
];
