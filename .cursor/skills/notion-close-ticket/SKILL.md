---
name: notion-close-ticket
description: Clôture un ticket Notion en fin d'implémentation : met à jour le statut en "Done", ajoute un résumé d'implémentation dans le ticket, et crée optionnellement un ADR dans docs/adr/. Utiliser quand l'utilisateur invoque /notion-close-ticket ou signale qu'une tâche est terminée.
disable-model-invocation: true
---

# /notion-close-ticket — Clôturer un ticket

## Étape 1 — Récupérer le ticket

Extrais l'ID depuis ce que l'utilisateur a fourni (URL ou ID brut).  
Fetche le ticket via `retrieve_page` pour connaître son titre et son contenu actuel.

## Étape 2 — Résumé d'implémentation

Demande à l'utilisateur (ou infère depuis le contexte de la conversation) :

> Décris brièvement ce qui a été implémenté (2-5 phrases suffisent).

Utilise ce résumé pour construire le bloc ci-dessous.

## Étape 3 — Décision technique notable ?

Pose la question suivante **une seule fois** :

> Cette tâche implique-t-elle une décision technique notable (choix d'architecture, pattern retenu, compromis) qui mérite d'être documentée dans le code ?

- **Oui** → passe à l'étape 4A puis 4B
- **Non** → passe directement à l'étape 4B

## Étape 4A — Créer un ADR (si décision notable)

Crée un fichier dans `docs/adr/` en suivant le template dans [adr-template.md](adr-template.md).

Règles de nommage : `docs/adr/YYYY-MM-DD-titre-kebab-case.md`  
Exemple : `docs/adr/2026-05-21-checkin-message-depuis-db.md`

## Étape 4B — Mettre à jour le ticket Notion

Via `update_page`, ajoute à la description du ticket le bloc suivant et passe le statut en `Done` :

```
---
## ✅ Implémentation

[résumé de ce qui a été fait]

[si ADR créé] → Décision documentée : `docs/adr/YYYY-MM-DD-titre.md`
```

## Étape 5 — Confirmer

Affiche un résumé de ce qui a été fait :
- ✅ Ticket `[SCOPE] Titre` → Done
- 📄 ADR créé : `docs/adr/...` (si applicable)
