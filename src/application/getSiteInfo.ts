// Application layer: shared site-wide use cases (footer contact info, socials).
import { socialLinks } from "../infrastructure/data/social-links";
import { withBase } from "./url";

export function getContactInfo() {
  return {
    phone: "07 83 54 45 39",
    phoneHref: "tel:0783544539",
    phoneE164: "+33783544539",
    email: "philippe.delente@gmail.com",
    emailHref: "mailto:philippe.delente@gmail.com",
    cvHref: withBase("/assets/CV_Philippe_DELENTE_Professionel.pdf"),
    socialLinks: socialLinks.map((s) => ({ ...s, icon: withBase(s.icon) })),
  };
}

export function getCopyrightYear(): number {
  return new Date().getFullYear();
}
