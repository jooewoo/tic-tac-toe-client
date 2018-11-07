<<<<<<< bcac1e569185edfc0ee82f5a53d7dc31b7cc205f
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# The Game

In our first project, let's start out with something fun - **a game**!
Specifically, We'll be making **Tic Tac Toe**, a game that takes seconds to
learn but minutes to master!

## Required Reading

-   [Requirements](requirements.md)
-   [Feedback](feedback.md)
-   [Suggested Schedule](schedule.md)

## Optional Reading

-   [Stretch Goals](stretch_goals.md)
-   [Tips](tips.md)

## Objectives

By the time you submit this project, developers will have covered new ground in
many of the big themes of the course:

-   **Command Line**: Interacting with the computer and navigating the
    filesystem from the command line.
-   **Source Control**: Managing and interacting with a git repository to store
    changes to code.
-   **Programming Fundamentals**: Working with objects, constructors, and
    events, while learning how to strategically solve problems and resolve
    errors.
-   **Web Fundamentals**:  Structuring, styling, and animating documents within
    a browser; responding to actions your users take and the data they input
    into the browser.
-   **Browser Applications**: Using AJAX to connect to a back-end application.
-   **Server Applications**:  We haven't covered a ton of server-side
    technologies yet (that's up next), but we learned a bit about how API
    endpoints work, and how to get data from them.
-   **Security**: With JavaScript closures, scratching the surface of why
    security matters.
-   **Deployment**: Host a static web site in a managed hosting environment
    (GitHub Pages)
-   **Products and Teams**: Document your code and your code repository so
    others understand what you've built.

## Goals

At a high level, here are our goals for you in this project:

-   **Build a web application from scratch**, without a starter codebase
-   Use your programming skills to **map out the game logic for a simple game
    like Tic Tac Toe**
-   **Separate HTML, CSS, and JavaScript files** in your application
-   Build an application **to a spec that someone else gives you**
-   **Build a dynamic game that allows a user to play tic tac toe against themself**
-   **Craft a ``readme.md`` file that explains your app** to the world
-   **Communicate with a back-end** (which we'll provide for you) to store the
    state of your game.

You will be working individually for this project, but we'll be guiding you
along the process and helping as you go. Everyone will get a chance to **be
creative**, and work through some really **tough programming challenges** to get
your feet wet in the world of web development.

## Note
The requirements are for a single player game.  One user can sign in, pick a square that will be X and then pick a square that will be O, and repeat.  Those who dare will have the
tools to make it **multi-player, and multi-device** – so you can say to someone,
"hand me your phone," load up the game, and play a quick round!

## Additional Resources

-   [MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [jQuery Docs](http://api.jquery.com)
-   [Writing Good User Stories](http://www.mariaemerson.com/user-stories/)
-   [Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)
-   [Game-Project Issue Queue](https://git.generalassemb.ly/ga-wdi-boston/game-project/issues/new)
    - **Please note that an issue template has been added to this repository. This means that when you open an issue here,
     the textbox will autofill with a helpful template outlining important information to add to your issue. Not only
     will adhering to this format bring a smile to all of our faces but it *will* bring clarity to your issue and get it
     resolved *faster.***

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

(https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Installation

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/browser-template-master.zip`.
1. Rename the template directory from `browser-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled "…or push an existing
   repository from the command line." Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
=======
>>>>>>> Worked on my tic tac toe project
