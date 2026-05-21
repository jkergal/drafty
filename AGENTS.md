# AGENTS.md — Drafty

> Fichier de contexte projet pour agents IA (Cursor, Claude Code, etc.).
> Toujours lire ce fichier en premier avant toute tâche sur ce dépôt.

---

## 1. Vision produit

**Drafty** est un bot Discord qui automatise l'organisation des **pods de draft Magic: The Gathering** au sein d'un serveur Discord communautaire.

Un "draft pod" est un tournoi informel de **8 joueurs** qui jouent en format limité (chaque joueur pioche des cartes depuis des boosters, construit son deck sur le moment, puis joue). Les pods sont organisés quotidiennement sur 7 jours. Le bot gère tout le cycle : annonce hebdomadaire → inscriptions via réactions emoji → détection de pod complet → notification des participants pour confirmation de présence (check-in).

**Contexte d'origine :** refonte complète d'un script JS spaghetti mono-fichier (`deprecated/drafty.js`), sans persistance, codé lors de l'apprentissage autodidacte du développeur. La refonte vise une architecture propre, testable, avec persistance Supabase et codebase TypeScript strict.

**Public cible :** serveurs Discord de joueurs Magic TG francophones organisant des drafts en ligne réguliers (serveur principal : "PERF LIMITE").

---

## 2. Glossaire métier

| Terme | Définition |
|-------|-----------|
| **Draft** | Format de jeu Magic où chaque joueur pioche des cartes de boosters et construit son deck en temps réel. |
| **Pod** | Table de 8 joueurs pour un draft. Un même jour peut avoir plusieurs pods si la demande dépasse 8. |
| **Pod day** | Créneau quotidien d'un pod (Lundi → Dimanche). Chaque jour est associé à un emoji personnalisé Discord. |
| **Draft asynchrone** | Variante du dimanche (emoji ⏰, 21h) où les joueurs draftent à leur propre rythme sans être simultanément en ligne. |
| **Enrollment message** | Message hebdomadaire posté dans le channel d'inscriptions. Contient les 7 jours de la semaine avec emojis réactifs. |
| **Enrollment** | Inscription d'un joueur à un pod : il réagit à l'emoji du jour souhaité sous le message hebdomadaire. |
| **Check-in** | Confirmation de présence demandée une fois un pod complet (8 joueurs). Posté dans un channel dédié avec ✅. |
| **MTG Format** | Set de cartes utilisé pour le draft (ex : `DND`, `ONE`, `VOW`). Configurable en base. |
| **Registration period** | Durée pendant laquelle les inscriptions restent ouvertes après le post du message (défaut : 11 jours). |
| **Max pod entries** | Nombre de joueurs pour remplir un pod (défaut : 8, configurable en DB). |

---

## 3. Règles métier

### 3.1 Cycle hebdomadaire
1. Un CronJob déclenche l'envoi du message d'inscriptions selon l'expression cron stockée en DB (`drafty_configurations.cron`).
2. Le message liste les 7 créneaux de la semaine suivante avec timestamps Discord dynamiques (`<t:unix:D>`).
3. Le bot réagit automatiquement au message avec les 8 emojis (7 jours + ⏰ async) pour les rendre cliquables.
4. **En dev uniquement** : si `IS_DEV_ENV && AUTO_REACT_ALL`, le bot envoie `!reactall` dans le channel pour qu'un bot externe (`soldiers.js`) simule les réactions.

### 3.2 Inscriptions
- Un joueur s'inscrit en réagissant avec l'emoji du jour.
- La réaction de l'auteur du message (le bot) est ignorée (filtre du collector).
- Chaque réaction déclenche un upsert du joueur (`players`) puis une entrée dans `player_pod`.
- Retrait de réaction → soft-delete de `player_pod` (`deleted_at` renseigné).
- Un joueur ne peut être inscrit qu'une fois par pod (contrainte `unique_player_per_pod` en DB).
- Maximum `max_pod_entries` joueurs par pod (contrainte `check_max_entries_per_pod` en DB, hardcodée à `<= 8` dans la fonction SQL malgré la colonne configurable).

