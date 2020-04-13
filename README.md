# Typescript Docker Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg)](https://github.com/ellerbrock/typescript-badges/)


This repository is an application template using Docker with Alpine Linux, Node LTS, and Typescript. It starts and exposes a web server on port `5000` that returns a *hello world* HTML page for all requests. 

## Installation

1. [Install Docker](https://www.docker.com/products/docker-desktop), if you have not already done so.
2. Clone or download this repository.
3. Before running the container for the first time, you may need to build its image locally with `docker build .` from the root of this repository.
4. Install the node modules with `npm i`.  *(Docker currently pulls in the whole local repository folder as a mounted volume; this practice might change in the future for deploying to servers.)*
5. Start Docker with `docker-compose run --rm --service-ports node` 

     - `--rm` removes the container after it runs, to clean up
     - `--service-ports` makes sure that the port-forwarding works ([it does not forward by default](https://docs.docker.com/compose/reference/run/))
     - starts the `node` service in the `docker-compose.yml` and runs the `npm start` script

## What is in this starter project?

### Docker with Node.js LTS

We have a simple `Dockerfile` and use `docker-compose.yml` to put most command line parameters into YAML configuration instead.

This repository uses the official Node Docker image for LTS on Alpine Linux. There are a few issues associated with this image ([it uses a different `libc` module](https://github.com/nodejs/docker-node#nodealpine) — `musl libc` instead of `glibc`), and the Node team provides a set of [best practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) that we have read and should follow on projects.

- ✔️ Run as `node` user, instead of `root`.
- ✔️ Use environment variable `NODE_ENV=production`.
- ✔️ Put global dependencies in non-root user directory.
- ... [Limit how much memory](https://docs.docker.com/config/containers/resource_constraints/#limit-a-containers-access-to-memory) the container consumes.
- ... Run [Docker Bench for Security](https://github.com/docker/docker-bench-security) audit script.
- ... Bake startup script directly into Dockerfile with 

          CMD ["node","index.js"]

     (or use `init`).  
     *See docker-compose.yml comments.*

> **Note:** If you are using VSCode, there is an official [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) to make it easier to manage your containers.

### TypeScript

There is a `tsconfig.json` in the root directory. Per TypeScript's defaults, we 
- keep source `.ts` files in `./src` 
- generate `.js` files in `./built`.  

To rebuild, type `npm run build`, which will 

- run `rimraf` on the `./built` folder (clears everything with a `rm -rf`)
- build with `tsc`

### ESLint

`.eslintrc` is the JSON configuration file for [ESLint](https://eslint.org) created by running `npx eslint --init`. It should be set up with TypeScript formatting, and correct double-quotes to single quotes for consistency.

### Prettier

`.prettierrc` is the JSON configuration file for [Prettier](https://prettier.io). Currently, it only enforces single quotes.

### Mocha

Tests are configured for `mocha`. Node looks in the standard `./test` folder for tests.

- `mocha` and the `@types/mocha` type definitions are dev dependencies.
- There is an `npm run test` script that calls `mocha` and registers it with `ts-node` so that tests can be written in TypeScript.

> **Note:** If you're using VSCode, there is a `.vscode/launch.json` set up for easier debugging.

## Future work

- Refine this repository as our needs and understanding of Docker grow.
- Determine our best practice for mounting data volumes. (Here is a [potential issue](https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds) to watch out for.)