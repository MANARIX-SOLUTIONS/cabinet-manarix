# Manarix Consulting Launch Plan

**Statut :** opérationnel — à exécuter maintenant  
**Objectif unique des 90 premiers jours :** obtenir le premier client payant, puis le deuxième, puis le troisième.  
**Logique :** Consulting → Cash → Expertise → Références → Retainers → Équipe → Produits

Les prix détaillés sont dans `docs/pricing-internal.md`. Le site public reste **sur devis**.

---

## North star

> Manarix n'est pas une ESN. Manarix est un cabinet d'ingénierie FinTech qui vend d'abord de la fiabilité des paiements et du backend, puis transforme les problèmes récurrents en produits.

**Positionnement définitif**

> **FinTech Engineering & Payment Infrastructure Consulting**

**Sous-positionnement**

> We help fintechs, PSPs, and digital platforms integrate payments, modernize backends, and build payment-first infrastructure from scratch.

**Trois piliers :** Intégration de paiement · Modernisation backend · Greenfield

**Ce que Manarix n'est pas**

- une ESN généraliste
- un studio de sites vitrines
- un staff aug
- un éditeur SaaS en pré-revenu qui cherche des early adopters

**Ce que Saïfoulaye vend aujourd'hui**

Un diagnostic de 45 minutes, puis une des trois offres packagées, puis un retainer.

---

## Architecture du business

```text
                         MANARIX SOLUTIONS
                                │
                FinTech Engineering & Consulting
                                │
          ┌─────────────────────┴─────────────────────┐
          │                                           │
     SERVICES                                    PRODUCTS
          │                                           │
   Audit  Missions  Retainer                    SaaS  SDK  Tools
          │
     CASH-FLOW  →  petite équipe  →  delivery  →  produits
```

Le catalogue public (`/services`) reste large pour le SEO et les missions suivantes. **La vente de lancement s'aligne sur trois piliers.**

| Pilier                         | Portes site (exemples)                          | Famille     |
| ------------------------------ | ----------------------------------------------- | ----------- |
| Intégration de paiement        | `payment-audit`, `add-rail`, `multi-rail`       | Advisory / Engineering |
| Modernisation backend          | `spring-modernization`                          | Engineering |
| Greenfield payment-first       | `orchestration`, `ledger`, `multi-rail`, `wallet` | Engineering |

Retainer après mission : `engineering-care`, `engineering-pro` (Managed). Jamais en cold.

---

## 1. Positionnement définitif

### Phrase d'accroche

**FR :** Nous aidons fintechs, PSP, agrégateurs et plateformes digitales à intégrer des paiements, moderniser des backends legacy et construire des infrastructures greenfield payment-first.

**EN :** We help fintechs, PSPs, aggregators, and digital platforms integrate payments, modernize legacy backends, and build payment-first greenfield infrastructure.

### Preuve d'expertise (sans se sur-vendre)

- Java / Spring Boot, APIs, Kafka, observabilité, résilience
- Rails UEMOA : Wave, Orange Money, Free Money, agrégateurs
- Xaalis comme démonstrateur interne (registre XOF, réconciliation)
- Publications techniques (webhooks, timeouts, réconciliation, Spring)

### Cible qui paie

1. **Fintech / EMI / agrégateur / PSP** — CTO, VP Engineering, Head of Engineering
2. **Startup / scale-up qui encaisse ou lance un produit payment-first** — Founder, CTO
3. **Marketplace / plateforme digitale** — Engineering, Payments
4. **ESN / agence** — Delivery / Account Manager qui a un trou paiement

### Qualification — on dit oui si

- de l'argent circule déjà, ou doit circuler dans les 90 jours
- un système existe (pas une idée sur slide)
- un décideur technique ou un founder est dans l'appel
- le budget indicatif n'est pas « on verra plus tard » **et** exploratoire en même temps

### Qualification — on dit non si

- site vitrine, branding, contenu
- staffing au mois
- RFP astreinte 24/7 ou équipe > 5
- rémunération en equity
- remplacement de core banking
- budget sous le plancher journalier (voir grille interne)

---

## 2. Trois offres + retainers

Voir aussi `docs/pricing-internal.md` § Offres de lancement.

### Offre 1 — Payment Architecture Audit

- **Durée :** 3 à 7 jours
- **Livrable :** Architecture Assessment + Risk Map + Technical Roadmap
- **Porte site :** `/services/payment-audit`
- **Prix interne :** 500 k – 1 M FCFA (cible 750 k)
- **Promesse :** si le rapport n'apprend rien, on ne facture pas

### Offre 2 — Payment Integration Sprint

- **Durée :** 2 à 4 semaines
- **Livrable :** rail intégré, webhooks, idempotence, machine à états, tests, go-live
- **Porte site :** `/services/add-rail` (multi-rails = `/services/multi-rail`)
- **Prix interne :** 1 M – 3 M FCFA (cible 1,8 M)

### Offre 3 — Backend Modernization Sprint

- **Durée :** 3 à 8 semaines
- **Livrable :** chemin de migration (pas un big bang), Java/Spring, modularisation, observabilité
- **Porte site :** `/services/spring-modernization`
- **Prix interne :** 1,5 M – 5 M FCFA (cible 2,5 M)

### Retainers — après une mission, jamais en cold

