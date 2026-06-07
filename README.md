# Green Glisse Surf School — Site Web

Site web de l'école de surf Green Glisse à Biarritz, Côte des Basques.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **CSS** : Tailwind CSS
- **Langue** : Français (FR)
- **Déploiement** : Vercel
- **Blog** : MDX (fichiers dans `/content/blog/`)

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Structure du projet

```
green-glisse-website/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Accueil
│   ├── cours/              # Tarifs et forfaits
│   ├── ecole/              # Équipe et histoire
│   ├── reservation/        # Réservation
│   ├── cadeau/             # Bon cadeau
│   ├── blog/               # Liste des articles
│   │   └── [slug]/         # Article individuel
│   ├── conditions-meteo/   # Conditions de surf
│   ├── contact/            # Formulaire de contact
│   ├── cgv/                # CGV
│   ├── sitemap.ts          # Sitemap auto
│   └── robots.ts           # Robots.txt auto
├── components/
│   ├── Navigation.tsx      # Barre de navigation sticky
│   ├── Footer.tsx          # Pied de page
│   ├── WhatsAppButton.tsx  # Bouton flottant WhatsApp
│   ├── ContactForm.tsx     # Formulaire de contact
│   └── sections/           # Sections de la page d'accueil
├── content/blog/           # Articles de blog (MDX)
├── lib/blog.ts             # Utilitaires blog (lecture MDX)
└── public/images/          # Photos du site
```

## Ajouter vos photos

Placez vos photos dans `/public/images/` avec ces noms exacts :

| Nom de fichier | Usage |
|---|---|
| `hero-surf-biarritz.jpg` | Hero page d'accueil (photo n°18) |
| `equipe-green-glisse.jpg` | Section équipe accueil (photo n°12) |
| `cours-collectif-enfants.jpg` | Carte cours collectif (photo n°5 ou 11) |
| `cours-particulier-biarritz.jpg` | Carte cours particulier (photo n°14) |
| `briefing-surf-plage.jpg` | Carte stages/forfaits (photo n°4) |
| `surf-vague-biarritz.jpg` | Page perfectionnement (photo n°8) |
| `instructeur-surf-enfant.jpg` | Page cours enfants (photo n°1) |
| `surf-cote-des-basques.jpg` | Page école / about (photo n°19) |

**Format recommandé** : WebP ou JPEG, résolution minimum 1200×800px.

## Ajouter un article de blog

Créez un fichier `.mdx` dans `/content/blog/` :

```mdx
---
title: "Titre de l'article"
date: "2025-06-15"
description: "Description courte pour le SEO et les aperçus."
image: "/images/nom-image.jpg"
tags: ["tag1", "tag2"]
---

# Titre

Contenu de l'article en Markdown...
```

## Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# EmailJS (formulaire de contact)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Déploiement sur Vercel

1. Pousser le code sur GitHub
2. Connecter le repo sur [vercel.com](https://vercel.com)
3. Ajouter les variables d'environnement dans les settings Vercel
4. Déploiement automatique à chaque push sur `main`

## Contacts école

- **Téléphone** : 06 21 77 25 46
- **Email** : greenglisse.surfschool@gmail.com
- **WhatsApp** : https://wa.me/33621772546
- **Adresse** : Plage de la Côte des Basques, 64200 Biarritz
