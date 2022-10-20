node --version
npm --version

npm init       ==> create and configure package.json
npm i          ==> install npm modules, packages
npm install    ==> install npm modules, packages

npm install express  ==> installing express.js, nop_modules, package-lock.json
npm install @angulage/cli ==> installing angular cli

npm i nodemon         ==> install nodemon for the quick refresh on brower and preventing from site crash
npm i -g nodemon      ==> install nodemon globally in node modules

npm install --save-dev nodemon    ==> For dev dependencies which won't get installed during prod

npm uninstall express     ==> uninstalling package express.js

NOTE: package-lock.json is dependencies tree list of the packages like express js package's dependencies..

2 Types in NodeJS
=================
1. CommonJS Modules (example in folder 'commonjs' => index.js, second.js)           const myObj = require("./second")
2. ECMAScripts / ES6 Modules (example in folder 'ecmas_es6')
    - Note: need to add 'type: module' in package.json file to enable es6