### 3.3 Pod complet
- Quand un pod atteint `maxPodEntries` réactions (reason `limit` du collector), le bot :
  - **Pod 1** → poste dans `CHECKIN_CHANNEL_1` : `pod1 OK` + réaction ✅
  - **Pod 2** → poste dans `CHECKIN_CHANNEL_2` : `pod2 OK` + réaction ✅
  - **Pod ≥ 3** → poste un message d'alerte dans le channel d'inscriptions demandant aux admins de créer manuellement les channels.
- Le collector est **relancé** sur le même message pour gérer un éventuel pod suivant.

### 3.4 Priorité aux inscrits sans pod complet
Les joueurs inscrits mais dans un pod non encore plein sont prioritaires sur les remplacements (désistements, absences de check-in). Cette règle est mentionnée dans le message d'enrollment mais non gérée automatiquement par le bot.

---

## 4. Architecture technique

### Stack

| Couche | Technologie |
|--------|------------|
| Langage | TypeScript 5.x (strict) |
| Runtime | Node.js 18.x |
| Package manager | pnpm 8.x (workspaces monorepo) |
| Bot framework | discord.js v14 (Gateway Intents : Guilds, GuildMessages, GuildMessageReactions) |
| Scheduling | cron 4.x (`CronJob`) |
| Dates | dayjs |
| Base de données | PostgreSQL 14 via Supabase |
| Client DB | @supabase/supabase-js 2.x |
| Tests | Jest 30 + ts-jest |
| Linting | ESLint 9 (flat config, TypeScript strict) |
| Formatting | Prettier 3 |
| CI | GitHub Actions |

### Structure du monorepo

```
drafty/
├── AGENTS.md                         ← ce fichier
├── Readme.md                         ← setup & conventions
├── package.json                      ← scripts racine (dev:bot, prettier, clean)
├── pnpm-workspace.yaml
├── .nvmrc                            ← Node 18.15.0
├── .prettierrc
├── .github/
│   ├── workflows/
│   │   ├── bot.yml                   ← lint + test + build sur PR
│   │   └── database.yml              ← Supabase start + gen types sur PR
│   └── actions/                      ← actions composites réutilisables
├── bot/                              ← package du bot Discord
│   ├── package.json
│   ├── tsconfig.json                 ← target ES2021, CJS, path aliases @/* et @database/*
│   ├── jest.config.js
│   ├── eslint.config.js
│   ├── nodemon.json
│   ├── .env.example
│   └── src/
│       ├── index.ts                  ← entry point : login Discord + wire listeners + start job
│       ├── env.ts                    ← IS_DEV_ENV, AUTO_REACT_ALL
│       ├── constants/
│       │   ├── drafty.ts             ← POD_DAYS, POD_HOUR, CURRENT_MTG_FORMAT (legacy)
│       │   ├── emojis.ts             ← ASYNC_EMOJI (⏰)
│       │   ├── time.ts
│       │   ├── cron-params.ts        ← non utilisé (orphelin)
│       │   └── validations.ts
│       ├── types/
│       │   ├── types.d.ts            ← Command, Channels, DraftyConfig, PodDay*, PodParams
│       │   └── environment.d.ts      ← typage des variables d'environnement
│       ├── errors/
│       │   └── postgres-error-fr.ts  ← mapping erreurs Supabase/Postgres
│       ├── database/
│       │   ├── supabase.ts           ← createSupabaseClient() (anon key)
│       │   └── supabase-admin.ts     ← client service role — non utilisé actuellement
│       ├── helpers/
│       │   ├── dates/
│       │   │   ├── get-day-of-next-week-timestamp.ts  ← getDayOfNextWeekTimestamp, getDayOfNextfWeekDate
│       │   │   └── to-db-date.ts                      ← ISO date slice pour soft-delete
│       │   ├── format/
│       │   │   ├── format-discord-timestamp.ts        ← <t:unix:D> et <t:unix:d>
│       │   │   ├── format-cron-params.ts              ← non utilisé (orphelin)
│       │   │   └── format-enrollment-message.ts       ← template hardcodé — supersédé par DB
│       │   └── computing/
│       │       └── convert-days-to-ms.ts              ← durée collector en ms
│       └── core/
│           ├── data/
│           │   └── drafty-configurations/
│           │       └── repository.ts                  ← getDraftyConfigCron, getDraftyConfigDetails
│           ├── discord/
│           │   ├── commands/
│           │   │   ├── hello.ts                       ← /hello (demo)
│           │   │   └── _index.ts                      ← tableau Commands exporté
│           │   ├── listeners/
│           │   │   ├── ready.ts                       ← register commands + start job
│           │   │   ├── interaction-create.ts          ← router slash commands
│           │   │   └── entry-reactions-collector/
│           │   │       ├── index.ts                   ← entryReactionsCollectorListener
│           │   │       ├── entries-collecting-end.ts  ← handler pod complet
│           │   │       └── repository.ts              ← addPlayer, addPodEntry, deletePodEntry, ...
│           │   ├── actions/
│           │   │   ├── send-text-message.ts
│           │   │   └── init-enrollment-reactions.ts   ← 8 réactions sur le message
│           │   └── cache/
│           │       ├── get-channel.ts                 ← résolution channels via env
│           │       ├── get-guilds.ts                  ← résolution guild via env
│           │       └── get-emojis.ts                  ← résolution emojis custom via env
│           └── jobs/
│               └── enrollment-message/
│                   ├── enrollment-message.job.ts      ← orchestrateur : cron vs dev
│                   ├── service.ts                     ← sendEnrollmentMessageService, openPodsRegistrationService
│                   ├── repository.ts                  ← createPod, createEnrollmentMessage
│                   └── _helpers/
│                       └── hydrate-enrollment-message.ts ← substitution des $TAG$
└── database/                         ← package Supabase
    ├── package.json
    ├── supabase/
    │   ├── config.toml               ← ports locaux : API 54331, DB 54332, Studio 54333
    │   ├── seed.sql                  ← drafty_configurations initial
    │   ├── reset.sql
    │   └── migrations/
    │       ├── 000001_init.sql                        ← schéma initial
    │       └── 20250923095213_entries_collection.sql  ← players, player_pod, refacto pods
    ├── types/
    │   ├── generic.types.ts
    │   └── __generated__/
    │       ├── database.types.ts     ← généré par Supabase CLI
    │       └── main.types.ts         ← aliases T* (TDraftyConfigurations, TPods, etc.)
    ├── docs/                         ← dumps SQL générés (tables, policies, functions)
    └── scripts/generate-main-types.sh
```

---

## 5. Modèle de données

### Schéma PostgreSQL (Supabase)

#### `drafty_configurations` — Singleton de configuration
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | uuid PK | `00000000-0101-0101-0101-010101010101` |
| `created_at` | timestamptz | |
| `enrollment_message_content` | text | Template avec `$TAG$` placeholders |
| `checkin_message_content` | text | Placeholder — non utilisé dans le code actuellement |
| `cron` | text | Expression cron pour le CronJob production |
| `current_mtg_format` | text | Code du set MTG actuel (ex: `DND`) |
| `max_pod_entries` | int | Taille d'un pod complet (défaut : 8) |
| `registration_period_in_days` | int | Durée d'ouverture des inscriptions (défaut : 11) |

#### `enrollment_messages` — Messages hebdomadaires postés
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | uuid PK | |
| `discord_id` | text | ID du message Discord |
| `created_at` / `updated_at` / `deleted_at` | timestamptz | Soft-delete |

#### `pods` — Créneau par jour d'un enrollment
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | uuid PK | |
| `enrollment_message_id` | uuid FK → enrollment_messages | |
| `pod_date` | timestamptz | Date du créneau de la semaine suivante |
| `reaction_emoji_name` | text | Nom de l'emoji (ex: `l_letter`, `⏰`) |
| `created_at` / `updated_at` / `deleted_at` | timestamptz | |

#### `players` — Joueurs Discord enregistrés
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | uuid PK | |
| `discord_id` | text UNIQUE | ID Discord du joueur |
| `discord_username` | text | |
| `discord_tag` | text | |
| `created_at` / `updated_at` / `deleted_at` | timestamptz | |

#### `player_pod` — Inscriptions (join table)
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | uuid PK | |
| `player_id` | uuid FK → players | |
| `pod_id` | uuid FK → pods | |
| `created_at` / `updated_at` | timestamptz | |
| `deleted_at` | timestamptz | Soft-delete (désinscription) |
| — | UNIQUE (player_id, pod_id) | Un joueur une fois par pod |
| — | CHECK `check_max_entries_per_pod` | Max 8 joueurs par pod |

### Fonction DB
```sql
check_max_entries_per_pod(_pod_id uuid) → boolean
-- Retourne true si count(player_pod WHERE pod_id = _pod_id) <= 8
-- ⚠️ Hardcodée à 8, ne lit pas max_pod_entries de la config
```

---

## 6. Flux principal (séquence)

```
CronJob (production) / immédiat (dev)
    │
    ▼
enroll(client)
    ├── getChannels(client)         → résolution env → enrollmentsChannel, checkinChannel1/2
    ├── getGuild(client)            → résolution GUILD_ID
    ├── getDraftyConfigDetails()    → enrollmentMessageContent, currentMtgFormat, maxPodEntries, registrationPeriodInDays
    ├── hydrateEnrollmentMessage()  → substitution des $TAG$ avec timestamps Discord + emojis + format
    ├── sendEnrollmentMessageService()
    │       ├── sendTextMessage(enrollmentsChannel, hydratedMessage)
    │       └── createEnrollmentMessage(supabase, { discord_id })  → enrollment_messages
    ├── initEnrollmentReactions(sentMessage, guild)
    │       └── message.react() × 8 (7 emojis custom + ⏰)
    └── openPodsRegistrationService()
            └── Pour chaque réaction (8 pods possibles) :
                    ├── createPod(supabase, { enrollment_message_id, reaction_emoji_name, pod_date })
                    └── entryReactionsCollectorListener(sentDiscordMessage, params)
                            ├── collector.on('collect') →
                            │       ├── addPlayer (upsert players)
                            │       ├── getPodIdByMessageDiscordIdAndEmojiName
                            │       └── addPodEntry (insert player_pod)
                            ├── collector.on('remove') →
                            │       ├── getPlayerByDiscordId
                            │       └── deletePodEntry (soft-delete player_pod)
                            └── collector.on('end', reason='limit') →
                                    ├── [pod 1] → checkinChannel1.send("pod1 OK") + ✅
                                    ├── [pod 2] → checkinChannel2.send("pod2 OK") + ✅
                                    ├── [pod ≥ 3] → alert dans enrollmentsChannel
                                    └── relancer entryReactionsCollectorListener (overflow)
```

---

## 7. Système de templates — Message d'enrollment

Le contenu du message est stocké en DB dans `enrollment_message_content` avec des placeholders `$TAG$`. La fonction `hydrateEnrollmentMessage()` les remplace à l'exécution.

### Tags disponibles

| Tag | Valeur injectée |
|-----|----------------|
| `$WEEK_START_DATE` | Timestamp Discord court du lundi suivant (`<t:unix:d>`) |
| `$WEEK_END_DATE` | Timestamp Discord court du dimanche suivant (`<t:unix:d>`) |
| `$EMOJI_MONDAY` … `$EMOJI_SUNDAY` | Emoji custom Discord du jour |
| `$EMOJI_ASYNC` | `⏰` (unicode, pas custom) |
| `$TIMESTAMP_NEXT_WEEK_MONDAY` … `$TIMESTAMP_NEXT_WEEK_SUNDAY` | Timestamp Discord long du jour (`<t:unix:D>`) |
| `$CURRENT_MTG_FORMAT` | Code du set (ex: `DND`) |

---

## 8. Variables d'environnement

Fichier de référence : `bot/.env.example`

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `DISCORD_BOT_TOKEN` | oui | Token du bot Discord |
| `GUILD_ID` | oui | ID du serveur Discord cible |
| `ENROLLMENTS_CHANNEL` | oui | ID channel pour le message hebdo |
| `CHECKIN_CHANNEL_1` | oui | ID channel check-in pod 1 |
| `CHECKIN_CHANNEL_2` | oui | ID channel check-in pod 2 |
| `CHECKIN_ASYNC_CHANNEL` | oui | ID channel check-in async (chargé, non utilisé dans le flux) |
| `TUTORIAL_CHANNEL` | oui | ID channel tuto (chargé, non utilisé dans le flux) |
| `MONDAY_EMOJI` … `SUNDAY_EMOJI` | oui | IDs des emojis custom Discord (7 emojis) |
| `SUPABASE_URL` | oui | URL Supabase (local : `http://localhost:54331`) |
| `ANON_KEY` | oui | Clé anonyme Supabase |
| `SERVICE_ROLE_KEY` | oui | Clé service role (pour `supabase-admin.ts`, non utilisé) |
| `API_URL` | oui | URL API Supabase locale |
| `GRAPHQL_URL` | non | URL GraphQL Supabase (stack local) |
| `DB_URL` | non | URL connexion directe PostgreSQL |
| `STUDIO_URL` | non | URL Supabase Studio |
| `INBUCKET_URL` | non | URL Inbucket (emails de dev) |
| `JWT_SECRET` | non | JWT secret Supabase local |
| `NODE_ENV` | non | `development`/`dev` → lance `enroll()` immédiatement sans cron |
| `AUTO_REACT_ALL` | non | `true` → envoie `!reactall` (bot `soldiers.js` requis) |

> **Attention :** `environment.d.ts` déclare `SUPABASE_URL` comme requis mais `bot/.env.example` liste `API_URL` comme URL Supabase. Ce sont les mêmes en local (`http://localhost:54331`). Penser à ajouter `SUPABASE_URL` au `.env.example`.

---

## 9. Développement local

### Prérequis
- Node.js 18.15.0 (`.nvmrc`)
- pnpm 8.x
- Docker + Docker Compose (compose file absent du repo — à créer)
- Supabase CLI

### Démarrage

```bash
# 1. Installer les dépendances
pnpm install

# 2. Démarrer Supabase en local (dans database/)
cd database && pnpm dev
# → API sur :54331, DB sur :54332, Studio sur :54333

# 3. Configurer le .env
cp bot/.env.example bot/.env
# remplir les valeurs

# 4. Démarrer le bot (mode dev : enrollment immédiat, sans cron)
pnpm dev:bot
```

### Scripts utiles

| Commande | Contexte | Description |
|----------|----------|-------------|
| `pnpm dev:bot` | racine | Démarre le bot avec nodemon |
| `pnpm test` | `bot/` | Lance les tests Jest |
| `pnpm lint` | `bot/` | ESLint |
| `pnpm build` | `bot/` | Compile TypeScript |
| `pnpm dev` | `database/` | Démarre Supabase local |
| `pnpm db:reset` | `database/` | Reset + seed DB |
| `pnpm gen:types` | `database/` | Génère les types TypeScript depuis le schéma |
| `pnpm dump:tables` | `database/` | Exporte le schéma dans `docs/*.generated.sql` |

---

## 10. Conventions de code

### Commits (Conventional Commits)

Structure : `<type>(scope optionnel): <description>`

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `refactor` | Refactoring sans changement de comportement |
| `test` | Tests |
| `docs` | Documentation |
| `ci` | CI/CD |
| `build` | Dépendances / build system |
| `chore` | Maintenance |
| `perf` | Performance |
| `style` | Formatage |
| `revert` | Revert |

### Branches

Structure : `<initiales>/<type>/<description-courte>`

Exemples : `jk/feat/checkin-message-from-db`, `jk/fix/friday-emoji-name`

### TypeScript
- Strict mode activé.
- Path aliases : `@/*` → `bot/src/*`, `@database/*` → `database/*`.
- `ts-case-convert` (`objectToCamel`) pour les résultats Supabase.
- Pas de `any` implicite.

### Organisation
- Un repository par module métier (pas de repository global).
- Les `helpers/` sont des fonctions pures sans effets de bord.
- Les `actions/` Discord encapsulent les appels à l'API Discord.
- Les `listeners/` gèrent les événements Discord.
- Les `cache/` résolvent les ressources Discord depuis le cache du client via les env vars.

---

## 11. Tests

Couverture actuelle : **helpers uniquement** (3 fichiers de test).

| Fichier | Teste |
|---------|-------|
| `format-cron-params.test.ts` | Formatage expression cron |
| `format-discord-timestamp.test.ts` | Format `<t:unix:D>` et `<t:unix:d>` |
| `get-day-of-next-week-timestamp.test.ts` | Calcul timestamp jour semaine suivante |

