# Snug Starter Theme
## Getting Started
To get started, make sure you have [node](https://nodejs.org/) and [npm](https://www.npmjs.com/), installed locally. By searching online you can find lots of guides on getting these dependencies installed on your specific machine.

To install the node dependencies on first run, type `npm install`
To start up webpack for development, type `npm run dev`
To run a production build, type `npm run build`

## What’s Included
By taking a look at the `package.json` and `webpack.config.js` files you'll get a complete list of what's included in the theme, the following is just a brief overview.

* CSS (Sass) Compression and Minification
* JavaScript Compression and Minification
* SVG Compression and Minification
* Image Compression and Minification
* Source Mapping
* ESLint
* Babel

### Environment
You can set your local environment to whatever url you require by creating a copy of `sample.local.env.js`, updating url value and renaming it to `local.env.js`. This file is set to be ignored so each developer on the project can set their local url to whatever they would prefer.

### Assets

All source assets can be found in the `src` directory. This includes CSS/Sass, JavaScript, Images, Fonts and SVGS. The build assets can be found in the `dist` directory and these are what are included in the WordPress theme.

The location of these assets are defined in  `webpack.config.js` and can be customized to suit your project requirements.

#### Sass Setup
Sass functions and partials can be found in the `src/sass` directory. If you wish to add a new partial, just create it in one of the sub-folders and include it in `src/sass/application.scss`. This file is compiled and output to `dist/bundle.css`. This is then enqueued in the theme's `functions.php` file. Vendor prefixing is automatically addressed through `postcss` and you can adjust these settings in the `webpack.config.js`.

#### JavaScript Setup
JavaScript partials live in the `src/javascript` directory. This task will compile all JavaScript and outputs a `bundle.js` file to the `dist` directory. This file is then enqueued in the theme's `functions.php` file.

#### SVG Setup
Any SVGs required can be added directory from Illustrator (or whatever vector program you use) to the `src/svgs` directory. WebPack will then output two SVG options, one in `dist/svgs`, which is a minified SVG file. Another to `dist/partials` which is a minified SVG PHP partial that can be used for inline SVGs in any template page using `<?php include( locate_template( 'dist/svgs/partials/{your-svg-partial}.svg.php' ) ) ?>`

### Notes
This setup is something that we use regularly in our projects. The theme itself includes some custom functions that may only work with the Advanced Custom Fields plugin. This theme is not intended to be a one-size-fits-all solution, but we have found it to be useful base to start projects from. This theme is based on a version of the [_underscores](https://github.com/Automattic/_s) starter WordPress theme by [Automattic](http://automattic.com/).

Built by [@jillmolloy](https://github.com/jillmolloy)
