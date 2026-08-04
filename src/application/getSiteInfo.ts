// Application layer: shared site-wide use cases (footer contact info, socials).
import { socialLinks } from '../infrastructure/data/social-links';

export function getContactInfo() {
  return {
    phone: '07 83 54 45 39',
    phoneHref: 'tel:0783544539',
    email: 'philippe.delente@gmail.com',
    emailHref: 'mailto:philippe.delente@gmail.com',
    cvHref: '/assets/CV_Philippe_DELENTE_Professionel.pdf',
    socialLinks,
  };
}

export function getCopyrightYear(): number {
  return new Date().getFullYear();
}
