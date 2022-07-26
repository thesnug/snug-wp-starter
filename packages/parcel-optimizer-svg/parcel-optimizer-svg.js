const { Optimizer } = require('@parcel/plugin');
const fs = require('fs');

module.exports = new Optimizer({
  async loadConfig({ config }) {
    const { targets } = await config.getPackage();

    if(targets && targets.assets && targets.assets.distDir) {
      return { output: targets.assets.distDir };
    }

    return null;
  },

  async optimize({ contents, config, bundle }) {
    if(!config.output) {
      return { contents };
    }

    fs.writeFile(`${config.output}/${bundle.name}.php`, contents, (err) => {
      if (err) throw err;
    });

    return { contents };
  },
});
