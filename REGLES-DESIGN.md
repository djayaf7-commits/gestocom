# Règles de mise en page GestoCom (à respecter à CHAQUE modification)

Objectif : l'écran reste stable. Ajouter une fonctionnalité ne doit JAMAIS faire descendre ou décaler ce qui existe déjà
(cartes de chiffres, tableaux, menus).

1. **Une nouveauté qui apparaît ne s'insère pas dans la page** : elle s'ouvre PAR-DESSUS (fenêtre `.overlay` / `.modal`,
   panneau flottant, bannière `position:fixed`) ou dans un espace dont la taille est déjà réservée.
2. **Les barres d'outils tiennent sur UNE ligne de hauteur fixe** (ex. la barre de période `.pb1`, hauteur 60 px).
   Les options supplémentaires se choisissent dans une fenêtre, pas dans une 2e ligne qui apparaît.
3. **Aucun élément « en flux » ne doit apparaître après le chargement** au-dessus des cartes (pas de bannière, message,
   alerte qui pousse le contenu) : utiliser `position:fixed` ou un emplacement réservé (`min-height`).
4. **Le contenu d'une fenêtre garde une hauteur fixe** entre ses onglets (`.pb-body`), pour qu'elle ne saute pas.
5. **Les textes s'adaptent sans changer la hauteur** : `white-space:nowrap` + `text-overflow:ellipsis`, jamais de retour à la ligne
   qui agrandit une barre.
6. **Ordre de l'accueil figé** : barre de période → cartes de chiffres → alertes / top vendeurs → dernières ventes.
   Toute nouvelle carte se place en bas ou dans une fenêtre, pas entre ces blocs.
8. **Graphiques (page Analyses)** : chaque graphique vit dans une boîte de hauteur fixe (`.an-box`, `.an-box-s`) ; changer de période ou de
   mesure ne modifie jamais la position des cartes. Une seule colonne sur téléphone (`.an-2`). Un point de période encore en cours
   se dessine en pointillés. Pas de bibliothèque externe : tout est dessiné en SVG/CSS pour fonctionner hors-ligne.
