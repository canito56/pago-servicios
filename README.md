# PagoServicios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Crear backend

1_ creo carpeta backend (ver archivos que creé adentro, la carpeta backend cuelga directo del proyecto).

2_ Luego hice:
PS C:\Users\jorge.bardaro\vsc-workspace\shopping-list\backend> npm init -y

emitió el sig mensaje:
Wrote to C:\Users\jorge.bardaro\vsc-workspace\shopping-list\backend\package.json:
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

3_ Luego instalo lo sig:
npm i express cors uuid

added 60 packages, and audited 61 packages in 9s
7 packages are looking for funding
  run `npm fund` for details

4_ Luego ejecuté lo sig en cmd para levantar el servidor:
PS C:\Users\jorge.bardaro\vsc-workspace\shopping-list\backend> node server
servidor iniciado...

una vez que aparece el mensaje 'servidor iniciando...' (este msg está en server.js) voy al navegador y pongo la url '<http://localhost:3001/>
y ahora aparece en el navegador el msg 'Servidor de prueba' (este msg está en server.js).

## General

En items.component vamos a tener el contenedor de la información de como vamos a ir desplegando la info de la lista de
compras.
