# Gistbox

## Table of Contents

1. [Overview](#overview)
2. [Setup](#setup)
3. [Serve Project](#serve)
4. [Browserify & Babel](#modules)
5. [Gulp Tasks](#tasks)
5. [Credits](#todo)

—

## <a name=“overview”></a> Overview

A simple react app that grabs the latest gist of the specified user.

Intended to be super simple without any design or styling for now. This is just a small app to help me understand basics of [React](https://facebook.github.io/react/)

## <a name=“setup”></a> Setup

To view the app you need to:

1. Download the files or clone the repo
2. Change to the “gistbox” directory `$ cd gistbox`
3. Install dependencies ‘$ nom install’
4. Start a local web server and visit the page in your browser

### <a name=“serve”></a> Serve Project

To start a server locally you can install [NPM’s handy “serve” module](https://www.npmjs.com/package/serve)

```
$ npm install serve -g
```

Start the server and open the page in your default browser:

```
open http://localhost:8000 && serve -p 8000
```

## <a name=“modules”></a> Browserify & Babel

For fun this project uses [gulp](http://gulpjs.com/) to automate the task of compiling the javascript. In this app we are using Browserify to package up our app. Browserify calls Babelify to transform the app into browed-compatible javascript since we are using some [ES6](https://github.com/lukehoban/es6features#readme).

[Browserify](http://browserify.org/) is used in a gulp task to run [‘babelify’]() when javascript files need to be transformed and compiled. This task essentially bundles up all of our dependencies for this app.

[Babelify](https://github.com/babel/babelify) is called in the Browserify task to transform the JSX and ES6 into browser-compatible javascript for today’s browsers.

### <a name=“tasks”></a> Gulp tasks

Compile assets before viewing the app:

```
$ gulp browserify
```

Default task to watch javascript files and compile them:

```
$ gulp
```

**Note** The app in this repo is already transformed and compiled so you don’t need to run these tasks to test the app.

## <a name=“credits”></a> Credits

The idea for this app came from the [“Laracasts: Do You React?”](https://laracasts.com/series/do-you-react/) series.