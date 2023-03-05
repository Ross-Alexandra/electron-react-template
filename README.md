# React frontend template

## Template Info
A GH template for my Electron/React apps. Automatically packages:
 - @ross-alexandra/react-utilities
 - lodash
 - @emotion/styled

This react template uses Typescript, ESlint, & Jest.

## Exporting API functions
This repo is setup so that any functions exported from `electron/api-functions` will
automatically be included (with type safety) on `window.api`.