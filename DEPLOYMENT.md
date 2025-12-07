# Wilderness Expedition - Guide de Déploiement

## 📦 Préparation du Thème

### 1. Créer l'archive ZIP

```bash
# Depuis le répertoire racine du thème
zip -r wilderness-expedition.zip . -x "*.git*" -x "*.DS_Store" -x "node_modules/*"
```

Ou manuellement :
- Sélectionner tous les fichiers SAUF `.git/`
- Créer une archive ZIP nommée `wilderness-expedition.zip`

### Contenu de l'archive (27 fichiers) :

```
wilderness-expedition.zip
├── assets/
│   ├── script.js
│   └── style.css
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── fr.json
├── sections/
│   └── (14 fichiers .liquid)
├── snippets/
│   └── icons.liquid
├── templates/
│   └── (5 fichiers .json)
├── .gitignore
├── README.md
├── THEME_GUIDE.md
├── VISUAL_SUMMARY.md
└── theme.toml
```

## 🚀 Installation sur Shopify

### Étape 1 : Accéder à l'Admin Shopify

1. Se connecter à votre boutique Shopify
2. Aller dans **Boutique en ligne** → **Thèmes**

### Étape 2 : Uploader le thème

1. Cliquer sur **Ajouter un thème**
2. Sélectionner **Importer un thème**
3. Choisir le fichier `wilderness-expedition.zip`
4. Cliquer sur **Importer**
5. Attendre la fin du téléchargement (1-2 minutes)

### Étape 3 : Prévisualiser

1. Une fois importé, le thème apparaît dans la liste
2. Cliquer sur **Actions** → **Prévisualiser**
3. Vérifier que tout s'affiche correctement

### Étape 4 : Publier

1. Si la prévisualisation est satisfaisante
2. Cliquer sur **Actions** → **Publier**
3. Confirmer la publication

## ⚙️ Configuration Initiale

### 1. Configuration de Base

**Boutique en ligne → Thèmes → Personnaliser**

#### Paramètres du Thème
1. **Identité Visuelle**
   - Vérifier les couleurs (déjà configurées)
   - Ajuster si nécessaire

2. **En-tête**
   - Uploader votre logo (format PNG/SVG, 200x60px recommandé)
   - Ou modifier le texte "Wilderness Expedition"
   - Vérifier que "En-tête fixe au scroll" est activé
   - Vérifier que "Activer la recherche" est activé

3. **Réseaux Sociaux**
   - Ajouter URLs Facebook, Instagram, YouTube
   - Ces liens apparaîtront dans le footer

### 2. Configuration de la Navigation

**Navigation → Menus**

#### Menu Principal
Créer/modifier le menu `main-menu` :
```
Accueil → /
Produits → /collections/all
  ↳ Sacs à dos → /collections/backpacks
  ↳ Tentes → /collections/tentes
  ↳ Éclairage → /collections/eclairage
  ↳ Escalade → /collections/escalade
  ↳ Cuisine → /collections/cuisine
  ↳ Équipement → /collections/equipement
Guides → /blogs/guides
À propos → /pages/a-propos
Contact → /pages/contact
```

#### Menu Footer
Créer le menu `footer` :
```
À propos
Notre histoire
Équipe
Magasins
Carrières
```

### 3. Configuration de la Page d'Accueil

**Boutique en ligne → Thèmes → Personnaliser → Page d'accueil**

#### Section Hero
1. Uploader une image nature/montagne (1920x800px)
2. Modifier le titre : "L'équipement des vrais aventuriers"
3. Modifier le sous-titre selon votre message
4. Lien bouton 1 : `/collections/all`
5. Lien bouton 2 : `/blogs/guides`

#### Section Catégories
Pour chaque catégorie :
1. Uploader une image représentative (800x800px)
2. Créer/lier la collection correspondante
3. Mettre à jour le compteur de produits

Images recommandées :
- **Sacs à dos** : Photo de randonneur avec sac
- **Tentes** : Tente montée en nature
- **Éclairage** : Lampe frontale en action
- **Escalade** : Équipement d'escalade
- **Cuisine** : Réchaud de camping
- **Équipement** : Divers outils outdoor

