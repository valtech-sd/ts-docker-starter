# Docker Starter Project

This repository is an application template using Docker with Alpine Linux and Node.

# Installation

1. `npm i` (Docker currently draws this whole local repository folder in from the OS; we need to figure out where to put it when deploying to servers)
2. `docker-compose run --rm node` (starts Docker and runs `npm start` script)

# Notes

This repository is using the official Node Docker image for LTS on Alpine Linux. There are a few issues associated with this image ([it uses a different `libc`](https://github.com/nodejs/docker-node#nodealpine), `musl libc` instead of `glibc`) and a set of [best practices from the Node team](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) that we should read and follow.

## Questions



## To-Do

- [x] set up docker with node and alpine linux
     - [ ] `docker run` will stand up a localhost that says hello world
- [x] set up typescript
     - [x] index.ts
- [ ] http module in node with simple "hello world reply"
- [ ] dotfiles for prettier, eslint, et al.
     - [x] .prettierrc
     - [ ] .env.local
- [x] package.json starter
     - [x] npm scripts to build and start
- next steps
     - [ ] compose that pulls in volumes for rmq, mongo
     - [ ] pulls in data from local volumes (using the proper technique)
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