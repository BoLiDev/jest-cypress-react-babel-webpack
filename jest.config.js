const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module.(css|scss)$': 'identity-obj-proxy',
    '\\.(css|scss)$': require.resolve('./test/mock-css.js'),
  },
}
