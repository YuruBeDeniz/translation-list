# emtec Angular Assessment Test

The following instructions can be seen as guide to solve and fix the todos for this assessment in a meaningful way.

You don't need to follow this straight path, but we recommend you to do so to successfully accomplish all tasks.

## Introduction

This app was generated via the Angular CLI tools and made use of it's scaffolding functionality. Any class generated
via scaffolding includes test stubs. It consists of a simple Express API for delivering static content intended to be
consumed by the Angular app.

The general app structure generated via `ng init` has not been modified. It completely conforms with Angulars integrated schematics.

Any task can be found as a todo inside the app. All modules needed to solve the problem have already been imported.

Good luck!

## Prerequisites

- install latest Nodejs 14 (see https://nodejs.org/)
- run `npm install` (installs app's dependencies)
- run the API, type `npm run start-api` into your terminal.
- run the app, type `npm run start` into your terminal

## Tasks

### Routing

- Display routes inside `AppComponent`

You have a component called `TranslationListComponent`.

- Component should be display under `/translations`
- Any request should display this component.

### HTTP & Rxjs

- Get all languages from the API
- Get translations from API and transform result to match `this.translations`' type

### Translations

- Match current browser language against languages from API otherwise use a fallback
- Use the ngx_translate's `TranslatePipe` to translate app's title

### Angular Material

- Create a table with Angular's Material components and display translations

### Tests

Fill some of the test stubs with life or try to explain how testing of different parts of the app can be done.
