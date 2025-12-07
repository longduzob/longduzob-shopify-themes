# Wilderness Expedition - Guide du Thème

**L'équipement des vrais aventuriers - Prépare ton prochain sommet**

## 🎨 Identité Visuelle

### Palette de Couleurs
- **Vert forêt (#1B4332)** - Couleur principale, évoque la nature et l'aventure
- **Gris (#6B7280)** - Texte et éléments secondaires  
- **Beige (#D4A574)** - Accents chaleureux, boutons d'action
- **Blanc cassé (#F5F3ED)** - Arrière-plans doux et naturels

### Typographie
- **Titres:** Poppins Bold (font-family: 'Poppins', sans-serif)
- **Corps:** Open Sans (font-family: 'Open Sans', sans-serif)

### Style
Minimaliste robuste + nature authentique. Design épuré qui met en valeur les produits avec des touches naturelles et des éléments graphiques inspirés de la montagne et de l'outdoor.

## 📁 Structure du Thème

```
wilderness-expedition/
├── assets/
│   ├── style.css          # Styles principaux avec variables CSS
│   └── script.js          # Fonctionnalités JavaScript
├── config/
│   └── settings_schema.json  # Configuration du thème
├── layout/
│   └── theme.liquid       # Structure HTML principale
├── locales/
│   └── fr.json           # Traductions françaises
├── sections/
│   ├── header.liquid     # En-tête avec navigation et panier
│   ├── hero.liquid       # Section héro avec image et CTA
│   ├── categories.liquid # Grille de 6 catégories avec icônes
│   ├── product-carousel.liquid  # Carrousel de produits best-sellers
│   ├── blog-guides.liquid       # Articles de blog/guides
│   ├── gallery.liquid    # Galerie communauté
│   ├── newsletter.liquid # Inscription newsletter
│   ├── footer.liquid     # Pied de page complet
│   ├── main-product.liquid      # Page produit
│   ├── collection-banner.liquid # Bannière collection
│   ├── main-collection-product-grid.liquid  # Grille produits
│   ├── main-cart-items.liquid   # Items du panier
│   ├── main-cart-footer.liquid  # Total et checkout
│   └── main-page.liquid  # Pages statiques
├── snippets/
│   └── icons.liquid      # 20+ icônes SVG outdoor
├── templates/
│   ├── index.json        # Page d'accueil
│   ├── product.json      # Page produit
│   ├── collection.json   # Page collection
│   ├── cart.json         # Page panier
│   └── page.json         # Pages statiques
└── theme.toml            # Métadonnées du thème
```

## 🏠 Page d'Accueil (index.json)

La page d'accueil est composée de 6 sections dans cet ordre :

1. **Hero** - Bannière immersive avec image nature et double CTA
2. **Categories** - Grille de 6 catégories avec icônes SVG animées
3. **Product Carousel** - Carrousel des best-sellers
4. **Blog Guides** - Articles et guides d'aventure
5. **Gallery** - Galerie communauté avec photos utilisateurs
6. **Newsletter** - Inscription avec avantages listés

## 🎯 Sections Principales

### 1. Header (header.liquid)
- Logo/texte personnalisable
- Navigation principale avec menu déroulant
- Recherche (optionnelle)
- Icône compte
- Panier avec compteur d'articles
- Menu mobile responsive
- En-tête sticky au scroll

### 2. Hero (hero.liquid)
- Image de fond immersive
- Badge personnalisable
- Titre et sous-titre
- 2 boutons CTA (principal + secondaire)
- Indicateur de scroll (optionnel)
- Overlay avec dégradé

### 3. Categories (categories.liquid)
- Grille de 6 catégories (responsive)
- Icônes SVG au choix :
  - backpack (Sacs à dos)
  - tent (Tentes)
  - flashlight (Éclairage)
  - climbing (Escalade)
  - cooking (Cuisine)
  - gear (Équipement)
- Image de fond par catégorie
- Compteur de produits
- Animation au hover avec bouton CTA

### 4. Product Carousel (product-carousel.liquid)
- Carrousel de produits avec navigation
- Affichage de 4-12 produits
- Badges promo automatiques
- Navigation par flèches
- Dots de pagination
- Autoplay avec pause au hover

### 5. Blog/Guides (blog-guides.liquid)
- Grille de 2-6 articles
- Image, catégorie, date
- Extrait d'article
- Lien "Lire la suite"
- Bouton "Voir tous les guides"

### 6. Gallery (gallery.liquid)
- Galerie photos communauté
- Grille masonry responsive
- Overlay avec légende et auteur
- Hashtag personnalisable
- Effet zoom au hover

### 7. Newsletter (newsletter.liquid)
- Design avec fond dégradé vert
- Icône email SVG
- Formulaire avec validation
- Liste des bénéfices
- Note de confidentialité

### 8. Footer (footer.liquid)
- Logo et description
- Liens réseaux sociaux (Facebook, Instagram, YouTube)
- 3 colonnes de menus
- Informations de contact
- Copyright et liens légaux
- Design sur fond vert forêt

## 🛍️ Pages Produits

### Page Produit (main-product.liquid)
- Galerie d'images avec miniatures
- Changement d'image au clic
- Informations produit (titre, prix, description)
- Sélection de variantes
- Compteur de quantité
- Bouton "Ajouter au panier"
- Badges (en stock, livraison gratuite, retours)
- Partage social (Facebook, Twitter, Pinterest)

### Collection (collection-banner.liquid + main-collection-product-grid.liquid)
- Bannière avec image et description
- Compteur de produits
- Tri (best-sellers, prix, A-Z, nouveautés)
- Grille responsive (2-4 colonnes)
- Pagination
- Cards produits avec badges promo

## 🛒 Panier

### Cart Items (main-cart-items.liquid)
- Liste des articles avec images
- Modification de quantité
- Suppression d'articles
- Panier vide avec CTA

### Cart Footer (main-cart-footer.liquid)
- Sous-total et réductions
- Total
- Note sur taxes et livraison
- Bouton "Passer la commande"
- Bouton "Continuer les achats"

## 🎨 Icônes SVG Disponibles

Le fichier `snippets/icons.liquid` contient plus de 20 icônes outdoor :

**Nature & Outdoor:**
- mountain, tree, sun, moon, star, fire, campfire

**Équipement:**
- backpack, tent, sleeping-bag, water-bottle, flashlight, first-aid

**Navigation & Aventure:**
- compass, map, hiking, boots

**Outils:**
- knife, axe, rope, carabiner, binoculars

**Utilisation:**
```liquid
{% render 'icons', icon: 'mountain', attributes: 'width="24" height="24"' %}
```

## ⚙️ Configuration (settings_schema.json)

### Paramètres Disponibles:

1. **Identité Visuelle**
   - 5 couleurs personnalisables
   - Taille de police de base

2. **Typographie**
   - Police des titres (Poppins recommandé)
   - Police du corps (Open Sans recommandé)

3. **En-tête**
   - Logo image ou texte
   - Activation du sticky header
   - Activation de la recherche

4. **Réseaux Sociaux**
   - Liens Facebook, Instagram, YouTube, Twitter

5. **Produits**
   - Ratio d'image (carré, portrait, paysage)
   - Affichage marque
   - Activation avis produits

6. **Panier**
   - Type (tiroir latéral ou page)
   - Notes de commande

## 🚀 Installation

1. **Télécharger le thème**
   ```bash
   zip -r wilderness-expedition.zip . -x "*.git*"
   ```

2. **Upload dans Shopify**
   - Admin Shopify → Online Store → Themes
   - Upload ZIP
   - Publish

3. **Configuration initiale**
   - Customize theme
   - Uploader logo dans "En-tête"
   - Configurer couleurs si nécessaire
   - Créer les menus de navigation
   - Ajouter contenu aux sections

## 📱 Responsive Design

Le thème est 100% responsive avec 3 breakpoints principaux :

- **Desktop** (> 968px) - 4 colonnes, navigation complète
- **Tablet** (768px - 968px) - 2-3 colonnes, navigation adaptée  
- **Mobile** (< 768px) - 1-2 colonnes, menu hamburger

## 🎯 Bonnes Pratiques

### Images Recommandées:
- **Hero:** 1920x800px minimum
- **Catégories:** 800x800px (carré)
- **Produits:** 1000x1000px minimum (carré)
- **Blog:** 800x600px
- **Galerie:** 800x800px

### Performance:
- Images optimisées (WebP recommandé)
- Lazy loading activé
- CSS et JS minifiés
- Variables CSS pour cohérence

### SEO:
- Métadonnées configurables
- Structure sémantique HTML5
- Alt text sur toutes les images
- URLs propres

## 🔧 Personnalisation

### Modifier les Couleurs:
Éditer `assets/style.css`, section CSS Variables:
```css
:root {
  --color-forest-green: #1B4332;
  --color-beige: #D4A574;
  /* etc. */
}
```

### Ajouter une Section:
1. Créer fichier dans `sections/`
2. Utiliser le schema Liquid pour configuration
3. Ajouter dans templates JSON

### Modifier le Layout:
Éditer `layout/theme.liquid` pour structure globale

## 📞 Support

Pour toute question sur le thème Wilderness Expedition :
- Documentation Shopify : https://shopify.dev/themes
- Liquid Reference : https://shopify.dev/api/liquid

---

**Version:** 1.0.0  
**Auteur:** longduzob  
**Thème:** Wilderness Expedition  
**Tone:** L'équipement des vrais aventuriers - Prépare ton prochain sommet