#### Section Carrousel Produits
1. Créer une collection "Best Sellers"
2. Ajouter 6-8 produits populaires
3. Sélectionner cette collection dans les paramètres

#### Section Blog/Guides
1. Créer un blog nommé "guides"
2. Ajouter 3-5 articles initiaux :
   - "Comment choisir son sac à dos de randonnée"
   - "10 essentiels pour un bivouac réussi"
   - "Guide des matériaux outdoor"
   - "Préparer sa première expédition"
   - "Entretien de votre équipement"
3. Sélectionner ce blog dans les paramètres

#### Section Galerie
1. Uploader 6 images de qualité (800x800px)
2. Pour chaque image :
   - Ajouter une légende descriptive
   - Ajouter un nom d'utilisateur (@username)
3. Personnaliser le hashtag si souhaité

#### Section Newsletter
- Texte déjà configuré
- Vérifier que les emails sont bien reçus (tester)

### 4. Ajouter des Produits

**Produits → Ajouter un produit**

Pour chaque produit :
1. **Images** : Minimum 4 photos (1000x1000px)
   - Photo principale
   - Différents angles
   - Détails
   - Produit en situation

2. **Titre** : Nom clair et descriptif

3. **Description** : Inclure
   - Caractéristiques techniques
   - Matériaux
   - Dimensions/poids
   - Utilisation recommandée
   - Entretien

4. **Prix** : Définir prix et prix comparé (si promo)

5. **Variantes** : Si applicable (tailles, couleurs)

6. **Collections** : Assigner aux bonnes catégories

7. **Tags** : Ajouter tags pour filtrage
   - randonnée, camping, bivouac, etc.

### 5. Créer les Pages Statiques

**Boutique en ligne → Pages**

#### Pages Requises :

**À propos** (`/pages/a-propos`)
```
Notre histoire
Notre mission : Équiper les vrais aventuriers
Notre équipe
Nos valeurs
```

**Contact** (`/pages/contact`)
```
Formulaire de contact (déjà intégré par Shopify)
Coordonnées
Carte (optionnel)
Horaires (si magasin physique)
```

**Pages Légales** (obligatoires) :
- Politique de confidentialité
- Conditions générales de vente
- Politique de retour
- Mentions légales

## 🎨 Personnalisation Avancée

### Modifier les Couleurs

Si vous souhaitez adapter la palette :

1. **Via l'éditeur de thème** :
   - Paramètres du thème → Identité Visuelle
   - Modifier les 5 couleurs

2. **Via le code** :
   - Éditer `assets/style.css`
   - Modifier les variables CSS (lignes 8-14)

### Ajouter du CSS Personnalisé

Dans l'éditeur de thème :
1. Paramètres du thème
2. CSS personnalisé (si disponible)
3. Ou ajouter directement dans `assets/style.css`

### Modifier les Textes

Tous les textes sont dans `locales/fr.json`
- Facile à modifier sans toucher au code
- Structure JSON claire

## 📱 Tests Post-Installation

### Checklist de Validation

#### Design
- [ ] Header s'affiche correctement
- [ ] Logo ou texte visible
- [ ] Menu de navigation fonctionne
- [ ] Hero section avec image
- [ ] 6 catégories affichées
- [ ] Carrousel produits glisse
- [ ] Articles de blog affichés
- [ ] Galerie photos visible
- [ ] Newsletter fonctionnelle
- [ ] Footer complet avec liens

#### Fonctionnalités
- [ ] Menu mobile s'ouvre/ferme
- [ ] Recherche fonctionne
- [ ] Panier s'ouvre
- [ ] Ajout au panier OK
- [ ] Page produit complète
- [ ] Images produit zoomables
- [ ] Variantes sélectionnables
- [ ] Collection avec filtres
- [ ] Pagination fonctionne
- [ ] Newsletter s'envoie

