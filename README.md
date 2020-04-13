# Typescript Docker Starter

This repository is an application template using Docker with Alpine Linux, Node LTS, and Typescript. It starts up and exposes a web server on port 5000 that returns a `Hello, world.` for all requests. 

# Installation

1. Clone this repository.
2. Install the node modules with `npm i`.  *(Docker currently pulls in this whole local repository folder as a mounted volume; this practice might change in the future for deploying to servers.)*
3. Start Docker with `docker-compose run --rm -p 5000:5000 node` (starts Docker and runs `npm start` script)

# Notes

This repository is using the official Node Docker image for LTS on Alpine Linux. There are a few issues associated with this image ([it uses a different `libc`](https://github.com/nodejs/docker-node#nodealpine), `musl libc` instead of `glibc`) and a set of [best practices from the Node team](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) that we should read and follow.

*Add notes on how to fix libc issues and why `--init` might be required.*

## Questions



## To-Do

- [x] set up docker with node and alpine linux
     - [x] `docker run` will stand up a localhost that says hello world
- [x] set up typescript
     - [x] index.ts
- [x] http module in node with simple "hello world reply"
     - [x] expose port 5000
- [x] dotfiles for prettier, eslint, et al.
     - [x] .prettierrc
     - [ ] .eslintrc.js
     - [ ] .env.local?
- [x] package.json starter
     - [x] npm scripts to build and start
- next steps
     - [ ] ~~compose that pulls in volumes for rmq, mongo~~
     - [x] pulls in data from local volumes (using the proper technique)
- [ ] review best practices: <https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md>
     - `docker run -it --init node` 
          - `-i` = interactive
          - `-t` = allocate a pseudo-TTY
          - `--init` = "Run an init inside the container that forwards signals and reaps processes"

## Scratch Paper

These lines were from a Docker tutorial. They work great for ubuntu, but not always for Alpine, which doesn't have `bash` installed by default.

```bash
alias docker-enter="docker-compose run --rm --service-ports app /bin/bash"
alias docker-enter-again="docker-compose run --rm app /bin/bash"
alias docker-clean="docker ps -a | grep 'Exited\|Created' | cut -d ' ' -f 1 | xargs docker rm"
```