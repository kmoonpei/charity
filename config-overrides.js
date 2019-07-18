const { override, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy()
);

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }
