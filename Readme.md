# Welcome to DRAFTY 🤖

A Discord bot that automatically organizes draft tournaments on Magic The Gathering Discord servers.

## Requirements

To use this repository, you need to have the following tools installed:

- [Node.js](https://nodejs.org/en/) (v18.15.0)
- [pnpm](https://pnpm.io/installation) (v7.30.1)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

We use [pnpm](https://pnpm.io/workspaces) built-in support to manage our monorepository.

## URLS (Docker Containers)

- Adminer : `localhost:7000`
- Server : `localhost:6000`

## Install dependencies

To install all dependencies, run:

```
pnpm install
```

If you want to **clean** all dependencies, you can run:

```
pnpm clean
```

Then reinstalls dependencies.

## First start of bot

```
pnpm dev:bot
```

Now you are ready !

## Commit types / Branch prefixes

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specs for our commit message and this is check on `commit-msg`.

Here is the list of commit types and branch prefixes you can chose from :

| Commit Type | Title                       | Description                                                                                            |
| ----------- | --------------------------- | :----------------------------------------------------------------------------------------------------- |
| `feat`      | ✨ Features                 | A new feature                                                                                          |
| `fix`       | 🐛 Bug Fixes                | A bug Fix                                                                                              |
| `docs`      | 📚 Documentation            | Documentation only changes                                                                             |
| `style`     | 💎 Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| `refactor`  | 📦 Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                              |
| `perf`      | 🚀 Performance Improvements | A code change that improves performance                                                                |
| `test`      | 🚨 Tests                    | Adding missing tests or correcting existing tests                                                      |
| `build`     | 🛠 Builds                    | Changes that affect the build system or external dependencies (example scopes: next, webpack, pnpm)    |
| `ci`        | ⚙️ Continuous Integrations  | Changes to our CI configuration files and scripts                                                      |
| `chore`     | ♻️ Chores                   | Other changes that don't modify src or test files                                                      |
| `revert`    | 🗑 Reverts                   | Reverts a previous commit                                                                              |

**Structure :**

```
<user>/<type>/<short-description>
```

**Examples :**

```
rv/feat/signup-page
jk/ci/github-actions-setup
nc/fix/calendar-input-focus-not-working
```

### Commit messages

**Structure :**

```
<type>(optional scope): <description>
```

**Examples :**

```
ci(front): setup storybook tests
fix: send cors headers
feat(groups): add comment section
```

### Prettier

To maintain some minimal standards within our codebase, we rely on [prettier](https://prettier.io/) that is configured through `.prettierrc`. We use `.prettierignore` to avoid conflicts with some configuration files that would otherwise be broken by using prettier. Make sure prettier is correctly used in VSCode by installing the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### Node version

We did set up a `.nvmrc` file to allow developers to quickly change and use the right node version. See [nvm](https://github.com/nvm-sh/nvm) package and [deeper shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration).
