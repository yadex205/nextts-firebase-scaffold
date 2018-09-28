const withTypeScript = require('@zeit/next-typescript');
const withPreact = require('@zeit/next-preact');

module.exports = withTypeScript(withPreact());
