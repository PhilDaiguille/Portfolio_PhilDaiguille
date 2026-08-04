import type { CarouselProject } from '../../domain/portfolio';
import threeJs from '../../assets/images/tp_web/ThreeJS.webp';
import calculatrice from '../../assets/images/tp_web/Calculatrice.webp';
import fakeGmail from '../../assets/images/tp_web/FakeGmail.webp';
import tpPraroZ from '../../assets/images/tp_web/TP_PraroZ.webp';
import tpSlide from '../../assets/images/tp_web/TP_Slide.webp';
import instagram from '../../assets/images/tp_web/Instagram.webp';
import google from '../../assets/images/tp_web/Google.webp';
import spaceNews from '../../assets/images/tp_web/SpaceNews.webp';
import age from '../../assets/images/tp_web/Age.webp';
import distributeur from '../../assets/images/tp_web/Distributeur.webp';
import comics from '../../assets/images/tp_web/Comics.webp';

export const carouselProjects: CarouselProject[] = [
  { title: 'Projet Three JS', image: threeJs, href: 'https://projet-three-js.vercel.app/' },
  { title: 'Calculatrice', image: calculatrice, href: 'https://phildaiguille.github.io/Calculatrice/' },
  { title: 'Fake Gmail', image: fakeGmail, href: 'https://phildaiguille.github.io/Gmail_Fake/' },
  { title: 'TP PraroZ', image: tpPraroZ, href: 'https://phildaiguille.github.io/TP_Praroz/' },
  { title: 'TP Slide', image: tpSlide, href: 'https://phildaiguille.github.io/TP_Slide/' },
  { title: 'Fake Instagram + Connexion', image: instagram, href: 'https://phildaiguille.github.io/TP_Instagram/' },
  { title: 'Fake Google', image: google, href: 'https://phildaiguille.github.io/TP_GOOGLE/' },
  { title: 'BLOG', image: spaceNews, href: 'https://phildaiguille.github.io/TP_2021/TP_BLOG/' },
  { title: 'Connaître ton âge', image: age, href: 'https://phildaiguille.github.io/TP_2021/TP_Age/form_age.html' },
  { title: 'Distributeur', image: distributeur, href: 'https://phildaiguille.github.io/TP_2021/TP_Banque/Distributeur.html' },
  { title: 'Comics', image: comics, href: 'https://phildaiguille.github.io/TP_2021/TP_Batman/' },
];
