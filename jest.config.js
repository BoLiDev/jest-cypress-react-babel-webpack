module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module.(css|scss)$': 'identity-obj-proxy',
    '\\.(css|scss)$': require.resolve('./test/mock-css.js'),
  },
}
