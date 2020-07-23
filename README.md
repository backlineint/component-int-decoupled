# Decopled Component Integration Sandbox

Demo sandbox in support of 'An overview of Drupal component integration techniques: decoupled edition"

## Slides
* Decoupled Days 2020 - Link TBD

## Prerequisites
* Lando - https://lando.dev/
* NodeJS - https://nodejs.org/en/

## Initial Setup

From the root of the repository run:

`./scripts/install.sh`

## Vue

A small Vue app is available within /vue-nes

For initial setup, run `npm install` (this will have run as part of the install script)

To serve the app, run `npm run serve`

## Integration Example Branches

This repository consists of a number of feature branches demonstrating different
component integration techniques. After changing branches you should run:

`./scripts/switch.sh`

In the root of the project.

### master

Default state with example Drupal game content and JSON:API exposed.

### custom-block

Custom block implementation that allows you to render a nes-container component
using the Decoupled Block custom block type.