> Aucun test d'intégration, aucun test E2E. Les repositories et le flux principal ne sont pas testés.

---

## 12. CI/CD

### `bot.yml` (PR)
1. Install pnpm + dépendances
2. `pnpm lint`
3. `pnpm test`
4. `pnpm prettier` (write)
5. `pnpm build`

### `database.yml` (PR)
1. Install Supabase CLI
2. `supabase db start`
3. Génération des types (`pnpm gen:types` — le CI appelle `generate:types`, nom à aligner)
4. Auto-commit des fichiers générés
5. Vérification que le build bot passe toujours

**Branches protégées :** `main` — squash merge uniquement, 1 approbation requise, historique linéaire.

---

## 13. Known issues & TODOs actifs

> Ces items sont identifiés par des `@TODO` dans le code ou des incohérences détectées.

| Priorité | Fichier | Problème |
|----------|---------|----------|
| HAUTE | `entries-collecting-end.ts` | Message check-in hardcodé (`"pod1 OK"`) au lieu d'utiliser `checkin_message_content` depuis la DB. |
| HAUTE | `entries-collecting-end.ts` | `@TODO: get entries from db` — les participants ne sont pas taggés dans le message check-in (récupérer depuis `player_pod`). |
| HAUTE | `20250923095213_entries_collection.sql` | La contrainte `check_max_entries_per_pod` est hardcodée à `<= 8` et ne lit pas `max_pod_entries` de la config. |
| MOYENNE | `constants/drafty.ts` | `friday` a `emojiName: 'j_letter'` identique à `thursday` — probable copier-coller. `saturday` a `'v_letter'` et `sunday` a `'s_letter'` — les lettres semblent décalées d'un jour. |
| MOYENNE | `environment.d.ts` / `.env.example` | `SUPABASE_URL` manque dans `.env.example` mais est requis dans le code. |
| MOYENNE | `.github/workflows/database.yml` | Script CI `generate:types` vs `gen:types` dans `package.json` — à aligner. |
| BASSE | `supabase-admin.ts` | Client service role exporté mais jamais importé. |
| BASSE | `format-enrollment-message.ts` | Template hardcodé en français — orphelin depuis l'adoption du système DB + `hydrate`. À supprimer. |
| BASSE | `constants/cron-params.ts` | Constantes cron non utilisées. À supprimer ou connecter. |
| BASSE | `Readme.md` | Mentionne pnpm 7.30.1 alors que le projet utilise 8.x. URLs Docker non fonctionnelles (compose absent du repo). |
| BASSE | `bot/Readme.md` | Vide (stub `# Bot`). |
| INFO | `CHECKIN_ASYNC_CHANNEL` | Channel chargé mais non utilisé dans le flux principal. |
| INFO | `TUTORIAL_CHANNEL` | Channel chargé mais non utilisé. |

---

## 14. Roadmap / Features à construire

> Liste indicative basée sur les lacunes identifiées et la logique produit.

- [ ] **Check-in message complet** : récupérer les `player_pod` depuis la DB et tagger les 8 joueurs dans le message check-in.
- [ ] **Message check-in depuis la DB** : utiliser `checkin_message_content` + système de tags similaire à l'enrollment.
- [ ] **Gestion des pods async** : connecter `CHECKIN_ASYNC_CHANNEL` au flow.
- [ ] **Correction des emoji names** : valider et corriger le mapping emoji/jour dans `POD_DAYS`.
- [ ] **Contrainte DB dynamique** : utiliser `max_pod_entries` de la config dans la fonction `check_max_entries_per_pod`.
- [ ] **Commandes slash admin** : `/set-format`, `/set-cron`, `/cancel-pod`, etc.
- [ ] **Tests d'intégration** : repositories + flux enrollment.
- [ ] **Docker Compose** : ajouter le fichier manquant pour le dev local.
- [ ] **Déploiement** : Dockerfile + manifest de déploiement (Railway, Fly.io, VPS...).
- [ ] **Gestion d'erreurs structurée** : remplacer les `console.error` orphelins par une vraie stratégie.
