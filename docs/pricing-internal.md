# Grille tarifaire interne — confidentiel

Ne pas publier. Ne pas commiter vers un dépôt public si le dépôt l'est.
Tous les montants sont en FCFA.

Les fourchettes du site public restent **sur devis**. Les chiffres ci-dessous sont des
points de départ commerciaux. Ils évoluent selon la taille du client, le périmètre
et la criticité. Le plancher est un plancher.

Voir `docs/consulting-launch-plan.md` pour le funnel et les règles de vente.

## Offres de lancement (à vendre en premier)

Quatre portes d'entrée. Le reste du catalogue se propose après diagnostic.

| Offre (interne)                | Porte site             | Durée    | Entrée | Cible | Haut |
| ------------------------------ | ---------------------- | -------- | ------ | ----- | ---- |
| Payment Architecture Audit     | `payment-audit`        | 3–7 j    | 500 k  | 750 k | 1 M  |
| Payment Integration Sprint     | `add-rail`             | 2–4 sem. | 1 M    | 1,8 M | 3 M  |
| Backend Modernization Sprint   | `spring-modernization` | 3–8 sem. | 1,5 M  | 2,5 M | 5 M  |
| Technical Partner (retainer)   | `engineering-care`     | mensuel  | 500 k  | 750 k | 1 M  |
| Engineering Partner (retainer) | `engineering-pro`      | mensuel  | 1 M    | 1,5 M | 2 M  |
| FinTech Architect (retainer)   | `engineering-pro` haut | mensuel  | 2 M    | 2,2 M | 3 M+ |

Multi-rails (`multi-rail`) si le client a déjà plusieurs opérateurs : 2,4 – 6 M, pas la porte d'entrée cold.

Le Technical Partner se vend **après** une mission, pas en InMail. Toute proposition de sprint inclut une ligne retainer pour le mois suivant le go-live.

## Taux journaliers de référence

| Nature                                   | Plancher | Cible   |
| ---------------------------------------- | -------- | ------- |
| Développement et intégration             | 150 000  | 200 000 |
| Audit, architecture, conseil             | 200 000  | 300 000 |
| Due diligence, expertise                 | 350 000  | 500 000 |
| Urgence (démarrage < 48 h)               | ×1,5     | ×1,5    |
| Client international, facturé en devises | 250 000  | 400 000 |

## Fourchettes par offre

### Conseil et audit

| Offre                            | Entrée PME | Cible | Haut de fourchette |
| -------------------------------- | ---------- | ----- | ------------------ |
| Audit d'API et d'intégration     | 300 k      | 500 k | 900 k              |
| Audit de fiabilité des paiements | 700 k      | 1 M   | 1,5 M              |
| Revue d'architecture             | 450 k      | 750 k | 1,2 M              |
| Audit de fiabilité production    | 700 k      | 1 M   | 1,5 M              |
| Audit de sécurité API            | 450 k      | 750 k | 1,2 M              |
| Ingénierie de performance        | 700 k      | 1,2 M | 2 M                |
| Diagnostic de réconciliation     | 450 k      | 600 k | 900 k              |
| Revue de go-live                 | 850 k      | 1,2 M | 1,8 M              |
| Due diligence                    | 1,5 M      | 2,2 M | 3,5 M              |
| Formation intra (2 j)            | 1,5 M      | 2 M   | 3 M                |

### Ingénierie

| Offre                       | Entrée PME | Cible | Haut de fourchette |
| --------------------------- | ---------- | ----- | ------------------ |
| Modernisation Java / Spring | 1,2 M      | 2,5 M | 6 M                |
| Ajout d'un rail             | 1,4 M      | 1,8 M | 2,5 M              |
| Intégration multi-rails     | 2,4 M      | 3,5 M | 6 M                |
| Urgence transactions        | 1,2 M      | 1,8 M | 3 M                |
| Registre et réconciliation  | 3,4 M      | 5 M   | 9 M                |
| Orchestration multi-PSP     | 6 M        | 9 M   | 15 M               |
| Portefeuille                | 7 M        | 11 M  | 20 M               |

### Ingénierie managée

| Offre                      | Plancher       | Cible | Haut de fourchette |
| -------------------------- | -------------- | ----- | ------------------ |
| Engineering Care (mensuel) | 250 k          | 500 k | 800 k              |
| Engineering Pro (mensuel)  | 500 k          | 1 M   | 2 M                |
| Maintenance annuelle       | 15 % du projet | 18 %  | 22 %               |

Les montants « entrée PME » (150–350 k sur certains audits) ne s'appliquent que
pour un premier client de référence, un périmètre très borné, et jamais en dessous
du plancher journalier. En dessous du plancher, refusez.

## Où se placer dans la fourchette

Montez d'un cran par facteur présent :

- volume mensuel supérieur à 100 M
- plateforme à volume ou criticité élevée (PSP, marketplace, EMI)
- filiale de groupe ou financement international
- urgence réelle
- périmètre encore flou côté client

Descendez uniquement pour un client de référence citable publiquement, ou une agence partenaire en flux récurrent.

**Le plancher est un plancher.** En dessous, refusez.

## Traitement des demandes site

- Budget « moins de 1 M » **et** échéance « exploratoire » → réponse par e-mail avec un guide, pas d'appel. Le sujet Resend est préfixé `[GUIDE]`.
- Toujours 40 à 50 % à la commande. Aucune ligne de code avant l'acompte encaissé.
- Toujours proposer Engineering Care ou la maintenance dans le devis initial.
