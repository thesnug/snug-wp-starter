# Snug Starter Theme
## Getting Started
To get started, make sure you have [node](https://nodejs.org/) and [npm](https://www.npmjs.com/), installed locally. By searching online you can find lots of guides on getting these dependencies installed on your specific machine.

To install the node dependencies on first run, type `npm install`
To install bower dependencies and start up gulp, type `npm start`

## What’s Included
By taking a look at the `package.json`, `bower.json` and `gulpfile.js` files you'll get a complete list of what's included in the theme, the following is just a brief overview.

* CSS (Sass) Compression and Minification
* JavaScript Compression and Minification
* SVG Compression and Minification
* Image Compression and Minification
* Source Mapping
* ESLint
* Babel
* FontAwesome (for icons)
* Chosen.js (for selects)

### Environment
You can set your local environment to whatever url you require by creating a copy of `sample.local.env.js`, updating url value and renaming it to `local.env.js`. This file is set to be ignored so each developer on the project can set their local url to whatever they would prefer.

### Assets

All assets can be found in the `assets` directory. This includes CSS/Sass, JavaScript, Images, Fonts and SVGS.

The location of these assets are defined in  `gulp-config.json` and can be customized to suit your project requirements.

#### Sass Setup
Sass functions and partials can be found in the `assets/sass` directory. If you wish to add a new partial, just create it in one of the sub-folders and include it in `assets/sass/application.scss`. This file is compiled and output to `assets/css/application.css`. This is then enqueued in the theme's `functions.php` file. Vendor prefixing is automatically addressed through `gulp-autoprefixer` and you can adjust these settings in the `gulpfile.js`.

#### JavaScript Setup
JavaScript partials live in the `assets/javascripts/src` directory. For each new bower JS file you must include it in the `components` object in `gulp-config.json`. This task will compile all JavaScript and outputs a `application.min.js` and a `components.min.js` file to `assets/javascript/dest`. These files are then enqueued in the theme's `functions.php` file.

#### SVG Setup
Any SVGs required can be added directory from Illustrator (or whatever vector program you use) to the `assets/svgs/src` directory. If this does not exist you can just create it. Grunt will then output two SVG options, one in `assets/svgs/dest`, which is a minified SVG file. Another to `assets/svgs/partials` which is a minified SVG PHP partial that can be used for inline SVGs in any template page using `<?php include( locate_template( 'assets/svgs/partials/{your-svg-partial}.svg.php' ) ) ?>`

### Bower
You can add any Bower library required using `bower install name` where "name" is the name of the library. You can then include the JS in `gulp-config.json` and the CSS files with an `@import` statement at the top of `assets/sass/application.scss`. FontAwesome and Chosen.js are included here already for reference. You can remove them, if required.

### Notes
This setup is something that we use regularly in our projects. The theme itself includes some custom functions that may only work with the Advanced Custom Fields plugin. This theme is not intended to be a one-size-fits-all solution, but we have found it to be useful base to start projects from. This theme is based on a version of the [_underscores](https://github.com/Automattic/_s) starter WordPress theme by [Automattic](http://automattic.com/).

Built by [@jillmolloy](https://github.com/jillmolloy)
