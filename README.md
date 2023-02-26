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
npm install
```

## Build

```sh
npm install
npm run build --workspaces
```

## Dev

```sh
npm install
npm run dev --workspace=app
```

## Lint
```sh
npm run lint --workspaces
```

You can preview the production build with `npm run preview`.

# Dependencies

| Project     | Version   |
| ----------- | --------- |
| nodejs.org  | =18.13.0  |
| npmjs.com   | >=9.5.0   |
| xcfile.dev  | >=0.0.110 |
| git-scm.org | >=2.39.1  |

[`xc`]: https://xcfile.dev
