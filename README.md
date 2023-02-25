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
pnpm install
```

## Build

```sh
pnpm install
pnpm -r exec pnpm lint
```

## Dev

```sh
pnpm install
pnpm --filter app exec pnpm dev --open
```

## Lint
```sh
pnpm -r exec pnpm lint
```

You can preview the production build with `npm run preview`.

# Dependencies

| Project     | Version   |
| ----------- | --------- |
| nodejs.org  | =16.19.1  |
| pnpm.io     | >=7.27    |
| xcfile.dev  | >=0.0.110 |
| git-scm.org | >=2.39.1  |

[`xc`]: https://xcfile.dev
