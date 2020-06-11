function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

/* JavaScript */
import './javascript/utilities/skip-link-focus';
import './javascript/utilities/smooth-scroll';
import './javascript/utilities/common';
import './javascript/modules/navigation';

/* Sass */
import './sass/application.scss';

/* SVGs */
importAll(require.context('./svgs', true, /\.svg$/));

/* Test */
console.log('Webpack Boilerplate');
