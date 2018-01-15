const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config) {
    config = injectBabelPlugin('css-to-js', config);

    return config;
};