#### Responsive
- [ ] Test sur mobile (< 768px)
- [ ] Test sur tablette (768-968px)
- [ ] Test sur desktop (> 968px)
- [ ] Images s'adaptent
- [ ] Texte lisible
- [ ] Boutons accessibles

#### Performance
- [ ] Temps de chargement < 3s
- [ ] Images optimisées
- [ ] Pas d'erreurs console
- [ ] Smooth scrolling
- [ ] Animations fluides

## 🔧 Dépannage

### Le thème ne s'importe pas
- Vérifier que le ZIP contient tous les dossiers
- Vérifier que `theme.toml` est à la racine
- Vérifier qu'il n'y a pas de dossier parent dans le ZIP

### Les images ne s'affichent pas
- Vérifier que les images sont uploadées
- Vérifier les formats (JPG, PNG, WebP)
- Vérifier la taille (< 4MB par image)

### Le menu ne fonctionne pas
- Vérifier que le menu existe dans Navigation
- Vérifier qu'il est nommé `main-menu`
- Vérifier les liens dans le menu

### Les couleurs sont incorrectes
- Aller dans Paramètres du thème → Identité Visuelle
- Réinitialiser aux valeurs par défaut :
  - Forest Green: #1B4332
  - Gray: #6B7280
  - Beige: #D4A574
  - Off-White: #F5F3ED

### Le carrousel ne bouge pas
- Vérifier qu'une collection est sélectionnée
- Vérifier qu'elle contient des produits
- Vérifier la console JavaScript pour erreurs

## 📊 Analytics & SEO

### Configuration Analytics

1. **Google Analytics**
   - Paramètres → Préférences
   - Ajouter ID Google Analytics
   - Format : `UA-XXXXXXXXX-X` ou `G-XXXXXXXXXX`

2. **Facebook Pixel**
   - Paramètres → Canaux de vente → Facebook
   - Connecter le compte
   - Ajouter Pixel ID

### Optimisation SEO

1. **Métadonnées générales**
   - Paramètres → Préférences
   - Titre de la boutique
   - Meta description (155 caractères max)

2. **Produits**
   - Titre optimisé avec mots-clés
   - Description riche et détaillée
   - Alt text sur toutes les images

3. **Collections**
   - Description unique par collection
   - Meta title et description

4. **Blog**
   - Articles optimisés SEO
   - Images avec alt text
   - Liens internes vers produits

## 🎓 Resources

### Documentation Officielle
- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Theme Settings](https://shopify.dev/themes/architecture/settings)

### Aide Supplémentaire
- THEME_GUIDE.md - Guide complet du thème
- VISUAL_SUMMARY.md - Aperçu visuel
- README.md - Informations générales

## ✅ Checklist Finale

Avant de lancer la boutique :

### Contenu
- [ ] Tous les produits ajoutés avec photos
- [ ] Collections organisées
- [ ] Articles de blog publiés
- [ ] Pages légales complètes
- [ ] Page À propos rédigée
- [ ] Coordonnées de contact

### Configuration
- [ ] Logo uploadé
- [ ] Navigation configurée
- [ ] Pied de page complet
- [ ] Réseaux sociaux liés
- [ ] Newsletter testée
- [ ] Modes de paiement configurés
- [ ] Zones de livraison définies

### Tests
- [ ] Commande test passée
- [ ] Emails de confirmation reçus
- [ ] Responsive testé
- [ ] Performance vérifiée
- [ ] SEO vérifié
- [ ] Analytics configuré

### Légal
- [ ] Politique de confidentialité
- [ ] CGV publiées
- [ ] Politique de retour
- [ ] Mentions légales
- [ ] RGPD conforme (si Europe)

## 🎉 Lancement !

Une fois tout vérifié :
1. Retirer le mot de passe de la boutique
2. Annoncer le lancement sur réseaux sociaux
3. Envoyer email aux clients potentiels
4. Suivre les performances

**Félicitations ! Votre boutique Wilderness Expedition est en ligne !**

---

**Support :** Pour toute question, consultez la documentation Shopify ou contactez le support Shopify.
