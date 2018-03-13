![cf](https://i.imgur.com/7v5ASc8.png) Lab 26: Frontend Tooling
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **.babelrc** - contains babel config
* **package.json** - contains npm package config
* **webpack.config.js** - contains webpack config
* **src/** - contains the frontend code
* **src/main.js** - contains the entire app
* **src/style** - containing your `.scss` partials and styles
* **src/style/main.scss** - contains the entry point for `.scss` partials

## Feature Tasks
##### Minimum Requirements
Create the following component:

### `<App />`
* should contain the entire application's view and state
* should have a property on the state called `content` 
* should create a view with the following display
  * a heading with the title "Generate Cowsay Lorem"
  * a Button that displays "click me"
    * `onClick` of the button should generate new content on the app state using `cowsay` and `faker`
  * a `<pre>` tag that displays the application state

## Stretch Goal 
* add a select menu that enables you to change the type of cowfile currently being used