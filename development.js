/**
 * Require Browsersync
 */
const browserSync = require('browser-sync');

/**
 * Default Settings
 */
const defaults = { domain: 'snug-starter-wp.dev' };

let custom = {};

/**
 * Checking for a local.env.js file
 * this allows for overwriting the default settings
 */
try {
  custom = require('./local.env');
} catch (ex) {
  console.log(ex);
}

const settings = Object.assign(defaults, custom);


 /**
  * Run Browsersync with server config
  */
 browserSync({
  proxy: settings.url,
  reloadDelay: 100,
   files: [ '**/*.php', 'src/**/*' ],
 });
