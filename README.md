# KIDSeDUC — Site éducatif pour enfants

Description
-	**But :** KIDSeDUC est un site web statique orienté éducation/enfance. Le site fournit plusieurs pages prêtes (accueil, à propos, contact, rendez-vous, témoignages) et des composants visuels (carrousels, animations) pour présenter une école, une garderie ou un centre éducatif.
-	**Public cible :** développeurs ou administrateurs souhaitant déployer rapidement un site statique d'établissement éducatif pour enfants.

Structure du projet (fichiers clés)
- `index.html` : page d'accueil.
- `about.html`, `contact.html`, `appointment.html`, `testimonial.html`, `call-to-action.html` : pages complémentaires.
- `css/` : feuilles de style finales (`bootstrap.min.css`, `style.css`).
- `scss/` : sources SCSS (structure Bootstrap + fichiers personnalisés) — permet de recompresser ou personnaliser les styles.
- `js/main.js` : scripts personnalisés du template.
- `lib/` : bibliothèques tierces incluses localement :
  - `owlcarousel/` : Owl Carousel pour les carrousels.
  - `animate/`, `wow/` : animations CSS/JS.
  - `easing/`, `waypoints/` : utilitaires pour l'animation et le défilement.
- `img/` : images et illustrations utilisées par les pages.

Technologies utilisées
- HTML5, CSS3 (Bootstrap), JavaScript.
- Plugins tiers inclus : OwlCarousel, Animate.css, Wow.js, easing.js, waypoints.
- SCSS (sources présentes) pour personnaliser et recompiler les styles.

Comment lancer le site en local
- Méthode simple (ouvrir dans le navigateur) :
  - Ouvrir `index.html` directement dans votre navigateur.
- Méthode serveur local (recommandée pour tester les requêtes AJAX ou chemins relatifs) :
  - Ouvrir un terminal dans le dossier `KIDSeDUC` et lancer un serveur HTTP simple :

```powershell
cd 'C:\Users\MAEL\Desktop\KIDSeDUC'
python -m http.server 8000
```
  - Puis ouvrir `http://localhost:8000` dans le navigateur.

Compiler les SCSS (optionnel)
- Le dossier `scss/` contient les sources : pour modifier le thème ou personnaliser les variables, éditez les fichiers SCSS puis compilez en CSS.
- Installation rapide (si Node/npm disponible) :

```powershell
npm install -g sass
cd 'C:\Users\MAEL\Desktop\KIDSeDUC'
sass scss:css --no-source-map --style=expanded
```
- Ou utiliser `npx` sans installer globalement :

```powershell
cd 'C:\Users\MAEL\Desktop\KIDSeDUC'
npx sass scss:css --no-source-map --style=expanded
```
- Après compilation, adaptez les chemins dans les pages HTML pour pointer vers le CSS généré si nécessaire.

Personnalisation rapide
- Modifier le contenu : éditer les fichiers HTML dans la racine.
- Modifier le style : éditer `scss/` puis recompiler, ou directement `css/style.css` pour des changements rapides.
- Images : remplacer les fichiers dans `img/` en gardant les mêmes noms ou en mettant à jour les références dans le HTML/CSS.
- Composants JS : `js/main.js` contient les scripts personnalisés (initialisation des carrousels, activation de `wow.js`, etc.).

Déploiement
- Comme site statique, il peut être déployé sur n'importe quel hébergeur de fichiers statiques : GitHub Pages, Netlify, Vercel (Static), Surge, ou un serveur web classique (Apache/Nginx).

Bonnes pratiques recommandées
- Minifier `css/style.css` et `js/main.js` pour optimiser les performances.
- Charger les bibliothèques via CDN (optionnel) pour réduire la taille du dépôt si vous préférez ne pas garder les fichiers locaux.
- Vérifier l'accessibilité (contraste, attributs `alt` sur les images, navigation clavier) pour un public enfant.
- Tester sur mobile et tablettes (responsive) — Bootstrap est déjà utilisé mais vérifier les sections personnalisées.

Améliorations possibles
- Ajouter un workflow `npm` + `sass` + `postcss` (autoprefixer) + minification.
- Intégrer un petit CMS (Netlify CMS, Forestry) si le contenu doit être mis à jour par des non-développeurs.
- Ajouter des tests d'accessibilité et un audit Lighthouse intégrable dans un pipeline CI.

Crédits
- Basé sur Bootstrap et diverses bibliothèques open-source (OwlCarousel, Animate.css, Wow.js, easing, waypoints).

Licence
- Aucun fichier de licence explicite trouvé dans ce dossier. Si vous prévoyez un usage public, ajoutez un fichier `LICENSE` (MIT, Apache-2.0, etc.) selon vos besoins.