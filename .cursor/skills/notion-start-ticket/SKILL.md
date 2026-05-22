---
name: notion-start-ticket
description: Charge le contexte d'un ticket Notion dans la session courante et le passe en statut "Doing". Ne fait pas d'implémentation. Utiliser quand l'utilisateur invoque /notion-start-ticket avec un ID ou une URL de ticket Notion.
disable-model-invocation: true
---

# /notion-start-ticket — Démarrer une session sur un ticket

Ce skill charge le contexte d'un ticket Notion et prépare la session de travail. Il ne touche pas au code.

## Étape 1 — Récupérer le ticket

Extrais l'ID du ticket depuis ce que l'utilisateur a fourni :
- URL complète : `https://www.notion.so/jkergal/Titre-**xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx**`
- ID brut : `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

Fetche le ticket via le MCP `notion` avec `retrieve_page`.

## Étape 2 — Afficher le contexte

Présente le ticket de façon lisible :

```
🎫 Ticket chargé

**[SCOPE] Titre**
Status : Doing (mis à jour)
Tags : Tag1, Tag2
Complexity : X

---
[Contenu de la description complète]
---

📌 Contexte session : [2-3 phrases résumant l'objectif et les critères d'acceptance en langage naturel]
```

## Étape 3 — Passer en "Doing"

Met à jour le statut du ticket via `update_page` : `Status → Doing`.

## Étape 4 — Lancer la réflexion technique

L'agent **déclenche immédiatement `/think`** à la suite de cette étape — c'est l'aboutissement naturel de `/notion-start-ticket`.

Passe le contexte du ticket (titre, description, critères d'acceptance) comme input à `/think` afin qu'il parte avec une base solide.

**Important — limite stricte :**

L'agent ne déclenche **ni `/plan`** ni l'implémentation de lui-même. Ces étapes sont initiées **uniquement** par l'humain, après avoir obtenu le brief de `/think`.
