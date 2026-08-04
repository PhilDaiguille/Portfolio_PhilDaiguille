import type { Experience } from '../../domain/portfolio';
import nutri from '../../assets/images/assetexp/nutri.webp';
import g7 from '../../assets/images/assetexp/G7.webp';
import mairie from '../../assets/images/assetexp/Mairie.webp';

export const experiences: Experience[] = [
  {
    year: '2021',
    role: 'Developpeur • Stage',
    organization: 'Paris Marne Est & Bois',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/1/19/Logo_Paris_Est_Marne_Bois.svg',
    link: 'https://www.parisestmarnebois.fr/',
    details: [
      'PostgreSQL',
      'Modélisation conceptuelle de données',
      'Documentation de règle de nommage',
      'API Leaflet JS en créant une carte interactive',
      'Participation projet informatique territorial',
      'Concevoir un site avec les cartes de la collectivité territoriale',
    ],
  },
  {
    year: '2021',
    role: 'Developpeur • Stage',
    organization: 'www.nutri-animale.com • Conseil en alimentation (Autoentrepreneur)',
    logo: nutri,
    link: 'https://phildaiguille.github.io/Nutrition_Animale_Conseil_en_alimentation/site.html',
  },
  {
    year: '2018',
    role: 'Assistant Informatique • Stage',
    organization: 'Taxi G7 • Groupe Rousselet, 92 Clichy (Effectifs : 280)',
    logo: g7,
    link: 'https://www.g7.fr/',
  },
  {
    year: '2017',
    role: 'Assistant Technicien Informatique • Stage',
    organization: 'Mairie de Charenton, 94 Charenton-le-Pont (Effectifs service : 5)',
    logo: mairie,
    link: 'https://www.charenton.fr/',
  },
];