| Offre interne              | Porte publique                         | Cible mensuelle |
| -------------------------- | -------------------------------------- | --------------- |
| Technical Partner          | Engineering Care                       | 750 k           |
| Engineering Partner        | Engineering Pro                        | 1,5 M           |
| FinTech Architect          | Engineering Pro, haut de fourchette    | 2 M+            |

Règle : **toute proposition de sprint contient une ligne retainer** pour le mois suivant le go-live.

---

## 3. Landing page

La page d'accueil **est** la page consulting.

Structure publique à tenir :

1. Positionnement (Intégration · Modernisation · Greenfield)
2. CTA : réserver un diagnostic technique
3. Trois piliers + portes d'entrée (audit, sprint intégration, modernisation, multi-rail / greenfield)
4. Expertise (Java, Spring, Kafka, Payments, APIs)
5. Preuve (Xaalis, publications)
6. Formulaire de cadrage

Le catalogue complet reste sur `/services`. Les prix n'apparaissent pas.

---

## 4. Portfolio / case studies

Tant qu'il n'y a pas de client citable :

1. **Xaalis** — démonstrateur interne (registre, ingestion, XOF)
2. **Publications** — une note par semaine, liée à un problème vendeur
3. **Après client 1** — demander par écrit le droit de citer le nom **ou** publier un case anonymisé (secteur + problème + résultat)

Modèle de case anonymisé :

> Fintech UEMOA · volume > 50 M FCFA/mois · webhooks rejoués · écart de réconciliation chiffré · plan de correction en 5 jours.

Ne jamais inventer un logo client.

---

## 5. Profil LinkedIn

Kit prêt à coller : `docs/launch/sales-kit.md`.

Règle : le profil vend **le problème**, pas Manarix en tant que marque. Le CTO doit penser : *cette personne comprend nos incidents de paiement*.

---

## 6. 50 prospects

Liste nominative : `docs/launch/prospects.md`.

Cadence semaine 1–4 :

- 10 prises de contact / jour ouvré (LinkedIn ou e-mail)
- 2 relances max, à J+4 et J+11
- Objectif : 8 diagnostics / mois → 2 propositions → 1 signature

---

## 7–10. Kit commercial

Dans `docs/launch/sales-kit.md` :

- messages LinkedIn / e-mail
- script de diagnostic
- trame de proposition
- contrat + facturation

---

## 11. Plan clients 1, 2 et 3

### Client 1 — référence (semaines 1–6)

**Cible :** une entreprise qui encaisse déjà, où tu as un warm intro, ou un pain visible (réconciliation manuelle, rail à ajouter).

**Offre :** Audit (plus facile à signer) **ou** Integration Sprint si le besoin est déjà cadré.

**Prix :** bas de fourchette acceptable **une seule fois**, jamais sous le plancher journalier. En échange : droit de citer ou témoignage écrit.

**Critère de succès :** facture 1 encaissée + livrable + demande de témoignage.

### Client 2 — répétition (semaines 5–10)

**Cible :** même ICP, canal outbound ou referral du client 1.

**Offre :** Sprint (intégration ou modernisation). Pas de remise « premier client ».

**Critère de succès :** cash > 1 M et un deuxième nom dans le pipeline retainer.

### Client 3 — début de récurrence (semaines 8–14)

**Priorité 1 :** convertir client 1 ou 2 en Technical Partner (750 k/mois).  
**Priorité 2 :** un troisième sprint si le retainer n'est pas mûr.

**Critère de succès :** au moins une ligne mensuelle, ou deux missions livrées et une troisième signée.

### Ce qui tue le plan

- six offres différentes dans le premier message
- travailler 6 semaines avant acompte
- accepter un « on te paie quand le projet lève »
- disparaître de LinkedIn dès qu'une mission commence

---

## 12. De freelance à cabinet

| Phase      | Toi                         | Manarix                         | Déclencheur                          |
| ---------- | --------------------------- | ------------------------------- | ------------------------------------ |
| 0 (maintenant) | Vente + delivery + contenu | Une marque, un site, un process | Premier client                       |
| 1          | Architecte + vente          | 1 prestataire backend ponctuel  | 2 retainers **ou** > 2 M/mois stables |
| 2          | Principal / BD              | Backend + un second profil      | 3 clients actifs, backlog 6 semaines |
| 3          | Direction technique         | Delivery team                   | Produit interne financé par le cash  |

Règle de non-fusion : **Saïfoulaye ≠ Manarix**. Dès le client 1, les livrables, le repo, les e-mails et les factures sont au nom de Manarix Solutions.

---

## Trajectoire cash (interne)

| Période  | Mix                         | Fourchette mensuelle |
| -------- | --------------------------- | -------------------- |
| Mois 1–3 | 1 mission                   | 750 k – 1,5 M        |
| Mois 4–6 | 1 mission + 1 petit retainer | 1,5 – 2,5 M         |
| Mois 7–12 | 2 retainers (+ sprints)    | 2 – 3 M+             |

Sous-traitance : seulement à partir de la phase 1, sur du delivery borné, jamais sur la relation client.

---

## Priorité de cette semaine

1. Publier / aligner le site (fait dans ce repo).
2. Mettre à jour le profil LinkedIn (texte dans le sales-kit).
3. Contacter les 15 prospects priorité A.
4. Ouvrir Calendly ou un créneau WhatsApp fixe pour le diagnostic.
5. Préparer le modèle de proposition et le contrat (sales-kit).
6. Écrire le premier post Payment Engineering.

Le logo, le SaaS et l'équipe peuvent attendre. Le premier client ne peut pas.
