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
7. **Fenêtre ouverte = page derrière en pause** : le défilement ne doit jamais « traverser » une fenêtre. C'est géré globalement
   (`majFigeFond`, classe `html.fige`, `overscroll-behavior:contain`) : toute nouvelle fenêtre (`.overlay.open`, `.modal-overlay`)
   en profite automatiquement, ne pas contourner.
