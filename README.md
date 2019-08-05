# Mckissick-dev-fast
## Replacement for react based McKissick.dev

[![GitHub license](https://img.shields.io/github/license/DavidMcKissick/Mckissick-dev-fast)](https://github.com/DavidMcKissick/Mckissick-dev-fast/blob/master/license.md)

This app is being made with the purpose of A) practice and B) speed. Frameworked webapps are great and practically the only way to go for 
larger apps, but in the case of my extremely simple site, it's just wasted overhead.

### Technologies used
- Gulp
- Cypress
- Browser-sync
- Sass / Gulp-sass
- Webpack
- Eslint

### How to run
#### Setup
These directions follow the assumption you have NPM installed.
1. npm i -g browser-sync
2. npm i -g gulp-cli
3. npm i -g sass

#### Install and run
1. Clone the repository
2. cd into the repository
3. npm i
4. gulp dev

#### Running tests
1. npm i cypress --save
2. Assuming you have npm > 5.2: npx cypress open, if not, ./node_modules/.bin/cypress open
3. Select the test file to run and run it.

#### Troubleshooting
If when trying to run gulp commands (E.G. gulp dev) you get ENOENT errors, just use the following command: npm rebuild node-sass
This fixes it most of the time. If there's a different issue that isn't cured by a rebuild, submit an issue and I'll look into it.

