# Svelte Firebase Template

This is a boilerplate of [SvelteKit](https://kit.svelte.dev) that auto deploys to [Firebase Hosting](https://firebase.google.com/)

# Development

To setup your dev environment easily use the following comands. This will automatically setup the dependencies specified below.

```
sh <(curl https://tea.xyz)
tea -SE
```

# Tasks

The following can be run with [`xc`], eg. `xc build`

## Setup

```sh
yarn
```

## Build

```sh
yarn
yarn workspace functions run build
yarn workspace app run build
```

## Dev

```sh
yarn
yarn workspace app run dev
```
## Format
```sh
yarn workspaces foreach run format
```

## Lint
```sh
yarn workspaces foreach run lint
```

## Deploy
```sh
yarn
yarn workspace functions run build
yarn workspace app run build
./node_modules/.bin/firebase deploy
```

You can preview the production build with `npm run preview`.

# Dependencies

| Project     | Version   |
| ----------- | --------- |
| nodejs.org  | =18.13.0  |
| npmjs.com   | =9.2.0    |
| yarnpkg.com | >=3.4.1   |
| xcfile.dev  | >=0.0.110 |
| git-scm.org | >=2.39.1  |

[`xc`]: https://xcfile.dev
