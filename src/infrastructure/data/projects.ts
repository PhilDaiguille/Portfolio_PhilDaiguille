import type { Project } from "../../domain/portfolio";
import emberAnvil from "../../assets/images/projects/ember-anvil.webp";
import zentime from "../../assets/images/projects/zentime.webp";
import bytemeuh from "../../assets/images/projects/bytemeuh.webp";

const gh = (repo: string) => `https://github.com/PhilDaiguille/${repo}`;

// Ordre = ordre d'affichage ; les 4 premiers apparaissent sur l'accueil.
export const projects: Project[] = [
  {
    title: "twig-a11y-rules",
    tag: "Open source",
    year: "2026",
    summary:
      "89 règles d'accessibilité pour les templates Twig : alt manquants, boutons vides, rôles ARIA invalides… repérés avant la mise en ligne. En v1 sur Packagist.",
    stack: ["PHP 8.4", "Twig", "Twig-CS-Fixer", "PHPUnit", "CI / Codecov"],
    repo: gh("twig-a11y-rules"),
    demo: "https://packagist.org/packages/phildaiguille/twig-a11y-rules",
    caseStudy: {
      slug: "twig-a11y-rules",
      context:
        "Dans l'écosystème Symfony, les templates Twig ne passent par aucun contrôle d'accessibilité avant la recette : les oublis (image sans alt, bouton sans nom accessible, ARIA mal utilisé) ne sont repérés qu'en audit, quand ils coûtent cher à corriger. Le seul outil existant, twigcs-a11y, n'était plus maintenu.",
      role: "Conception, développement, tests et publication du package, seul.",
      highlights: [
        {
          title: "Un linter qui s'intègre à l'existant",
          text: "Plutôt qu'un nouvel outil à installer, les règles se branchent sur Twig-CS-Fixer, déjà utilisé par les équipes Symfony. Une ligne de configuration suffit, et chaque violation peut être désactivée finement avec son identifiant.",
        },
        {
          title: "89 règles, 4 niveaux",
          text: "Médias, formulaires, structure, ARIA… Les règles sont regroupées en presets progressifs (Basic, Recommended, Standard, Strict) pour adopter le linter sur un projet existant sans être noyé sous les alertes.",
        },
        {
          title: "Comprendre le contexte du template",
          text: "Layouts, templates enfants, partials, thèmes de formulaire et composants Twig UX sont reconnus : les règles qui concernent une page complète (langue, titre, landmarks) ne s'appliquent pas à un simple fragment.",
        },
        {
          title: "Qualité d'un vrai package",
          text: "Suite de tests PHPUnit, intégration continue avec GitHub Actions, couverture suivie sur Codecov, versionnement sémantique jusqu'à la v1.",
        },
      ],
      learned:
        "Écrire des règles statiques oblige à connaître précisément les critères WCAG et leurs exceptions, et à arbitrer entre exhaustivité et faux positifs. Publier un package public m'a aussi appris à soigner la documentation et la compatibilité des versions.",
    },
  },
  {
    title: "Arcadia Games",
    tag: "En cours",
    year: "2026",
    summary:
      "Plateforme de jeux de société en ligne, à commencer par un Scrabble multijoueur temps réel : invitation par lien, chrono, chat, revanche, FR/EN.",
    stack: ["Next.js 16", "React 19", "NestJS", "socket.io", "Prisma", "PostgreSQL", "Docker"],
    caseStudy: {
      slug: "arcadia-games",
      context:
        "Jouer au Scrabble en ligne entre amis passe souvent par des applis chargées de publicités et qui imposent un compte. L'objectif : une plateforme simple, sans compte obligatoire, où l'on partage un lien et la partie commence. Le Scrabble est le premier jeu, l'architecture est pensée pour en accueillir d'autres (échecs, Puissance 4…).",
      role: "Projet personnel : architecture, front-end, back-end, infrastructure et déploiement.",
      highlights: [
        {
          title: "Moteurs de jeu indépendants",
          text: "Les règles vivent dans des packages TypeScript purs, sans framework, derrière une interface commune (créer une partie, vérifier un coup, l'appliquer, détecter la fin). L'API ne connaît aucune règle : ajouter un jeu ne touche pas au serveur.",
        },
        {
          title: "Temps réel et serveur qui fait autorité",
          text: "Les coups passent par socket.io et sont validés côté serveur. Les clients ne reçoivent jamais l'état brut : les chevalets adverses et le sac restent masqués, impossible de tricher en inspectant le réseau.",
        },
        {
          title: "Pensé pour tous",
          text: "Interface en français et en anglais (traductions vérifiées par le compilateur), thème clair et sombre, responsive avec glisser-déposer tactile. Le domaine renvoie des codes, la traduction se fait côté web.",
        },
        {
          title: "Prêt pour la production",
          text: "Monorepo pnpm + Turborepo, développement en TDD (Vitest, tests e2e contre PostgreSQL), Docker Compose, HTTPS via Caddy, sauvegardes quotidiennes vérifiées et CI GitHub Actions.",
        },
      ],
      learned:
        "Séparer strictement les règles du jeu de l'infrastructure rend chaque partie testable isolément et le projet facile à faire évoluer. Gérer des informations cachées en temps réel m'a obligé à penser la sécurité dès la conception du protocole.",
    },
  },
  {
    title: "VetPawTrol",
    tag: "Projet d'équipe",
    year: "2026",
    summary:
      "Projet annuel de Mastère : plateforme vétérinaire web et mobile. Annuaire géolocalisé, prise de rendez-vous, téléconsultation vidéo, identification de l'animal par puce NFC et paiement Stripe.",
    stack: [
      "Symfony",
      "API Platform",
      "Next.js",
      "Expo",
      "PostgreSQL",
      "Docker Swarm",
      "Terraform",
    ],
  },
  {
    title: "CallistSEO",
    tag: "Open source",
    year: "2026",
    summary:
      "Alternative libre aux outils d'audit SEO payants : moteur de crawl local-first et auto-hébergeable, avec CLI, API, interface web et application desktop.",
    stack: ["Rust", "CLI", "API", "Docker"],
    repo: gh("callistseo"),
  },
  {
    title: "Ember Anvil",
    tag: "Perso",
    year: "2026",
    summary:
      "Jeu de forge dans le navigateur : forger, vendre au marché, compléter le codex et monter de niveau. Gestion d'état avec Pinia, logique testée avec Vitest.",
    stack: ["Vue 3", "Vite", "Pinia", "Vitest"],
    demo: "https://ember-anvil.phildaiguille.fr/",
    repo: gh("Ember_Anvil"),
    image: emberAnvil,
  },
  {
    title: "MyGES Notifier",
    tag: "Outil perso",
    year: "2026",
    summary:
      "Surveille notes, absences et emploi du temps du portail MyGES et envoie une notification Discord dès qu'une nouvelle note tombe.",
    stack: ["Next.js", "TypeScript", "Discord webhooks"],
  },
  {
    title: "Bytemeuh",
    tag: "École",
    year: "2026",
    summary:
      "Site d'une ferme durable fictive : blog, recettes et articles, construit avec Astro et optimisé pour le référencement naturel et les performances.",
    stack: ["Astro", "SEO", "Performance"],
    demo: "https://bytemeuh.phildaiguille.fr/",
    repo: gh("projet-seo-bytemeuh"),
    image: bytemeuh,
  },
  {
    title: "ZenTime",
    tag: "Projet d'équipe",
    year: "2025",
    summary:
      "Application de playlists lofi qui s'adapte au moment de la journée et à l'humeur, réalisée à trois en Nuxt pour le module Vue.js de l'ESGI.",
    stack: ["Nuxt", "Vue 3"],
    demo: "https://zen-time-mauve.vercel.app",
    repo: gh("ZenTime"),
    image: zentime,
  },
  {
    title: "Hackathon IDF Mobilités",
    tag: "Hackathon",
    year: "2026",
    summary:
      "Application web et mobile pour les voyageurs d'Île-de-France Mobilités : connexion FranceConnect, gestion des abonnements Navigo et assistant IA capable d'agir à la place de l'utilisateur.",
    stack: ["TypeScript", "FranceConnect", "IA", "Docker"],
    repo: "https://github.com/katalinadnl/hackathon-2026-idfm",
  },
  {
    title: "Clean-Arch-Bank",
    tag: "Projet d'équipe",
    year: "2026",
    summary: "Application bancaire construite selon la Clean Architecture, en monorepo TypeScript.",
    stack: ["TypeScript", "Clean Architecture", "Monorepo", "Docker"],
  },
  {
    title: "BarterSwap",
    tag: "Projet d'équipe",
    year: "2026",
    summary:
      "API REST d'échange de compétences entre particuliers, fondée sur un système de crédits-temps.",
    stack: ["Go", "API REST", "Docker"],
  },
  {
    title: "PHP Doc Translator",
    tag: "Outil perso",
    year: "2026",
    summary:
      "Outil d'aide à la traduction de la documentation officielle de PHP, utilisé pour mes contributions à la version espagnole de php.net.",
    stack: ["Python"],
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);
