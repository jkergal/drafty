---
name: notion-plan-ticket
description: Crée un ticket structuré en User Story dans le Kanban Notion Drafty à partir d'une description verbale. Inclut une validation humaine obligatoire avant création. Utiliser quand l'utilisateur invoque /notion-plan-ticket ou demande à créer un ticket Notion.
disable-model-invocation: true
---

# /notion-plan-ticket — Créer un ticket Notion

## Étape 1 — Comprendre le besoin

Lis la description fournie par l'utilisateur. Si des informations manquent pour structurer le ticket, pose les questions suivantes (une seule fois, groupées) :

- **Périmètre** : quel module est concerné ? (Bot, DB, Checkin, Enrollment, CI, Setup, Test, Refacto, AI)
- **Contexte** : pourquoi ce besoin existe-t-il maintenant ?
- **Critères d'acceptance** : comment saura-t-on que c'est terminé ?

Si la description est suffisamment claire, passe directement à l'étape 2 sans poser de questions.

## Étape 2 — Structurer le ticket

Rédige le ticket complet **en français** selon ce format :

```
[SCOPE] Titre concis et limpide

---
En tant que [utilisateur/système], je veux [fonctionnalité] afin de [bénéfice].

## Contexte
Pourquoi ce ticket existe, quel problème il résout.

## Critères d'acceptance
- [ ] critère 1
- [ ] critère 2
- [ ] critère 3

## Notes techniques (optionnel)
Contraintes ou recommandations de conception si pertinentes.
```

Choisis les valeurs des champs Notion :
- `Status` → `Backlog`
- `Tags` → un ou plusieurs parmi : `Front-end`, `Back-end`, `Figma`, `Setup`, `Thinking`, `Devops`, `Cron`, `Database`, `Message`, `Test`, `Refacto`, `Architecture`, `Bot`
- `Complexity` → estimation Fibonacci : `1` `2` `3` `5` `8` `13` `21`
- `Assign` → Johann Kergal

## Étape 3 — Validation humaine (OBLIGATOIRE)

**STOP.** Présente le ticket complet à l'utilisateur avec tous ses champs et attends sa validation explicite avant de créer quoi que ce soit dans Notion.

Format de présentation :
```
📋 Voici le ticket proposé :

**Titre :** [SCOPE] Titre
**Status :** Backlog
**Tags :** Tag1, Tag2
**Complexity :** X
**Assign :** Johann Kergal

**Description :**
[contenu complet]

---
✅ Confirmes-tu la création de ce ticket dans Notion ?
```

## Étape 4 — Création dans Notion

Sur validation de l'utilisateur, crée le ticket via le MCP `notion` :
- Base de données ID : `11003dafa7b84477b09dca70efa784d2`
- Utilise l'outil `create_page` avec les propriétés structurées

Confirme la création en affichant l'URL Notion du ticket créé.
